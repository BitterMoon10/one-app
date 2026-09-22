import { useState } from 'react';
import SiteHeader from '../components/pirate/SiteHeader';
import Player from '../components/pirate/Player';
import MovieInfo from '../components/pirate/MovieInfo';
import EpisodeList from '../components/pirate/EpisodeList';
import RelatedWork from '../components/pirate/RelatedWork';
import Awards from '../components/pirate/Awards';
import Reviews from '../components/pirate/Reviews';
import DownloadArea from '../components/pirate/DownloadArea';
import FansubRecruit from '../components/pirate/FansubRecruit';
import Comments from '../components/pirate/Comments';
import SiteFooter from '../components/pirate/SiteFooter';
import SideAds from '../components/pirate/SideAds';
import AdBlocks from '../components/pirate/AdBlocks';
import { BREADCRUMB, EPISODES, TITLE_BADGES } from '../components/pirate/data';

/**
 * 作品页（/works）：盗版视频站戏仿页——把站主包装成一部「可以在线观看的纪录片」
 * 视觉：深色站头 + 浅灰白内容区 + 蓝链接 + 黄底红字高亮（2008~2015 中文盗版站风味）
 */
const Works = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#333]">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-3 pb-4 sm:px-4">
        {/* 面包屑 */}
        <nav aria-label="面包屑" className="pt-3 text-xs text-[#777]">
          {BREADCRUMB.map((crumb, i) => (
            <span key={crumb}>
              {i > 0 && <span className="mx-1 text-[#bbb]">&gt;</span>}
              {i < BREADCRUMB.length - 1 ? (
                <span className="pirate-link cursor-pointer">{crumb}</span>
              ) : (
                <span className="text-[#333]">{crumb}</span>
              )}
            </span>
          ))}
        </nav>

        {/* 标题 + 徽章 */}
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
          <h1 className="text-xl font-black text-[#333] sm:text-2xl">
            《one day》全集 <span className="pirate-highlight px-1">高清中字</span>
          </h1>
          <ul className="flex flex-wrap gap-1.5">
            {TITLE_BADGES.map((badge) => (
              <li
                key={badge}
                className="border border-[#ddd] bg-white px-1.5 py-0.5 text-[10px] text-[#777]"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>

        {/* 假播放器（页面核心） */}
        <Player episode={EPISODES[current]} episodeIndex={current} onSelectEpisode={setCurrent} />

        <MovieInfo />
        <EpisodeList current={current} onSelect={setCurrent}>
          {/* 广告块就放在选集这里 */}
          <AdBlocks />
        </EpisodeList>
        {/* 《one life》是另一部片子，独立成块，不与《one day》混在一处 */}
        <RelatedWork />
        <Awards />
        <Reviews />
        <DownloadArea />
        <FansubRecruit />
        <Comments />
      </main>

      {/* 两侧对联广告（带假 ×，仅超宽屏显示） */}
      <SideAds />

      <SiteFooter />
    </div>
  );
};

export default Works;
