import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Section from './pages/Section';
import AboutMe from './pages/AboutMe';
import Works from './pages/Works';
import FireworksCanvas from './components/pirate/FireworksCanvas';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Section section="home" />} />
        <Route path="/movies" element={<Section section="movies" />} />
        <Route path="/tv" element={<Section section="tv" />} />
        <Route path="/variety" element={<Section section="variety" />} />
        <Route path="/anime" element={<Section section="anime" />} />
        <Route path="/works" element={<Works />} />
        <Route path="/me" element={<AboutMe />} />
        {/* 未知路径重定向到首页 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* 全屏烟花画布：任何组件调用 fireworks.burst(x, y) 即可炸开 */}
      <FireworksCanvas />
    </Router>
  );
}

export default App;
