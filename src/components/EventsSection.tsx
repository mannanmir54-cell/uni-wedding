import React, { useEffect, useRef, useState } from 'react';
import { CornerFlourish, ElegantDivider, MihrabArch } from './Botanicals.tsx';

/**
 * Exact Google Maps Location Links
 * Mehndi: Indus Hall, Malir Cantt
 * Valima: The Corum Banquet
 */
export const MEHNDI_LOCATION_CONFIG = {
  venue: 'Indus Hall',
  area: 'Malir Cantt',
  mapUrl: 'https://maps.app.goo.gl/JWDjaToJqRtqV1VK9',
};

export const VALIMA_LOCATION_CONFIG = {
  venue: 'The Corum Banquet',
  subtext: 'Wedding Reception Hall',
  mapUrl: 'https://maps.app.goo.gl/YUaEW2cVX72EybBH6',
};

export const EventsSection: React.FC = () => {
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
      id="wedding-events"
      className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto"
      aria-label="Wedding Events Schedule"
    >
      {/* Section Header */}
      <div
        className={`text-center max-w-xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <MihrabArch className="scale-90 mb-2 text-[#C5A880]" />
        <span className="font-sans text-xs tracking-[0.34em] uppercase text-[#8C7B6F] block mb-2 font-medium">
          Celebration Timeline
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D231E] font-normal tracking-wide">
          Wedding Events
        </h3>
        <p className="font-serif italic text-base sm:text-lg text-[#6A5A50] mt-2">
          Two beautiful evenings of celebration and blessing
        </p>
        <ElegantDivider variant="rose" className="my-6" />
      </div>

      {/* Grid of Two Event Cards (Mobile-first vertical stack, 2 columns on lg screens) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        
        {/* ======================================================== */}
        {/* EVENT CARD 1: MEHNDI */}
        {/* ======================================================== */}
        <article
          className={`group relative card-paper rounded-3xl p-6 sm:p-10 flex flex-col justify-between border border-[#C5A880]/45 shadow-[0_10px_35px_-10px_rgba(115,98,87,0.08)] hover:shadow-[0_20px_45px_-12px_rgba(115,98,87,0.15)] hover:-translate-y-1.5 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '150ms' }}
          aria-label="Mehndi Event Card"
        >
          {/* Subtle warm champagne foil perimeter line */}
          <div
            className="absolute inset-3 sm:inset-4 rounded-2xl border border-[#C5A880]/30 pointer-events-none group-hover:border-[#C5A880]/60 transition-colors duration-500"
            aria-hidden="true"
          >
            <div className="absolute inset-[3px] rounded-[13px] border border-dashed border-[#C5A880]/20" />
          </div>

          {/* Four Corner Rose Botanical Flourishes */}
          <div className="absolute top-2 left-2">
            <CornerFlourish position="top-left" className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <div className="absolute top-2 right-2">
            <CornerFlourish position="top-right" className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <div className="absolute bottom-2 left-2">
            <CornerFlourish position="bottom-left" className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <div className="absolute bottom-2 right-2">
            <CornerFlourish position="bottom-right" className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>

          {/* Card Content Interior */}
          <div className="relative z-10 text-center pt-4 sm:pt-6 pb-2">
            
            {/* Scalloped top arch motif */}
            <MihrabArch className="scale-75 -my-2 opacity-80" />

            {/* Event Header Kicker */}
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#8B6B4E] block mt-2 mb-2 font-medium">
              Evening of Joy &amp; Festivity
            </span>

            {/* Event Name */}
            <h4 className="font-serif text-4xl sm:text-5xl tracking-[0.16em] font-light text-[#2D231E] mb-1">
              MEHNDI
            </h4>

            {/* Rose divider */}
            <div className="flex items-center justify-center gap-2 my-4" aria-hidden="true">
              <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-r from-transparent to-[#C5A880]" />
              <span className="w-2 h-2 rotate-45 border border-[#C5A880] bg-[#FAF8F5]" />
              <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-l from-transparent to-[#C5A880]" />
            </div>

            {/* Prominent Date & Time Display */}
            <div className="my-6 py-4 px-3 sm:px-6 rounded-2xl bg-[#F8F3EC]/70 border border-[#EBE1D4]">
              {/* Date */}
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#8C7B6F] block mb-1">
                Date
              </span>
              <span className="font-serif text-3xl sm:text-4xl text-[#2D231E] font-normal tracking-wide block">
                22 October
              </span>

              {/* Time hairline divider */}
              <div className="w-16 h-[1px] bg-[#C5A880]/30 mx-auto my-3" />

              {/* Time */}
              <div className="flex flex-col items-center justify-center">
                <span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#8C7B6F] block mb-0.5">
                  Time
                </span>
                <span className="font-serif text-2xl sm:text-3xl text-[#4A3729] font-medium tracking-wide">
                  8:30 PM
                </span>
              </div>
            </div>

            {/* ========================================================= */}
            {/* ELEGANT LOCATION AREA - MEHNDI */}
            {/* ========================================================= */}
            <div className="mt-6 pt-5 border-t border-[#EFE8DE] space-y-3">
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.28em] uppercase text-[#8C7B6F] block font-medium">
                Venue &amp; Location
              </span>

              {/* Venue Name with Tasteful Location Pin Icon */}
              <div className="flex items-center justify-center gap-2 px-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#B48C5E] shrink-0"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" fill="#E4C5BE" fillOpacity="0.5" />
                </svg>
                <p className="font-serif text-2xl sm:text-3xl text-[#2D231E] font-medium tracking-wide">
                  {MEHNDI_LOCATION_CONFIG.venue}
                </p>
              </div>

              {/* Area Subtext */}
              <p className="font-sans text-xs sm:text-sm text-[#6E5D52] tracking-wider uppercase font-light">
                {MEHNDI_LOCATION_CONFIG.area}
              </p>

              {/* Refined "View Location" Button (Opens exact Google Maps link) */}
              <div className="pt-2">
                <a
                  href={MEHNDI_LOCATION_CONFIG.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-sans tracking-[0.22em] uppercase font-medium text-[#3D3028] bg-[#F7F1E8] hover:bg-[#EFE5D8] border border-[#C5A880]/60 shadow-[0_2px_8px_rgba(115,98,87,0.06)] hover:shadow-[0_4px_14px_rgba(115,98,87,0.14)] hover:border-[#C5A880] transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="w-3.5 h-3.5 text-[#B48C5E] transition-transform duration-200 group-hover/btn:scale-115"
                    aria-hidden="true"
                  >
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  <span>View Location</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom subtle detail */}
          <div className="relative z-10 pt-4 border-t border-[#EAE3DA] mt-6 flex items-center justify-center gap-2 text-xs font-sans text-[#8C7A6E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]/60" />
            <span className="tracking-wider">Tradition &amp; Festivity</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]/60" />
          </div>
        </article>

        {/* ======================================================== */}
        {/* EVENT CARD 2: VALIMA */}
        {/* ======================================================== */}
        <article
          className={`group relative card-paper rounded-3xl p-6 sm:p-10 flex flex-col justify-between border border-[#C5A880]/45 shadow-[0_10px_35px_-10px_rgba(115,98,87,0.08)] hover:shadow-[0_20px_45px_-12px_rgba(115,98,87,0.15)] hover:-translate-y-1.5 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
          aria-label="Valima Event Card"
        >
          {/* Subtle warm champagne foil perimeter line */}
          <div
            className="absolute inset-3 sm:inset-4 rounded-2xl border border-[#C5A880]/30 pointer-events-none group-hover:border-[#C5A880]/60 transition-colors duration-500"
            aria-hidden="true"
          >
            <div className="absolute inset-[3px] rounded-[13px] border border-dashed border-[#C5A880]/20" />
          </div>

          {/* Four Corner Rose Botanical Flourishes */}
          <div className="absolute top-2 left-2">
            <CornerFlourish position="top-left" className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <div className="absolute top-2 right-2">
            <CornerFlourish position="top-right" className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <div className="absolute bottom-2 left-2">
            <CornerFlourish position="bottom-left" className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <div className="absolute bottom-2 right-2">
            <CornerFlourish position="bottom-right" className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>

          {/* Card Content Interior */}
          <div className="relative z-10 text-center pt-4 sm:pt-6 pb-2">
            
            {/* Scalloped top arch motif */}
            <MihrabArch className="scale-75 -my-2 opacity-80" />

            {/* Event Header Kicker */}
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#8B6B4E] block mt-2 mb-2 font-medium">
              The Grand Reception
            </span>

            {/* Event Name */}
            <h4 className="font-serif text-4xl sm:text-5xl tracking-[0.16em] font-light text-[#2D231E] mb-1">
              VALIMA
            </h4>

            {/* Rose divider */}
            <div className="flex items-center justify-center gap-2 my-4" aria-hidden="true">
              <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-r from-transparent to-[#C5A880]" />
              <span className="w-2 h-2 rotate-45 border border-[#C5A880] bg-[#FAF8F5]" />
              <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-l from-transparent to-[#C5A880]" />
            </div>

            {/* Prominent Date & Distinct Two-Detail Time Schedule */}
            <div className="my-6 py-4 px-3 sm:px-6 rounded-2xl bg-[#F8F3EC]/70 border border-[#EBE1D4]">
              {/* Date */}
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#8C7B6F] block mb-1">
                Date
              </span>
              <span className="font-serif text-3xl sm:text-4xl text-[#2D231E] font-normal tracking-wide block">
                26 October
              </span>

              {/* Time hairline divider */}
              <div className="w-16 h-[1px] bg-[#C5A880]/30 mx-auto my-3" />

              {/* Distinct Gathering & Dinner Times */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 items-center">
                {/* Milestone 1: Gathering */}
                <div className="flex flex-col items-center p-1.5 sm:p-2 rounded-xl bg-[#FAF6F0] border border-[#E8DFD3]/60">
                  <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#8C7B6F] block mb-0.5">
                    Gathering
                  </span>
                  <span className="font-serif text-xl sm:text-2xl text-[#4A3729] font-medium tracking-wide">
                    9:00 PM
                  </span>
                </div>

                {/* Milestone 2: Dinner */}
                <div className="flex flex-col items-center p-1.5 sm:p-2 rounded-xl bg-[#FAF6F0] border border-[#E8DFD3]/60">
                  <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#8C7B6F] block mb-0.5">
                    Dinner
                  </span>
                  <span className="font-serif text-xl sm:text-2xl text-[#4A3729] font-medium tracking-wide">
                    10:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* ========================================================= */}
            {/* ELEGANT LOCATION AREA - VALIMA */}
            {/* ========================================================= */}
            <div className="mt-6 pt-5 border-t border-[#EFE8DE] space-y-3">
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.28em] uppercase text-[#8C7B6F] block font-medium">
                Venue &amp; Location
              </span>

              {/* Venue Name with Tasteful Location Pin Icon */}
              <div className="flex items-center justify-center gap-2 px-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#B48C5E] shrink-0"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" fill="#E4C5BE" fillOpacity="0.5" />
                </svg>
                <p className="font-serif text-2xl sm:text-3xl text-[#2D231E] font-medium tracking-wide">
                  {VALIMA_LOCATION_CONFIG.venue}
                </p>
              </div>

              {/* Subtext */}
              <p className="font-sans text-xs sm:text-sm text-[#6E5D52] tracking-wider uppercase font-light">
                {VALIMA_LOCATION_CONFIG.subtext}
              </p>

              {/* Refined "View Location" Button (Opens exact Google Maps link) */}
              <div className="pt-2">
                <a
                  href={VALIMA_LOCATION_CONFIG.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-sans tracking-[0.22em] uppercase font-medium text-[#3D3028] bg-[#F7F1E8] hover:bg-[#EFE5D8] border border-[#C5A880]/60 shadow-[0_2px_8px_rgba(115,98,87,0.06)] hover:shadow-[0_4px_14px_rgba(115,98,87,0.14)] hover:border-[#C5A880] transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="w-3.5 h-3.5 text-[#B48C5E] transition-transform duration-200 group-hover/btn:scale-115"
                    aria-hidden="true"
                  >
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  <span>View Location</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom subtle detail */}
          <div className="relative z-10 pt-4 border-t border-[#EAE3DA] mt-6 flex items-center justify-center gap-2 text-xs font-sans text-[#8C7A6E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]/60" />
            <span className="tracking-wider">Celebration &amp; Feasting</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]/60" />
          </div>
        </article>

      </div>
    </section>
  );
};
