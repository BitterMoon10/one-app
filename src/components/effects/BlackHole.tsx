import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface BlackHoleProps {
  title: string;
  fragments: string[];
  /** 维度主题色（台词碎片辉光） */
  accent: string;
  onClose: () => void;
}

interface Particle {
  theta0: number;
  dur: number;
  offset: number;
  size: number;
}

const SQUASH = 0.82; // 漩涡压扁（俯视微倾）
const ARM_COUNT = 4; // 螺旋旋臂数量
const PARTICLE_COUNT = 110; // 卷入碎屑数量
const SPIRAL_TWIST = 4.2; // 螺旋流形参数：越靠近中心转得越快
const RING_COUNT = 16; // 环流圈数（即"壁"的数量）
const RING_PERIOD = 7; // 环流从外到内一周所需秒数

const buildParticles = (): Particle[] =>
  Array.from({ length: PARTICLE_COUNT }, () => ({
    theta0: Math.random() * Math.PI * 2,
    dur: 5 + Math.random() * 7,
    offset: Math.random(),
    size: 0.6 + Math.random() * 1.6,
  }));

/** 环流半径衰减曲线（壁面与文字碎片共用）：从外缘 R0 向隧道口 CORE 内缩 */
const ringRadius = (R0: number, CORE: number, prog: number) =>
  R0 * Math.pow(CORE / R0, prog);

/**
 * 黑洞漩涡隧道（canvas 渲染）：同心环流持续向深处流动，
 * 台词碎片钉在各自的环流壁上（隔一圈一面壁，由外到里延伸），
 * 竖排文字沿壁面切向排布，贴近隧道口时拉伸没入。
 * 点击背景或按 Esc 退出。
 */
const BlackHole = ({ title, fragments, accent, onClose }: BlackHoleProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fragmentsRef = useRef(fragments);
  fragmentsRef.current = fragments;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // 漩涡 canvas 渲染循环
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // 性能：DPR 封顶 1.5
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cx = W / 2;
    const cy = H / 2;
    const R0 = Math.hypot(W, H) * 0.62; // 漏斗口外半径（溢出屏幕边缘，铺满全屏）
    const CORE = Math.min(W, H) * 0.09; // 隧道口（视界）半径
    const particles = buildParticles();
    const fontSize = Math.max(12, Math.min(W, H) * 0.019);
    const quotes = Array.from(
      { length: Math.min(fragments.length * 2, 8) },
      (_, i) => fragments[i % fragments.length],
    );

    // 性能：渐变对象复用（不再每帧重建）
    const funnel = ctx.createRadialGradient(cx, cy, CORE, cx, cy, R0);
    funnel.addColorStop(0, 'rgba(0, 0, 5, 0.85)');
    funnel.addColorStop(0.35, 'rgba(10, 14, 34, 0.45)');
    funnel.addColorStop(1, 'rgba(10, 14, 34, 0)');
    const coreGlow = ctx.createRadialGradient(
      cx,
      cy,
      CORE * 0.8,
      cx,
      cy,
      CORE * 2.2,
    );
    coreGlow.addColorStop(0, 'rgba(140, 170, 255, 0.22)');
    coreGlow.addColorStop(1, 'rgba(140, 170, 255, 0)');

    // 性能：字符辉光预烘焙——每字离屏渲染一次，之后仅 drawImage
    const glyphCache = new Map<string, HTMLCanvasElement>();
    const glyphFor = (ch: string): HTMLCanvasElement => {
      const cached = glyphCache.get(ch);
      if (cached) return cached;
      const pad = fontSize * 0.9;
      const size = fontSize + pad * 2;
      const g = document.createElement('canvas');
      g.width = size * dpr;
      g.height = size * dpr;
      const gctx = g.getContext('2d')!;
      gctx.scale(dpr, dpr);
      gctx.font = `${fontSize}px 'PingFang SC', 'Montserrat', sans-serif`;
      gctx.textAlign = 'center';
      gctx.textBaseline = 'middle';
      gctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      gctx.shadowColor = accent;
      gctx.shadowBlur = 12;
      gctx.fillText(ch, size / 2, size / 2);
      glyphCache.set(ch, g);
      return g;
    };

    let rafId = 0;
    let frame = 0;
    const render = (now: number) => {
      frame += 1;
      if (frame % 2 === 0) {
        // 性能：30fps 渲染
        rafId = requestAnimationFrame(render);
        return;
      }
      const t = now / 1000;
      ctx.clearRect(0, 0, W, H);

      // 漏斗纵深底：外亮内暗（低透明度，透出星空）
      ctx.fillStyle = funnel;
      ctx.fillRect(0, 0, W, H);

      // 同心环流（壁面）：持续向隧道深处流动，内圈转得更快
      for (let k = 0; k < RING_COUNT; k++) {
        const prog = (t / RING_PERIOD + k / 16) % 1;
        const r = ringRadius(R0, CORE, prog);
        const alpha = Math.sin(prog * Math.PI) * 0.24;
        const speed = 0.5 + prog * 2.6;
        const offset = t * speed + k * 0.9;
        const dashCount = 8 + Math.min(Math.floor(r / 16), 28);
        for (let d = 0; d < dashCount; d++) {
          const a0 = offset + (d / dashCount) * Math.PI * 2;
          const a1 = a0 + 0.14 + prog * 0.1;
          ctx.strokeStyle = `rgba(170, 200, 255, ${alpha})`;
          ctx.lineWidth = 1.1;
          ctx.beginPath();
          ctx.ellipse(cx, cy, r, r * SQUASH, 0, a0, a1);
          ctx.stroke();
        }
      }

      ctx.globalCompositeOperation = 'lighter';

      // 螺旋旋臂：越往中心越亮越暖，末端扎入隧道口
      for (let arm = 0; arm < ARM_COUNT; arm++) {
        const armOffset = (arm / ARM_COUNT) * Math.PI * 2;
        for (let s = 0; s < 64; s++) {
          const p = s / 64;
          const r = ringRadius(R0, CORE, p);
          const theta = p * SPIRAL_TWIST + armOffset + t * 1.15;
          const x = cx + Math.cos(theta) * r;
          const y = cy + Math.sin(theta) * r * SQUASH;
          const warm = p;
          const alpha = Math.sin(Math.min(p * 1.25, 1) * Math.PI) * 0.75;
          ctx.fillStyle = `rgba(${180 + warm * 75}, ${190 + warm * 40}, ${220 - warm * 60}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.6 - p * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 卷入碎屑：沿螺旋轨迹加速内流
      particles.forEach((pt) => {
        const prog = (t / pt.dur + pt.offset) % 1;
        const r = ringRadius(R0, CORE, prog);
        const theta = pt.theta0 + prog * SPIRAL_TWIST + t * 1.15;
        const x = cx + Math.cos(theta) * r;
        const y = cy + Math.sin(theta) * r * SQUASH;
        const alpha = Math.sin(prog * Math.PI) * 0.95;
        ctx.fillStyle = `rgba(220, 232, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, pt.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 台词碎片：钉在各自的环流壁上，竖排直列（每字正立、自上而下），
      // 从外壁向核心延伸、由大到小逐级缩小
      quotes.forEach((text, i) => {
        const wall = i * 2; // 隔一圈一面壁，由外到里
        const prog = (t / RING_PERIOD + wall / RING_COUNT) % 1;
        const rWall = ringRadius(R0, CORE, prog);
        // 文字转速与风暴解耦：慢速漂移（保证可读），越近核心略快
        const textSpeed = 0.05 + prog * 0.15;
        const theta = t * textSpeed + i * 1.7;

        // 两端渐隐：外圈进入时淡入、贴近隧道口没入时淡出
        const alpha =
          prog < 0.1 ? prog / 0.1 : prog > 0.88 ? (1 - prog) / 0.12 : 1;
        if (alpha <= 0.01) return;

        for (let j = 0; j < text.length; j++) {
          // 由外到里：沿径向逐字向内排布
          const rj = rWall - j * fontSize * 1.4;
          if (rj < CORE * 1.1) break; // 没入隧道口的字不再渲染
          // 由大到小：越靠里字越小
          const sizeJ = fontSize * Math.pow(0.86, j);
          const scaleJ = sizeJ / fontSize;

          const x = cx + Math.cos(theta) * rj;
          const y = cy + Math.sin(theta) * rj * SQUASH;
          const glyph = glyphFor(text[j]);
          const gw = (glyph.width / dpr) * scaleJ;
          const gh = (glyph.height / dpr) * scaleJ;

          ctx.globalAlpha = alpha * (0.95 - j * 0.02);
          ctx.drawImage(glyph, x - gw / 2, y - gh / 2, gw, gh);
        }
      });
      ctx.globalAlpha = 1;

      ctx.globalCompositeOperation = 'source-over';

      // 隧道口：纯黑核心 + 外围柔光 + 边缘亮环
      ctx.fillStyle = coreGlow;
      ctx.fillRect(cx - CORE * 2.2, cy - CORE * 2.2, CORE * 4.4, CORE * 4.4);
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(cx, cy, CORE, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(200, 220, 255, 0.65)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(cx, cy, CORE * 1.05, 0, Math.PI * 2);
      ctx.stroke();

      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/25"
      onClick={onClose}
      role="button"
      aria-label={`${title} 黑洞隧道，点击或按 Esc 返回`}
    >
      {/* 漩涡隧道（canvas，铺满全屏） */}
      <canvas ref={canvasRef} className="absolute inset-0" aria-hidden="true" />

      {/* 作品标题 */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 text-center">
        <p className="text-lg font-light tracking-[0.4em] text-white/90">
          《{title}》
        </p>
      </div>

      {/* 关闭 */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/60 backdrop-blur-md transition-colors hover:border-white/50 hover:text-white"
        aria-label="关闭黑洞"
      >
        ✕
      </button>
    </div>,
    document.body,
  );
};

export default BlackHole;
