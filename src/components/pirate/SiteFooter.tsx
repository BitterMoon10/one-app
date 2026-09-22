import { useState } from 'react';
import { FRIEND_LINKS, SITE } from './data';

/**
 * 页脚：友情链接链接海洋 + 黄底红字免责声明 + 假版权/备案号 + 删除承诺
 */
const SiteFooter = () => {
  const [toast, setToast] = useState(false);

  /** 友情链接全是死链：弹戏仿提示 */
  const handleLinkClick = () => {
    setToast(true);
    window.setTimeout(() => setToast(false), 2200);
  };

  return (
    <footer className="mt-4 border-t border-[#ddd] bg-[#f0f0f0] px-3 py-4 text-center">
      {/* 友情链接：两排蓝色下划线小字，老站标志性链接海洋 */}
      <div className="mx-auto max-w-4xl text-xs leading-[1.8]">
        <p className="text-left text-[#999]">友情链接：</p>
        {FRIEND_LINKS.map((row, i) => (
          <p key={i} className="text-left">
            {row.map((link, j) => (
              <span key={link}>
                {j > 0 && <span className="mx-1 text-[#ccc]">|</span>}
                <button type="button" onClick={handleLinkClick} className="pirate-link">
                  {link}
                </button>
              </span>
            ))}
          </p>
        ))}
      </div>

      <p className="mt-3 text-xs leading-6">
        {/* 免责声明：在「请支持正版」前断行，避免移动端出现孤字成行 */}
        <span className="pirate-highlight px-1 font-bold">
          {SITE.disclaimer.split('，请支持正版')[0]}，
          <br className="sm:hidden" />
          请支持正版！
        </span>
      </p>
      <p className="mt-2 text-xs leading-6 text-[#777]">
        {SITE.copyright}
        <span className="mx-2 text-[#ccc]">|</span>
        <span className="font-mono">{SITE.icp}</span>
      </p>
      <p className="mt-1 text-[11px] leading-5 text-[#999]">{SITE.takedown}</p>

      {toast && (
        <div
          role="status"
          className="fixed left-1/2 top-1/3 z-50 -translate-x-1/2 whitespace-nowrap border border-[#f00] bg-[#ffff00] px-4 py-2 text-sm font-bold text-[#f00] shadow-lg"
        >
          该站点已失联（假的）
        </div>
      )}
    </footer>
  );
};

export default SiteFooter;
