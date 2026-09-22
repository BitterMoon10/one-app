/**
 * 站头星空装饰层：随机分布的闪烁小星星 + 偶尔划过的流星。
 * 纯装饰，不拦截任何点击（pointer-events-none），也不会盖住下方内容。
 * 星星位置在模块加载时生成一次（避免在 render 里调用 Math.random）。
 */
const STARS = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() < 0.85 ? 1 : 2,
  delay: Math.random() * 4,
  dur: 2 + Math.random() * 3,
}));

const HeaderStars = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {STARS.map((s) => (
        <span
          key={s.id}
          className="pirate-twinkle absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        />
      ))}
      {/* 流星：带倾角和拖尾，避免看起来像划痕（倾角在 CSS 关键帧里） */}
      <span
        className="pirate-shooting absolute h-[2px] w-24 bg-gradient-to-r from-transparent via-white to-transparent"
        style={{ left: '12%', top: '18%' }}
      />
      <span
        className="pirate-shooting absolute h-[2px] w-24 bg-gradient-to-r from-transparent via-white to-transparent"
        style={{ left: '58%', top: '32%', animationDelay: '3.5s' }}
      />
    </div>
  );
};

export default HeaderStars;
