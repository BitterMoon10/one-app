import { useState } from 'react';
import { COMMENTS } from './data';

/**
 * 评论区：盗版站/贴吧口吻，支持/反对可点（各只能点一次）
 */
const Comments = () => {
  // 记录每条评论被点过的态度：support / oppose / null
  const [voted, setVoted] = useState<Record<number, 'support' | 'oppose'>>({});

  return (
    <section aria-label="评论" className="pirate-panel mt-2 p-2">
      <h2 className="mb-2 text-sm font-bold text-[#333]">
        评论<span className="ml-1 text-sm font-normal text-[#777]">({COMMENTS.length})</span>
      </h2>

      <ul className="divide-y divide-[#eee]">
        {COMMENTS.map((comment, i) => {
          const vote = voted[i];
          return (
            <li key={comment.time} className="py-2">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                <span className="text-xs text-[#00e]">{comment.username}</span>
                <span className="font-mono text-[11px] text-[#777]">{comment.time}</span>
                <span className="text-[11px] text-[#777]">{i + 1}楼</span>
              </div>
              <p className="mt-0.5 text-xs leading-[1.5] text-[#333]">{comment.text}</p>
              <div className="mt-1 flex gap-4 text-[11px]">
                <button
                  type="button"
                  disabled={!!vote}
                  onClick={() => setVoted((v) => ({ ...v, [i]: 'support' }))}
                  className={`flex min-h-[32px] items-center gap-1 ${
                    vote === 'support' ? 'font-bold text-[#f00]' : 'text-[#777] hover:text-[#333]'
                  } disabled:cursor-default`}
                >
                  👍 支持({comment.support + (vote === 'support' ? 1 : 0)})
                </button>
                <button
                  type="button"
                  disabled={!!vote}
                  onClick={() => setVoted((v) => ({ ...v, [i]: 'oppose' }))}
                  className={`flex min-h-[32px] items-center gap-1 ${
                    vote === 'oppose' ? 'font-bold text-[#f00]' : 'text-[#777] hover:text-[#333]'
                  } disabled:cursor-default`}
                >
                  👎 反对({comment.oppose + (vote === 'oppose' ? 1 : 0)})
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-2 text-center text-[11px] text-[#777]">
        评论审核中，仅展示 {COMMENTS.length} 条 · 文明上网，理性求种
      </p>
    </section>
  );
};

export default Comments;
