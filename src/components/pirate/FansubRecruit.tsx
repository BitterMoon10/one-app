import { useState } from 'react';
import { FANSUB } from './data';

/**
 * 字幕组招募：窄条，模拟字幕组招新；QQ 群为蓝链接，点击弹「该群已解散（假的）」
 */
const FansubRecruit = () => {
  const [toast, setToast] = useState(false);

  const handleClick = () => {
    setToast(true);
    window.setTimeout(() => setToast(false), 2200);
  };

  return (
    <section aria-label="字幕组招募" className="pirate-panel mt-2 p-2">
      <h2 className="mb-1 text-sm font-bold text-[#333]">{FANSUB.title}</h2>
      <div className="text-xs leading-[1.6] text-[#333]">
        <p>{FANSUB.credit}</p>
        <p>
          <span className="pirate-highlight inline-block px-1 font-bold">{FANSUB.recruit}</span>
        </p>
        <p>
          <button
            type="button"
            onClick={handleClick}
            className="pirate-link inline-flex min-h-[44px] items-center text-left sm:min-h-0"
          >
            {FANSUB.contact}
          </button>
        </p>
      </div>

      {toast && (
        <div
          role="status"
          className="fixed left-1/2 top-1/3 z-50 -translate-x-1/2 whitespace-nowrap border border-[#f00] bg-[#ffff00] px-4 py-2 text-sm font-bold text-[#f00] shadow-lg"
        >
          {FANSUB.toast}
        </div>
      )}
    </section>
  );
};

export default FansubRecruit;
