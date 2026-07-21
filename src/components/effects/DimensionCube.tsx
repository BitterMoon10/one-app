import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  BookOpen,
  Compass,
  Film,
  Fingerprint,
  Globe,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react';
import { GALAXY_SEEDS, getGalaxySprite, warmGalaxySprites } from '../../utils/galaxySprite';

interface Dimension {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  /** 爆炸后每颗陨石携带的文案 */
  meteors: string[];
  /** 有图片时，爆炸改为展示该图片（如微信二维码），替代星系陨石 */
  image?: string;
  glow: string;
  shadowColor: string;
  /** 维度主题色（HUD 文字标签的括号框与辉光） */
  accent: string;
}

// 数组顺序即面序：前 / 后 / 右 / 左 / 上 / 下
const DIMENSIONS: Dimension[] = [
  {
    icon: Globe,
    title: '世界',
    subtitle: 'World',
    meteors: [
      '我眼前的是世界的全部，也是全部的世界',
      '与世界和解的本质是 battle 后的妥协，没有 battle 过的只能叫投降',
      '我们都是这个世界的幸存者',
    ],
    glow: 'from-sky-400/25',
    shadowColor: 'rgba(56, 189, 248, 0.30)',
    accent: '#38bdf8',
  },
  {
    icon: Compass,
    title: '人生',
    subtitle: 'Life',
    meteors: [
      '有遗憾的人生才称得上完美',
      '韵律来自于波动的曲线',
      '接受苦难经历，拒绝苦难叙事',
    ],
    glow: 'from-violet-400/25',
    shadowColor: 'rgba(167, 139, 250, 0.30)',
    accent: '#a78bfa',
  },
  {
    icon: Film,
    title: '电影',
    subtitle: 'Movies',
    meteors: ['美国往事', '星际穿越', '霸王别姬'],
    glow: 'from-rose-400/25',
    shadowColor: 'rgba(251, 113, 133, 0.28)',
    accent: '#fb7185',
  },
  {
    icon: BookOpen,
    title: '阅读',
    subtitle: 'Reading',
    meteors: ['钢铁是怎样炼成的', '霍乱时期的爱情', '麦田里的守望者'],
    glow: 'from-amber-400/25',
    shadowColor: 'rgba(251, 191, 36, 0.28)',
    accent: '#fbbf24',
  },
  {
    icon: Fingerprint,
    title: '自我',
    subtitle: 'Self',
    meteors: ['丰富了生物的多样性', '其他人类的竞品', '有点东西但不多'],
    glow: 'from-emerald-400/25',
    shadowColor: 'rgba(52, 211, 153, 0.28)',
    accent: '#34d399',
  },
  {
    icon: MessageCircle,
    title: '呼叫地球',
    subtitle: 'Calling Earth',
    meteors: [],
    image: '/wechat-qr.jpg',
    glow: 'from-green-400/25',
    shadowColor: 'rgba(74, 222, 128, 0.28)',
    accent: '#4ade80',
  },
];

const SIZE = 240; // 立方体边长 px
const HALF = SIZE / 2;

// 六个面的空间变换
const FACE_TRANSFORMS = [
  `translateZ(${HALF}px)`, // 前
  `rotateY(180deg) translateZ(${HALF}px)`, // 后
  `rotateY(90deg) translateZ(${HALF}px)`, // 右
  `rotateY(-90deg) translateZ(${HALF}px)`, // 左
  `rotateX(90deg) translateZ(${HALF}px)`, // 上
  `rotateX(-90deg) translateZ(${HALF}px)`, // 下
];

type Phase = 'cube' | 'exploding' | 'scattered' | 'returning';

interface MeteorTarget {
  x: number;
  y: number;
  rot: number;
  depth: number; // 0.78 - 1.33，远处小且模糊，近处大
}

interface Explosion {
  dimension: Dimension;
  origin: { x: number; y: number };
  targets: MeteorTarget[];
  /** 本次爆炸随机抽中的星系 seed（每次不同、互不重复） */
  photoIndices: number[];
  /** 大爆炸辐射光线的角度（度） */
  rays: number[];
}

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/**
 * 随机排版生成（全屏随机 + 整版拒采）：
 * 全屏安全区内随机采样，两两间距 ≥ r1+r2+GAP（r 含旋转膨胀余量）；
 * 整版验收：间距不足 或 纵向跨度太小（看着像同一水平线）就整版重摇，
 * 20 次取最优——保证互不遮挡且纵向必然铺开。
 * 每次爆炸的位置、内容全部随机。
 */
const generateTargets = (count: number): MeteorTarget[] => {
  const W = window.innerWidth;
  const H = window.innerHeight;
  const cx = W / 2;
  const unit = W >= 640 ? 224 : 176; // sm:h-56 w-56 / h-44 w-44
  const GAP = W >= 640 ? 30 : 20; // 视觉半径之外的最小间隙（小屏收紧）
  const marginX = 24;
  const marginTop = 150;
  const marginBottom = 110;

  const radiusOf = (depth: number) => (unit / 2) * depth * 1.0;

  interface Placed extends MeteorTarget {
    r: number;
  }

  /** 生成一整版布局，返回布局与验收指标 */
  const buildLayout = (): {
    targets: Placed[];
    minClear: number;
    ySpread: number;
  } => {
    const placed: Placed[] = [];

    const sample = (r: number): { x: number; y: number; clear: number } => {
      const yMin = marginTop + r;
      const yMax = H - marginBottom - r;
      let best: { x: number; y: number; clear: number } | null = null;
      let bestClear = -Infinity;
      for (let attempt = 0; attempt < 400; attempt++) {
        const x = marginX + r + Math.random() * (W - (marginX + r) * 2);
        const y = yMin + Math.random() * (yMax - yMin);
        // 避开顶部维度标题（中央条带）
        if (Math.abs(x - cx) < 300 && y - r < 215) continue;
        // 与已放置星系的最小间距余量
        const clear = placed.reduce(
          (min, t) => Math.min(min, Math.hypot(t.x - x, t.y - y) - t.r - r),
          Infinity,
        );
        if (clear >= GAP) return { x, y, clear };
        if (clear > bestClear) {
          bestClear = clear;
          best = { x, y, clear };
        }
      }
      // 最大余量兜底，绝不乱摆
      return best ?? { x: W / 2, y: yMin, clear: -Infinity };
    };

    for (let i = 0; i < count; i++) {
      let depth = 0.88 + Math.random() * 0.3;
      let point = sample(radiusOf(depth));
      // 余量为负（确实摆不下）：逐步缩小这颗重试
      while (point.clear < 0 && depth > 0.55) {
        depth -= 0.1;
        point = sample(radiusOf(depth));
      }
      placed.push({
        x: point.x,
        y: point.y,
        r: radiusOf(depth),
        rot: Math.random() * 20 - 10,
        depth,
      });
    }

    const minClear = placed.reduce((min, a, i) => {
      for (let j = i + 1; j < placed.length; j++) {
        const b = placed[j];
        min = Math.min(min, Math.hypot(a.x - b.x, a.y - b.y) - a.r - b.r);
      }
      return min;
    }, Infinity);

    const ys = placed.map((t) => t.y);
    const ySpread = Math.max(...ys) - Math.min(...ys);

    return { targets: placed, minClear, ySpread };
  };

  // 整版拒采：间距不够 或 纵向太挤（看着像同一水平线）就整版重摇，20 次取最优
  const score = (l: { minClear: number; ySpread: number }) =>
    Math.min(l.minClear, 30) + Math.min(l.ySpread, 320) * 0.2;
  const acceptable = (l: { minClear: number; ySpread: number }) =>
    l.minClear >= 10 && (count <= 1 || l.ySpread >= Math.min(H * 0.3, 260));

  let bestLayout = buildLayout();
  for (let attempt = 0; attempt < 20 && !acceptable(bestLayout); attempt++) {
    const next = buildLayout();
    if (score(next) > score(bestLayout)) {
      bestLayout = next;
    }
  }
  return bestLayout.targets;
};

/**
 * 3D 维度立方体：自动旋转，可拖拽（带惯性）。
 * 点击某一面：立方体爆炸，散射出携带该维度文案的陨石；
 * 再次点击屏幕：陨石飞回中心，重组为立方体。
 */
const DimensionCube = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<number[]>([]);
  const stateRef = useRef({
    rx: -14,
    ry: 30,
    vx: 0,
    vy: 0,
    dragging: false,
    lastX: 0,
    lastY: 0,
    moved: 0,
    pressedFace: null as number | null,
  });
  const dragCleanupRef = useRef<(() => void) | null>(null);

  const [phase, setPhase] = useState<Phase>('cube');
  const [explosion, setExplosion] = useState<Explosion | null>(null);
  const [floating, setFloating] = useState(false);
  const [bangDone, setBangDone] = useState(false);
  const [spriteMap, setSpriteMap] = useState<Record<number, string>>({});

  // 预生成全部星系贴图（真实照片 + 抠图，异步），避免点击时等待
  useEffect(() => {
    let cancelled = false;
    warmGalaxySprites(GALAXY_SEEDS).then((map) => {
      if (!cancelled) setSpriteMap(map);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // 立方体渲染循环：自动旋转 + 拖拽惯性，直接写 DOM transform 避免高频重渲染
  useEffect(() => {
    let rafId = 0;
    const tick = (now: number) => {
      const s = stateRef.current;
      if (!s.dragging) {
        const speed = Math.hypot(s.vx, s.vy);
        if (speed > 0.05) {
          // 拖拽后的惯性衰减
          s.ry += s.vx;
          s.rx -= s.vy;
          s.vx *= 0.96;
          s.vy *= 0.96;
        } else {
          // 自动旋转 + 轻微俯仰摆动
          s.ry += 0.12;
          const targetRx = -14 + Math.sin(now / 4200) * 6;
          s.rx += (targetRx - s.rx) * 0.02;
        }
        s.rx = Math.max(-75, Math.min(75, s.rx));
      }
      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateX(${s.rx}deg) rotateY(${s.ry}deg)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // 阶段推进：exploding -> scattered（闪光炸开后星系飞出），returning -> cube（重组）
  useEffect(() => {
    if (phase === 'exploding') {
      timersRef.current.push(
        window.setTimeout(() => setPhase('scattered'), 600),
        window.setTimeout(() => setFloating(true), 2400),
        // 大爆炸特效（2.2s 动画）播完后卸载
        window.setTimeout(() => setBangDone(true), 2300),
      );
    } else if (phase === 'returning') {
      timersRef.current.push(
        window.setTimeout(() => {
          setPhase('cube');
          setExplosion(null);
        }, 850),
      );
    }
  }, [phase]);

  // 爆炸状态广播给页面（About 页在爆炸时隐藏自身标题/简介，避免与维度标题碰撞）
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('dimension-explode', { detail: phase !== 'cube' }),
    );
  }, [phase]);

  // 卸载时清理定时器与拖拽监听
  useEffect(
    () => () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
      dragCleanupRef.current?.();
    },
    [],
  );

  /**
   * 拖拽与点击统一走 window 级 pointer 监听。
   * 注意：不要用 setPointerCapture——它会把后续 click 重定向到容器，
   * 导致面上的点击永远无法触发。
   */
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const s = stateRef.current;
    const faceEl = (e.target as HTMLElement).closest('[data-face-index]');
    s.pressedFace = faceEl ? Number(faceEl.getAttribute('data-face-index')) : null;
    s.dragging = true;
    s.lastX = e.clientX;
    s.lastY = e.clientY;
    s.moved = 0;
    s.vx = 0;
    s.vy = 0;

    const onMove = (ev: PointerEvent) => {
      const dx = ev.clientX - s.lastX;
      const dy = ev.clientY - s.lastY;
      s.lastX = ev.clientX;
      s.lastY = ev.clientY;
      s.moved += Math.abs(dx) + Math.abs(dy);
      s.ry += dx * 0.45;
      s.rx -= dy * 0.45;
      s.rx = Math.max(-75, Math.min(75, s.rx));
      s.vx = dx * 0.45;
      s.vy = dy * 0.45;
    };
    const cleanup = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onCancel);
      dragCleanupRef.current = null;
    };
    const onUp = (ev: PointerEvent) => {
      s.dragging = false;
      cleanup();
      // 位移很小视为点击：触发对应面的爆炸
      if (s.moved <= 8 && s.pressedFace !== null) {
        handleFaceClick(DIMENSIONS[s.pressedFace]);
      }
      s.pressedFace = null;
      void ev;
    };
    const onCancel = () => {
      s.dragging = false;
      s.pressedFace = null;
      cleanup();
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onCancel);
    dragCleanupRef.current = cleanup;
  };

  const handleFaceClick = (dimension: Dimension) => {
    // 拖拽结束的抬起不算点击；已爆炸时忽略
    if (stateRef.current.moved > 8 || phase !== 'cube') return;
    const rect = wrapperRef.current?.getBoundingClientRect();
    const origin = rect
      ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
      : { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const count = dimension.image ? 1 : dimension.meteors.length;
    setExplosion({
      dimension,
      origin,
      targets: generateTargets(count),
      // 每次爆炸从全部星系中随机抽取（互不重复），排版与内容都是全新随机
      photoIndices: shuffle(GALAXY_SEEDS).slice(0, count),
      // 大爆炸：12 条辐射光线，均匀分布 + 角度抖动
      rays: Array.from(
        { length: 12 },
        (_, i) => (i / 12) * 360 + (Math.random() * 24 - 12),
      ),
    });
    setFloating(false);
    setBangDone(false);
    setPhase('exploding');
  };

  const handleOverlayClick = () => {
    if (phase !== 'scattered') return;
    setFloating(false);
    setPhase('returning');
  };

  const isScattered = phase === 'scattered';
  const inFlight = (isScattered && !floating) || phase === 'returning';

  return (
    <>
      <div
        ref={wrapperRef}
        className="select-none touch-none cursor-grab active:cursor-grabbing"
        style={{
          perspective: '1200px',
          opacity: phase === 'cube' ? 1 : 0,
          transform: phase === 'cube' ? 'scale(1)' : 'scale(1.6)',
          transition:
            phase === 'cube'
              ? 'opacity 550ms ease 150ms, transform 650ms cubic-bezier(0.16, 1, 0.3, 1) 150ms'
              : 'opacity 260ms ease, transform 420ms ease-in',
          pointerEvents: phase === 'cube' ? 'auto' : 'none',
        }}
        onPointerDown={handlePointerDown}
        role="img"
        aria-label="我的六个维度：电影、阅读、人生、世界、自我、呼叫地球"
      >
        <div
          ref={cubeRef}
          className="relative mx-auto"
          style={{
            width: SIZE,
            height: SIZE,
            transformStyle: 'preserve-3d',
          }}
        >
          {DIMENSIONS.map((dimension, index) => {
            const Icon = dimension.icon;
            return (
              <div
                key={dimension.title}
                data-face-index={index}
                className={`group absolute inset-0 flex flex-col items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-gradient-to-b ${dimension.glow} to-transparent bg-[#0a0a1a]/20 p-4 text-center backdrop-blur-sm transition-colors duration-300 hover:border-white/40`}
                style={{
                  transform: FACE_TRANSFORMS[index],
                  backfaceVisibility: 'hidden',
                  boxShadow: 'inset 0 0 40px rgba(120, 140, 255, 0.08)',
                  textShadow: '0 1px 6px rgba(0, 0, 0, 0.6)',
                }}
              >
                <Icon className="h-9 w-9 text-white/75 transition-colors duration-300 group-hover:text-white" />
                <div>
                  <p className="text-xl font-light tracking-[0.3em] text-white">
                    {dimension.title}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/35">
                    {dimension.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 爆炸层：星系 + 冲击波 + 回归提示。
          不加遮罩，展开前后背景保持一致；
          必须通过 portal 挂到 body：祖先容器带 transform（scale），
          否则 fixed 定位会以该容器为包含块，导致坐标全错。 */}
      {explosion &&
        createPortal(
          <div
            className="fixed inset-0 z-40"
            onClick={handleOverlayClick}
          >
          {/* 宇宙大爆炸（爆炸后 1.2s 内）：闪光核心 + 辐射光线 + 冲击波 */}
          {!bangDone && (
            <>
              <div
                className="bigbang-flash pointer-events-none fixed rounded-full"
                style={{
                  left: explosion.origin.x,
                  top: explosion.origin.y,
                  width: '120vmax',
                  height: '120vmax',
                  background:
                    'radial-gradient(circle, rgba(255, 255, 255, 0.98) 0%, rgba(190, 215, 255, 0.75) 10%, rgba(130, 150, 255, 0.35) 26%, transparent 55%)',
                  mixBlendMode: 'screen',
                }}
              />
              {explosion.rays.map((angle, i) => (
                <div
                  key={i}
                  className="bigbang-ray pointer-events-none fixed"
                  style={
                    {
                      left: explosion.origin.x,
                      top: explosion.origin.y,
                      width: '45vmax',
                      height: 3,
                      background:
                        'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(170, 200, 255, 0.7) 30%, transparent 75%)',
                      transformOrigin: 'left center',
                      mixBlendMode: 'screen',
                      animationDelay: `${i * 20}ms`,
                      '--ray-angle': `${angle}deg`,
                    } as React.CSSProperties
                  }
                />
              ))}
              <div
                className="shockwave pointer-events-none fixed h-72 w-72 rounded-full border border-white/40"
                style={{
                  left: explosion.origin.x,
                  top: explosion.origin.y,
                  boxShadow: '0 0 60px rgba(160, 170, 255, 0.35)',
                }}
              />
            </>
          )}

          {/* 维度标题 */}
          <div className="pointer-events-none fixed left-1/2 top-44 -translate-x-1/2 text-center">
            <p className="text-2xl font-light tracking-[0.4em] text-white">
              {explosion.dimension.title}
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
              {explosion.dimension.subtitle}
            </p>
          </div>

          {/* 陨石群 */}
          {explosion.dimension.meteors.map((text, i) => {
            const target = explosion.targets[i];
            const dx = target.x - explosion.origin.x;
            const dy = target.y - explosion.origin.y;
            // 尾迹指向飞行反方向：散开时指向原点，回归时背离原点
            const trailAngle =
              phase === 'returning'
                ? (Math.atan2(dy, dx) * 180) / Math.PI
                : (Math.atan2(-dy, -dx) * 180) / Math.PI;
            return (
              <div
                key={text}
                className="pointer-events-none fixed"
                style={{
                  left: explosion.origin.x,
                  top: explosion.origin.y,
                  transform: isScattered
                    ? `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${target.rot}deg) scale(${target.depth})`
                    : 'translate(-50%, -50%) scale(0.1)',
                  opacity: isScattered ? 1 : 0,
                  transition: isScattered
                    ? `transform 950ms cubic-bezier(0.16, 1.2, 0.3, 1) ${i * 90}ms, opacity 450ms ease ${i * 90}ms`
                    : `transform 620ms cubic-bezier(0.5, 0, 0.75, 0) ${i * 45}ms, opacity 500ms ease ${i * 45}ms`,
                }}
              >
                {/* 漂浮层 */}
                <div
                  className={floating ? 'meteor-float' : ''}
                  style={{
                    animationDuration: `${3.2 + i * 0.5}s`,
                    animationDelay: `${-i * 0.7}s`,
                  }}
                >
                  <div className="relative h-44 w-44 sm:h-56 sm:w-56">
                    {/* 火焰尾迹（仅飞行中） */}
                    <div
                      className="absolute left-1/2 top-1/2 -mt-1.5 h-3 w-36 origin-left rounded-full"
                      style={{
                        transform: `rotate(${trailAngle}deg)`,
                        background:
                          'linear-gradient(to right, rgba(255, 220, 160, 0.95), rgba(255, 140, 60, 0.55) 45%, transparent)',
                        filter: 'blur(3px)',
                        opacity: inFlight ? 0.9 : 0,
                        transition: 'opacity 400ms ease',
                      }}
                    />
                    {/* 星系本体 + 文案：同一旋转容器，文字跟随星系一起转动 */}
                    {(() => {
                      const seed = explosion.photoIndices[i];
                      const sprite = spriteMap[seed] ?? getGalaxySprite(seed);
                      return (
                        <div
                          className="absolute inset-0"
                          style={{
                            animation: `asteroidTumble ${48 + i * 12}s linear infinite${
                              i % 2 ? ' reverse' : ''
                            }`,
                          }}
                        >
                          {sprite ? (
                            <img
                              src={sprite}
                              alt=""
                              draggable={false}
                              className="absolute inset-0 h-full w-full"
                              style={{
                                // screen 混合：暗部透出星空，与背景融为一体
                                mixBlendMode: 'screen',
                                filter: `${
                                  target.depth < 0.95 ? 'blur(0.6px) ' : ''
                                }drop-shadow(0 0 ${inFlight ? 24 : 14}px ${
                                  inFlight
                                    ? 'rgba(255, 160, 70, 0.75)'
                                    : explosion.dimension.shadowColor
                                })`,
                                transition: 'filter 500ms ease',
                              }}
                            />
                          ) : (
                            // 贴图未就绪时的兜底（预热通常在点击前已完成）
                            <div
                              className="absolute inset-0 rounded-full"
                              style={{
                                background:
                                  'radial-gradient(circle at 50% 50%, #4b5480 0%, #1a1a30 55%, transparent 75%)',
                              }}
                            />
                          )}
                          {/* 文案：无边框辉光文字，随星系转动 */}
                          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                            <p
                              className="text-xs font-medium leading-relaxed tracking-[0.15em] text-white/95 sm:text-sm"
                              style={{
                                textShadow: `0 0 12px ${explosion.dimension.accent}99, 0 0 6px rgba(0, 0, 0, 0.95), 0 1px 8px rgba(0, 0, 0, 0.9), 0 0 24px rgba(0, 0, 0, 0.8)`,
                              }}
                            >
                              {text}
                            </p>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            );
          })}

          {/* 图片陨石（联系我面：微信二维码，替代星系陨石，固定屏幕中央） */}
          {explosion.dimension.image &&
            explosion.targets[0] &&
            (() => {
              const target = explosion.targets[0];
              return (
                <div
                  className="pointer-events-none fixed"
                  style={{
                    left: explosion.origin.x,
                    top: explosion.origin.y,
                    transform: isScattered
                      ? `translate(-50%, -50%) rotate(${target.rot}deg) scale(${target.depth})`
                      : 'translate(-50%, -50%) scale(0.1)',
                    opacity: isScattered ? 1 : 0,
                    transition: isScattered
                      ? 'transform 950ms cubic-bezier(0.16, 1.2, 0.3, 1), opacity 450ms ease'
                      : 'transform 620ms cubic-bezier(0.5, 0, 0.75, 0), opacity 500ms ease',
                  }}
                >
                  <div
                    className={floating ? 'meteor-float' : ''}
                    style={{ animationDuration: '3.8s' }}
                  >
                    <div className="relative">
                      {/* 星空光环：与背景协调的柔和辉光 */}
                      <div
                        className="absolute -inset-10 animate-pulse rounded-full"
                        style={{
                          background: `radial-gradient(circle, ${explosion.dimension.shadowColor}, rgba(99, 102, 241, 0.10) 55%, transparent 75%)`,
                          filter: 'blur(14px)',
                        }}
                      />
                      <img
                        src={explosion.dimension.image}
                        alt="微信好友二维码"
                        className="relative h-auto w-44 object-contain sm:w-56"
                        style={{
                          boxShadow: `0 0 50px ${explosion.dimension.shadowColor}`,
                          // 边缘径向羽化：白卡边缘融入星空
                          maskImage:
                            'radial-gradient(ellipse at center, black 60%, transparent 95%)',
                          WebkitMaskImage:
                            'radial-gradient(ellipse at center, black 60%, transparent 95%)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>,
          document.body,
        )}
    </>
  );
};

export default DimensionCube;
