export class AudioManager {
  private audioContext: AudioContext | null = null;
  private readonly pianoNotes = [
    261.63, // C4
    293.66, // D4
    329.63, // E4
    349.23, // F4
    392.00, // G4
    440.00, // A4
    493.88, // B4
    523.25, // C5
    587.33, // D5
    659.25, // E5
    698.46, // F5
    783.99, // G5
  ];

  private ensureAudioContext(): AudioContext {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return this.audioContext;
  }

  public playRandomPianoNote(): void {
    const audioContext = this.ensureAudioContext();
    
    // 随机选择一个音符
    const randomNote = this.pianoNotes[Math.floor(Math.random() * this.pianoNotes.length)];
    
    // 创建振荡器
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    // 设置音符频率
    oscillator.frequency.setValueAtTime(randomNote, audioContext.currentTime);
    
    // 设置钢琴音色（使用sine波形，更接近钢琴音色）
    oscillator.type = 'sine';
    
    // 设置音量包络（让声音自然衰减）
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
    
    // 连接节点
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // 播放
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1);
  }

  public resumeAudioContext(): void {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  }
}

// 创建单例实例
export const audioManager = new AudioManager();