import { Link } from 'react-router-dom';
import SiteHeader from '../components/pirate/SiteHeader';
import SiteFooter from '../components/pirate/SiteFooter';
import SideAds from '../components/pirate/SideAds';
import AdBlocks from '../components/pirate/AdBlocks';
import CatAd from '../components/pirate/CatAd';
import {
  EMPTY_SECTIONS,
  EPISODES,
  HOME_PAGE,
  MOVIE_LIST,
  MOVIE_SECTION,
} from '../components/pirate/data';

/** 栏目页 key：与路由一一对应（/、/movies、/tv、/variety、/anime） */
export type SectionKey = 'home' | 'movies' | 'tv' | 'variety' | 'anime';

/** 面包屑：末项为当前页（纯文本），前面的项是蓝链接 */
const Breadcrumb = ({ items }: { items: string[] }) => (
  <nav aria-label="面包屑" className="pt-3 text-xs text-[#777]">
    {items.map((crumb, i) => (
      <span key={crumb}>
        {i > 0 && <span className="mx-1 text-[#bbb]">&gt;</span>}
        {i < items.length - 1 ? (
          <Link to="/" className="pirate-link">
            {crumb}
          </Link>
        ) : (
          <span className="text-[#333]">{crumb}</span>
        )}
      </span>
    ))}
  </nav>
);

/** 首页（/）：站长推荐横幅 + 热门影片网格 + 新片速递 */
const HomeSection = () => (
  <main className="mx-auto w-full max-w-6xl px-3 pb-4 sm:px-4">
    <Breadcrumb items={HOME_PAGE.breadcrumb} />
    <h1 className="mt-2 text-xl font-black text-[#333] sm:text-2xl">
      {HOME_PAGE.title}
      <span className="pirate-highlight ml-2 px-1 text-sm">更新快 无广告（假的）</span>
    </h1>

    {/* 站长推荐：横幅主推《one day》 */}
    <section aria-label="站长推荐" className="pirate-panel mt-2 p-2">
      <h2 className="mb-2 text-sm font-bold text-[#333]">{HOME_PAGE.heroTitle}</h2>
      <Link to={HOME_PAGE.hero.to} className="block no-underline">
        <div className="aspect-[3/2] w-full overflow-hidden border border-black/40 bg-[#eee] sm:aspect-[21/9]">
          <img
            src={HOME_PAGE.hero.img}
            alt={HOME_PAGE.hero.imgAlt}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-2">
          <span className="pirate-highlight px-1 text-xs font-bold">{HOME_PAGE.hero.badge}</span>
          <p className="mt-1 text-sm font-black text-[#333]">{HOME_PAGE.hero.title}</p>
          <p className="mt-1 text-xs leading-[1.6] text-[#777]">{HOME_PAGE.hero.desc}</p>
          <span className="pirate-link mt-1 inline-block text-xs font-bold">
            {HOME_PAGE.hero.linkText}
          </span>
        </div>
      </Link>
    </section>

    {/* 热门影片：十帧剧照，点击都跳 /works */}
    <section aria-label="热门影片" className="pirate-panel mt-2 p-2">
      <h2 className="mb-2 text-sm font-bold text-[#333]">
        {HOME_PAGE.hotTitle}
        <span className="ml-2 text-xs font-normal text-[#999]">{HOME_PAGE.hotSub}</span>
      </h2>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        {EPISODES.map((ep) => (
          <Link key={ep.id} to="/works" className="block min-w-0 no-underline">
            <div className="aspect-[3/2] w-full overflow-hidden border border-[#ddd] bg-[#eee]">
              <img
                src={ep.src}
                alt={ep.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="pirate-link mt-0.5 block truncate text-xs leading-5">
              {ep.title}
            </span>
          </Link>
        ))}
      </div>
    </section>

    {/* 新片速递：《one life》筹拍中 */}
    <section aria-label="新片速递" className="pirate-panel mt-2 p-2">
      <h2 className="mb-2 text-sm font-bold text-[#333]">{HOME_PAGE.freshTitle}</h2>
      <Link
        to={HOME_PAGE.fresh.to}
        className="flex min-h-[44px] flex-col justify-center gap-1 border border-[#ddd] bg-[#fafafa] p-2 no-underline hover:border-[#00e]"
      >
        <span className="text-sm font-black text-[#333]">
          {HOME_PAGE.fresh.title}
          <span className="pirate-highlight ml-2 px-1 text-xs">筹拍中，缺女主</span>
        </span>
        <span className="text-xs leading-[1.5] text-[#777]">{HOME_PAGE.fresh.desc}</span>
        <span className="pirate-link text-xs font-bold">{HOME_PAGE.fresh.linkText}</span>
      </Link>
    </section>
  </main>
);

/** 电影（/movies）：TA 反复观看的电影，5 部官方封面 */
const MoviesSection = () => (
  <main className="mx-auto w-full max-w-6xl px-3 pb-4 sm:px-4">
    <Breadcrumb items={MOVIE_SECTION.breadcrumb} />
    <h1 className="mt-2 text-xl font-black text-[#333] sm:text-2xl">{MOVIE_SECTION.title}</h1>

    <section aria-label="TA 反复观看的电影" className="pirate-panel mt-2 p-2">
      <h2 className="mb-2 text-sm font-bold text-[#333]">
        {MOVIE_SECTION.headline}
        <span className="ml-2 text-xs font-normal text-[#999]">{MOVIE_LIST.tag}</span>
      </h2>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
        {MOVIE_LIST.items.map((item) => (
          <div key={item.name} className="min-w-0">
            <div className="aspect-[2/3] w-full overflow-hidden border border-black/40 bg-[#eee]">
              <img
                src={item.cover}
                alt={`${item.name} 海报`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="mt-0.5 block truncate text-center text-[10px] leading-4 text-[#333]">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-2 border-t border-dashed border-[#ddd] pt-2 text-xs leading-[1.6] text-[#777]">
        {MOVIE_SECTION.desc}
        <Link to={MOVIE_SECTION.to} className="pirate-link font-bold">
          {MOVIE_SECTION.linkText}
        </Link>
      </p>
    </section>
  </main>
);

/** 暂无资源的栏目（/tv、/variety、/anime）：戏仿文案 + 一个真链接 */
const EmptySection = ({ sectionKey }: { sectionKey: 'tv' | 'variety' | 'anime' }) => {
  const data = EMPTY_SECTIONS[sectionKey];
  return (
    <main className="mx-auto w-full max-w-6xl px-3 pb-4 sm:px-4">
      <Breadcrumb items={data.breadcrumb} />
      <h1 className="mt-2 text-xl font-black text-[#333] sm:text-2xl">{data.title}</h1>

      <section aria-label={data.title} className="pirate-panel mt-2 p-2">
        <h2 className="mb-2 text-sm font-bold text-[#333]">
          <span className="pirate-highlight px-1">{data.headline}</span>
        </h2>
        <p className="text-xs leading-[1.6] text-[#777]">{data.desc}</p>
        <Link
          to={data.to}
          className="pirate-link mt-2 inline-flex min-h-[44px] items-center text-sm font-bold"
        >
          {data.linkText}
        </Link>
      </section>
    </main>
  );
};

/**
 * 栏目页：按 section key 渲染首页/电影/电视剧/综艺/动漫，
 * 沿用盗版站视觉语言（深色站头 + 白内容区 + 蓝链接 + 黄底红字 + 直角高密度小字）。
 */
const Section = ({ section }: { section: SectionKey }) => {
  const active =
    section === 'home'
      ? '首页'
      : section === 'movies'
        ? MOVIE_SECTION.nav
        : EMPTY_SECTIONS[section].nav;

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#333]">
      <SiteHeader active={active} />
      {section === 'home' && <HomeSection />}
      {section === 'movies' && <MoviesSection />}
      {(section === 'tv' || section === 'variety' || section === 'anime') && (
        <EmptySection sectionKey={section} />
      )}
      {/* 中部小广告块（全站每页都有）；动漫页额外加一条猫片闪光广告 */}
      <div className="mx-auto w-full max-w-6xl px-3 pb-4 sm:px-4">
        {section === 'anime' && <CatAd />}
        <AdBlocks />
      </div>

      {/* 两侧对联广告（带假 ×，仅超宽屏显示） */}
      <SideAds />

      <SiteFooter />
    </div>
  );
};

export default Section;
