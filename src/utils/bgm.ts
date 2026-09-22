/**
 * 全站共用的 BGM 控制器（单例）。
 * 站头的 🎵 按钮和 /works 页播放器的播放/暂停都走这里，两处状态保持同步。
 */
const SRC = '/audio/do-we-really-care.mp3';

let audio: HTMLAudioElement | null = null;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((fn) => fn());
}

function get(): HTMLAudioElement {
  if (!audio) {
    audio = new Audio(SRC);
    audio.loop = true;
    audio.preload = 'none';
    audio.addEventListener('play', emit);
    audio.addEventListener('pause', emit);
    audio.addEventListener('ended', emit);
  }
  return audio;
}

export const bgm = {
  play() {
    get().play().catch(() => {});
  },
  pause() {
    get().pause();
  },
  toggle() {
    const a = get();
    if (a.paused) a.play().catch(() => {});
    else a.pause();
  },
  setMuted(m: boolean) {
    get().muted = m;
  },
  get muted() {
    return audio ? audio.muted : false;
  },
  get playing() {
    return audio ? !audio.paused : false;
  },
  /** 订阅播放状态变化，返回取消订阅函数 */
  subscribe(fn: () => void) {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  },
};
