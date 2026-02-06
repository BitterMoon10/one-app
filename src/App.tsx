import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Reading from './pages/Reading';
import Movies from './pages/Movies';
import Thoughts from './pages/Thoughts';
import About from './pages/About';
import { Firework } from './components/effects/Firework';
import './App.css';

interface ClickEffect {
  id: number;
  x: number;
  y: number;
}

function App() {
  const [fireworks, setFireworks] = useState<ClickEffect[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // 在点击位置创建烟花
      const newFirework: ClickEffect = {
        id: nextId,
        x: e.clientX,
        y: e.clientY,
      };
      
      setFireworks(prev => [...prev, newFirework]);
      setNextId(prev => prev + 1);
    };

    // 添加全局点击事件监听
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [nextId]);

  const removeFirework = (id: number) => {
    setFireworks(prev => prev.filter(f => f.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen relative">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        {/* 渲染所有烟花效果 */}
        {fireworks.map(firework => (
          <Firework
            key={firework.id}
            x={firework.x}
            y={firework.y}
            onComplete={() => removeFirework(firework.id)}
          />
        ))}
      </div>
    </Router>
  );
}

export default App;
