import { useState } from 'react';
import { ADS, REVIEWS } from './data';
import { Stars } from './MovieInfo';

/** 头像底色池：按用户名散列取色，24×24 方形纯色块 */
const AVATAR_COLORS = ['#7c5cbf', '#2f7d5b', '#b05c3a', '#3a6ea5', '#a53a5c', '#8a6d2f', '#4a7c8c', '#6b4fa0'];

const avatarColor = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) hash = (hash * 31 + name.charCodeAt(i)) % 997;
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
};

/**
 * 豆瓣热评 · 经典台词：虚线分隔的紧凑文字行（去现代化，不要卡片不要圆头像）
 * 片单/书单已移到「关于我」页，本区只保留台词
 */
const Reviews = () => {
  const [toast, setToast] = useState('');

  /** 弹个戏仿提示，可自定义文案 */
  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(''), 2200);
  };

  return (
    <section aria-label="豆瓣热评" className="pirate-panel mt-2 p-2">
      <h2 className="mb-2 text-sm font-bold text-[#333]">
        豆瓣热评
        <span className="ml-2 text-xs font-normal text-[#777]">以下评论由网友发布，与本站立场无关</span>
      </h2>

      {/* 经典台词：虚线分隔的紧凑文字行 */}
      <ul className="text-xs leading-[1.5]">
        {REVIEWS.map((review, i) => (
          <li
            key={`${review.username}-${i}`}
            className="flex flex-wrap items-center gap-x-2 gap-y-0.5 border-b border-dashed border-[#ddd] py-1.5 last:border-b-0"
          >
            {/* 24×24 方形纯色块头像 */}
            <span
              aria-hidden
              className="flex h-6 w-6 shrink-0 items-center justify-center text-[10px] font-bold text-white"
              style={{ background: avatarColor(review.username) }}
            >
              {review.username[0]}
            </span>
            <span className="pirate-link cursor-pointer">{review.username}</span>
            <Stars score={review.stars * 2} className="text-[10px]" />
            <span className="min-w-0 text-[#333]">{review.text}</span>
            <span className="ml-auto shrink-0 text-[#777]">有用({review.useful})</span>
          </li>
        ))}
      </ul>

      {/* 文字广告链：一排蓝色下划线小字 */}
      <div className="mt-2 border-t border-dashed border-[#ddd] pt-1.5 text-xs leading-[1.5]">
        <span className="mr-1 text-[#777]">赞助链接：</span>
        {ADS.textLinks.map((link, i) => (
          <span key={link}>
            {i > 0 && <span className="mx-1 text-[#ccc]">|</span>}
            <button type="button" onClick={() => showToast('该站点已失联（假的）')} className="pirate-link">
              {link}
            </button>
          </span>
        ))}
      </div>

      {toast && (
        <div
          role="status"
          className="fixed left-1/2 top-1/3 z-50 -translate-x-1/2 whitespace-nowrap border border-[#f00] bg-[#ffff00] px-4 py-2 text-sm font-bold text-[#f00] shadow-lg"
        >
          {toast}
        </div>
      )}
    </section>
  );
};

export default Reviews;
