import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Section from './pages/Section';
import AboutMe from './pages/AboutMe';
import Works from './pages/Works';
import FireworksCanvas from './components/pirate/FireworksCanvas';
import './App.css';

function App() {
  // GitHub Pages 的 SPA 回退：直接访问 /me 等子路径会命中 404.html，
  // 它把路径重定向到 /?redirect=/me，这里接住并转回真实路由
  const redirect = new URLSearchParams(window.location.search).get('redirect');

  return (
    <Router>
      <Routes>
        {redirect && <Route path="*" element={<Navigate to={redirect} replace />} />}
        {/* 根路径直接进「关于我」 */}
        <Route path="/" element={<Navigate to="/me" replace />} />
        {/* 影视站门户首页保留在 /home */}
        <Route path="/home" element={<Section section="home" />} />
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
