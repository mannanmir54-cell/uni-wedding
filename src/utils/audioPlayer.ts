/**
 * Audio Engine for Romantic Wedding Background Music
 * Tries to play `/music/wedding.mp3`.
 * If the file is not yet uploaded, falls back seamlessly to an ultra-soft,
 * serene romantic ambient chime/harp Web Audio generator so the site sounds
 * magical and never breaks or errors.
 */

class WeddingAudioManager {
  private audio: HTMLAudioElement | null = null;
  private audioCtx: AudioContext | null = null;
  private isUsingSynth = false;
  private synthInterval: number | null = null;
  private isPlaying = false;
  private volume = 0.35;
  private listeners: Set<(playing: boolean) => void> = new Set();

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudio();
    }
  }

  private initAudio() {
    try {
      this.audio = new Audio('/music/wedding.mp3');
      this.audio.loop = true;
      this.audio.volume = this.volume;

      // If audio fails to load (e.g. 404), fall back to graceful soft synth
      this.audio.addEventListener('error', () => {
        // Will use soft ambient synth on play
        this.isUsingSynth = true;
      });

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notify();
      });
    } catch {
      this.isUsingSynth = true;
    }
  }

  public subscribe(listener: (playing: boolean) => void) {
    this.listeners.add(listener);
    listener(this.isPlaying);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.isPlaying));
  }

  public async play(): Promise<boolean> {
    if (this.isPlaying) return true;

    // First attempt HTML5 audio with /music/wedding.mp3
    if (this.audio && !this.isUsingSynth) {
      try {
        await this.audio.play();
        this.isPlaying = true;
        this.notify();
        return true;
      } catch {
        // Autoplay policy or 404, switch to synth fallback
        this.isUsingSynth = true;
      }
    }

    // Fallback: Ultra-soft romantic ambient chime generator
    return this.playSoftSynth();
  }

  public pause() {
    if (this.audio) {
      try {
        this.audio.pause();
      } catch {
        // ignore
      }
    }

    if (this.synthInterval) {
      window.clearInterval(this.synthInterval);
      this.synthInterval = null;
    }

    this.isPlaying = false;
    this.notify();
  }

  public toggle(): Promise<boolean> {
    if (this.isPlaying) {
      this.pause();
      return Promise.resolve(false);
    } else {
      return this.play();
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  /**
   * Gentle, soft romantic acoustic harp/music-box chime chords
   * Pentatonic F-Major/D-Minor romantic arpeggios at very low, soothing volume.
   */
  private playSoftSynth(): boolean {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return false;

      if (!this.audioCtx) {
        this.audioCtx = new AudioContextClass();
      }

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const notes = [
        261.63, // C4
        293.66, // D4
        329.63, // E4
        392.00, // G4
        440.00, // A4
        523.25, // C5
        587.33, // D5
        659.25, // E5
      ];

      const playChime = (freq: number, delayMs: number) => {
        if (!this.audioCtx || !this.isPlaying) return;

        setTimeout(() => {
          if (!this.audioCtx || !this.isPlaying) return;
          try {
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

            // Very soft, dreamy envelope
            const now = this.audioCtx.currentTime;
            gain.gain.setValueAtTime(0.0001, now);
            gain.gain.linearRampToValueAtTime(0.04, now + 0.15);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

            osc.connect(gain);
            gain.connect(this.audioCtx.destination);

            osc.start(now);
            osc.stop(now + 2.9);
          } catch {
            // ignore
          }
        }, delayMs);
      };

      const arpeggio = () => {
        if (!this.isPlaying) return;
        // Romantic soft arpeggio pattern
        playChime(notes[0], 0);
        playChime(notes[2], 300);
        playChime(notes[3], 650);
        playChime(notes[4], 1000);
        playChime(notes[5], 1400);
        playChime(notes[3], 1800);
        playChime(notes[2], 2200);
      };

      this.isPlaying = true;
      this.notify();
      arpeggio();

      this.synthInterval = window.setInterval(arpeggio, 3400);
      return true;
    } catch {
      return false;
    }
  }
}

export const weddingAudio = new WeddingAudioManager();
