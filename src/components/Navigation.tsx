import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo（彩蛋：点击触发曲速跳跃，随机跃迁到另一张深空背景） */}
          <Link
            to="/me"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('warp-jump'));
            }}
            className="text-lg font-bold text-white"
            title="曲速跳跃"
          >
            .- ...
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
