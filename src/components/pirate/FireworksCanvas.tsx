import { useEffect, useRef } from 'react';
import { fireworks } from '../../utils/fireworks';

interface Particle {
  x: number;
  y: number;
  px: number;
  py: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

/** 赛博味霓虹色 + 暖色，随机取 */
const COLORS = ['#00f0ff', '#ff2e88', '#fcee0a', '#7b5cff', '#ff6b35', '#4ade80', '#ffffff'];

/**
 * 全屏烟花画布：挂在 App 层一次，任何组件调用 fireworks.burst(x, y) 就能在屏幕上炸开一簇。
 * 粒子带重力、空气阻力、寿命衰减和辉光，尾迹用低透明度圆点实现。
 */
const FireworksCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resize();
    window.addEventListener('resize', resize);

    const spawn = (x: number, y: number) => {
      const count = 90 + Math.floor(Math.random() * 40);
      // 从调色板随机取 3 个互异的颜色，避免一簇里颜色单调
      const palette = [...COLORS].sort(() => Math.random() - 0.5);
      const [base, accent, third] = palette;
      for (let i = 0; i < count; i += 1) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.25;
        const speed = 2.5 + Math.random() * 5;
        const r = Math.random();
        particles.push({
          x: x * dpr,
          y: y * dpr,
          px: x * dpr,
          py: y * dpr,
          vx: Math.cos(angle) * speed * dpr,
          vy: Math.sin(angle) * speed * dpr,
          life: 1,
          maxLife: 70 + Math.random() * 50,
          color: r < 0.6 ? base : r < 0.85 ? accent : third,
          size: 1.8 + Math.random() * 2,
        });
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles = particles.filter((p) => p.life > 0);
      ctx.lineCap = 'round';
      for (const p of particles) {
        p.px = p.x;
        p.py = p.y;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.045 * dpr; // 重力
        p.vx *= 0.985; // 空气阻力
        p.vy *= 0.985;
        p.life -= 1 / p.maxLife;

        // 尾迹：从上一位置到当前位置的渐隐线段，形成放射状流动感
        ctx.globalAlpha = Math.max(p.life * 0.55, 0);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = Math.max(p.size * dpr * p.life, 0.5);
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        // 亮点（带辉光）
        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12 * p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(p.size * dpr * p.life, 0.6), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const unregister = fireworks.register(spawn);
    return () => {
      unregister();
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 z-[60]" />;
};

export default FireworksCanvas;
