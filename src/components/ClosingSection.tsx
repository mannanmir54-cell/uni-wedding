import React, { useEffect, useRef, useState } from 'react';
import { MonogramCrest, ElegantDivider, MihrabArch, CornerFlourish } from './Botanicals.tsx';

export const ClosingSection: React.FC = () => {
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
      id="wedding-closing"
      className="relative pt-16 pb-24 sm:pt-24 sm:pb-28 px-4 sm:px-6 text-center max-w-2xl mx-auto"
      aria-label="Wedding Invitation Closing"
    >
      <div
        className={`card-paper rounded-3xl p-8 sm:p-12 border border-[#C5A880]/40 shadow-[0_12px_40px_-10px_rgba(115,98,87,0.07)] relative transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Subtle inner hairline */}
        <div
          className="absolute inset-3 sm:inset-4 rounded-2xl border border-[#C5A880]/25 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-[3px] rounded-[13px] border border-dashed border-[#C5A880]/15" />
        </div>

        {/* Four Corner Flourishes */}
        <div className="absolute top-2 left-2">
          <CornerFlourish position="top-left" className="w-8 h-8 opacity-65" />
        </div>
        <div className="absolute top-2 right-2">
          <CornerFlourish position="top-right" className="w-8 h-8 opacity-65" />
        </div>
        <div className="absolute bottom-2 left-2">
          <CornerFlourish position="bottom-left" className="w-8 h-8 opacity-65" />
        </div>
        <div className="absolute bottom-2 right-2">
          <CornerFlourish position="bottom-right" className="w-8 h-8 opacity-65" />
        </div>

        <div className="relative z-10">
          {/* Subtle arch header */}
          <MihrabArch className="scale-75 -my-2 opacity-80 text-[#C5A880]" />

          {/* Decorative center crest */}
          <div className="flex justify-center mt-2 mb-6">
            <MonogramCrest initials="U & I" size="sm" />
          </div>

          {/* Main Closing Sign-off */}
          <div className="py-2">
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.12em] text-[#2D231E] font-light flex items-center justify-center gap-3">
              <span>USAMA</span>
              <span className="text-[#C47D76] text-2xl sm:text-3xl select-none" aria-label="love">
                ♡
              </span>
              <span>IQRA</span>
            </h3>
          </div>

          <ElegantDivider variant="rose" className="my-6" />

          {/* Generic Line as requested */}
          <p className="font-serif italic text-lg sm:text-xl text-[#5A4B42] leading-relaxed max-w-md mx-auto font-normal">
            “Thank you for being a part of our celebration.”
          </p>

          {/* Subtle blessings closing line */}
          <p className="mt-4 font-sans text-xs tracking-[0.3em] uppercase text-[#8C7B6F] font-medium">
            With Love, Warmth &amp; Gratitude
          </p>
        </div>

      </div>

      {/* Footer signature with safe bottom padding for floating music button */}
      <footer className="mt-14 sm:mt-16 text-center text-xs font-sans text-[#A8988D] tracking-[0.24em] uppercase">
        <p>USAMA &amp; IQRA · WEDDING INVITATION</p>
      </footer>
    </section>
  );
};
