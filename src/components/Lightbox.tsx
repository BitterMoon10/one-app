import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { src: string; title: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ images, currentIndex, isOpen, onClose, onPrev, onNext }: LightboxProps) => {
  // 键盘事件处理
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        onPrev();
        break;
      case 'ArrowRight':
        onNext();
        break;
    }
  }, [isOpen, onClose, onPrev, onNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // 禁止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
      {/* 关闭按钮 */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
      >
        <X className="w-8 h-8" />
      </button>

      {/* 上一张 */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      {/* 下一张 */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* 图片 */}
      <div className="relative max-w-[90vw] max-h-[85vh]">
        <img
          src={currentImage.src}
          alt={currentImage.title}
          className="max-w-full max-h-[85vh] object-contain"
        />
      </div>

      {/* 底部信息 */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-white/90 text-lg mb-2">{currentImage.title}</p>
        <p className="text-white/50 text-sm">{currentIndex + 1} / {images.length}</p>
      </div>
    </div>
  );
};

export default Lightbox;
