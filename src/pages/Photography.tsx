import { useState, useEffect } from 'react';
import Lightbox from '../components/Lightbox';

interface PhotoItem {
  id: string;
  image: string;
  title: string;
  size: 'large' | 'medium' | 'small';
}

interface Category {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  layout?: 'horizontal' | 'vertical' | 'masonry' | 'horizontal-tile' | 'vertical-tile';
  photos: PhotoItem[];
}

// 静态虚拟摄影项目数据 - 不规则布局
const categories: Category[] = [
  {
    id: '0',
    name: '川西之旅',
    nameEn: 'Into the Snow Mountains',
    description: '穿越318，驰骋在海拔四千米的云端之上。雪山如银龙蜿蜒，佛塔静立风中，每一步都是对辽阔高原的朝圣。这里是离天空最近的地方，也是心灵最自由的归处。',
    layout: 'horizontal',
    photos: [
      { id: 'p00', image: '/稻城亚丁.jpeg', title: '稻城亚丁', size: 'large' },
      { id: 'p01', image: '/雪山流水.jpeg', title: '雪山流水', size: 'medium' },
      { id: 'p02', image: '/雪顶入云.jpeg', title: '雪顶入云', size: 'large' },  // 竖图放第3位
      { id: 'p03', image: '/西部公路.jpeg', title: '西部公路', size: 'medium' },
      { id: 'p04', image: '/佛塔信仰.jpeg', title: '佛塔信仰', size: 'large' },
    ],
  },
  {
    id: '1',
    name: '迷宫的十字路口',
    nameEn: 'Crossroads of the Labyrinth',
    description: '在古都的迷宫中，寻找历史与现代的交汇点。每一条街巷都藏着故事，每一个转角都可能遇见惊喜。这里是时间的交错，也是文化的碰撞。',
    layout: 'vertical',
    photos: [
      { id: 'p10', image: '/世纪之吻.jpeg', title: '世纪之吻', size: 'large' },
      { id: 'p11', image: '/清水寺.jpeg', title: '清水寺', size: 'small' },
      { id: 'p12', image: '/惊鸿一瞥.jpeg', title: '惊鸿一瞥', size: 'medium' },
      { id: 'p13', image: '/稻荷大社.jpeg', title: '稻荷大社', size: 'medium' },
      { id: 'p14', image: '/鸭川.jpeg', title: '鸭川', size: 'large' },
      { id: 'p15', image: '/四条夜景.jpeg', title: '四条夜景', size: 'medium' },
    ],
  },
  {
    id: '2',
    name: '新垣结衣的故乡',
    nameEn: 'Gakki’s Hometown',
    description: '在这个被大海环绕的小岛上，感受新垣结衣笑容一般的温暖与纯净。海风轻拂，阳光洒在沙滩上，每一处风景都像她的笑容一样明媚动人。',
    photos: [
      { id: 'p20', image: '/玻璃海面.jpeg', title: '玻璃海面', size: 'medium' },
      { id: 'p21', image: '/湛蓝海岸.jpeg', title: '湛蓝海岸', size: 'medium' },
      { id: 'p22', image: '/蜿蜒沙滩.jpeg', title: '蜿蜒沙滩', size: 'medium' },
      { id: 'p23', image: '/落日余晖.jpeg', title: '落日余晖', size: 'large' },
      { id: 'p24', image: '/天空之城.jpeg', title: '天空之城', size: 'medium' },
    ],
  },
  {
    id: '3',
    name: '夜游颐和园',
    nameEn: 'Night at the Summer Palace',
    description: '在古老的园林中，感受夜晚的静谧与神秘。月光洒在湖面上，古建筑在灯光下更显庄重典雅，仿佛穿越回了千年前的盛世。',
    layout: 'masonry',
    photos: [
      { id: 'p30', image: '/历史与现代.jpeg', title: '历史与现代', size: 'medium' },
      { id: 'p31', image: '/落日余晖.jpeg', title: '落日余晖', size: 'medium' },
      { id: 'p32', image: '/胶片.jpeg', title: '胶片', size: 'large' },
      { id: 'p33', image: '/画廊.jpeg', title: '画廊', size: 'large' },
      { id: 'p34', image: '/灯笼.jpeg', title: '灯笼', size: 'medium' },
    ],
  },
];

const Photography = () => {
  const [loaded, setLoaded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // 获取当前分类的所有图片
  const getCurrentImages = () => {
    return categories[currentCategory].photos.map(photo => ({
      src: photo.image,
      title: photo.title
    }));
  };

  // 打开 Lightbox
  const openLightbox = (categoryIndex: number, photoIndex: number) => {
    setCurrentCategory(categoryIndex);
    setCurrentImageIndex(photoIndex);
    setLightboxOpen(true);
  };

  // 关闭 Lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // 上一张
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? getCurrentImages().length - 1 : prev - 1));
  };

  // 下一张
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === getCurrentImages().length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Main Content */}
      <main className="pt-20 pb-20">
        {/* Categories */}
        <div className="space-y-32">
          {categories.map((category, categoryIndex) => (
            <section
              key={category.id}
              className={`transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${200 + categoryIndex * 150}ms`,
              }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left: Photos - 灵活布局 */}
                  <div className="lg:col-span-7 order-2 lg:order-1">
                    {/* 根据 layout 类型渲染不同布局 */}
                    {category.layout === 'horizontal-tile' ? (
                      // 横向平铺：2x2横图 + 右侧竖图
                      <div className="flex gap-3">
                        <div className="flex-1 grid grid-cols-2 gap-3">
                          {category.photos.filter((_, i) => i !== 2).map((photo, photoIndex) => {
                            const actualIndex = photoIndex >= 2 ? photoIndex + 1 : photoIndex;
                            return (
                              <div
                                key={photo.id}
                                className="group relative overflow-hidden rounded-lg cursor-pointer"
                                onClick={() => openLightbox(categoryIndex, actualIndex)}
                              >
                                <img
                                  src={photo.image}
                                  alt={photo.title}
                                  className="w-full h-auto object-contain"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                  <span className="text-white text-sm font-medium">{photo.title}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="w-[35%]">
                          {category.photos[2] && (
                            <div
                              key={category.photos[2].id}
                              className="group relative overflow-hidden rounded-lg cursor-pointer h-full"
                              onClick={() => openLightbox(categoryIndex, 2)}
                            >
                              <img
                                src={category.photos[2].image}
                                alt={category.photos[2].title}
                                className="w-full h-full object-contain"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                <span className="text-white text-sm font-medium">{category.photos[2].title}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : category.layout === 'vertical-tile' ? (
                      // 纵向平铺：左侧竖图 + 右侧2x2横图
                      <div className="flex gap-3">
                        <div className="w-[35%]">
                          {category.photos[2] && (
                            <div
                              key={category.photos[2].id}
                              className="group relative overflow-hidden rounded-lg cursor-pointer h-full"
                              onClick={() => openLightbox(categoryIndex, 2)}
                            >
                              <img
                                src={category.photos[2].image}
                                alt={category.photos[2].title}
                                className="w-full h-full object-contain"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                <span className="text-white text-sm font-medium">{category.photos[2].title}</span>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-3">
                          {category.photos.filter((_, i) => i !== 2).map((photo, photoIndex) => {
                            const actualIndex = photoIndex >= 2 ? photoIndex + 1 : photoIndex;
                            return (
                              <div
                                key={photo.id}
                                className="group relative overflow-hidden rounded-lg cursor-pointer"
                                onClick={() => openLightbox(categoryIndex, actualIndex)}
                              >
                                <img
                                  src={photo.image}
                                  alt={photo.title}
                                  className="w-full h-auto object-contain"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                  <span className="text-white text-sm font-medium">{photo.title}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      // 默认： masonry 瀑布流布局
                      <div className="columns-2 gap-3 space-y-3">
                        {category.photos.map((photo, photoIndex) => (
                          <div
                            key={photo.id}
                            className="group relative overflow-hidden rounded-lg cursor-pointer break-inside-avoid"
                            onClick={() => openLightbox(categoryIndex, photoIndex)}
                          >
                            <img
                              src={photo.image}
                              alt={photo.title}
                              className="w-full h-auto object-contain"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                              <span className="text-white text-sm font-medium">{photo.title}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: Category Info - 放在下方 */}
                  <div className="col-span-12 order-1 mb-8">
                    <div className="lg:sticky lg:top-32">
                      {/* Index Number */}
                      <div className="text-white/30 text-sm mb-4">
                        0{categoryIndex + 1}
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2">
                        {category.name}
                      </h2>
                      
                      {/* English Title */}
                      <p className="text-white/40 text-sm mb-8 tracking-wider">
                        {category.nameEn}
                      </p>
                      
                      {/* Description */}
                      <p className="text-white/60 leading-relaxed text-base md:text-lg">
                        {category.description}
                      </p>

                      {/* Photo Count */}
                      <div className="mt-8 pt-6 border-t border-white/10">
                        <p className="text-white/40 text-sm">
                          共 <span className="text-white/60">{category.photos.length}</span> 张作品
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      <Lightbox
        images={getCurrentImages()}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />

      {/* Footer */}
      <footer className="py-12 text-center text-white/30 text-sm border-t border-white/10">
        <p>用光影记录世界</p>
      </footer>
    </div>
  );
};

export default Photography;
