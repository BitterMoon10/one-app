import { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import StarField from '../components/effects/StarField';
import DimensionCube from '../components/effects/DimensionCube';
import { cosmicMusic } from '../utils/cosmicMusic';

const About = () => {
  const [loaded, setLoaded] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [exploded, setExploded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // 立方体爆炸时隐藏页面自身标题/简介（DimensionCube 广播的状态）
  useEffect(() => {
    const handler = (e: Event) =>
      setExploded((e as CustomEvent<boolean>).detail);
    window.addEventListener('dimension-explode', handler);
    return () => window.removeEventListener('dimension-explode', handler);
  }, []);

  // 浏览器自动播放限制：首次交互时启动背景音乐
  useEffect(() => {
    const startOnce = () => {
      if (!cosmicMusic.isPlaying()) {
        cosmicMusic.start();
        setMusicOn(true);
      }
    };
    window.addEventListener('pointerdown', startOnce, { once: true });
    return () => window.removeEventListener('pointerdown', startOnce);
  }, []);

  const toggleMusic = () => {
    setMusicOn(cosmicMusic.toggle());
  };

  return (
    <div className="relative min-h-screen min-h-dvh overflow-hidden">
      <StarField />

      <main className="relative flex min-h-screen min-h-dvh flex-col items-center justify-center px-4 pb-24 pt-24">
        {/* 立方体 */}
        <div
          className={`relative my-14 scale-[0.72] transition-all delay-300 duration-1000 sm:scale-90 md:scale-100 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* 立方体后方的辉光 */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
          <DimensionCube />
        </div>

        {/* 简介 */}
        <p
          className={`mt-8 max-w-xl text-center text-sm leading-loose text-white/45 transition-all delay-700 duration-1000 ${
            loaded && !exploded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.85)' }}
        >
          我是一个程序员，程序是0和1的世界，但我反对非黑即白。
        </p>
      </main>

      {/* 音乐开关 */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/10"
        aria-label={musicOn ? '关闭背景音乐' : '播放背景音乐'}
        title={musicOn ? '关闭背景音乐' : '播放背景音乐'}
      >
        {musicOn ? (
          <Volume2 className="h-5 w-5 text-white/80" />
        ) : (
          <VolumeX className="h-5 w-5 text-white/45" />
        )}
      </button>
    </div>
  );
};

export default About;
