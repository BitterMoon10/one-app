import { useState } from 'react';
import { ADS } from './data';

/** 小广告块的配色：红底黄字 / 蓝底白字 / 黄底红字 */
const AD_STYLE: Record<string, string> = {
  red: 'bg-[#f00] text-[#ffff00]',
  blue: 'bg-[#00e] text-white',
  yellow: 'bg-[#ffff00] text-[#f00] border border-[#f00]',
};

/**
 * 中部小广告块：红底黄字 / 蓝底白字 / 黄底红字，第一个带闪烁且可弹出微信二维码。
 * 全站每个页面都会挂载。
 */
const AdBlocks = () => {
  const [toast, setToast] = useState(false);
  const [qr, setQr] = useState(false);

  /** 点广告：弹个戏仿提示 */
  const handleAdClick = () => {
    setToast(true);
    window.setTimeout(() => setToast(false), 2200);
  };

  /** 点「同城交友」：弹微信二维码 */
  const handleAdBlockClick = (wechat?: boolean) => {
    if (wechat) setQr(true);
    else handleAdClick();
  };

  return (
    <>
      <div aria-label="广告位" className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {ADS.blocks.map((ad) => (
          <button
            key={ad.text}
            type="button"
            onClick={() => handleAdBlockClick(ad.wechat)}
            className={`flex h-14 items-center justify-center px-2 text-center text-sm font-black ${AD_STYLE[ad.style]} ${
              ad.blink ? 'pirate-blink' : ''
            }`}
          >
            {ad.text}
          </button>
        ))}
      </div>

      {toast && (
        <div
          role="status"
          className="fixed left-1/2 top-1/3 z-50 -translate-x-1/2 whitespace-nowrap border border-[#f00] bg-[#ffff00] px-4 py-2 text-sm font-bold text-[#f00] shadow-lg"
        >
          祝你早安，午安和晚安
        </div>
      )}

      {/* 「同城交友」点击后弹出微信二维码 */}
      {qr && (
        <div
          role="dialog"
          aria-label="同城交友微信二维码"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setQr(false)}
        >
          <div
            className="w-[min(90vw,320px)] border-2 border-[#f00] bg-white p-3 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm font-black text-[#f00]">同城交友</p>
            <img src="/wechat-qr.jpg" alt="微信二维码" className="mx-auto mt-2 w-full" />
            <p className="mt-2 text-xs text-[#333]">扫码加微信，备注「同城交友」</p>
            <button
              type="button"
              onClick={() => setQr(false)}
              className="mt-2 min-h-[44px] border border-[#ddd] px-4 text-xs text-[#333] hover:bg-[#f5f5f5]"
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdBlocks;
