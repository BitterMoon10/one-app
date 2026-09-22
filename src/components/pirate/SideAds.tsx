import { useState } from 'react';

/**
 * 两侧对联广告 —— 老盗版站标配：左右各一条竖排闪烁广告。
 * 每条广告上有 **3 个 ×：两个假的、一个真的**，真的那个才能关掉。
 * 只在 ≥1400px 的超宽屏显示，避免遮挡正文（移动端优先）。
 */
const SIDE_ADS = [
  {
    side: 'left' as const,
    text: '同城交友',
    bg: 'bg-[#c00]',
    color: 'text-[#ffff00]',
    name: '同城交友',
  },
  {
    side: 'right' as const,
    text: '深夜聊天',
    bg: 'bg-[#0066cc]',
    color: 'text-white',
    name: '深夜聊天',
  },
];

interface AdState {
  closed: boolean;
}

const SideAds = () => {
  const [toast, setToast] = useState('');
  const [left, setLeft] = useState<AdState>({ closed: false });
  const [right, setRight] = useState<AdState>({ closed: false });

  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(''), 2200);
  };

  const ads = [
    { cfg: SIDE_ADS[0], state: left, close: () => setLeft({ closed: true }) },
    { cfg: SIDE_ADS[1], state: right, close: () => setRight({ closed: true }) },
  ];

  return (
    <>
      {ads.map(({ cfg, state, close }) =>
        state.closed ? null : (
          <div
            key={cfg.side}
            className={`fixed top-1/2 z-40 hidden -translate-y-1/2 min-[1400px]:block ${
              cfg.side === 'left' ? 'left-0' : 'right-0'
            }`}
          >
            <div className={`relative w-[100px] ${cfg.bg} px-2 py-3 shadow-lg`}>
              {/* 假 × ①：带框（红框），靠正文一侧上角 */}
              <button
                type="button"
                aria-label={`关闭${cfg.name}广告（假的）`}
                onClick={() => showToast('该广告位已售出，无法关闭')}
                className={`absolute -top-2 ${cfg.side === 'left' ? '-right-2' : '-left-2'} flex h-4 w-4 items-center justify-center border-2 border-[#f00] bg-transparent text-[10px] leading-none text-[#f00] hover:bg-[#f00] hover:text-white`}
              >
                ×
              </button>
              {/* 假 × ②：带框（黄框），靠正文一侧下角 */}
              <button
                type="button"
                aria-label={`关闭${cfg.name}广告（这个也是假的）`}
                onClick={() => showToast('这个 × 也是假的，再找找')}
                className={`absolute -bottom-2 ${cfg.side === 'left' ? '-right-2' : '-left-2'} flex h-4 w-4 items-center justify-center border-2 border-[#ffff00] bg-transparent text-[10px] leading-none text-[#ffff00] hover:bg-[#ffff00] hover:text-[#f00]`}
              >
                ×
              </button>
              {/* 真 × ③：不带框（白色、更大），放在广告内侧上角 —— 不能放在负偏移处，否则会跑到屏幕外点不到 */}
              <button
                type="button"
                aria-label={`关闭${cfg.name}广告（真的）`}
                onClick={close}
                className={`absolute top-1 ${cfg.side === 'left' ? 'left-1' : 'right-1'} text-base font-bold leading-none text-white [text-shadow:0_0_3px_#000,0_0_6px_#000] hover:text-[#ffff00]`}
              >
                ×
              </button>

              <button
                type="button"
                onClick={() => showToast('祝你早安，午安和晚安')}
                className="block w-full"
              >
                <span
                  className={`pirate-blink mx-auto block text-sm font-black leading-6 ${cfg.color}`}
                  style={{ writingMode: 'vertical-rl', letterSpacing: '0.15em' }}
                >
                  {cfg.text}
                </span>
              </button>
            </div>
          </div>
        )
      )}

      {toast && (
        <div
          role="status"
          className="fixed left-1/2 top-1/3 z-50 -translate-x-1/2 whitespace-nowrap border border-[#f00] bg-[#ffff00] px-4 py-2 text-sm font-bold text-[#f00] shadow-lg"
        >
          {toast}
        </div>
      )}
    </>
  );
};

export default SideAds;
