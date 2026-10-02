import React, { useEffect, useRef, useState } from 'react';
import { MonogramCrest, ElegantDivider, MihrabArch, CornerFlourish, CoupleFloralWreath } from './Botanicals.tsx';

export const HeroSection: React.FC = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="invitation-hero"
      className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 md:pt-24 md:pb-28 px-4 sm:px-6 max-w-4xl mx-auto text-center"
      aria-label="Wedding Celebration Hero - Usama &amp; Iqra"
    >
      {/* South Asian Luxury Card Outer Frame */}
      <div className="relative card-paper rounded-3xl p-6 sm:p-12 md:p-16 border border-[#C5A880]/45 shadow-[0_15px_45px_-12px_rgba(115,98,87,0.1)] overflow-hidden">
        
        {/* Subtle background radial blush warm glow */}
        <div
          className="absolute inset-0 bg-radial from-[#FFF7ED]/45 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* 3-4 subtle drifting decorative petals inside hero frame */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-[15%] left-[8%] animate-ambient-drift opacity-40">
            <svg width="14" height="18" viewBox="0 0 20 26" fill="none">
              <path d="M 10 1 C 15 1, 19 6, 18 15 C 17 21, 13 25, 10 25 C 7 25, 3 21, 2 15 C 1 6, 5 1, 10 1 Z" fill="#E8D2CE" />
            </svg>
          </div>
          <div className="absolute top-[65%] right-[10%] animate-ambient-drift opacity-35" style={{ animationDelay: '3s', animationDuration: '22s' }}>
            <svg width="16" height="20" viewBox="0 0 20 26" fill="none">
              <path d="M 10 1 C 15 1, 19 6, 18 15 C 17 21, 13 25, 10 25 C 7 25, 3 21, 2 15 C 1 6, 5 1, 10 1 Z" fill="#F3DDD8" />
            </svg>
          </div>
          <div className="absolute top-[25%] right-[14%] animate-ambient-drift opacity-30" style={{ animationDelay: '1.5s', animationDuration: '19s' }}>
            <svg width="12" height="15" viewBox="0 0 20 26" fill="none">
              <path d="M 10 1 C 15 1, 19 6, 18 15 C 17 21, 13 25, 10 25 C 7 25, 3 21, 2 15 C 1 6, 5 1, 10 1 Z" fill="#EAD1CC" />
            </svg>
          </div>
        </div>

        {/* Double Champagne Hairline Inner Border */}
        <div
          className="absolute inset-3 sm:inset-5 rounded-2xl border border-[#C5A880]/30 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-[3px] rounded-[13px] border border-dashed border-[#C5A880]/20" />
        </div>

        {/* Four Corner Rose Botanical Flourishes */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
          <CornerFlourish position="top-left" className="w-10 h-10 sm:w-16 sm:h-16" />
        </div>
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
          <CornerFlourish position="top-right" className="w-10 h-10 sm:w-16 sm:h-16" />
        </div>
        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
          <CornerFlourish position="bottom-left" className="w-10 h-10 sm:w-16 sm:h-16" />
        </div>
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
          <CornerFlourish position="bottom-right" className="w-10 h-10 sm:w-16 sm:h-16" />
        </div>

        {/* Central Content */}
        <div className="relative z-10 py-2 sm:py-4">
          
          {/* Top Scalloped Arch & Monogram */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <MihrabArch className="scale-85 mb-2 text-[#C5A880]" />

            <div className="flex justify-center mb-4 sm:mb-5">
              <MonogramCrest initials="U & I" size="sm" />
            </div>

            {/* Intro line */}
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.32em] uppercase text-[#7D6B5E] mb-6 font-medium">
              Together With Their Families
            </p>
          </div>

          {/* ========================================================= */}
          {/* SUPREME CENTERPIECE: USAMA & IQRA WITH FLORAL WREATH HALO */}
          {/* ========================================================= */}
          <div className="relative my-4 sm:my-6 flex items-center justify-center">
            
            {/* Delicate Floral / Rose Wreath Ornament behind/around the names */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out pointer-events-none ${
                isVisible ? 'opacity-90 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <CoupleFloralWreath className="opacity-75 sm:opacity-85" />
            </div>

            {/* Couple's Names in High-End Luxury Serif */}
            <div
              className={`relative z-10 py-6 sm:py-10 space-y-1 sm:space-y-2 transition-all duration-800 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              {/* Groom's Name: USAMA */}
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.12em] sm:tracking-[0.16em] font-light text-[#2D231E] leading-tight select-none whitespace-nowrap">
                USAMA
              </h1>

              {/* Romantic Calligraphy Ampersand with hairline guides */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 my-2 sm:my-3">
                <span className="h-[1px] w-10 sm:w-20 bg-gradient-to-r from-transparent to-[#C5A880]" />
                <span className="font-script text-3xl sm:text-4xl md:text-5xl text-[#B48C5E] px-2 select-none">
                  &amp;
                </span>
                <span className="h-[1px] w-10 sm:w-20 bg-gradient-to-l from-transparent to-[#C5A880]" />
              </div>

              {/* Bride's Name: IQRA */}
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.12em] sm:tracking-[0.16em] font-light text-[#2D231E] leading-tight select-none whitespace-nowrap">
                IQRA
              </h1>
            </div>

          </div>

          {/* Rosebud Filigree Divider */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <ElegantDivider variant="rose" className="my-6 sm:my-8" />

            {/* Generic invitation sentence as provided */}
            <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#4A3E37] max-w-xl mx-auto leading-relaxed font-normal">
              “You are warmly invited to celebrate these beautiful moments with us.”
            </p>

            {/* Subtle dates indicator */}
            <div className="mt-8 pt-6 border-t border-[#EFE8DE] max-w-md mx-auto flex items-center justify-center gap-4 text-xs sm:text-sm font-sans tracking-[0.2em] uppercase text-[#8A796D]">
              <span>Mehndi · 22 Oct</span>
              <span aria-hidden="true" className="text-[#C5A880]">✦</span>
              <span>Valima · 26 Oct</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
