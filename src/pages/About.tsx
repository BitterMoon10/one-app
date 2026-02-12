import { useEffect, useState } from 'react';
import { MessageCircle, User } from 'lucide-react';

const About = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
            {/* Left: Avatar */}
            <div
              className={`relative transition-all duration-1000 ${
                loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                
                {/* Image Container */}
                <div 
                  className="relative overflow-hidden rounded-2xl"
                  style={{
                    clipPath: loaded ? 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' : 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                    transition: 'clip-path 1s var(--ease-out-expo) 0.2s',
                  }}
                >
                  <img
                    src="./avatar.jpg"
                    alt="个人头像"
                    className={`w-full aspect-[3/4] object-cover transition-all duration-1200 ${
                      loaded ? 'scale-100 grayscale-0' : 'scale-110 grayscale'
                    }`}
                    style={{ transitionTimingFunction: 'var(--ease-smooth)' }}
                  />
                </div>

                {/* Floating Badge */}
                <div 
                  className={`absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 transition-all duration-700 ${
                    loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '800ms' }}
                >
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
              {/* Title */}
              <div
                className={`transition-all duration-700 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <User className="w-7 h-7 text-white/60" />
                  <h2 className="text-4xl md:text-5xl font-light text-white">
                    关于我
                  </h2>
                </div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-white/40 to-white/10" />
              </div>

              {/* Bio */}
              <div className="space-y-6">
                <p
                  className={`text-white/50 leading-relaxed transition-all duration-600 ${
                    loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                >
                  我是一名热爱生活的摄影师，相信每一个瞬间都值得被记录。从清晨的第一缕阳光到夜晚的万家灯火，从繁华都市的街头巷尾到宁静乡村的田野山间，我的镜头始终追寻着那些容易被忽视的美好。
                </p>

                <p
                  className={`text-white/50 leading-relaxed transition-all duration-600 ${
                    loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '720ms' }}
                >
                  摄影于我而言，不仅仅是按下快门的动作，更是一种观察世界的方式。我学会了在平凡中发现不凡，在喧嚣中寻找宁静。每一张照片背后，都承载着我对生活的思考与感悟。
                </p>

                <p
                  className={`text-white/50 leading-relaxed transition-all duration-600 ${
                    loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '840ms' }}
                >
                  除了摄影，我还热爱阅读和电影。书籍让我与伟大的思想对话，电影让我体验不同的人生。我希望通过我的作品，能够传递出对生活的热爱和对美的追求。
                </p>
              </div>

              {/* Social Links */}
              <div
                className={`pt-6 transition-all duration-500 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                <p className="text-sm text-white/30 mb-4">社交媒体</p>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="group flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-500/80 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white/70 group-hover:text-white">
                      WeChat
                    </span>
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div
                className={`grid grid-cols-3 gap-6 pt-8 border-t border-white/10 transition-all duration-500 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '1100ms' }}
              >
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
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-white/30 text-sm border-t border-white/10">
        <p>© 2024 山岚 · 用镜头记录世界</p>
      </footer>
    </div>
  );
};

export default About;
