import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ACTIVE_NAV, NAV_ITEMS, SITE } from './data';
import HeaderStars from './HeaderStars';
import { bgm } from '../../utils/bgm';
import { fireworks } from '../../utils/fireworks';

/** 主题持久化 key：'pirate'（默认）或 'cyber'，index.html 里的内联脚本会在首帧前读它 */
const THEME_KEY = 'zql-theme';

/**
 * 站头：深色站头条（老站特色）+ 星空背景 + 假搜索框 + 登录注册 + 导航 + 黄底红字滚动公告
 * active：当前高亮的导航项（如「纪录片」「关于我」「电影」）
 */
const SiteHeader = ({ active = ACTIVE_NAV }: { active?: string }) => {
  const [toast, setToast] = useState<string | null>(null);
  /* 首帧主题已由 index.html 内联脚本写到 <html data-theme>，这里直接读它做初始值 */
  const [theme, setTheme] = useState<'pirate' | 'cyber'>(() =>
    document.documentElement.dataset.theme === 'cyber' ? 'cyber' : 'pirate'
  );
  /* BGM 播放状态：与全站共用的 bgm 单例同步（/works 播放器也走它） */
  const [bgmPlaying, setBgmPlaying] = useState(bgm.playing);
  useEffect(() => bgm.subscribe(() => setBgmPlaying(bgm.playing)), []);

  /** 一键换装：切换 <html> 的 data-theme 并持久化 */
  const toggleTheme = () => {
    const next = theme === 'cyber' ? 'pirate' : 'cyber';
    document.documentElement.setAttribute('data-theme', next);
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch {
      /* localStorage 不可用时仅本次会话生效 */
    }
    setTheme(next);
  };

  /** 弹一个 2 秒自动消失的小提示 */
  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2000);
  };

  return (
    <header className="relative overflow-hidden border-b border-[#0f1522] bg-[#1a2233] text-white">
      {/* 星空装饰层：星星闪烁 + 流星，不拦截点击 */}
      <HeaderStars />

      {/* 第一行：logo / 搜索 / 登录注册 */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-3 py-3 sm:px-4">
        <Link to="/home" className="flex shrink-0 items-baseline gap-2 no-underline">
          <span className="pirate-logo-text text-2xl font-black tracking-wide sm:text-3xl">
            {SITE.name}
          </span>
          <span className="font-mono text-[10px] tracking-[0.25em] text-white/50">
            {SITE.domain}
          </span>
        </Link>
        {/* 搜索框：纯摆设，不可用；移动端独占一行（flex-basis 100%） */}
        <div className="order-last flex min-w-0 flex-1 basis-full sm:order-none sm:basis-auto sm:max-w-md">
          <input
            type="text"
            readOnly
            placeholder="搜索影片、演员、导演…"
            aria-label="搜索影片（本站搜索维护中）"
            className="h-9 w-full rounded-l-sm border border-[#2c3a55] bg-[#0d1117] px-3 text-sm text-white placeholder:text-white/40 focus:shadow-none"
          />
          <button
            type="button"
            onClick={() => showToast('搜索服务器跑路了，直接往下看吧')}
            className="h-9 shrink-0 rounded-r-sm border border-l-0 border-[#2c3a55] bg-[#2c3a55] px-4 text-sm text-white hover:text-[#ffd75e]"
          >
            搜索
          </button>
        </div>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          {/* 🎵 BGM：播放/暂停王菲《Do We Really Care》，与 /works 播放器状态同步 */}
          <button
            type="button"
            onClick={(e) => {
              // 从音符位置炸开一簇烟花
              const r = e.currentTarget.getBoundingClientRect();
              fireworks.burst(r.left + r.width / 2, r.top + r.height / 2);
              bgm.toggle();
            }}
            aria-label={bgmPlaying ? '暂停音乐' : '播放音乐'}
            aria-pressed={bgmPlaying}
            title={bgmPlaying ? '暂停音乐' : '播放音乐'}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#2c3a55] bg-[#0d1117] hover:border-[#ffd75e]"
          >
            {/* 播放时音符持续抖动，暂停时静止 */}
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className={`h-4 w-4 fill-current ${bgmPlaying ? 'pirate-note-shake text-[#ffd75e]' : 'text-white'}`}
            >
              <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
            </svg>
          </button>
          {/* 一键换装：盗版站风 ↔ 赛博朋克风，选择持久化到 localStorage */}
          <button
            type="button"
            onClick={toggleTheme}
            title="一键换装"
            className="theme-toggle flex h-9 items-center rounded-sm border border-[#2c3a55] bg-[#0d1117] px-3 text-sm font-bold text-[#ffd75e] hover:border-[#ffd75e]"
          >
            一键换装
          </button>
          <button
            type="button"
            onClick={() => showToast('本站无需注册，直接观看')}
            className="flex h-9 items-center px-3 text-sm text-white underline hover:text-[#ffd75e]"
          >
            登录
          </button>
          <button
            type="button"
            onClick={() => showToast('本站无需注册，直接观看')}
            className="flex h-9 items-center rounded-sm bg-[#ff4d4f] px-3 text-sm font-bold text-white hover:bg-[#ff6b6d]"
          >
            注册
          </button>
        </div>
      </div>

      {/* 第二行：导航，移动端可横向滑动；当前项黄底红字 */}
      <nav aria-label="站点导航" className="relative border-t border-[#0f1522] bg-[#141b2b]/80">
        <ul className="pirate-scrollbar-hide mx-auto flex w-full max-w-6xl items-center overflow-x-auto px-3 sm:px-4">
          {NAV_ITEMS.map((item) => {
            const isActive = item.label === active;
            return (
              <li key={item.label} className="shrink-0">
                {/* 全部导航项都是真链接，当前页用 aria-current 标记 */}
                <Link
                  to={item.to}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex min-h-[44px] items-center px-3 text-sm ${
                    isActive
                      ? 'bg-[#ffff00] font-bold text-[#f00]'
                      : 'text-white hover:text-[#ffd75e]'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 第三行：黄底红字滚动公告条（实底，会自然盖住星空层） */}
      <div className="relative overflow-hidden bg-[#ffff00] py-1">
        <div className="pirate-marquee whitespace-nowrap text-xs font-bold text-[#f00]">
          <span className="mx-8">{SITE.notice}</span>
          <span className="mx-8">{SITE.notice}</span>
          <span className="mx-8">{SITE.notice}</span>
        </div>
      </div>

      {/* 轻提示 toast */}
      {toast && (
        <div
          role="status"
          className="fixed left-1/2 top-16 z-50 -translate-x-1/2 whitespace-nowrap rounded-sm border border-[#f00] bg-[#ffff00] px-4 py-2 text-sm font-bold text-[#f00] shadow-lg"
        >
          {toast}
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
