import { useEffect, useState } from 'react';
import { BookOpen, Quote } from 'lucide-react';

interface BookNote {
  id: string;
  cover: string;
  title: string;
  author: string;
  quote: string;
  note: string;
  date: string;
}

// 静态读书笔记数据
const books: BookNote[] = [
  {
    id: '1',
    cover: '/one-app/book-1.jpg',
    title: '沉默的回声',
    author: '艾莉诺·万斯',
    quote: '时间不是治愈一切的良药，有些伤口会随着岁月变得更加深刻，只是我们学会了与疼痛共处。',
    note: '这本书让我重新思考了记忆与遗忘的关系。我们常常以为时间会冲淡一切，但作者却告诉我们，有些记忆会随着时间的推移变得更加清晰，更加刻骨铭心。',
    date: '2024-01-15',
  },
  {
    id: '2',
    cover: '/one-app/book-2.jpg',
    title: '山巅之上',
    author: '陈默',
    quote: '站在高处的人，看到的不是风景，而是自己的渺小。',
    note: '简洁而有力的一句话。当我们攀登到人生的某个高度时，才会真正理解世界的广阔和自身的局限。这种认知不是沮丧的来源，而是谦逊的开始。',
    date: '2024-02-03',
  },
  {
    id: '3',
    cover: '/one-app/book-3.jpg',
    title: '海洋的拥抱',
    author: '林汐',
    quote: '海浪一次次冲刷着沙滩，就像生活中那些反复出现的困境，看似徒劳，却在无形中塑造着海岸线的轮廓。',
    note: '用自然的意象来比喻人生的困境，这种写法既优美又深刻。困境不是阻碍，而是塑造我们的力量。',
    date: '2024-02-20',
  },
];

const Reading = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
              <BookOpen className="w-8 h-8 text-white/60" />
              <h2 className="text-4xl md:text-5xl font-light text-white">
                阅读笔记
              </h2>
            </div>
          </div>

          {/* Book Notes List */}
          <div className="space-y-8">
            {books.map((book, index) => (
              <article
                key={book.id}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-700 hover:border-white/20 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Book Cover */}
                  <div className="md:w-48 lg:w-56 flex-shrink-0">
                    <div className="aspect-[2/3] md:h-full overflow-hidden">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="mb-4">
                      <h3 className="text-xl font-medium text-white mb-1">
                        {book.title}
                      </h3>
                      <p className="text-sm text-white/50">{book.author}</p>
                    </div>

                    {/* Quote */}
                    <div className="relative mb-6 pl-6 border-l-2 border-white/20">
                      <Quote className="absolute -left-3 -top-1 w-6 h-6 text-white/20 bg-[#0a0a0a]" />
                      <blockquote className="text-white/70 italic leading-relaxed">
                        {book.quote}
                      </blockquote>
                    </div>

                    {/* Note */}
                    <div className="mb-4">
                      <p className="text-white/50 leading-relaxed text-sm">
                        {book.note}
                      </p>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-xs text-white/30">
                      <BookOpen className="w-3 h-3" />
                      <span>阅读于 {book.date}</span>
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
        <p>用阅读丰富心灵</p>
      </footer>
    </div>
  );
};

export default Reading;
