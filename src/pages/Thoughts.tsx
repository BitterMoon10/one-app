import { useEffect, useState } from 'react';
import { Sparkles, Calendar, Tag } from 'lucide-react';

interface Thought {
  id: string;
  title: string;
  content: string;
  tags: string[];
  date: string;
}

// 静态感悟数据
const thoughts: Thought[] = [
  {
    id: '1',
    title: '关于时间的思考',
    content: '时间是最公平的资源，每个人每天都拥有同样的24小时。但不同的是，我们如何选择使用这些时间。有人用来追逐梦想，有人用来消磨时光。多年后，这些选择会汇聚成截然不同的人生轨迹。\n\n我开始学会珍惜每一个当下，不再为过去懊悔，也不再为未来焦虑。专注于眼前的事情，用心感受生活的每一个细节，这或许就是对抗时间流逝最好的方式。',
    tags: ['时间', '人生', '思考'],
    date: '2024-01-10',
  },
  {
    id: '2',
    title: '孤独与独处',
    content: '孤独是一种状态，独处是一种选择。在这个喧嚣的世界里，能够享受独处的人，往往拥有更丰富的内心世界。\n\n独处不是逃避，而是给自己一个与内心对话的机会。在独处中，我们可以听见内心真实的声音，梳理纷乱的思绪，找到前进的方向。学会独处，是成长中重要的一课。',
    tags: ['孤独', '成长', '内心'],
    date: '2024-01-25',
  },
  {
    id: '3',
    title: '简单生活',
    content: '生活越简单，心灵越自由。当我们减少对物质的依赖，反而能获得更多的精神空间。\n\n一件喜欢的衣服可以穿很多年，一本好书可以反复阅读，一段真挚的友谊可以陪伴一生。这些简单的事物，往往带来最持久的快乐。简单，是一种生活的智慧。',
    tags: ['生活', '简约', '智慧'],
    date: '2024-02-14',
  },
];

const Thoughts = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div
            className={`text-center mb-16 transition-all duration-800 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-white/60" />
              <h2 className="text-4xl md:text-5xl font-light text-white">
                心活随笔
              </h2>
            </div>
          </div>

          {/* Thoughts List */}
          <div className="space-y-8">
            {thoughts.map((thought, index) => (
              <article
                key={thought.id}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-700 hover:border-white/20 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                }}
              >
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white/60" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">
                          {thought.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-white/30">
                          <Calendar className="w-3 h-3" />
                          <span>{thought.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <p className="text-white/50 leading-relaxed whitespace-pre-line">
                      {thought.content}
                    </p>
                  </div>

                  {/* Tags */}
                  {thought.tags.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                      <Tag className="w-3 h-3 text-white/30" />
                      {thought.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/10 text-white/50 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-white/30 text-sm border-t border-white/10">
        <p>用文字记录思考</p>
      </footer>
    </div>
  );
};

export default Thoughts;
