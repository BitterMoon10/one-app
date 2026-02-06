import { useState, useCallback } from 'react';
import { Firework } from './Firework';

interface FireworkData {
  id: number;
  x: number;
  y: number;
}

export function FireworkDisplay() {
  const [fireworks, setFireworks] = useState<FireworkData[]>([]);
  const [nextId, setNextId] = useState(0);

  const createFirework = useCallback((x: number, y: number) => {
    const newFirework: FireworkData = {
      id: nextId,
      x,
      y,
    };
    
    setFireworks(prev => [...prev, newFirework]);
    setNextId(prev => prev + 1);
  }, [nextId]);

  const removeFirework = useCallback((id: number) => {
    setFireworks(prev => prev.filter(f => f.id !== id));
  }, []);

  return {
    fireworks,
    createFirework,
    removeFirework,
  };
}

// 导出Firework组件供外部使用
export { Firework };