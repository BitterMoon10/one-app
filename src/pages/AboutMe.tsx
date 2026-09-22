import { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/pirate/SiteHeader';
import SiteFooter from '../components/pirate/SiteFooter';
import SideAds from '../components/pirate/SideAds';
import AdBlocks from '../components/pirate/AdBlocks';
import { ABOUT_ME, BOOK_LIST, MOVIE_LIST } from '../components/pirate/data';

/** 封面格子：官方海报/书封 + 下方一行中文名（与作品页热评区同一套样式） */
const CoverCell = ({ item }: { item: { name: string; cover: string } }) => (
  <div className="min-w-0">
    <div className="aspect-[2/3] w-full overflow-hidden border border-black/40 bg-[#eee]">
      <img
        src={item.cover}
        alt={`${item.name} 封面`}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
    <span className="mt-0.5 block truncate text-center text-[10px] leading-4 text-[#333]">
      {item.name}
    </span>
  </div>
);

/**
 * 关于我页（/me）：站主本人信息。
 * 沿用盗版站视觉语言（深色站头 + 白内容区 + 蓝链接 + 黄底红字 + 直角高密度小字），
 * 内容不是影片信息，而是站主本人：资料卡 / 关于我 / 作品入口 / 我在想 / 我在看的。
 * 「我的日常」属于作品《one day》，在 /works；联系方式不在本页展示。
 */
const AboutMe = () => {
  const [photoToast, setPhotoToast] = useState(false);

  /** 点那张"加载失败"的假照片 */
  const handlePhotoClick = () => {
    setPhotoToast(true);
    window.setTimeout(() => setPhotoToast(false), 2200);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#333]">
      <SiteHeader active="关于我" />

      <main className="mx-auto w-full max-w-6xl px-3 pb-4 sm:px-4">
        {/* 面包屑 */}
        <nav aria-label="面包屑" className="pt-3 text-xs text-[#777]">
          {ABOUT_ME.breadcrumb.map((crumb, i) => (
            <span key={crumb}>
              {i > 0 && <span className="mx-1 text-[#bbb]">&gt;</span>}
              {i < ABOUT_ME.breadcrumb.length - 1 ? (
                <span className="pirate-link cursor-pointer">{crumb}</span>
              ) : (
                <span className="text-[#333]">{crumb}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="mt-2 text-xl font-black text-[#333] sm:text-2xl">
          {ABOUT_ME.title}
          <span className="pirate-highlight ml-2 px-1 text-sm">本人亲测是真的</span>
        </h1>

        {/* ① 站主资料卡 */}
        <section aria-label="站主资料卡" className="pirate-panel mt-2 p-2">
          <h2 className="mb-2 text-sm font-bold text-[#333]">{ABOUT_ME.profileTitle}</h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <dl className="min-w-0 flex-1 text-[13px] leading-[1.5]">
              {ABOUT_ME.profile.map((row) => (
                <div key={row.label} className="flex gap-2 border-b border-dashed border-[#ddd] py-1 last:border-b-0">
                  <dt className="shrink-0 text-[#777]">{row.label}：</dt>
                  <dd className="min-w-0 text-[#333]">
                    {/* value 支持分段：带 del 的段渲染成删除线 */}
                    {Array.isArray(row.value)
                      ? row.value.map((part, i) => (
                          <span
                            key={i}
                            className={part.del ? 'line-through decoration-[#000] decoration-2' : undefined}
                          >
                            {part.text}
                          </span>
                        ))
                      : row.value}
                  </dd>
                </div>
              ))}
            </dl>
            {/* 右侧：假的个人照片，做成网络打不开的样子（裂图图标 + 文件名）；点击有彩蛋 */}
            <button
              type="button"
              aria-label="个人照片（加载失败）"
              onClick={handlePhotoClick}
              className="mx-auto flex aspect-[3/4] w-32 shrink-0 flex-col items-center justify-center gap-1.5 border border-[#ccc] bg-[#fafafa] hover:border-[#999] sm:mx-0 sm:w-36"
            >
              <svg viewBox="0 0 48 48" className="h-9 w-9 text-[#aaa]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <rect x="6" y="10" width="36" height="28" rx="2" />
                <circle cx="17" cy="20" r="3" />
                <path d="M6 34l10-8 8 6 10-9 8 7" />
                <path d="M8 6l32 36" stroke="#999" />
              </svg>
              <p className="px-2 text-center text-[10px] leading-4 text-[#999]">个人照片.jpg</p>
              <p className="text-[10px] text-[#bbb]">（图片加载失败）</p>
            </button>
          </div>
        </section>

        {/* ② 关于我 */}
        <section aria-label="关于我" className="pirate-panel mt-2 p-2">
          <h2 className="mb-2 text-sm font-bold text-[#333]">{ABOUT_ME.introTitle}</h2>
          <blockquote className="border-l-2 border-[#f5a623] pl-2 text-xs leading-[1.6] whitespace-pre-line text-[#333]">
            <span className="pirate-highlight px-1">站长自白：</span>
            {ABOUT_ME.intro}
          </blockquote>
        </section>

        {/* ③ 我的作品（跳 /works 的入口卡片） */}
        <section aria-label="我的作品" className="pirate-panel mt-2 p-2">
          <h2 className="mb-2 text-sm font-bold text-[#333]">{ABOUT_ME.worksTitle}</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {ABOUT_ME.works.map((work) => (
              <Link
                key={work.title}
                to={work.to}
                className="flex min-h-[44px] flex-col justify-center gap-1 border border-[#ddd] bg-[#fafafa] p-2 no-underline hover:border-[#00e]"
              >
                <span className="text-sm font-black text-[#333]">{work.title}</span>
                <span className="text-xs leading-[1.5] text-[#777]">{work.desc}</span>
                <span className="pirate-link text-xs font-bold">{work.linkText}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ④ 我在想（三组，原文照录） */}
        <section aria-label="我在想" className="pirate-panel mt-2 p-2">
          <h2 className="mb-2 text-sm font-bold text-[#333]">{ABOUT_ME.thoughtsTitle}</h2>
          <div className="text-xs leading-[1.6]">
            {ABOUT_ME.thoughts.map((group) => (
              <div
                key={group.group}
                className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 border-b border-dashed border-[#ddd] py-1.5 last:border-b-0"
              >
                <span className="pirate-highlight shrink-0 px-1 font-bold">{group.group}：</span>
                <span className="min-w-0 text-[#333]">
                  {group.items.map((item, i) => (
                    <span key={item}>
                      {i > 0 && <span className="mx-1 text-[#bbb]">｜</span>}
                      {item}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ⑤ 我在看的（官方封面，复用 covers） */}
        <section aria-label="我在看的" className="pirate-panel mt-2 p-2">
          <h2 className="mb-2 text-sm font-bold text-[#333]">{ABOUT_ME.watchingTitle}</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="border border-[#ddd] bg-[#fafafa] p-2">
              <div className="mb-2 flex items-center gap-2">
                <span className="bg-[#f00] px-1.5 py-0.5 text-[10px] font-bold text-white">电影</span>
                <h3 className="text-xs font-bold text-[#333]">{MOVIE_LIST.title}</h3>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                {MOVIE_LIST.items.map((item) => (
                  <CoverCell key={item.name} item={item} />
                ))}
              </div>
            </div>
            <div className="border border-[#ddd] bg-[#fafafa] p-2">
              <div className="mb-2 flex items-center gap-2">
                <span className="bg-[#f00] px-1.5 py-0.5 text-[10px] font-bold text-white">书</span>
                <h3 className="text-xs font-bold text-[#333]">{BOOK_LIST.title}</h3>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                {BOOK_LIST.items.map((item) => (
                  <CoverCell key={item.name} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 中部小广告块（全站每页都有） */}
      <div className="mx-auto w-full max-w-6xl px-3 pb-4 sm:px-4">
        <AdBlocks />
      </div>

      {/* 两侧对联广告（带假 ×，仅超宽屏显示） */}
      <SideAds />

      <SiteFooter />

      {/* 点假照片后的彩蛋提示 */}
      {photoToast && (
        <div
          role="status"
          className="fixed left-1/2 top-1/3 z-50 -translate-x-1/2 whitespace-nowrap border border-[#f00] bg-[#ffff00] px-4 py-2 text-sm font-bold text-[#f00] shadow-lg"
        >
          别点了，已裂开
        </div>
      )}
    </div>
  );
};

export default AboutMe;
