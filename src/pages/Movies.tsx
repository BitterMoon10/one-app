import { useEffect, useState } from 'react';
import { Film, Star, Calendar } from 'lucide-react';

interface MovieReview {
  id: string;
  screenshot: string;
  title: string;
  director: string;
  year: string;
  rating: number;
  review: string;
  date: string;
}

// 静态观影记录数据
const movies: MovieReview[] = [
  {
    id: '1',
    screenshot: '/movie-1.jpg',
    title: '图书馆的秘密',
    director: '克里斯托弗·诺兰',
    year: '2023',
    rating: 5,
    review: '这部电影的光影运用堪称完美。每一个镜头都像是一幅精心构图的油画，尤其是图书馆中的那场戏，光线从彩色玻璃窗洒落，营造出神秘而庄严的氛围。导演对细节的把控令人叹为观止。',
    date: '2024-01-20',
  },
  {
    id: '2',
    screenshot: '/movie-2.jpg',
    title: '山巅之城',
    director: '丹尼斯·维伦纽瓦',
    year: '2024',
    rating: 4,
    review: '维伦纽瓦再次展现了他对宏大叙事的掌控力。影片中的自然景观不仅是背景，更是角色内心世界的映射。那座孤独的山巅城堡，象征着人类对永恒的渴望与对孤独的恐惧。',
    date: '2024-02-10',
  },
];

const Movies = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-white/10 text-white/10'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div
            className={`text-center mb-16 transition-all duration-800 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Film className="w-8 h-8 text-white/60" />
              <h2 className="text-4xl md:text-5xl font-light text-white">
                观影笔记
              </h2>
            </div>
          </div>

          {/* Movie Reviews List */}
          <div className="space-y-10">
            {movies.map((movie, index) => (
              <article
                key={movie.id}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-700 hover:border-white/20 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Movie Screenshot */}
                  <div className="md:w-72 lg:w-80 flex-shrink-0">
                    <div className="aspect-video md:h-full overflow-hidden">
                      <img
                        src={movie.screenshot}
                        alt={movie.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-medium text-white mb-1">
                          {movie.title}
                        </h3>
                        <p className="text-sm text-white/50">
                          {movie.director} · {movie.year}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="mb-4">{renderStars(movie.rating)}</div>

                    {/* Review */}
                    <div className="mb-4">
                      <p className="text-white/50 leading-relaxed">
                        {movie.review}
                      </p>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-xs text-white/30">
                      <Calendar className="w-3 h-3" />
                      <span>观影于 {movie.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-white/30 text-sm border-t border-white/10">
        <p>用电影感受人生</p>
      </footer>
    </div>
  );
};

export default Movies;
