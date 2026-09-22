import { useState } from 'react';
import { RELATED_WORK } from './data';

/**
 * 相关推荐：《one life》—— 与《one day》并列的**另一部片子**，独立成块，不和 one day 混在一处
 */
const RelatedWork = () => {
  const [notice, setNotice] = useState(false);

  /** 点海报或「查看筹拍消息」：弹出筹拍消息 */
  const handleClick = () => {
    setNotice(true);
    window.setTimeout(() => setNotice(false), 4000);
  };

  return (
    <section aria-label="相关推荐" className="pirate-panel mt-2 p-2">
      <h2 className="mb-2 text-sm font-bold text-[#333]">
        相关推荐<span className="ml-1 text-sm font-normal text-[#777]">（另一部片子）</span>
      </h2>

      <div className="flex gap-3 border border-dashed border-[#ccc] bg-white p-2">
        {/* 海报：纯 CSS，点击弹筹拍消息 */}
        <button
          type="button"
          onClick={handleClick}
          aria-label="《one life》海报，点击查看筹拍消息"
          className="relative flex aspect-[2/3] w-24 shrink-0 flex-col items-center justify-center gap-1 overflow-hidden bg-gradient-to-b from-[#1a2233] to-[#0a0e17] transition hover:brightness-110 sm:w-28"
        >
          <span className="text-[10px] tracking-[0.3em] text-[#8b949e]">{RELATED_WORK.studio}</span>
          <span
            className="px-1 text-center font-black leading-tight text-[#ffd75e]"
            style={{ fontFamily: 'Georgia, "Songti SC", serif', fontSize: '1.15rem' }}
          >
            {RELATED_WORK.title}
          </span>
          <span className="text-[10px] text-[#8b949e]">{RELATED_WORK.subTitle}</span>
          {/* 筹拍中红印章：放在左下，避开顶部「出品」与底部提示 */}
          <span className="absolute bottom-5 left-1 -rotate-12 border-2 border-[#f00] px-1 py-0.5 text-xs font-black text-[#f00]">
            {RELATED_WORK.status}
          </span>
        </button>

        {/* 影片信息 */}
        <div className="min-w-0 flex-1 text-xs leading-[1.5]">
          <p className="text-sm font-black text-[#333]">《{RELATED_WORK.title}》</p>
          <dl className="mt-1">
            {RELATED_WORK.rows.map((row) => (
              <div key={row.label} className="flex gap-2">
                <dt className="shrink-0 text-[#777]">{row.label}：</dt>
                <dd className="min-w-0 text-[#333]">{row.value}</dd>
              </div>
            ))}
          </dl>
          <button
            type="button"
            onClick={handleClick}
            className="pirate-link mt-1.5 min-h-[44px] text-xs"
          >
            查看筹拍消息 &gt;&gt;
          </button>
        </div>
      </div>

      {/* 筹拍消息：黄底红字弹层，4 秒后自动消失 */}
      {notice && (
        <div
          role="status"
          className="fixed left-1/2 top-1/3 z-50 w-[min(90vw,320px)] -translate-x-1/2 border-2 border-[#f00] bg-[#ffff00] p-3 text-center shadow-lg"
        >
          <p className="text-sm font-black text-[#f00]">{RELATED_WORK.notice.title}</p>
          <p className="mt-1 text-base font-black text-[#f00]">{RELATED_WORK.notice.text}</p>
          <p className="mt-1 text-[11px] text-[#a00]">{RELATED_WORK.notice.sub}</p>
        </div>
      )}
    </section>
  );
};

export default RelatedWork;
