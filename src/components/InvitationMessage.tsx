import React, { useEffect, useRef, useState } from 'react';
import { ElegantDivider, BismillahHeader, MihrabArch, CornerFlourish } from './Botanicals.tsx';

export const InvitationMessage: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="invitation-message"
      className="relative py-14 sm:py-20 px-4 sm:px-6 max-w-3xl mx-auto"
      aria-label="Invitation Message"
    >
      <div
        className={`card-paper rounded-3xl p-6 sm:p-12 border border-[#C5A880]/40 shadow-[0_12px_40px_-10px_rgba(115,98,87,0.07)] relative transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Subtle decorative inner line */}
        <div
          className="absolute inset-3 sm:inset-4 rounded-2xl border border-[#C5A880]/25 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-[3px] rounded-[13px] border border-dashed border-[#C5A880]/15" />
        </div>

        {/* Four Corner Flourishes */}
        <div className="absolute top-2 left-2">
          <CornerFlourish position="top-left" className="w-8 h-8 sm:w-10 sm:h-10 opacity-70" />
        </div>
        <div className="absolute top-2 right-2">
          <CornerFlourish position="top-right" className="w-8 h-8 sm:w-10 sm:h-10 opacity-70" />
        </div>
        <div className="absolute bottom-2 left-2">
          <CornerFlourish position="bottom-left" className="w-8 h-8 sm:w-10 sm:h-10 opacity-70" />
        </div>
        <div className="absolute bottom-2 right-2">
          <CornerFlourish position="bottom-right" className="w-8 h-8 sm:w-10 sm:h-10 opacity-70" />
        </div>

        <div className="relative z-10 text-center">
          {/* Sacred Bismillah Calligraphic Header */}
          <BismillahHeader className="mb-4" />

          {/* Mihrab Arch */}
          <MihrabArch className="scale-75 -my-2 opacity-75" />

          {/* Section Kicker */}
          <span className="font-sans text-[11px] sm:text-xs tracking-[0.32em] uppercase text-[#8C7B6F] block mt-2 mb-2 font-medium">
            A Celebration of Love
          </span>

          {/* Section Heading */}
          <h3 className="font-serif text-3xl sm:text-4xl text-[#2D231E] font-normal tracking-wide mb-3">
            The Union of Hearts
          </h3>

          {/* Rosebud divider */}
          <ElegantDivider variant="rose" className="my-5" />

          {/* Sacred Quranic Verse */}
          <div className="space-y-4 text-[#5A4B42] font-serif text-base sm:text-lg sm:leading-relaxed max-w-xl mx-auto">
            <p className="italic text-[#4B3B32]">
              “And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.”
            </p>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#8C7B6F] font-medium">
              Surah Ar-Rum · 30:21
            </p>

            <div className="pt-3 space-y-3">
              <p className="text-[#3D3028] leading-relaxed">
                With joyous hearts and deep gratitude, we request the honor of your presence and warm blessings as Usama and Iqra begin their beautiful journey of togetherness.
              </p>
              <p className="text-sm sm:text-base font-sans font-light text-[#6F5F55] tracking-wide">
                Your presence, prayers, and love will make our celebration truly complete and memorable.
              </p>
            </div>
          </div>

          {/* Delicate botanical accent */}
          <div className="mt-8 flex justify-center items-center gap-2" aria-hidden="true">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4C5BE]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C8B76]/60" />
          </div>
        </div>

      </div>
    </section>
  );
};
