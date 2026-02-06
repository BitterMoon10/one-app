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
  photos: PhotoItem[];
}

// 静态虚拟摄影项目数据 - 不规则布局
const categories: Category[] = [
  {
    id: '1',
    name: '旷野遐想',
    nameEn: 'Wilderness Dreams',
    description: '远离城市喧嚣，深入自然腹地。在广袤的原野与寂静的山川之间，寻找内心的宁静与自然的对话，记录大自然最原始、最纯净的瞬间。',
    photos: [
      { id: 'p1', image: '/photo-landscape.jpg', title: '雾中孤舟', size: 'large' },
      { id: 'p2', image: '/photo-mountain.jpg', title: '山湖倒影', size: 'medium' },
      { id: 'p3', image: '/photo-1.jpg', title: '金色麦田', size: 'small' },
      { id: 'p4', image: '/photo-2.jpg', title: '雪后森林', size: 'medium' },
      { id: 'p5', image: '/photo-3.jpg', title: '海边灯塔', size: 'small' },
      { id: 'p6', image: '/photo-7.jpg', title: '冰岛极光', size: 'large' },
    ],
  },
  {
    id: '2',
    name: '人文印记',
    nameEn: 'Human Imprints',
    description: '行走在世界各地，捕捉不同文化背景下的人文风情。从古老建筑到街头巷尾，每一帧画面都诉说着独特的故事与情感。',
    photos: [
      { id: 'p7', image: '/photo-4.jpg', title: '樱花古刹', size: 'medium' },
      { id: 'p8', image: '/photo-5.jpg', title: '沙漠驼队', size: 'large' },
      { id: 'p9', image: '/photo-6.jpg', title: '威尼斯晨雾', size: 'small' },
      { id: 'p10', image: '/photo-8.jpg', title: '巴黎铁塔', size: 'medium' },
      { id: 'p11', image: '/photo-9.jpg', title: '桂林山水', size: 'large' },
      { id: 'p12', image: '/photo-12.jpg', title: '泰姬陵日出', size: 'small' },
    ],
  },
  {
    id: '3',
    name: '城市光影',
    nameEn: 'Urban Light',
    description: '在钢筋水泥的森林中，寻找光与影的交织。霓虹灯下的夜晚，日落时分的剪影，城市有着属于自己的独特美学。',
    photos: [
      { id: 'p13', image: '/photo-street.jpg', title: '雨夜霓虹', size: 'large' },
      { id: 'p14', image: '/photo-10.jpg', title: '非洲草原', size: 'medium' },
      { id: 'p15', image: '/photo-11.jpg', title: '曼哈顿黄昏', size: 'large' },
      { id: 'p16', image: '/hero-bg.jpg', title: '静谧湖面', size: 'small' },
      { id: 'p17', image: '/photo-portrait.jpg', title: '午后阳光', size: 'medium' },
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

  // 获取图片尺寸类名
  const getSizeClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-1 row-span-2';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
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
                  {/* Left: Photos Grid - 不规则布局 */}
                  <div className="lg:col-span-7 order-2 lg:order-1">
                    <div className="grid grid-cols-3 auto-rows-[150px] md:auto-rows-[180px] gap-3 md:gap-4">
                      {category.photos.map((photo, photoIndex) => (
                        <div
                          key={photo.id}
                          className={`${getSizeClass(photo.size)} group relative overflow-hidden rounded-lg cursor-pointer`}
                          onClick={() => openLightbox(categoryIndex, photoIndex)}
                        >
                          <img
                            src={photo.image}
                            alt={photo.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white text-sm font-medium">{photo.title}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Category Info */}
                  <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
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
