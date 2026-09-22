import { useState } from 'react';
import { DOWNLOADS } from './data';

/**
 * 资源下载区：经典 #00e 蓝链接 + 下划线 + hover 变红，点击一律弹「该资源已被举报下架」
 */
const DownloadArea = () => {
  const [toast, setToast] = useState(false);

  const handleClick = () => {
    setToast(true);
    window.setTimeout(() => setToast(false), 2200);
  };

  return (
    <section aria-label="资源下载" className="pirate-panel mt-2 p-2">
      <h2 className="mb-1 text-sm font-bold text-[#333]">
        资源下载
        <span className="pirate-highlight ml-2 px-1 text-xs font-bold">迅雷会员极速通道已开启</span>
      </h2>
      <p className="mb-3 text-[11px] text-[#777]">右键另存为无效，请使用下载工具（并没有用）</p>

      <ul className="divide-y divide-[#eee] border border-[#ddd] bg-white">
        {DOWNLOADS.map((item) => (
          <li key={item.type} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 px-2 py-1.5 text-xs">
            <span className="pirate-highlight shrink-0 px-1.5 py-0.5 text-[11px] font-bold">
              {item.type}
            </span>
            {item.isLink ? (
              <button
                type="button"
                onClick={handleClick}
                className="pirate-link min-h-[32px] min-w-0 break-all text-left font-mono"
              >
                {item.label}
              </button>
            ) : (
              <span className="min-h-[32px] min-w-0 break-all font-mono text-[#333]">{item.label}</span>
            )}
            {item.extra && <span className="font-mono text-xs text-[#777]">{item.extra}</span>}
          </li>
        ))}
      </ul>

      {toast && (
        <div
          role="status"
          className="fixed left-1/2 top-1/3 z-50 -translate-x-1/2 whitespace-nowrap border border-[#f00] bg-[#ffff00] px-4 py-2 text-sm font-bold text-[#f00] shadow-lg"
        >
          该资源已被举报下架（假的，点我试试）
        </div>
      )}
    </section>
  );
};

export default DownloadArea;
