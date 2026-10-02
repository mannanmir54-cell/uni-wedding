import React, { useEffect, useState } from 'react';
import { weddingAudio } from '../utils/audioPlayer.ts';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Subscribe to audio player state
    const unsubscribe = weddingAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });

    // Check session preference
    try {
      const savedPref = sessionStorage.getItem('wedding_music_enabled');
      if (savedPref === 'true') {
        weddingAudio.play().catch(() => {});
      }
    } catch {
      // ignore
    }

    return () => {
      unsubscribe();
    };
  }, []);

  const handleToggle = async () => {
    setHasInteracted(true);
    const willPlay = !isPlaying;
    try {
      sessionStorage.setItem('wedding_music_enabled', willPlay ? 'true' : 'false');
    } catch {
      // ignore
    }

    if (willPlay) {
      await weddingAudio.play();
    } else {
      weddingAudio.pause();
    }
  };

  return (
    <aside
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 select-none"
      aria-label="Background Music Control"
    >
      <button
        type="button"
        onClick={handleToggle}
        className={`group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FCFAF6]/90 backdrop-blur-md border border-[#C5A880]/60 shadow-[0_4px_14px_rgba(115,98,87,0.12)] hover:shadow-[0_6px_20px_rgba(197,168,128,0.25)] hover:border-[#C5A880] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] focus-visible:ring-offset-2 cursor-pointer active:scale-95 ${
          isPlaying ? 'ring-1 ring-[#C5A880]/40' : 'opacity-85 hover:opacity-100'
        }`}
        title={isPlaying ? 'Pause background music' : 'Play background music'}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
      >
        {/* Subtle rotating gold aura when playing */}
        {isPlaying && (
          <span
            className="absolute inset-[1.5px] rounded-full border border-dashed border-[#C5A880]/40 animate-spin"
            style={{ animationDuration: '16s' }}
            aria-hidden="true"
          />
        )}

        {/* Music Icons & Wave Indicators */}
        <div className="relative flex items-center justify-center text-[#5A4537]">
          {isPlaying ? (
            <div className="flex items-center gap-1.5 px-1" aria-hidden="true">
              {/* Musical Note */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-[#8C6D4F]"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" fill="#C5A880" fillOpacity="0.4" />
                <circle cx="18" cy="16" r="3" fill="#C5A880" fillOpacity="0.4" />
              </svg>

              {/* 3 Delicate Pulsing Equalizer Bars */}
              <div className="flex items-end gap-0.5 h-3">
                <span className="w-0.5 bg-[#C5A880] rounded-full animate-music-bar-1" />
                <span className="w-0.5 bg-[#C5A880] rounded-full animate-music-bar-2" />
                <span className="w-0.5 bg-[#C5A880] rounded-full animate-music-bar-3" />
              </div>
            </div>
          ) : (
            <div className="relative flex items-center justify-center text-[#8C7A6E]">
              {/* Muted Note Icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 opacity-75 group-hover:opacity-100 transition-opacity"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
                {/* Diagonal line indicating paused */}
                <line x1="3" y1="3" x2="21" y2="21" stroke="#A89485" strokeWidth="1.5" />
              </svg>
            </div>
          )}
        </div>

        {/* Discreet label pill on initial visit */}
        {!hasInteracted && !isPlaying && (
          <span className="absolute right-14 bg-[#FAF7F2] text-[#6E5D52] font-sans text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full border border-[#C5A880]/40 shadow-sm whitespace-nowrap pointer-events-none opacity-90 hidden sm:block">
            Play Music
          </span>
        )}
      </button>
    </aside>
  );
};
