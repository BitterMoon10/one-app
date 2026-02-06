import { useEffect, useState, useRef } from 'react';
import { MessageCircle, User } from 'lucide-react';

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // 检测滑动 - 正确的方向：双指向下滑动打开面板
  useEffect(() => {
    let isScrolling = false;
    let lastScrollTop = 0;
    
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 50) return;
      
      if (e.deltaY > 0 && !showAbout) {
        setShowAbout(true);
      } else if (e.deltaY < 0 && showAbout) {
        setShowAbout(false);
      }
    };

    const handleScroll = () => {
      if (isScrolling) return;
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const delta = scrollTop - lastScrollTop;
      
      if (delta > 50 && !showAbout) {
        setShowAbout(true);
      } else if (delta < -50 && showAbout) {
        setShowAbout(false);
      }
      
      lastScrollTop = scrollTop;
      isScrolling = true;
      setTimeout(() => { isScrolling = false; }, 50);
    };

    // 触摸事件
    let touchStartY_local = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY_local = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY_local = e.changedTouches[0].clientY;
      const deltaY = touchStartY_local - touchEndY_local;
      
      if (deltaY < -50 && !showAbout) {
        setShowAbout(true);
      } else if (deltaY > 50 && showAbout) {
        setShowAbout(false);
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.body.style.overflow = '';
    };
  }, [showAbout]);

  const greetingWords = ['早安，', '午安', '和', '晚安。'];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 transition-all duration-[1500ms] ${
          loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
      >
        <img
          src="/hero-bg.jpg"
          alt="Serene landscape"
          className="w-full h-full object-cover"
        />
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 transition-opacity duration-[1200ms] delay-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center" style={{ perspective: '1000px' }}>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide">
            {greetingWords.map((word, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-800 ${
                  loaded ? 'opacity-100 translate-y-0 rotateX-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${600 + index * 120}ms`,
                  transitionTimingFunction: 'var(--ease-out-expo)',
                  transform: loaded ? 'translateZ(0) rotateX(0)' : 'translateZ(-50px) rotateX(-90deg)',
                }}
              >
                {word}
              </span>
            ))}
          </h1>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      {/* About Me 面板 */}
      <div 
        className={`absolute bottom-0 left-0 right-0 z-30 transition-transform duration-500 ease-in-out ${
          showAbout ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ height: '85vh' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black overflow-y-auto rounded-t-3xl">
          <button className="flex justify-center pt-4 pb-2 w-full" onClick={() => setShowAbout(false)}>
            <div className="w-12 h-1 bg-gray-600 rounded-full cursor-grab active:cursor-grabbing"></div>
          </button>
          
          <div className="flex flex-col h-full">
            <div className="flex-1 px-6 pb-8 overflow-y-auto">
              <div className="max-w-6xl mx-auto text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
                  {/* Left: Avatar */}
                  <div className="relative">
                    <div className="relative max-w-md mx-auto lg:mx-0">
                      <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                      
                      <div className="relative overflow-hidden rounded-2xl">
                        <img src="/avatar.jpg" alt="个人头像" className="w-full aspect-[3/4] object-cover" />
                      </div>

                      <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                            <MessageCircle className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-white/40">联系我</p>
                            <p className="text-sm font-medium text-white">WeChat</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-3 mb-2">
                      <User className="w-7 h-7 text-white/60" />
                      <h2 className="text-4xl md:text-5xl font-light text-white">关于我</h2>
                    </div>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-white/40 to-white/10" />

                    <div className="space-y-6">
                      <p className="text-white/50 leading-relaxed">
                        我是一名热爱生活的摄影师，相信每一个瞬间都值得被记录。
                      </p>
                      <p className="text-white/50 leading-relaxed">
                        摄影于我而言，不仅仅是按下快门的动作，更是一种观察世界的方式。
                      </p>
                      <p className="text-white/50 leading-relaxed">
                        除了摄影，我还热爱阅读和电影。
                      </p>
                    </div>

                    <div className="pt-6">
                      <p className="text-sm text-white/30 mb-4">社交媒体</p>
                      <div className="flex items-center gap-4">
                        <div className="group flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer">
                          <div className="w-8 h-8 rounded-full bg-green-500/80 flex items-center justify-center">
                            <MessageCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-medium text-white/70 group-hover:text-white">
                            WeChat
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                      <div className="text-center">
                        <p className="text-2xl md:text-3xl font-light text-white">5+</p>
                        <p className="text-xs text-white/30 mt-1">年摄影经验</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl md:text-3xl font-light text-white">1000+</p>
                        <p className="text-xs text-white/30 mt-1">作品数量</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl md:text-3xl font-light text-white">50+</p>
                        <p className="text-xs text-white/30 mt-1">阅读书籍</p>
                      </div>
                    </div>
                  </div>
                </div>

                <footer className="py-12 text-center text-white/30 text-sm border-t border-white/10">
                  <p>© 2024 山岚 · 用镜头记录世界</p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
