/**
 * 星际穿越风格的生成式环境音乐引擎（Cornfield Chase 风格内核）。
 *
 * 纯 Web Audio API 实现，无需任何音频文件：
 * - 持续低频 drone（D 音根音）营造宇宙深邃感
 * - D - Bm - G - A 风琴式和弦 pad 缓慢循环（D 大调，Zimmer 式开阔感）
 * - 流动 ostinato 琶音（八分音符、双八度交替），带反馈延迟与程序生成的卷积混响
 *
 * 注：Cornfield Chase 为版权商业作品，本引擎只做风格近似的原创生成，不复制其旋律。
 * 浏览器自动播放策略要求必须由用户手势触发，因此提供 toggle() 开关。
 */

type Chord = number[]; // MIDI 音符号

// D 大调 I - vi - IV - V，Cornfield Chase 式开阔进行
const PROGRESSION: Chord[] = [
  [50, 54, 57], // D
  [47, 50, 54], // Bm
  [43, 47, 50], // G
  [45, 49, 52], // A
];

const CHORD_DURATION_MS = 8000;
const DRONE_MIDI = 38; // D2

const midiToFreq = (midi: number): number =>
  440 * Math.pow(2, (midi - 69) / 12);

class CosmicMusicEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private reverbSend: GainNode | null = null;
  private delaySend: GainNode | null = null;
  private padFilter: BiquadFilterNode | null = null;

  private playing = false;
  private chordIndex = 0;
  private chordTimer: number | null = null;
  private arpTimer: number | null = null;
  private droneNodes: OscillatorNode[] = [];

  public isPlaying(): boolean {
    return this.playing;
  }

  /** 切换播放状态，返回切换后的状态。必须在用户手势中调用。 */
  public toggle(): boolean {
    if (this.playing) {
      this.stop();
      return false;
    }
    this.start();
    return true;
  }

  public start(): void {
    if (this.playing) return;
    this.playing = true;

    if (!this.ctx) {
      this.ctx = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      this.buildGraph();
    }
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }

    const now = this.ctx.currentTime;
    this.master!.gain.cancelScheduledValues(now);
    this.master!.gain.setValueAtTime(this.master!.gain.value, now);
    this.master!.gain.linearRampToValueAtTime(0.5, now + 2.5);

    this.startDrone();
    this.scheduleChord();
    this.scheduleArpeggio();
  }

  public stop(): void {
    if (!this.playing || !this.ctx || !this.master) return;
    this.playing = false;

    if (this.chordTimer !== null) {
      window.clearTimeout(this.chordTimer);
      this.chordTimer = null;
    }
    if (this.arpTimer !== null) {
      window.clearTimeout(this.arpTimer);
      this.arpTimer = null;
    }

    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(this.master.gain.value, now);
    this.master.gain.linearRampToValueAtTime(0, now + 1.5);

    const drones = this.droneNodes;
    this.droneNodes = [];
    window.setTimeout(() => {
      drones.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // 已停止的节点忽略
        }
      });
    }, 1600);
  }

  /** 构建 master -> destination，以及混响 / 延迟两条发送通道。 */
  private buildGraph(): void {
    const ctx = this.ctx!;

    this.master = ctx.createGain();
    this.master.gain.value = 0;
    this.master.connect(ctx.destination);

    // 程序生成的卷积混响：3 秒指数衰减噪声脉冲
    const irLength = Math.floor(ctx.sampleRate * 3);
    const impulse = ctx.createBuffer(2, irLength, ctx.sampleRate);
    for (let channel = 0; channel < 2; channel++) {
      const data = impulse.getChannelData(channel);
      for (let i = 0; i < irLength; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / irLength, 2.5);
      }
    }
    const convolver = ctx.createConvolver();
    convolver.buffer = impulse;
    const reverbGain = ctx.createGain();
    reverbGain.gain.value = 0.9;
    convolver.connect(reverbGain);
    reverbGain.connect(this.master);

    this.reverbSend = ctx.createGain();
    this.reverbSend.gain.value = 1;
    this.reverbSend.connect(convolver);

    // 琶音回声：0.5s 反馈延迟
    const delay = ctx.createDelay(2);
    delay.delayTime.value = 0.5;
    const feedback = ctx.createGain();
    feedback.gain.value = 0.38;
    const delayWet = ctx.createGain();
    delayWet.gain.value = 0.5;
    delay.connect(feedback);
    feedback.connect(delay);
    delay.connect(delayWet);
    delayWet.connect(this.master);
    delayWet.connect(this.reverbSend);

    this.delaySend = ctx.createGain();
    this.delaySend.gain.value = 1;
    this.delaySend.connect(delay);

    // pad 共用的低通滤波器，带缓慢 LFO 制造呼吸感
    this.padFilter = ctx.createBiquadFilter();
    this.padFilter.type = 'lowpass';
    this.padFilter.frequency.value = 750;
    this.padFilter.Q.value = 0.7;
    this.padFilter.connect(this.master);
    this.padFilter.connect(this.reverbSend);

    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 260;
    lfo.connect(lfoGain);
    lfoGain.connect(this.padFilter.frequency);
    lfo.start();
  }

  /** 持续低频 drone：根音 + 微失谐双振荡器。 */
  private startDrone(): void {
    const ctx = this.ctx!;
    const freq = midiToFreq(DRONE_MIDI);
    const droneGain = ctx.createGain();
    droneGain.gain.value = 0;
    droneGain.connect(this.master!);
    droneGain.gain.linearRampToValueAtTime(0.055, ctx.currentTime + 4);

    [0, 1.8].forEach((detuneCents) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      osc.detune.value = detuneCents;
      osc.connect(droneGain);
      osc.start();
      this.droneNodes.push(osc);
    });
  }

  /** 播放当前和弦 pad，并调度下一个和弦。 */
  private scheduleChord(): void {
    if (!this.playing || !this.ctx) return;
    const ctx = this.ctx;
    const chord = PROGRESSION[this.chordIndex % PROGRESSION.length];
    this.chordIndex += 1;

    const now = ctx.currentTime;
    const attack = 3.2;
    const release = 4.5;
    const duration = CHORD_DURATION_MS / 1000;

    chord.forEach((midi) => {
      const noteGain = ctx.createGain();
      noteGain.gain.setValueAtTime(0, now);
      noteGain.gain.linearRampToValueAtTime(0.05, now + attack);
      noteGain.gain.setValueAtTime(0.05, now + duration);
      noteGain.gain.linearRampToValueAtTime(0, now + duration + release);
      noteGain.connect(this.padFilter!);

      // 风琴质感：双失谐锯齿波 + 高八度三角波泛音
      const oscA = ctx.createOscillator();
      oscA.type = 'sawtooth';
      oscA.frequency.value = midiToFreq(midi);
      oscA.detune.value = -4;
      const oscB = ctx.createOscillator();
      oscB.type = 'sawtooth';
      oscB.frequency.value = midiToFreq(midi);
      oscB.detune.value = 4;
      const overtone = ctx.createOscillator();
      overtone.type = 'triangle';
      overtone.frequency.value = midiToFreq(midi + 12);
      const overtoneGain = ctx.createGain();
      overtoneGain.gain.value = 0.25;

      oscA.connect(noteGain);
      oscB.connect(noteGain);
      overtone.connect(overtoneGain);
      overtoneGain.connect(noteGain);

      [oscA, oscB, overtone].forEach((osc) => {
        osc.start(now);
        osc.stop(now + duration + release + 0.1);
      });
    });

    this.chordTimer = window.setTimeout(
      () => this.scheduleChord(),
      CHORD_DURATION_MS,
    );
  }

  /** 稀疏琶音：随机间隔从当前和弦中挑高八度音，送入回声与混响。 */
  /** 流动 ostinato 琶音：八分音符脉动（≈100bpm），和弦音循环上行、双八度交替 */
  private arpStep = 0;

  private scheduleArpeggio(): void {
    if (!this.playing || !this.ctx) return;
    const ctx = this.ctx;

    const chord =
      PROGRESSION[(this.chordIndex - 1 + PROGRESSION.length) % PROGRESSION.length];
    // 上行音型 0-1-2-1，每 8 步换一组八度（高八度1 / 高八度2 交替）
    const PATTERN = [0, 1, 2, 1];
    const midi =
      chord[PATTERN[this.arpStep % PATTERN.length]] +
      12 +
      (this.arpStep % 16 < 8 ? 12 : 24);
    this.arpStep += 1;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.value = midiToFreq(midi);

    const env = ctx.createGain();
    env.gain.setValueAtTime(0, now);
    env.gain.linearRampToValueAtTime(0.07, now + 0.02);
    env.gain.exponentialRampToValueAtTime(0.0008, now + 1.6);

    osc.connect(env);
    env.connect(this.delaySend!);
    env.connect(this.reverbSend!);

    osc.start(now);
    osc.stop(now + 1.7);

    this.arpTimer = window.setTimeout(
      () => this.scheduleArpeggio(),
      300, // 八分音符 ≈ 100bpm
    );
  }
}

export const cosmicMusic = new CosmicMusicEngine();
