import { MOVIE_INFO } from './data';

/** 评分星星：满 5 星，按分数填橙色（白底用橙，黄看不清） */
const Stars = ({ score, className = '' }: { score: number; className?: string }) => {
  const percent = Math.min(100, (score / 10) * 100);
  return (
    <span className={`relative inline-block whitespace-nowrap leading-none ${className}`} aria-label={`评分 ${score}`}>
      <span className="text-[#ddd]">★★★★★</span>
      <span className="absolute inset-0 overflow-hidden text-[#f5a623]" style={{ width: `${percent}%` }}>
        ★★★★★
      </span>
    </span>
  );
};

/**
 * 影片信息区：左海报（《one day》，故意做成加载失败）+ 右信息表 + 剧情简介
 * 注：《one life》是另一部片子，在「相关推荐」区块单独展示，不放在这里
 */
const MovieInfo = () => {
  return (
    <section aria-label="影片信息" className="pirate-panel mt-2 p-2">
      <h2 className="mb-2 text-sm font-bold text-[#333]">
        影片信息<span className="ml-1 text-sm font-normal text-[#777]">（《one day》）</span>
      </h2>
      <div className="flex flex-col gap-4 sm:flex-row">
        {/* 海报位：故意做成加载失败，纯 CSS/SVG */}
        <div className="mx-auto flex aspect-[2/3] w-40 shrink-0 flex-col items-center justify-center gap-2 border border-dashed border-[#ccc] bg-[#fafafa] sm:mx-0 sm:w-48">
          <svg viewBox="0 0 48 48" className="h-10 w-10 text-[#bbb]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <rect x="6" y="10" width="36" height="28" rx="2" />
            <circle cx="17" cy="20" r="3" />
            <path d="M6 34l10-8 8 6 10-9 8 7" />
            <path d="M4 4l40 40" stroke="#f00" />
          </svg>
          <p className="text-xs text-[#777]">海报加载失败</p>
          <p className="px-2 text-center text-[10px] leading-4 text-[#bbb]">该图片涉嫌违规已被删除</p>
        </div>

        {/* 信息表 */}
        <div className="min-w-0 flex-1 text-[13px] leading-[1.5]">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-2xl font-black text-[#f00]">{MOVIE_INFO.rating}</span>
            <Stars score={Number(MOVIE_INFO.rating)} className="text-base" />
            <span className="text-xs text-[#777]">豆瓣评分（{MOVIE_INFO.ratingCount}）</span>
          </div>
          <dl className="mt-1.5">
            {MOVIE_INFO.rows.map((row) => (
              <div key={row.label} className="flex gap-2">
                <dt className="shrink-0 text-[#777]">{row.label}：</dt>
                <dd className="min-w-0 text-[#333]">{row.value}</dd>
              </div>
            ))}
          </dl>
          {/* 剧情简介：站主原文 */}
          <blockquote className="mt-2 border-l-2 border-[#f5a623] pl-2 text-xs leading-[1.5] text-[#333]">
            <span className="pirate-highlight px-1">剧情简介：</span>
            {MOVIE_INFO.synopsis}
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;
export { Stars };
