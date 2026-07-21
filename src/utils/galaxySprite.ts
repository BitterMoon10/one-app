/**
 * 星系贴图生成器。
 *
 * 使用 NASA/哈勃公有领域真实星系照片（public/ 下）：
 * - galaxy-m51.jpg：涡状星系 M51（含伴星系，粉色电离氢区）
 * - galaxy-m101.jpg：风车星系 M101（正面旋涡）
 * - galaxy-m104.jpg：草帽星系 M104（侧视）
 * - galaxy-ngc1300.jpg：棒旋星系 NGC 1300
 *
 * 生成流程：随机旋转/翻转/缩放绘制照片 -> 亮度柔边抠图
 * （保留旋臂的微弱发光与背景亮星）-> 缓存为 dataURL。
 * 同一 seed 结果稳定。星系天然色彩与星空背景契合，无需校色。
 */

const SIZE = 320;
// 19 张真实星系照片（NASA/Hubble 公有领域），seed 按池长取模映射；
// 每次爆炸的 4 颗总是 4 张不同照片，跨维度轮换全部 19 张
const PHOTOS = [
  '/galaxy-m51.jpg', // 涡状星系 M51
  '/galaxy-m101.jpg', // 风车星系 M101
  '/galaxy-m104.jpg', // 草帽星系 M104
  '/galaxy-ngc1300.jpg', // 棒旋星系 NGC 1300
  '/galaxy-05.jpg', // 触角星系 Antennae
  '/galaxy-06.jpg', // 雪茄星系 M82
  '/galaxy-07.jpg', // 波德星系 M81
  '/galaxy-08.jpg', // NGC 1232
  '/galaxy-09.jpg', // NGC 1275（英仙座 A）
  '/galaxy-10.jpg', // NGC 1672
  '/galaxy-11.jpg', // NGC 2683（侧视）
  '/galaxy-12.jpg', // NGC 2841
  '/galaxy-13.jpg', // NGC 3370
  '/galaxy-14.jpg', // NGC 4414（絮结旋涡）
  '/galaxy-15.png', // NGC 4826（黑眼星系）
  '/galaxy-16.jpg', // NGC 6744
  '/galaxy-17.jpg', // NGC 4449（星暴星系）
  '/galaxy-18.jpg', // 斯蒂芬五重奏
  '/galaxy-19.jpg', // Arp 273（玫瑰星系对）
];

// 亮度抠图阈值：星系的暗弱旋臂亮度低，阈值放低并用伽马曲线保留微光
const KEY_LO = 14;
const KEY_HI = 64;
const KEY_GAMMA = 0.85;

const spriteCache = new Map<number, string>();
const imageCache = new Map<string, HTMLImageElement>();

/** 确定性伪随机数（mulberry32），保证同一 seed 每次生成相同贴图 */
const mulberry32 = (seed: number) => {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const loadImage = (src: string): Promise<HTMLImageElement> => {
  const cached = imageCache.get(src);
  if (cached) return Promise.resolve(cached);
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      imageCache.set(src, img);
      resolve(img);
    };
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * 分析照片亮度分布，找到星系主体的包围盒与主体平均亮度。
 * 很多原图里星系只占画面一小部分，直接缩放会又暗又小像光晕；
 * 裁到主体后再放大填充，并按平均亮度做增益归一化，
 * 保证暗星系和亮星系观感一致、都饱满清晰。
 */
const findContentBox = (
  photo: HTMLImageElement,
): { sx: number; sy: number; sw: number; sh: number; meanLum: number } => {
  const probe = document.createElement('canvas');
  const pw = Math.min(photo.width, 480);
  const ph = Math.round((photo.height / photo.width) * pw);
  probe.width = pw;
  probe.height = ph;
  const pctx = probe.getContext('2d')!;
  pctx.drawImage(photo, 0, 0, pw, ph);
  const { data } = pctx.getImageData(0, 0, pw, ph);

  // 按行/列统计亮像素（lum > 26）数量，占比超过 2% 视为内容
  const LUM = 26;
  const RATIO = 0.02;
  const rowCount = new Array<number>(ph).fill(0);
  const colCount = new Array<number>(pw).fill(0);
  for (let y = 0; y < ph; y++) {
    for (let x = 0; x < pw; x++) {
      const i = (y * pw + x) * 4;
      const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      if (lum > LUM) {
        rowCount[y] += 1;
        colCount[x] += 1;
      }
    }
  }
  const rowTh = pw * RATIO;
  const colTh = ph * RATIO;
  let top = 0;
  let bottom = ph - 1;
  let left = 0;
  let right = pw - 1;
  while (top < ph && rowCount[top] < rowTh) top += 1;
  while (bottom > top && rowCount[bottom] < rowTh) bottom -= 1;
  while (left < pw && colCount[left] < colTh) left += 1;
  while (right > left && colCount[right] < colTh) right -= 1;

  // 没检测到内容时退回整图
  if (right - left < pw * 0.1 || bottom - top < ph * 0.1) {
    return { sx: 0, sy: 0, sw: photo.width, sh: photo.height, meanLum: 60 };
  }

  // 外扩 10% 边距并映射回原图坐标
  const k = photo.width / pw;
  const padX = (right - left) * 0.1;
  const padY = (bottom - top) * 0.1;
  const sx = Math.max(0, (left - padX) * k);
  const sy = Math.max(0, (top - padY) * k);
  const sw = Math.min(photo.width - sx, (right - left + padX * 2) * k);
  const sh = Math.min(photo.height - sy, (bottom - top + padY * 2) * k);

  // 主体平均亮度（仅统计内容区内的亮像素）
  let lumSum = 0;
  let lumCount = 0;
  for (let y = top; y <= bottom; y++) {
    for (let x = left; x <= right; x++) {
      const i = (y * pw + x) * 4;
      const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      if (lum > 10) {
        lumSum += lum;
        lumCount += 1;
      }
    }
  }
  const meanLum = lumCount > 0 ? lumSum / lumCount : 60;

  return { sx, sy, sw, sh, meanLum };
};

const renderSprite = (seed: number, photo: HTMLImageElement): string => {
  const rand = mulberry32(seed * 7919 + 13);
  const canvas = document.createElement('canvas');
  canvas.width = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext('2d')!;

  // 星系主体包围盒（裁剪掉过大黑场）
  const box = findContentBox(photo);

  // 随机姿态：旋转 + 随机翻转 + 缩放（保证星系完整落在画布内）
  const angle = rand() * Math.PI * 2;
  const flip = rand() < 0.5 ? -1 : 1;
  const zoom = 0.85 + rand() * 0.15;
  const scale =
    ((SIZE * 0.98) / Math.max(box.sw, box.sh)) * zoom;

  ctx.save();
  ctx.translate(SIZE / 2, SIZE / 2);
  ctx.rotate(angle);
  ctx.scale(flip * scale, scale);
  // 亮度归一化增益：暗星系提亮到统一观感，再增强对比度凸显旋臂
  const gain = Math.min(Math.max(88 / box.meanLum, 0.8), 2.4);
  ctx.filter = `brightness(${gain.toFixed(2)}) contrast(1.15) saturate(1.12)`;
  ctx.drawImage(
    photo,
    box.sx,
    box.sy,
    box.sw,
    box.sh,
    -box.sw / 2, // 裁剪区域居中到画布原点，随 scale 统一缩放
    -box.sh / 2,
    box.sw,
    box.sh,
  );
  ctx.restore();

  // 亮度柔边抠图：黑色太空背景 -> 透明，旋臂微光平滑过渡
  const imageData = ctx.getImageData(0, 0, SIZE, SIZE);
  const data = imageData.data;
  const half = SIZE / 2;
  for (let i = 0; i < data.length; i += 4) {
    const lum =
      0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    const t = Math.min(Math.max((lum - KEY_LO) / (KEY_HI - KEY_LO), 0), 1);
    let alpha = Math.pow(t, KEY_GAMMA);
    // 径向边缘羽化：外圈 16% 渐隐，让星系融入星空、消除贴图边界
    const px = (i / 4) % SIZE;
    const py = Math.floor(i / 4 / SIZE);
    const dx = (px - half) / half;
    const dy = (py - half) / half;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const f = Math.min(Math.max((1.02 - dist) / 0.16, 0), 1);
    alpha *= f * f * (3 - 2 * f);
    data[i + 3] = Math.round(data[i + 3] * alpha);
  }
  ctx.putImageData(imageData, 0, 0);

  return canvas.toDataURL('image/png');
};

/**
 * 可用照片池：PHOTOS 中加载失败的（文件缺失）自动剔除。
 * 24 张全部就绪时 seed 与照片一一对应；部分缺失时复用可用照片，
 * 配合每 seed 的旋转/翻转/缩放/色相差异，观感仍保持独一无二。
 */
let poolPromise: Promise<HTMLImageElement[]> | null = null;
const resolvePhotoPool = (): Promise<HTMLImageElement[]> => {
  if (!poolPromise) {
    poolPromise = Promise.allSettled(PHOTOS.map(loadImage)).then((results) =>
      results.flatMap((r) => (r.status === 'fulfilled' ? [r.value] : [])),
    );
  }
  return poolPromise;
};

const generate = (seed: number): Promise<string> => {
  const cached = spriteCache.get(seed);
  if (cached) return Promise.resolve(cached);
  return resolvePhotoPool().then((pool) => {
    if (pool.length === 0) {
      throw new Error('没有可用的星系照片');
    }
    const url = renderSprite(seed, pool[seed % pool.length]);
    spriteCache.set(seed, url);
    return url;
  });
};

/** 全部星系 seed（与 PHOTOS 一一对应），用于预生成与随机抽取 */
export const GALAXY_SEEDS = PHOTOS.map((_, i) => i);

/** 同步读缓存；仅在 warmGalaxySprites 完成后保证有值。 */
export const getGalaxySprite = (seed: number): string | null =>
  spriteCache.get(seed) ?? null;

/** 预生成指定 seed 的全部贴图，返回 seed -> dataURL 映射。 */
export const warmGalaxySprites = (
  seeds: number[],
): Promise<Record<number, string>> =>
  Promise.all(
    seeds.map((seed) => generate(seed).then((url) => [seed, url] as const)),
  ).then((entries) => Object.fromEntries(entries));
