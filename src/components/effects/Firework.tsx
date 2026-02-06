import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
}

interface FireworkProps {
  x: number;
  y: number;
  onComplete: () => void;
}

const COLORS = [
  '#ef4444', // red
  '#f59e0b', // amber
  '#eab308', // yellow
  '#84cc16', // lime
  '#06b6d4', // cyan
  '#3b82f6', // blue
  '#8b5cf6', // violet
  '#ec4899', // pink
  '#f97316', // orange
];

export function Firework({ x, y, onComplete }: FireworkProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // 创建粒子
    const particleCount = 30 + Math.floor(Math.random() * 20);
    const newParticles: Particle[] = [];
    const baseColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = 3 + Math.random() * 4;
      
      newParticles.push({
        id: i,
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        color: baseColor,
        size: 2 + Math.random() * 3,
        life: 1,
      });
    }
    
    setParticles(newParticles);

    // 动画循环
    const animate = () => {
      setParticles(prevParticles => {
        const updated = prevParticles.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vy: particle.vy + 0.1, // 重力
          life: particle.life - 0.02,
          vx: particle.vx * 0.98, // 阻力
        }));

        // 检查是否所有粒子都消失了
        if (updated.every(p => p.life <= 0)) {
          onComplete();
          return [];
        }

        return updated;
      });
    };

    const interval = setInterval(animate, 16);
    
    return () => clearInterval(interval);
  }, [x, y, onComplete]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50" style={{ margin: 0 }}>
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.life,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
}