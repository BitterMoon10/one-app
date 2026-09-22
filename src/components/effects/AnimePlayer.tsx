import { useEffect, useState } from 'react';
import { Pause, Play } from 'lucide-react';

const FRAMES = [
  '/anime/real-01.jpg',
  '/anime/real-02.jpg',
  '/anime/real-03.jpg',
  '/anime/real-04.jpg',
  '/anime/real-05.jpg',
  '/anime/real-06.jpg',
  '/anime/real-07.jpg',
  '/anime/real-08.jpg',
  '/anime/real-09.jpg',
  '/anime/real-10.jpg',
];

const FRAME_MS = 1300; // 每帧停留
const END_DWELL_MS = 2200; // 末帧停留后循环重播

// 每帧水平焦点（%）：移动端竖屏 cover 优先把人物与猫/关键道具放进安全区
const FOCUS_X = [84, 50, 38, 43, 45, 38, 45, 46, 24, 48];
const OBJECT_POSITION = FOCUS_X.map((focusX) => `${focusX}% center`);

// 每帧的英文小句（左下角，衬线斜体）
const CAPTIONS = [
  'Light spills in. The alarm sings.',
  'The feeder hums. The cat waits.',
  'Three desks. One focus.',
  'Golden hour. The city unwinds.',
  'A little stronger every day.',
  'Home. Lights on. Shoes off.',
  'Game on. Phone in hand.',
  'Be small. Be free.',
  'One more scroll. Then dream.',
  'Look up. The stars are patient.',
];

// 深色帧（夜景）用亮色小句
const DARK_FRAME = [false, false, false, false, false, false, false, false, true, true];

/** 全屏逐帧线稿播放器：自动循环、点击暂停/继续、进度点 */
const AnimePlayer = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [done, setDone] = useState(false);
  /** 中央暂停图标只在「点击画面暂停」时显示；进度点跳帧的停留不显示 */
  const [overlayPause, setOverlayPause] = useState(false);

  // 预加载全部帧
  useEffect(() => {
    FRAMES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // 自动逐帧推进
  useEffect(() => {
    if (!playing || done) return;
    const timer = window.setInterval(() => {
      setIndex((i) => {
        if (i >= FRAMES.length - 1) {
          setDone(true);
          return i;
        }
        return i + 1;
      });
    }, FRAME_MS);
    return () => window.clearInterval(timer);
  }, [playing, done]);

  // 末帧停留后从头循环
  useEffect(() => {
    if (!done) return;
    const timer = window.setTimeout(() => {
      setIndex(0);
      setDone(false);
    }, END_DWELL_MS);
    return () => window.clearTimeout(timer);
  }, [done]);

  const togglePlay = () => {
    if (done) return;
    setPlaying((p) => {
      const next = !p;
      setOverlayPause(!next); // 仅画面点击造成的暂停才显示中央图标
      return next;
    });
  };

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        background:
          'radial-gradient(ellipse 120% 90% at 50% 42%, #12121c 0%, #0a0a12 55%, #060609 100%)',
      }}
      onClick={togglePlay}
      role="application"
      aria-label="程序员的一天漫画播放器"
    >
      {/* 当前帧：宣纸水墨铺满视口（key 重挂载触发淡入） */}
      <img
        key={index}
        src={FRAMES[index]}
        alt={`程序员的一天 第 ${index + 1} 帧`}
        className="animate-fade-in absolute inset-0 h-full w-full select-none object-cover"
        style={{ objectPosition: OBJECT_POSITION[index] }}
        draggable={false}
      />

      {/* 暂停指示（仅点击画面暂停时显示） */}
      {!playing && overlayPause && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/20 bg-black/40 backdrop-blur-md">
            <Pause className="h-7 w-7 text-white/85" />
          </div>
        </div>
      )}

      {/* 左下：英文小句（衬线斜体） */}
      <div
        className={`anime-caption absolute bottom-7 left-8 select-none italic tracking-[0.18em] transition-colors duration-500 sm:left-12 ${
          DARK_FRAME[index] ? 'text-[#d8d2c0]/85' : 'text-[#7a7566]'
        }`}
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: 'clamp(11px, 1.6vmin, 15px)',
        }}
      >
        {CAPTIONS[index]}
      </div>

      {/* 移动端安全区内的播放状态与进度控件：每个按钮至少 44px 高 */}
      <div className="anime-controls absolute bottom-4 right-4 flex flex-col items-center gap-1.5 rounded-2xl bg-black/35 px-3 py-2.5 backdrop-blur-md sm:bottom-6 sm:right-6 sm:gap-2.5 sm:rounded-full sm:px-5 sm:py-2.5">
        <div className="flex items-center gap-2 text-white/75">
          <button
            type="button"
            aria-label={playing ? '暂停播放' : '继续播放'}
            aria-pressed={!playing}
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-white/85 transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <span className="text-xs tracking-[0.25em]" aria-live="polite">
            {index + 1} / {FRAMES.length}
          </span>
        </div>
        <div className="flex items-center gap-0.5 sm:gap-1">
          {FRAMES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`跳到第 ${i + 1} 帧`}
              title={`第 ${i + 1} 帧`}
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
                setPlaying(false);
                setOverlayPause(false);
                setDone(false);
              }}
              className="flex min-h-11 min-w-7 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span
                aria-hidden="true"
                className={`block h-1.5 rounded-full transition-all duration-500 hover:bg-white/70 ${
                  i === index
                    ? 'w-6 bg-white/85'
                    : i < index
                      ? 'w-1.5 bg-white/45'
                      : 'w-1.5 bg-white/20'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimePlayer;
