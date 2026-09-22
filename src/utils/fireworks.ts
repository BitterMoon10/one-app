/**
 * 烟花控制器（单例）：让任何组件都能在全屏画布上炸开一簇烟花。
 * 画布由 <FireworksCanvas /> 持有并注册到这里。
 */
type BurstFn = (x: number, y: number) => void;

let burstFn: BurstFn | null = null;

export const fireworks = {
  /** 画布组件挂载时注册自己的 spawn 函数，返回注销函数 */
  register(fn: BurstFn) {
    burstFn = fn;
    return () => {
      burstFn = null;
    };
  },
  /** 在屏幕坐标 (x, y) 处炸开一簇烟花 */
  burst(x: number, y: number) {
    burstFn?.(x, y);
  },
};
