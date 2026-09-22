import { useState } from 'react';
import { CAT_AD } from './data';

/**
 * 猫片闪光广告（仅动漫页）：性感猫片在线观看。
 * 两个重叠的 × —— 大的是假的，下面那个小的才是真的能关掉；
 * 另有一个假的【关闭】按钮。整体带闪烁动效。
 */
const CatAd = () => {
  const [closed, setClosed] = useState(false);
  const [toast, setToast] = useState('');

  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(''), 2200);
  };

  if (closed) return null;

  return (
    <>
      <div aria-label="猫片广告" className="pirate-blink relative mt-2 overflow-hidden border-2 border-[#f00]">
        <img
          src={CAT_AD.img}
          alt={CAT_AD.text}
          className="block h-44 w-full object-cover sm:h-56"
        />
        {/* 闪光彩条 + 文案 */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/25">
          <span className="text-2xl font-black tracking-wide text-[#ffff00] [text-shadow:0_0_6px_#f00,0_0_14px_#f00] sm:text-4xl">
            {CAT_AD.text}
          </span>
        </div>

        {/* 大的假 × */}
        <button
          type="button"
          aria-label="关闭猫片广告（假的）"
          onClick={() => showToast(CAT_AD.fakeCloseToast)}
          className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center border-2 border-[#f00] bg-black/70 text-xl font-black leading-none text-[#f00]"
        >
          ×
        </button>

        {/* 小的真 ×：压在大的下方，这个才能关掉 */}
        <button
          type="button"
          aria-label="关闭猫片广告（真的）"
          onClick={() => setClosed(true)}
          className="absolute right-5 top-10 flex h-5 w-5 items-center justify-center bg-white text-[11px] font-bold leading-none text-[#000]"
        >
          ×
        </button>

        {/* 假的【关闭】按钮 */}
        <button
          type="button"
          onClick={() => showToast(CAT_AD.fakeButtonToast)}
          className="absolute bottom-2 right-2 border border-white/70 bg-black/60 px-2 py-0.5 text-[11px] leading-4 text-white"
        >
          关闭
        </button>
      </div>

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

export default CatAd;
