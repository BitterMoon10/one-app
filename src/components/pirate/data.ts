/**
 * 盗版视频站戏仿页的全部文案数据，集中维护，组件里不要散落文案。
 */

/** 站点信息 */
export const SITE = {
  name: '牛马影院',
  domain: 'NIUMA.TV',
  icp: '沪ICP备00000804号',
  notice: '公告：本站资源仅供本人找对象使用，无任何诈骗信息，脱单即下线',
  disclaimer: '本站所有资源均系网友分享，仅供学习交流，请于24小时内删除，请支持正版！',
  copyright: 'Copyright © 2026 牛马影院',
  takedown: '如有版权问题请联系站长，我们将在24小时内删除',
};

/** 顶部导航：label 用于标记当前高亮项，to 为真实路径（全部是真链接，不再有死链） */
export const NAV_ITEMS = [
  { label: '首页', to: '/' },
  { label: '电影', to: '/movies' },
  { label: '电视剧', to: '/tv' },
  { label: '综艺', to: '/variety' },
  { label: '动漫', to: '/anime' },
  { label: '纪录片', to: '/works' },
  { label: '关于我', to: '/me' },
] as const;
export const ACTIVE_NAV = '纪录片';

/** 标题右侧的小徽章 */
export const TITLE_BADGES = ['TC清晰版', 'HD1280P', '抢先版', '2026', '中国大陆', '纪录片/日常/文艺'];

/** 面包屑 */
export const BREADCRUMB = ['首页', '纪录片', 'One Day'];

export interface Episode {
  id: number;
  title: string;
  /** 画面/缩略图，复用「One Day」十帧插画 */
  src: string;
  duration: string;
  /** 番外篇：不计入正片集数，单独标识 */
  special?: boolean;
}

/** 选集（正片 8 集 + 番外 2 集） */
export const EPISODES: Episode[] = [
  { id: 1, title: '第01集 清晨·闹钟', src: '/anime/real-01.jpg', duration: '10:24' },
  { id: 2, title: '第02集 客厅·喂猫', src: '/anime/real-02.jpg', duration: '10:24' },
  { id: 3, title: '第03集 工位·写码', src: '/anime/real-03.jpg', duration: '10:24' },
  { id: 4, title: '第04集 傍晚·广场', src: '/anime/real-04.jpg', duration: '10:24' },
  { id: 5, title: '第05集 健身房·哑铃', src: '/anime/real-05.jpg', duration: '10:24' },
  { id: 6, title: '第06集 归家·开门', src: '/anime/real-06.jpg', duration: '10:24' },
  { id: 7, title: '第07集 深夜·球赛', src: '/anime/real-07.jpg', duration: '10:24' },
  { id: 8, title: '第08集 床上·刷屏', src: '/anime/real-09.jpg', duration: '10:24' },
  { id: 9, title: '番外篇1 海边·发呆', src: '/anime/real-08.jpg', duration: '10:24', special: true },
  { id: 10, title: '番外篇2 山顶·落日', src: '/anime/real-10.jpg', duration: '10:24', special: true },
];

/** 影片信息区的字段 */
export const MOVIE_INFO = {
  rating: '9.9',
  ratingCount: '3人评价',
  rows: [
    { label: '导演', value: '生活' },
    { label: '主演', value: '程序员 / 一只美短起司猫' },
    { label: '类型', value: '纪录片 / 日常 / 文艺' },
    { label: '制片国家/地区', value: '中国大陆' },
    { label: '语言', value: '汉语普通话 / 英语（仅限代码）' },
    { label: '上映日期', value: '每天都在上映' },
    { label: '片长', value: '624 秒' },
    { label: '又名', value: '程序员的一天 / A Coder’s Day' },
  ],
  /** 剧情简介：站主原文，不得改写 */
  synopsis:
    '我是一个程序员，程序是0和1的世界，但我反对非黑即白。摄影、阅读、电影、旅行与思考，构成了我观察世界的窗口——就像宇宙中的星光，各自闪烁，又彼此相连。',
};

/** 片单：TA 反复观看的电影（cover 为官方海报，存于 public/covers/） */
export const MOVIE_LIST = {
  title: 'TA 反复观看的电影',
  tag: '片单',
  items: [
    { name: '美国往事', cover: '/covers/movie-01.png' },
    { name: '海上钢琴师', cover: '/covers/movie-02.jpg' },
    { name: '阳光灿烂的日子', cover: '/covers/movie-03.jpg' },
    { name: '星际穿越', cover: '/covers/movie-04.jpg' },
    { name: '指环王', cover: '/covers/movie-05.jpg' },
  ],
};

/** 书单：TA 床头常备的书（cover 为官方封面，存于 public/covers/） */
export const BOOK_LIST = {
  title: 'TA 床头常备（但不常看）的书',
  tag: '书单',
  items: [
    { name: '霍乱时期的爱情', cover: '/covers/book-01.jpg' },
    { name: '麦田里的守望者', cover: '/covers/book-02.jpg' },
    { name: '小王子', cover: '/covers/book-03.jpg' },
    { name: '月亮和六便士', cover: '/covers/book-04.jpg' },
    { name: '明朝那些事', cover: '/covers/book-05.jpg' },
  ],
};

export interface Review {
  username: string;
  /** 星级，满分 5 */
  stars: number;
  text: string;
  useful: number;
}

/** 豆瓣热评 · 网友评价（编造的戏仿评论，好评像脑残粉、差评像喷子） */
export const REVIEWS: Review[] = [
  { username: '跪着看完的', stars: 5, text: '镜头扫过床头柜上那部手机的那一刻，我哭了。这不是纪录片，这是我们每个人的一生。', useful: 1024 },
  { username: '猫片鉴定师', stars: 5, text: '猫一出场我就知道这片子稳了。豆瓣 9.9？我打 10 分，多那一分是让它骄傲的。', useful: 998 },
  { username: '退钱专业户', stars: 1, text: '烂片。一整天的流水账，主角啥也没干就喂了个猫。退钱。', useful: 2048 },
  { username: '已三刷', stars: 5, text: '我吹爆！链接已发给全部同事，谁不看谁是我敌人。片尾字幕出来的时候我起立鼓掌了。', useful: 888 },
  { username: '监控录像爱好者', stars: 1, text: '导演出来挨打。这也叫纪录片？我家门口监控都比这有剧情。', useful: 1536 },
  { username: '壁纸收割机', stars: 5, text: '每一帧都是壁纸，每一秒都是人生。导演的审美领先业界三十年——不，三百年。', useful: 666 },
  { username: '猫比主角好', stars: 1, text: '拍的什么玩意。主角演技还不如那只猫——猫起码是真的在吃饭。', useful: 999 },
  { username: '申遗办跑腿', stars: 5, text: '看完立刻把头像换成了猫。这片子改变了我的人生观，建议申遗。', useful: 512 },
  { username: '浪费时间协会', stars: 1, text: '看完感觉自己也被浪费了一天。一星给猫，剩下的负数星给导演的勇气。', useful: 777 },
  { username: '布洛芬依赖者', stars: 1, text: '太疼了，布洛芬都止不住的疼', useful: 1314 },
  { username: '血压飙升', stars: 1, text: '真他妈难看，看得我血压飙升。导演你睡得着吗？我睡不着。', useful: 666 },
];

/** 弹幕内容池：取自上面的热评 */
export const DANMAKU_POOL = REVIEWS.map((r) => r.text);

/** 资源下载区 */
export const DOWNLOADS = [
  { type: '迅雷下载', label: 'One Day.全集.HD1280P.国语中字.mp4.thunder', isLink: true },
  { type: 'BT 种子', label: 'One Day.torrent', isLink: true },
  { type: '磁力链接', label: 'magnet:?xt=urn:btih:5a1e9f3c7b2d4806a1f5e9c3b7d2408f6a1c9e3b', isLink: true },
  { type: '百度网盘', label: 'https://pan.baidu.com/s/1xSh4nL4n', extra: '提取码: 5h4n', isLink: true },
  { type: '解压密码', label: 'www.niuma.tv', isLink: false },
];

export interface CommentItem {
  username: string;
  time: string;
  text: string;
  support: number;
  oppose: number;
}

/** 评论区（盗版站/贴吧口吻） */
export const COMMENTS: CommentItem[] = [
  { username: '楼主好人', time: '2026-09-21 14:31', text: '楼主好人一生平安', support: 12, oppose: 0 },
  { username: '求种子专业户', time: '2026-09-22 14:32', text: '前排求种子，谢谢楼主', support: 12, oppose: 0 },
  { username: '游民星空', time: '2026-09-23 14:33', text: '画质不错，就是有点糊，枪版无疑', support: 12, oppose: 0 },
  { username: '山顶洞人', time: '2026-09-24 14:34', text: '已三连，感谢分享，楼主辛苦了', support: 12, oppose: 0 },
];

/** 播放器相关常量 */
export const PLAYER = {
  channelLogo: 'SLTV-1',
  watermark: '仅供学习交流，请于24小时内删除',
  totalSeconds: 624, // 00:10:24，与片长 624 秒呼应
  trialSeconds: 360, // 试看 6 分钟
  qualities: [
    { label: '标清(360P)', vip: false },
    { label: '高清(720P)', vip: true },
    { label: '超清(1080P)', vip: true },
    { label: '蓝光(4K)', vip: true },
  ],
  adText: '【广告】美女荷官在线发牌 >>',
};

/** 动漫页的猫片闪光广告 */
export const CAT_AD = {
  img: '/cat-ad.jpg',
  text: '性感猫片，在线观看',
  fakeCloseToast: '这个 × 太大了，一看就不靠谱',
  fakeButtonToast: '这个关闭按钮是摆设',
};

/** 广告位文案（戏仿，勿当真） */
export const ADS = {
  /** 播放器正下方 728×90 banner */
  banner: '🔥 澳门威尼斯人 🔥 全网最火爆 注册送 18 元 >>',
  /** 选集区下方的小广告块 */
  blocks: [
    { text: '同城交友 >>', style: 'red', blink: true, wechat: true },
    { text: '网络一线牵，珍惜这段缘', style: 'blue', blink: false, wechat: false },
    { text: '本站已加入 404 公益计划', style: 'yellow', blink: false, wechat: false },
  ],
  /** 热评区与下载区之间的文字广告链 */
  textLinks: ['最新电影下载', '高清无码', '迅雷会员', '手机看片神器'],
};

/** 相关推荐：另一部片子《one life》（与《one day》并列，独立成块展示） */
export const RELATED_WORK = {
  title: 'one life',
  subTitle: 'A Film About Time',
  studio: '牛马影业 出品',
  status: '筹拍中',
  rows: [
    { label: '导演', value: '缘分' },
    { label: '主演', value: '待定（缺女主）' },
    { label: '类型', value: '剧情 / 爱情 / 文艺' },
    { label: '制片国家/地区', value: '中国大陆' },
    { label: '上映日期', value: '待定' },
    { label: '片长', value: '未知' },
  ],
  /** 点击海报弹出的筹拍消息 */
  notice: {
    title: '《one life》',
    text: '筹拍中，缺女主',
    sub: '预计上映日期：待定',
  },
};

/** 页脚上方的友情链接（两排，老站标志性链接海洋） */
export const FRIEND_LINKS = [
  ['高清电影下载', '迅雷下载', 'BT种子搜索', '电影天堂', '飘花电影网', '西瓜影音', '吉吉影音', '天天看高清', '快播qvod', '暴风影音'],
  ['电子书下载', 'TXT小说网', '笔趣阁', '顶点小说', '言情小说吧', '喜马拉雅', '豆瓣电影', '时光网', 'Mtime', '游民星空'],
];

/** 获奖记录（戏仿奖项，虚线分隔的紧凑列表） */
export const AWARDS = [
  '2026 年牛马电影节 · 最佳纪录片（提名）',
  '第 38 届打工人金像奖 · 最佳男主角（猫）',
  '2026 喵斯卡 · 最佳配角（美短起司猫）',
  '豆瓣 · 年度最受期待续作（《one life》筹拍中）',
];

/** 字幕组招募（窄条，模拟字幕组招新） */
export const FANSUB = {
  title: '字幕组招募',
  credit: '本片由【牛马字幕组】听译制作',
  recruit: '招募：听译 / 校对 / 时间轴 / 压制',
  contact: 'QQ 群：888888（加群请注明“求片”）',
  toast: '该群已解散（假的）',
};

/** 资料卡的一行：value 可以是纯字符串，也可以是分段数组（某段带删除线） */
export type ProfileRow = {
  label: string;
  value: string | Array<{ text: string; del?: boolean }>;
};

/**
 * 关于我页（/me）：站主本人信息，全部来自站主原话，不得改写、不得编造。
 * 作品列表/封面复用上面的 MOVIE_LIST / BOOK_LIST。
 */
export const ABOUT_ME = {
  breadcrumb: ['首页', '关于我'],
  title: '站主：白开水',
  /** ① 站主资料卡 */
  profileTitle: '站主资料卡',
  profile: [
    { label: '网名', value: '白开水' },
    { label: '职业', value: '大模型公司里把工作外包给AI的Infra工程师' },
    { label: '家庭', value: '村里长大，有一妹妹，投行工作' },
    { label: '收入', value: '大概100w' },
    { label: '性格', value: 'INFP+天秤，如果你觉得我E，那就对了' },
    { label: '宠物', value: '一只美短起司猫' },
    {
      label: '爱好',
      value: [
        { text: '几乎所有体育运动（足球，篮球，羽毛球，台球，F1等），看电影，打游戏，' },
        { text: '阅读', del: true },
      ],
    },
    { label: '期望你', value: '爱笑' },
  ] as ProfileRow[],
  /** ② 关于我（站长自白：本人自述，借用 AI 话术自嘲；与作品页剧情简介不共用） */
  introTitle: '关于我',
  intro:
    '我是原生多模态：能看、能听、能写。只是视觉能力得借助眼镜才能正常使用，文本能力已经退化到提笔忘字的地步。我的 memory 很有选择性——正经的东西不咋记，乱七八糟的倒是印象深刻。我擅长 tool calls：人类进化的一大标志是学会使用工具，而我大概是个优秀的"非遗传人"。\n这个世界上每时每刻都有无数故事在发生，人与人之间就像宇宙中的星光，各自闪烁，又彼此相连。我希望我们有机会成为彼此观察世界的窗口。',
  /** ③ 我的作品：入口卡片，跳到 /works */
  worksTitle: '我的作品',
  works: [
    { title: '《one day》', desc: '一部关于一天的纪录片，10 集，高清中字', linkText: '在线观看 >>', to: '/works' },
    { title: '《one life》', desc: '筹拍中，缺女主', linkText: '去看看 >>', to: '/works' },
  ],
  /** ④ 我在想（站主原话，分三组照录） */
  thoughtsTitle: '我在想',
  thoughts: [
    {
      group: '人生',
      items: ['有遗憾的人生才称得上完美', '韵律来自于波动的曲线', '接受苦难经历，拒绝苦难叙事'],
    },
    {
      group: '世界',
      items: [
        '我眼前的是世界的全部，也是全部的世界',
        '与世界和解的本质是battle后的妥协，没有battle过的只能叫投降',
        '我们都是这个世界的幸存者',
      ],
    },
    {
      group: '自我',
      items: ['丰富了生物的多样性', '其他人类的竞品', '有点东西但不多'],
    },
  ],
  /** ⑤ 我在看的（电影/书封面复用 MOVIE_LIST / BOOK_LIST） */
  watchingTitle: '我在看的',
};

/** 首页（/）：盗版站首页——站长推荐 + 热门影片 + 新片速递 */
export const HOME_PAGE = {
  breadcrumb: ['首页'],
  title: '牛马影院 - 高清影视在线观看',
  /** 站长推荐（横幅，主推《one day》） */
  heroTitle: '站长推荐',
  hero: {
    img: '/anime/real-01.jpg',
    imgAlt: '《one day》剧照：清晨，程序员与他的猫',
    badge: '站长含泪推荐',
    title: '《one day》全集 高清中字',
    desc: '一部关于一天的纪录片：外包给AI的程序员，与一只美短起司猫。正片 8 集 + 番外 2 集，豆瓣 9.9（3人评价）。',
    linkText: '立即观看 >>',
    to: '/works',
  },
  /** 热门影片（十帧剧照做缩略图，标题复用 EPISODES） */
  hotTitle: '热门影片',
  hotSub: '本站目前只有一部片子，建议换着集数反复观看',
  /** 新片速递 */
  freshTitle: '新片速递',
  fresh: {
    title: '《one life》',
    desc: '筹拍中，缺女主。导演：缘分。预计上映日期：待定。',
    linkText: '了解筹拍进度 >>',
    to: '/works',
  },
};

/** 栏目页（/movies、/tv、/variety、/anime）的文案；电影复用 MOVIE_LIST */
export interface EmptySection {
  nav: string;
  breadcrumb: string[];
  title: string;
  headline: string;
  desc: string;
  linkText: string;
  to: string;
}

export const MOVIE_SECTION = {
  nav: '电影',
  breadcrumb: ['首页', '电影'],
  title: '电影频道',
  headline: 'TA 反复观看的电影',
  desc: '站长压箱底的 5 部，资源暂无，海报管够。真想看片，本站只有一部：',
  linkText: '《one day》全集 高清中字 >>',
  to: '/works',
};

export const EMPTY_SECTIONS: Record<'tv' | 'variety' | 'anime', EmptySection> = {
  tv: {
    nav: '电视剧',
    breadcrumb: ['首页', '电视剧'],
    title: '电视剧频道',
    headline: '本站的剧只有一部：程序员的一天，10 集，纪录片',
    desc: '别翻了，真没有第二部。站长一天只有 24 小时，拍不了连续剧。',
    linkText: '去看《one day》>>',
    to: '/works',
  },
  variety: {
    nav: '综艺',
    breadcrumb: ['首页', '综艺'],
    title: '综艺频道',
    headline: '综艺频道筹备中，站长自己还没活明白',
    desc: '等站长活明白了就开拍。在那之前，欢迎收看站长本人的日常纪录片：',
    linkText: '《one day》全集 >>',
    to: '/works',
  },
  anime: {
    nav: '动漫',
    breadcrumb: ['首页', '动漫'],
    title: '动漫频道',
    headline: '动漫频道筹备中，猫表示有兴趣出演',
    desc: '主演候选：一只美短起司猫。目前它只肯出演纪录片，片酬面议（小鱼干）：',
    linkText: '先看猫的纪录片 >>',
    to: '/works',
  },
};
