import { useEffect, useRef, useState } from 'react';
import { ADS, DANMAKU_POOL, EPISODES, PLAYER, type Episode } from './data';
import { bgm } from '../../utils/bgm';

interface PlayerProps {
  /** 当前选中的集 */
  episode: Episode;
  episodeIndex: number;
  /** 点击进度条章节点也能切集 */
  onSelectEpisode: (index: number) => void;
}

interface DanmakuItem {
  id: number;
  text: string;
  top: number; // 百分比
  duration: number; // 秒
}

/** 秒数格式化成 H:MM:SS */
const formatTime = (total: number) => {
  const s = Math.max(0, Math.floor(total));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
};

let danmakuSeq = 0;

/**
 * 假播放器：枪版滤镜 + 台标水印 + 控制条 + 缓冲提示 + 浮动广告 + 弹幕 + 试看 VIP 遮罩
 */
const Player = ({ episode, episodeIndex, onSelectEpisode }: PlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [unlocked, setUnlocked] = useState(false); // 试看遮罩是否已解除
  const [trialLeft, setTrialLeft] = useState(PLAYER.trialSeconds); // 试看倒计时
  const [showVip, setShowVip] = useState(false); // 公众号弹窗
  const [playing, setPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0); // 假计时器（全片 24 小时制）
  const [qualityOpen, setQualityOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [bufferTip, setBufferTip] = useState<number | null>(null); // 缓冲百分比
  const [danmakus, setDanmakus] = useState<DanmakuItem[]>([]);
  const [adVisible, setAdVisible] = useState(true);
  const [adDodge, setAdDodge] = useState({ x: 0, y: 0 }); // 广告 × 的躲闪位移
  const [muted, setMuted] = useState(false); // BGM 静音开关

  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2000);
  };

  // 切集时把假计时器拨到对应章节起点
  useEffect(() => {
    setSeconds(Math.floor((episodeIndex * PLAYER.totalSeconds) / EPISODES.length));
  }, [episodeIndex]);

  // 试看/播放时的 BGM：王菲《Do We Really Care》，随播放/暂停联动。
  // 音频由全站共用的 bgm 单例托管（站头 🎵 按钮也走它），文件缺失时静默失败。
  useEffect(() => {
    if (playing) bgm.play();
    else bgm.pause();
  }, [playing]);

  // 静音开关同步到 bgm
  useEffect(() => {
    bgm.setMuted(muted);
  }, [muted]);

  // 试看倒计时：进入页面就开始走，走完停在 0
  useEffect(() => {
    const timer = window.setInterval(() => {
      setTrialLeft((v) => (v > 0 ? v - 1 : 0));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  // 假计时器：播放时每秒 +1
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setSeconds((v) => Math.min(v + 1, PLAYER.totalSeconds));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [playing]);

  // 缓冲提示：播放时每 8~15 秒随机冒出一条，1.5 秒后消失
  useEffect(() => {
    if (!playing) return;
    let hideTimer = 0;
    let nextTimer = 0;
    const schedule = () => {
      nextTimer = window.setTimeout(() => {
        setBufferTip(30 + Math.floor(Math.random() * 65));
        hideTimer = window.setTimeout(() => {
          setBufferTip(null);
          schedule();
        }, 1500);
      }, 8000 + Math.random() * 7000);
    };
    schedule();
    return () => {
      window.clearTimeout(nextTimer);
      window.clearTimeout(hideTimer);
    };
  }, [playing]);

  // 弹幕：播放时每 2.5~4 秒从右往左发一条
  useEffect(() => {
    if (!playing) return;
    let timer = 0;
    const spawn = () => {
      const item: DanmakuItem = {
        id: ++danmakuSeq,
        text: DANMAKU_POOL[Math.floor(Math.random() * DANMAKU_POOL.length)],
        top: 8 + Math.random() * 55,
        duration: 7 + Math.random() * 5,
      };
      setDanmakus((list) => [...list.slice(-15), item]);
      // 动画结束后清掉，避免无限堆积
      window.setTimeout(() => {
        setDanmakus((list) => list.filter((d) => d.id !== item.id));
      }, item.duration * 1000 + 500);
      timer = window.setTimeout(spawn, 2500 + Math.random() * 1500);
    };
    timer = window.setTimeout(spawn, 600);
    return () => window.clearTimeout(timer);
  }, [playing]);

  // 广告关掉 15 秒后又长出来（盗版站特色）
  useEffect(() => {
    if (adVisible) return;
    const timer = window.setTimeout(() => setAdVisible(true), 15000);
    return () => window.clearTimeout(timer);
  }, [adVisible]);

  /** 分享：假装复制了链接 */
  const handleShare = () => {
    try {
      void navigator.clipboard?.writeText(window.location.href);
    } catch {
      // 剪贴板不可用也无所谓，本来就是假的
    }
    showToast('复制链接成功');
  };

  /** 全屏：真的把播放器容器全屏 */
  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void containerRef.current?.requestFullscreen?.();
    }
  };

  /** 「我已关注，立即观看」：关弹窗、揭遮罩、开始播放 */
  const handleUnlocked = () => {
    setShowVip(false);
    setUnlocked(true);
    setPlaying(true);
  };

  const progress = Math.min(100, (seconds / PLAYER.totalSeconds) * 100);

  return (
    <section aria-label="在线播放器" className="mt-2">
      <div
        ref={containerRef}
        className="group relative aspect-video w-full select-none overflow-hidden border-2 border-[#222] bg-black"
      >
        {/* 画面：当前集插画 + 枪版滤镜 */}
        <img
          src={episode.src}
          alt={`${episode.title} 播放画面`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: 'contrast(1.08) saturate(0.9) brightness(0.96)' }}
          draggable={false}
        />
        {/* 噪点层：SVG feTurbulence，极淡 */}
        <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08] mix-blend-overlay">
          <filter id="pirate-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#pirate-noise)" />
        </svg>

        {/* 台标 */}
        <div className="absolute left-2 top-2 z-10 rounded bg-black/40 px-2 py-0.5 font-mono text-[10px] tracking-[0.2em] text-white/70 sm:text-xs">
          {PLAYER.channelLogo}
        </div>

        {/* 滚动水印 */}
        <div className="absolute right-0 top-2 z-10 w-1/2 overflow-hidden sm:w-2/5">
          <div className="pirate-watermark whitespace-nowrap text-[10px] text-white/40 sm:text-xs">
            {PLAYER.watermark}
          </div>
        </div>

        {/* 弹幕层 */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          {danmakus.map((d) => (
            <span
              key={d.id}
              className="pirate-danmaku absolute whitespace-nowrap text-xs text-white/60 sm:text-sm"
              style={{ top: `${d.top}%`, animationDuration: `${d.duration}s` }}
            >
              {d.text}
            </span>
          ))}
        </div>

        {/* 中央大播放按钮（未解锁时被遮罩盖住）：白色半透明圆 + 黑色三角 */}
        {!playing && unlocked && (
          <button
            type="button"
            aria-label="播放"
            onClick={() => setPlaying(true)}
            className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 transition hover:bg-white/90 sm:h-20 sm:w-20"
          >
            <span className="ml-1 inline-block h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-black sm:border-y-[16px] sm:border-l-[26px]" />
          </button>
        )}

        {/* 缓冲提示 */}
        {bufferTip !== null && (
          <div className="absolute bottom-16 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded bg-black/70 px-3 py-1 text-xs text-[#ffd75e]">
            正在缓冲… {bufferTip}%
          </div>
        )}

        {/* 播放器内 toast：z-index 必须高于 VIP 弹窗（z-50），否则会被弹窗盖住 */}
        {toast && (
          <div
            role="status"
            className="absolute left-1/2 top-10 z-[70] -translate-x-1/2 whitespace-nowrap rounded bg-black/85 px-3 py-1.5 text-xs text-[#ffd75e] sm:text-sm"
          >
            {toast}
          </div>
        )}

        {/* 浮动广告：黄底红字闪烁 + 难点的 ×（故意做得很小，盗版站特色） */}
        {adVisible && (
          <div
            className="pirate-blink absolute bottom-14 right-2 z-20 rounded-sm border border-[#f00] bg-[#ffff00] px-2 py-1 text-[10px] font-bold text-[#f00] sm:text-xs"
            style={{ transform: `translate(${adDodge.x}px, ${adDodge.y}px)` }}
          >
            <span className="cursor-pointer">{PLAYER.adText}</span>
            <button
              type="button"
              aria-label="关闭广告（很难点中）"
              onClick={() => setAdVisible(false)}
              onMouseEnter={() =>
                setAdDodge({ x: Math.floor(Math.random() * 21) - 10, y: Math.floor(Math.random() * 13) - 6 })
              }
              className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff4d4f] text-[9px] leading-none text-white"
            >
              ×
            </button>
          </div>
        )}

        {/* 底部控制条：桌面端 hover 播放器时由半透明变清晰，移动端常显 */}
        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-2 pb-1.5 pt-6 opacity-100 transition-opacity md:opacity-55 md:group-hover:opacity-100">
          {/* 进度条：10 个章节标记点 */}
          <div className="relative mb-1 h-4">
            <div className="absolute top-1/2 h-1.5 w-full -translate-y-1/2 rounded bg-white/20">
              <div className="h-full rounded bg-[#ff4d4f]" style={{ width: `${progress}%` }} />
            </div>
            {EPISODES.map((ep, i) => (
              <button
                key={ep.id}
                type="button"
                title={ep.title}
                aria-label={`跳到${ep.title}`}
                onClick={() => onSelectEpisode(i)}
                className="group/mark absolute top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                style={{ left: `${((i + 0.5) / EPISODES.length) * 100}%` }}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    i <= episodeIndex ? 'bg-[#ffd75e]' : 'bg-white/50'
                  } group-hover/mark:scale-150`}
                />
                <span className="pointer-events-none absolute -top-7 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-1.5 py-0.5 text-[10px] text-[#ffd75e] group-hover/mark:block">
                  {ep.title}
                </span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            {/* 播放/暂停 */}
            <button
              type="button"
              aria-label={playing ? '暂停' : '播放'}
              onClick={() => (unlocked ? setPlaying((v) => !v) : setShowVip(true))}
              className="flex h-11 w-11 items-center justify-center text-white hover:text-[#ffd75e]"
            >
              {playing ? (
                <span className="flex gap-1">
                  <span className="h-4 w-1.5 bg-current" />
                  <span className="h-4 w-1.5 bg-current" />
                </span>
              ) : (
                <span className="ml-0.5 inline-block h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-current" />
              )}
            </button>
            {/* 假计时器 / 总时长 */}
            <span className="whitespace-nowrap font-mono text-[10px] text-[#c9d1d9] sm:text-xs">
              {formatTime(seconds)} <span className="text-[#8b949e]">/ 00:10:24</span>
            </span>
            <span className="flex-1" />
            {/* 音量：控制 BGM 静音（这个是真的） */}
            <button
              type="button"
              aria-label={muted ? '取消静音' : '静音'}
              aria-pressed={muted}
              onClick={() => setMuted((v) => !v)}
              className="hidden h-11 w-11 items-center justify-center text-white hover:text-[#ffd75e] sm:flex"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z" />
              </svg>
            </button>
            {/* 画质选择 */}
            <div className="relative">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={qualityOpen}
                onClick={() => setQualityOpen((v) => !v)}
                className="flex h-11 items-center whitespace-nowrap px-2 text-xs text-white hover:text-[#ffd75e] sm:text-sm"
              >
                标清(360P)
              </button>
              {qualityOpen && (
                <ul
                  role="menu"
                  className="absolute bottom-12 right-0 w-32 rounded border border-[#232a3a] bg-[#161b27] py-1 shadow-xl"
                >
                  {PLAYER.qualities.map((q) =>
                    q.vip ? (
                      <li key={q.label} className="group/q relative">
                        <button
                          type="button"
                          onClick={() => showToast('VIP 专享，请开通 VIP')}
                          className="flex w-full cursor-not-allowed items-center justify-between px-3 py-2 text-left text-xs text-[#8b949e]/60"
                        >
                          {q.label}
                          <span className="text-[#ff4d4f]">VIP</span>
                        </button>
                        <span className="pointer-events-none absolute bottom-full right-0 mb-1 hidden whitespace-nowrap rounded bg-black/90 px-2 py-1 text-[10px] text-[#ffd75e] group-hover/q:block">
                          VIP 专享，请开通 VIP
                        </span>
                      </li>
                    ) : (
                      <li key={q.label}>
                        <button
                          type="button"
                          onClick={() => setQualityOpen(false)}
                          className="w-full px-3 py-2 text-left text-xs text-[#ffd75e]"
                        >
                          {q.label} ✓
                        </button>
                      </li>
                    ),
                  )}
                </ul>
              )}
            </div>
            {/* 分享 */}
            <button
              type="button"
              aria-label="分享"
              onClick={handleShare}
              className="flex h-11 items-center px-2 text-xs text-white hover:text-[#ffd75e] sm:text-sm"
            >
              分享
            </button>
            {/* 全屏 */}
            <button
              type="button"
              aria-label="全屏"
              onClick={handleFullscreen}
              className="flex h-11 w-11 items-center justify-center text-white hover:text-[#ffd75e]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" aria-hidden>
                <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
              </svg>
            </button>
          </div>
        </div>

        {/* 试看遮罩：首次进入盖住整个播放器 */}
        {!unlocked && (
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/80 px-4 text-center">
            <p className="text-2xl font-black tracking-widest text-[#ffd75e] sm:text-4xl">试看 6 分钟</p>
            <p className="mt-2 font-mono text-sm text-[#c9d1d9] sm:text-base">
              剩余试看时间 {formatTime(trialLeft)}
            </p>
            <button
              type="button"
              onClick={() => setShowVip(true)}
              className="mt-4 flex min-h-[44px] items-center rounded bg-[#ff4d4f] px-6 text-sm font-bold text-white hover:bg-[#ff6b6d] sm:text-base"
            >
              开通 VIP 观看完整版
            </button>
            <p className="mt-3 text-[10px] text-[#8b949e] sm:text-xs">VIP 尊享蓝光画质 · 免广告 · 全集抢先看</p>
          </div>
        )}
      </div>

      {/* 728×90 banner 广告位：黄底红字闪烁，移动端自适应宽度 */}
      <button
        type="button"
        onClick={() => showToast('广告也敢点？年轻人耗子尾汁')}
        className="pirate-blink mx-auto mt-2 flex h-[90px] w-full max-w-[728px] items-center justify-center border border-[#f00] bg-[#ffff00] px-2 text-center text-sm font-black text-[#f00] sm:text-lg"
      >
        {ADS.banner}
      </button>

      {/* 线路提示（盗版站标配） */}
      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#777]">
        <span className="pirate-highlight px-1 font-bold">提示：播放卡顿请切换线路</span>
        {['线路①', '线路②', '线路③', '备用线路'].map((line, i) => (
          <button
            key={line}
            type="button"
            onClick={() => showToast(i === 0 ? '当前已是最优线路（并没有）' : '切换失败，该线路已被查封')}
            className={`min-h-[32px] underline ${i === 0 ? 'pirate-highlight px-1 font-bold' : 'pirate-link'}`}
          >
            {line}
          </button>
        ))}
      </div>

      {/* VIP 开通弹窗：假定价面板，不含任何真实联系方式 */}
      {showVip && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="开通 VIP"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setShowVip(false)}
        >
          <div
            className="w-full max-w-xs border border-[#ddd] bg-white p-5 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-lg font-bold text-[#f00]">开通 VIP</p>
            <p className="mt-1 text-[11px] text-[#777]">本站片源均为枪版，VIP 也救不了画质</p>
            <ul className="mt-3 space-y-1.5 text-left text-xs">
              {[
                ['月度会员', '¥25'],
                ['年度会员', '¥198'],
                ['终身会员', '¥998'],
              ].map(([name, price], i) => (
                <li
                  key={name}
                  className={`flex items-center justify-between border px-2 py-1.5 ${
                    i === 1 ? 'border-[#f00] bg-[#fff5f5]' : 'border-[#ddd]'
                  }`}
                >
                  <span className="text-[#333]">
                    {name}
                    {i === 1 && <span className="ml-1 text-[10px] text-[#f00]">（推荐）</span>}
                  </span>
                  <span className="font-mono font-bold text-[#f00]">{price}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => showToast('上网谨慎，不要付费 —— 本站是戏仿页面，没有真的 VIP')}
              className="mt-4 flex min-h-[44px] w-full items-center justify-center bg-[#ff4d4f] text-sm font-bold text-white hover:bg-[#ff6b6d]"
            >
              立即开通
            </button>
            <button
              type="button"
              onClick={handleUnlocked}
              className="mt-2 flex min-h-[44px] w-full items-center justify-center border border-[#ddd] text-sm text-[#333] hover:bg-[#f5f5f5]"
            >
              先试看，稍后再说
            </button>
            <button
              type="button"
              onClick={() => setShowVip(false)}
              className="mt-2 flex min-h-[44px] w-full items-center justify-center text-xs text-[#777] underline hover:text-[#333]"
            >
              我再想想
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Player;
