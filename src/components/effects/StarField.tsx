import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
  tint: string;
  depth: number; // 视差深度 0.2 - 1
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: string;
  drift: number;
  phase: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

interface BgGalaxy {
  img: HTMLImageElement;
  x: number;
  y: number;
  size: number;
  alpha: number;
  depth: number; // 视差深度
  rotSpeed: number; // rad/ms，极慢自转
  phase: number;
}

// 背景装饰星系（复用真实星系照片，'lighter' 混合使黑场自然消隐）
const BG_GALAXY_SOURCES = [
  '/galaxy-m51.jpg',
  '/galaxy-m104.jpg',
  '/galaxy-19.jpg',
  '/galaxy-06.jpg',
];

// 真实深空照片背景候选（NASA/ESA/CSA 公有领域），按顺序尝试；
// 可用 ?bg=N 指定优先项（0 起），便于预览切换。
// focusY 控制 cover 裁剪的纵向焦点（船底悬崖聚焦上半部星空）
const SPACE_BG_CANDIDATES = [
  { src: '/space-ngc346.jpg', focusY: 0.45, name: 'NGC 346 恒星摇篮' },
  { src: '/space-omega-centauri.jpg', focusY: 0.5, name: 'Omega 半人马球状星团' },
  { src: '/space-cosmic-cliffs.jpg', focusY: 0.28, name: '宇宙悬崖 · 船底星云' },
  { src: '/space-deep-field.jpg', focusY: 0.5, name: 'SMACS 0723 深空场' },
  { src: '/space-stephans-quintet.jpg', focusY: 0.5, name: '斯蒂芬五重奏' },
];

const TWINKLE_STAR_COUNT = 360;
const DISTANT_STAR_COUNT = 600; // 微弱远星（静态层）
const BAND_STAR_COUNT = 750; // 银河带星群（静态层）
// 真实星色分布：蓝白最多，暖黄次之，少量橙红
const STAR_TINTS = [
  '#cfe0ff',
  '#cfe0ff',
  '#e8f0ff',
  '#e8f0ff',
  '#ffffff',
  '#ffffff',
  '#ffe9c9',
  '#ffd9a0',
  '#ffd9a0',
  '#ffc9b0',
];
const NEBULA_COLORS = [
  '99, 102, 241', // indigo
  '168, 85, 247', // purple
  '56, 189, 248', // sky
  '236, 72, 153', // pink
];
const BAND_ANGLE = -0.42; // 银河带倾角（弧度）

/** 高斯分布随机数（Box-Muller） */
const gauss = (sigma: number) => {
  const u = Math.max(Math.random(), 1e-9);
  const v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v) * sigma;
};

/** 宇宙空间背景：银河带 + 远近双层星空 + 星云 + 背景星系 + 流星，鼠标视差。 */
const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [caption, setCaption] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let rafId = 0;
    let stars: Star[] = [];
    let nebulas: Nebula[] = [];
    let shootingStars: ShootingStar[] = [];
    let nextShootingAt = performance.now() + 1500;
    let staticLayer: HTMLCanvasElement | null = null;
    const mouse = { x: 0, y: 0 };
    const parallax = { x: 0, y: 0 };

    // 背景装饰星系：低透明度、极慢自转、随鼠标轻微视差
    const galaxies: BgGalaxy[] = BG_GALAXY_SOURCES.map((src, i) => {
      const img = new Image();
      img.src = src;
      return {
        img,
        x: [0.16, 0.84, 0.78, 0.2][i],
        y: [0.22, 0.2, 0.74, 0.76][i],
        size: [200, 170, 190, 150][i],
        alpha: [0.32, 0.28, 0.3, 0.24][i],
        depth: 0.35 + i * 0.15,
        rotSpeed: ((i % 2 === 0 ? 1 : -1) * Math.PI * 2) / 240000,
        phase: Math.random() * Math.PI * 2,
      };
    });

    // 真实深空照片背景：按候选顺序尝试加载（?bg=N 可指定优先项），失败回退程序化星空。
    // 全部候选后台预热入池，供「曲速跳跃」彩蛋瞬时切换。
    const spaceBg: { img: HTMLImageElement | null; focusY: number; readyAt: number } = {
      img: null,
      focusY: 0.5,
      readyAt: 0,
    };
    const bgPool = new Map<number, HTMLImageElement>();
    let currentBgIndex = -1;
    const bgOrder = (() => {
      const param = new URLSearchParams(window.location.search).get('bg');
      const n = param === null ? -1 : Number.parseInt(param, 10);
      const all = SPACE_BG_CANDIDATES.map((_, i) => i);
      if (n >= 0 && n < SPACE_BG_CANDIDATES.length) {
        return [n, ...all.filter((i) => i !== n)];
      }
      return all;
    })();
    const warmPool = () => {
      bgOrder.forEach((idx, k) => {
        window.setTimeout(() => {
          if (bgPool.has(idx)) return;
          const img = new Image();
          img.onload = () => bgPool.set(idx, img);
          img.src = SPACE_BG_CANDIDATES[idx].src;
        }, 700 * (k + 1));
      });
    };
    const tryLoadSpaceBg = (orderIndex: number) => {
      if (orderIndex >= bgOrder.length) return;
      const candidateIndex = bgOrder[orderIndex];
      const img = new Image();
      img.onload = () => {
        bgPool.set(candidateIndex, img);
        currentBgIndex = candidateIndex;
        spaceBg.img = img;
        spaceBg.focusY = SPACE_BG_CANDIDATES[candidateIndex].focusY;
        spaceBg.readyAt = performance.now();
        warmPool();
      };
      img.onerror = () => tryLoadSpaceBg(orderIndex + 1);
      img.src = SPACE_BG_CANDIDATES[candidateIndex].src;
    };
    tryLoadSpaceBg(0);

    // 曲速跳跃（彩蛋）：星星拉成光线 -> 白闪 -> 随机跃迁到另一张真实深空照片
    const warp = { active: false, start: 0, targetIndex: -1, swapped: false };
    const WARP_MS = 2400;
    const handleWarp = () => {
      if (warp.active) return;
      const others = [...bgPool.keys()].filter((i) => i !== currentBgIndex);
      if (others.length === 0) return;
      warp.active = true;
      warp.start = performance.now();
      warp.targetIndex = others[Math.floor(Math.random() * others.length)];
      warp.swapped = false;
    };
    window.addEventListener('warp-jump', handleWarp);

    /** 静态远景层：微弱远星 + 银河带（星群/光带/暗尘带），只随视差平移 */
    const buildStaticLayer = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      staticLayer = document.createElement('canvas');
      staticLayer.width = Math.floor(width * dpr);
      staticLayer.height = Math.floor(height * dpr);
      const sctx = staticLayer.getContext('2d')!;
      sctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // 1. 微弱远星：小而暗，营造纵深
      for (let i = 0; i < DISTANT_STAR_COUNT; i++) {
        sctx.globalAlpha = 0.12 + Math.random() * 0.25;
        sctx.fillStyle =
          STAR_TINTS[Math.floor(Math.random() * STAR_TINTS.length)];
        sctx.beginPath();
        sctx.arc(
          Math.random() * width,
          Math.random() * height,
          0.2 + Math.random() * 0.6,
          0,
          Math.PI * 2,
        );
        sctx.fill();
      }

      // 2. 银河带：沿对角线的光带 + 密集星群 + 暗尘带
      const cx = width / 2;
      const cy = height * 0.42;
      const ux = Math.cos(BAND_ANGLE);
      const uy = Math.sin(BAND_ANGLE);
      const nx = -uy;
      const ny = ux;
      const bandLen = Math.hypot(width, height) * 0.75;

      // 光带（宽模糊笔画，蓝白微光）
      sctx.save();
      sctx.filter = 'blur(28px)';
      [260, 170, 100].forEach((w, i) => {
        sctx.strokeStyle = `rgba(190, 208, 255, ${0.05 - i * 0.012})`;
        sctx.lineWidth = w;
        sctx.beginPath();
        sctx.moveTo(cx - ux * bandLen, cy - uy * bandLen);
        sctx.lineTo(cx + ux * bandLen, cy + uy * bandLen);
        sctx.stroke();
      });
      sctx.restore();

      // 带内星群：核心密集 + 外围晕散
      for (let i = 0; i < BAND_STAR_COUNT; i++) {
        const t = (Math.random() * 2 - 1) * bandLen;
        const offset =
          Math.random() < 0.7 ? gauss(65) : gauss(150);
        const x = cx + ux * t + nx * offset;
        const y = cy + uy * t + ny * offset;
        if (x < -10 || x > width + 10 || y < -10 || y > height + 10) continue;
        sctx.globalAlpha = 0.15 + Math.random() * 0.4;
        sctx.fillStyle =
          STAR_TINTS[Math.floor(Math.random() * STAR_TINTS.length)];
        sctx.beginPath();
        sctx.arc(x, y, 0.25 + Math.random() * 0.75, 0, Math.PI * 2);
        sctx.fill();
      }

      // 暗尘带：遮挡星群的暗黑云气（空间纵深的关键）
      for (let i = 0; i < 4; i++) {
        const t = (Math.random() * 1.4 - 0.7) * bandLen;
        const offset = gauss(40);
        const x = cx + ux * t + nx * offset;
        const y = cy + uy * t + ny * offset;
        const r = 90 + Math.random() * 140;
        const dust = sctx.createRadialGradient(x, y, 0, x, y, r);
        dust.addColorStop(0, 'rgba(1, 0, 10, 0.6)');
        dust.addColorStop(0.6, 'rgba(1, 0, 10, 0.3)');
        dust.addColorStop(1, 'rgba(1, 0, 10, 0)');
        sctx.globalAlpha = 1;
        sctx.fillStyle = dust;
        sctx.fillRect(x - r, y - r, r * 2, r * 2);
      }
      sctx.globalAlpha = 1;
    };

    const buildScene = () => {
      stars = Array.from({ length: TWINKLE_STAR_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.3 + Math.random() * 1.5,
        baseAlpha: 0.35 + Math.random() * 0.65,
        twinkleSpeed: 0.4 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2,
        tint: STAR_TINTS[Math.floor(Math.random() * STAR_TINTS.length)],
        depth: 0.2 + Math.random() * 0.8,
      }));
      nebulas = NEBULA_COLORS.map((color, i) => ({
        x: (0.15 + 0.7 * Math.random()) * width,
        y: (0.15 + 0.7 * Math.random()) * height,
        radius: Math.max(width, height) * (0.28 + Math.random() * 0.2),
        color,
        drift: 0.5 + Math.random(),
        phase: (i / NEBULA_COLORS.length) * Math.PI * 2,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStaticLayer();
      buildScene();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / width - 0.5) * 2;
      mouse.y = (e.clientY / height - 0.5) * 2;
    };

    const spawnShootingStar = (now: number) => {
      const fromLeft = Math.random() < 0.5;
      const speed = 7 + Math.random() * 5;
      const angle = (fromLeft ? 1 : -1) * (0.35 + Math.random() * 0.3);
      shootingStars.push({
        x: fromLeft ? Math.random() * width * 0.4 : width - Math.random() * width * 0.4,
        y: Math.random() * height * 0.5,
        vx: Math.cos(angle) * speed * (fromLeft ? 1 : -1),
        vy: Math.sin(angle) * speed,
        life: now,
        maxLife: 900 + Math.random() * 500,
      });
    };

    const draw = (now: number) => {
      // 视差位置缓动
      parallax.x += (mouse.x - parallax.x) * 0.04;
      parallax.y += (mouse.y - parallax.y) * 0.04;

      // 曲速进度：0.38 加速 -> 0.17 闪峰（中段跃迁换图）-> 0.45 减速
      let warpSpeed = 0;
      let flashAlpha = 0;
      if (warp.active) {
        const t = (now - warp.start) / WARP_MS;
        const smooth = (v: number) => v * v * (3 - 2 * v);
        if (t >= 1) {
          warp.active = false;
          if (currentBgIndex >= 0) {
            setCaption(`已抵达「${SPACE_BG_CANDIDATES[currentBgIndex].name}」`);
            window.setTimeout(() => setCaption(null), 2600);
          }
        } else if (t < 0.38) {
          warpSpeed = smooth(t / 0.38);
        } else if (t < 0.55) {
          warpSpeed = 1;
          flashAlpha = Math.sin(((t - 0.38) / 0.17) * Math.PI);
          if (!warp.swapped && t >= 0.46) {
            warp.swapped = true;
            const img = bgPool.get(warp.targetIndex);
            if (img) {
              currentBgIndex = warp.targetIndex;
              spaceBg.img = img;
              spaceBg.focusY = SPACE_BG_CANDIDATES[warp.targetIndex].focusY;
              spaceBg.readyAt = now - 1500; // 直接全亮，不再淡入
            }
          }
        } else {
          warpSpeed = 1 - smooth((t - 0.55) / 0.45);
        }
      }
      const bgAlpha = 1 - warpSpeed * 0.9;

      if (spaceBg.img) {
        // 真实深空照片：cover 裁剪 + 缓慢漂移 + 视差（1.5s 淡入），曲速时拉焦推近
        const img = spaceBg.img;
        const scale =
          Math.max(width / img.width, height / img.height) * (1.06 + warpSpeed * 0.14);
        const dw = img.width * scale;
        const dh = img.height * scale;
        const driftX = Math.sin(now / 45000) * 10 - parallax.x * 14;
        const driftY = Math.cos(now / 52000) * 8 - parallax.y * 14;
        const fade = Math.min((now - spaceBg.readyAt) / 1500, 1);
        ctx.fillStyle = '#020010';
        ctx.fillRect(0, 0, width, height);
        ctx.globalAlpha = fade * bgAlpha;
        ctx.drawImage(
          img,
          (width - dw) * 0.5 + driftX,
          (height - dh) * spaceBg.focusY + driftY,
          dw,
          dh,
        );
        ctx.globalAlpha = 1;
        // 暗化层：保证前景内容可读
        ctx.fillStyle = 'rgba(2, 0, 16, 0.45)';
        ctx.fillRect(0, 0, width, height);
      } else {
        // 程序化星空（照片未就绪时的底）
        const bg = ctx.createLinearGradient(0, 0, 0, height);
        bg.addColorStop(0, '#020010');
        bg.addColorStop(0.5, '#06021f');
        bg.addColorStop(1, '#0a0430');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, width, height);

        // 静态远景层（远星 + 银河带），轻微视差
        if (staticLayer) {
          ctx.drawImage(
            staticLayer,
            -parallax.x * 10,
            -parallax.y * 10,
            width,
            height,
          );
        }

        // 星云（主体 + 两团小卫星云，更有纹理感）
        nebulas.forEach((n) => {
          const nx =
            n.x + Math.cos(now / 22000 + n.phase) * 40 * n.drift - parallax.x * 12;
          const ny =
            n.y + Math.sin(now / 26000 + n.phase) * 30 * n.drift - parallax.y * 12;
          const gradient = ctx.createRadialGradient(nx, ny, 0, nx, ny, n.radius);
          gradient.addColorStop(0, `rgba(${n.color}, 0.10)`);
          gradient.addColorStop(0.5, `rgba(${n.color}, 0.045)`);
          gradient.addColorStop(1, `rgba(${n.color}, 0)`);
          ctx.fillStyle = gradient;
          ctx.fillRect(nx - n.radius, ny - n.radius, n.radius * 2, n.radius * 2);
          for (let k = 0; k < 2; k++) {
            const sx = nx + Math.cos(now / 17000 + n.phase + k * 2.1) * n.radius * 0.35;
            const sy = ny + Math.sin(now / 19000 + n.phase + k * 1.7) * n.radius * 0.3;
            const sr = n.radius * 0.45;
            const sub = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr);
            sub.addColorStop(0, `rgba(${n.color}, 0.05)`);
            sub.addColorStop(1, `rgba(${n.color}, 0)`);
            ctx.fillStyle = sub;
            ctx.fillRect(sx - sr, sy - sr, sr * 2, sr * 2);
          }
        });

        // 背景星系（'lighter' 混合：照片黑场自然消隐，星系光与星空融为一体）
        ctx.globalCompositeOperation = 'lighter';
        galaxies.forEach((g) => {
          if (!g.img.complete || g.img.naturalWidth === 0) return;
          ctx.save();
          ctx.globalAlpha = g.alpha;
          ctx.translate(
            g.x * width - parallax.x * 8 * g.depth,
            g.y * height - parallax.y * 8 * g.depth,
          );
          ctx.rotate(g.phase + now * g.rotSpeed);
          ctx.drawImage(g.img, -g.size / 2, -g.size / 2, g.size, g.size);
          ctx.restore();
        });
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
      }

      // 前景亮星（闪烁 + 视差；曲速时拉成光线）
      const t = now / 1000;
      stars.forEach((s) => {
        const twinkle = 0.55 + 0.45 * Math.sin(t * s.twinkleSpeed + s.phase);
        const alpha = s.baseAlpha * twinkle;
        const sx = s.x - parallax.x * 26 * s.depth;
        const sy = s.y - parallax.y * 26 * s.depth;

        if (warpSpeed > 0.02) {
          // 曲速拉线：从屏幕中心向外辐射的光 streak
          const ddx = sx - width / 2;
          const ddy = sy - height / 2;
          const dd = Math.hypot(ddx, ddy) || 1;
          const len =
            warpSpeed * (50 + 160 * s.depth) * (0.4 + dd / Math.max(width, height));
          ctx.globalAlpha = alpha * (0.35 + warpSpeed * 0.65);
          ctx.strokeStyle = s.tint;
          ctx.lineWidth = s.radius;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx + (ddx / dd) * len, sy + (ddy / dd) * len);
          ctx.stroke();
        } else {
          ctx.globalAlpha = alpha;
          ctx.fillStyle = s.tint;
          ctx.beginPath();
          ctx.arc(sx, sy, s.radius, 0, Math.PI * 2);
          ctx.fill();

          // 亮星加十字光芒
          if (s.radius > 1.3) {
            ctx.globalAlpha = alpha * 0.5;
            ctx.strokeStyle = s.tint;
            ctx.lineWidth = 0.6;
            const flare = s.radius * 4 * twinkle;
            ctx.beginPath();
            ctx.moveTo(sx - flare, sy);
            ctx.lineTo(sx + flare, sy);
            ctx.moveTo(sx, sy - flare);
            ctx.lineTo(sx, sy + flare);
            ctx.stroke();
          }
        }
      });
      ctx.globalAlpha = 1;

      // 曲速闪峰：白屏一闪
      if (flashAlpha > 0) {
        ctx.fillStyle = `rgba(240, 246, 255, ${flashAlpha * 0.9})`;
        ctx.fillRect(0, 0, width, height);
      }

      // 暗角：边缘压暗，增强空间纵深
      const vignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.45,
        width / 2,
        height / 2,
        Math.hypot(width, height) * 0.62,
      );
      vignette.addColorStop(0, 'rgba(0, 0, 8, 0)');
      vignette.addColorStop(1, 'rgba(0, 0, 8, 0.42)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      // 流星
      if (now >= nextShootingAt) {
        spawnShootingStar(now);
        nextShootingAt = now + 1800 + Math.random() * 3200;
      }
      shootingStars = shootingStars.filter((ss) => now - ss.life < ss.maxLife);
      shootingStars.forEach((ss) => {
        const progress = (now - ss.life) / ss.maxLife;
        const alpha = progress < 0.15 ? progress / 0.15 : 1 - (progress - 0.15) / 0.85;
        const headX = ss.x + ss.vx * (now - ss.life) * 0.06;
        const headY = ss.y + ss.vy * (now - ss.life) * 0.06;
        const tailX = headX - ss.vx * 14;
        const tailY = headY - ss.vy * 14;

        const gradient = ctx.createLinearGradient(tailX, tailY, headX, headY);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(1, `rgba(255, 255, 255, ${0.8 * alpha})`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.stroke();

        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(headX, headY, 1.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      rafId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('warp-jump', handleWarp);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10"
        aria-hidden="true"
      />
      {/* 曲速跳跃完成字幕 */}
      {caption && (
        <div className="fixed bottom-10 left-1/2 z-30 -translate-x-1/2 animate-fade-in rounded-md border border-cyan-300/30 bg-black/40 px-4 py-2 text-xs tracking-[0.25em] text-cyan-100/90 backdrop-blur-sm">
          {caption}
        </div>
      )}
    </>
  );
};

export default StarField;
