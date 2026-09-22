import { useState, type ReactNode } from 'react';
import { EPISODES } from './data';

interface EpisodeListProps {
  current: number;
  onSelect: (index: number) => void;
  /** 选集面板底部要额外渲染的内容（作品页放全站广告块） */
  children?: ReactNode;
}

/**
 * 选集区：10 张缩略图卡片 + 正序/倒序切换
 * 底部通过 children 插槽接入广告块（作品页要求广告块就在选集这里）
 */
const EpisodeList = ({ current, onSelect, children }: EpisodeListProps) => {
  const [desc, setDesc] = useState(false);
  const list = desc ? [...EPISODES].reverse() : EPISODES;

  return (
    <section aria-label="选集" className="pirate-panel mt-2 p-2">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-sm font-bold text-[#333]">
          选集<span className="ml-1 text-sm font-normal text-[#777]">（正片8集 + 番外2集）</span>
        </h2>
        <div className="flex overflow-hidden border border-[#ddd] text-xs">
          {(['正序', '倒序'] as const).map((label) => {
            const active = (label === '倒序') === desc;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={active}
                onClick={() => setDesc(label === '倒序')}
                className={`flex min-h-[36px] items-center px-3 ${
                  active ? 'bg-[#ffff00] font-bold text-[#f00]' : 'bg-white text-[#777] hover:text-[#333]'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {list.map((ep) => {
          const index = ep.id - 1;
          const active = index === current;
          return (
            <li key={ep.id}>
              <button
                type="button"
                aria-current={active ? 'true' : undefined}
                onClick={() => onSelect(index)}
                className={`block w-full overflow-hidden border text-left transition ${
                  active
                    ? 'border-[#f00] ring-1 ring-[#f00]'
                    : ep.special
                      ? 'border-dashed border-[#00e] hover:border-[#f00]'
                      : 'border-[#ddd] hover:border-[#00e]'
                }`}
              >
                <span className="relative block aspect-video w-full overflow-hidden bg-[#eee]">
                  <img
                    src={ep.src}
                    alt={`${ep.title} 缩略图`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ filter: 'contrast(1.08) saturate(0.9) brightness(0.96)' }}
                  />
                  {ep.special && (
                    <span className="absolute left-1 top-1 bg-[#00e] px-1 text-[10px] font-bold text-white">
                      番外
                    </span>
                  )}
                  <span className="absolute bottom-1 right-1 rounded-sm bg-black/75 px-1 font-mono text-[10px] text-white">
                    {ep.duration}
                  </span>
                  {active && (
                    <span className="absolute right-1 top-1 rounded-sm bg-[#ffff00] px-1 text-[10px] font-bold text-[#f00]">
                      播放中
                    </span>
                  )}
                </span>
                <span
                  className={`block truncate px-1.5 py-1.5 text-xs ${
                    active ? 'bg-[#ffff00] font-bold text-[#f00]' : 'text-[#333]'
                  }`}
                >
                  {ep.title}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* 选集面板底部插槽：作品页把广告块放在这里 */}
      {children}
    </section>
  );
};

export default EpisodeList;
