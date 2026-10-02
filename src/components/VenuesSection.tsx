import React, { useEffect, useRef, useState } from 'react';
import { ElegantDivider, MihrabArch, CornerFlourish } from './Botanicals.tsx';

export const VenuesSection: React.FC = () => {
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
      id="wedding-venues"
      className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto"
      aria-label="Wedding Venues"
    >
      {/* Section Header */}
      <div
        className={`text-center max-w-xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <MihrabArch className="scale-90 mb-2 text-[#C5A880]" />
        <span className="font-sans text-xs tracking-[0.32em] uppercase text-[#8C7B6F] block mb-2 font-medium">
          Celebration Locations
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D231E] font-normal tracking-wide">
          Venues
        </h3>
        <p className="font-serif italic text-base sm:text-lg text-[#6A5A50] mt-2">
          Where our precious moments will unfold
        </p>
        <ElegantDivider variant="rose" className="my-6" />
      </div>

      {/* Venues Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        {/* Venue 1: Indus Hall */}
        <div
          className={`group card-paper rounded-3xl p-6 sm:p-8 border border-[#C5A880]/40 shadow-[0_8px_30px_-5px_rgba(115,98,87,0.07)] relative transition-all duration-700 ease-out hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {/* Corner Flourish */}
          <div className="absolute top-2 right-2">
            <CornerFlourish position="top-right" className="w-8 h-8 opacity-50 group-hover:opacity-80 transition-opacity" />
          </div>

          <div>
            <div className="flex items-center justify-between mb-4 pr-6">
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#8B6B4E] font-medium">
                Mehndi Location
              </span>
              <span className="text-xs font-sans text-[#8C7B6F] font-light">
                22 October
              </span>
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl text-[#2D231E] font-normal mb-1">
              Indus Hall
            </h4>
            <p className="font-sans text-sm text-[#5C4D43] tracking-wide mb-5 font-light">
              Malir Cantt
            </p>

            {/* "View Location" Google Maps link with polished micro-interactions */}
            <div className="mb-4">
              <a
                href="https://maps.app.goo.gl/JWDjaToJqRtqV1VK9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-sans tracking-[0.2em] uppercase font-medium text-[#3D3028] bg-[#F7F1E8] hover:bg-[#EFE5D8] border border-[#C5A880]/60 transition-all duration-300 active:scale-95 shadow-xs hover:shadow-md hover:border-[#C5A880]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-3.5 h-3.5 text-[#B48C5E] transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                <span>View Location</span>
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-[#EFE8DE] flex items-center justify-between text-xs font-sans text-[#8C7B6F]">
            <span>Ceremony &amp; Evening Gathering</span>
            <span className="font-medium text-[#4A3729]">8:30 PM</span>
          </div>
        </div>

        {/* Venue 2: The Corum Banquet */}
        <div
          className={`group card-paper rounded-3xl p-6 sm:p-8 border border-[#C5A880]/40 shadow-[0_8px_30px_-5px_rgba(115,98,87,0.07)] relative transition-all duration-700 ease-out hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '250ms' }}
        >
          {/* Corner Flourish */}
          <div className="absolute top-2 right-2">
            <CornerFlourish position="top-right" className="w-8 h-8 opacity-50 group-hover:opacity-80 transition-opacity" />
          </div>

          <div>
            <div className="flex items-center justify-between mb-4 pr-6">
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#8B6B4E] font-medium">
                Valima Location
              </span>
              <span className="text-xs font-sans text-[#8C7B6F] font-light">
                26 October
              </span>
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl text-[#2D231E] font-normal mb-1">
              The Corum Banquet
            </h4>
            <p className="font-sans text-sm text-[#5C4D43] tracking-wide mb-5 font-light">
              Wedding Reception Hall
            </p>

            {/* "View Location" Google Maps link with polished micro-interactions */}
            <div className="mb-4">
              <a
                href="https://maps.app.goo.gl/YUaEW2cVX72EybBH6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-sans tracking-[0.2em] uppercase font-medium text-[#3D3028] bg-[#F7F1E8] hover:bg-[#EFE5D8] border border-[#C5A880]/60 transition-all duration-300 active:scale-95 shadow-xs hover:shadow-md hover:border-[#C5A880]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-3.5 h-3.5 text-[#B48C5E] transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                <span>View Location</span>
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-[#EFE8DE] flex items-center justify-between text-xs font-sans text-[#8C7B6F]">
            <span>Dinner Reception</span>
            <span className="font-medium text-[#4A3729]">Gathering 9 PM · Dinner 10 PM</span>
          </div>
        </div>

      </div>
    </section>
  );
};
