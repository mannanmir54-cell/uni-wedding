import React, { useState, useEffect } from 'react';
import { CornerFlourish, MonogramCrest, MihrabArch, ElegantDivider } from './Botanicals.tsx';
import { PetalShower } from './PetalShower.tsx';
import { AmbientParticles } from './AmbientParticles.tsx';

interface OpeningScreenProps {
  onOpenComplete: () => void;
  isOpen: boolean;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onOpenComplete, isOpen }) => {
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'opening' | 'revealing' | 'completed'>('idle');
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [cardPressed, setCardPressed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Sync state if reopened from Navbar
  useEffect(() => {
    if (!isOpen) {
      setAnimationPhase('idle');
      setIsFadingOut(false);
      setCardPressed(false);
    }
  }, [isOpen]);

  const handleTriggerOpen = () => {
    if (animationPhase !== 'idle') return;

    setCardPressed(true);

    if (reducedMotion) {
      // Immediate graceful fade for users who prefer reduced motion
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          setAnimationPhase('completed');
          onOpenComplete();
        }, 700);
      }, 150);
      return;
    }

    // Realistic physical opening sequence (slow, graceful, ~2.8s)
    // Phase 1: 0ms - 200ms tactile press
    // Phase 2: 250ms Flap rotates back in 3D
    setTimeout(() => {
      setAnimationPhase('opening');
    }, 200);

    // Phase 3: 850ms Inner invitation card glides up smoothly with soft golden light
    setTimeout(() => {
      setAnimationPhase('revealing');
    }, 800);

    // Phase 4: 2300ms Gentle fade-out of the opening stage into the main page
    setTimeout(() => {
      setIsFadingOut(true);
    }, 2300);

    // Phase 5: 3000ms Finish and unlock DOM
    setTimeout(() => {
      setAnimationPhase('completed');
      onOpenComplete();
    }, 3000);
  };

  // If already opened and finished, do not render to avoid blocking scroll
  if (animationPhase === 'completed' && isOpen) {
    return null;
  }

  const isFlapOpen = animationPhase === 'opening' || animationPhase === 'revealing';
  const isCardEmerging = animationPhase === 'revealing';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 paper-texture overflow-hidden select-none transition-opacity duration-700 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Wedding Invitation Card"
    >
      {/* 1. Ambient Background Particles & Gentle Rose Petals (Always floating in background) */}
      <AmbientParticles />

      {/* 2. Additional Delicate Floating Petals during the opening reveal */}
      {isFlapOpen && <PetalShower />}

      {/* 3. Soft Romantic Ambient Radial Glows */}
      <div
        className="absolute w-[360px] sm:w-[560px] h-[360px] sm:h-[560px] rounded-full bg-[#F4EBE8]/50 blur-3xl pointer-events-none -top-20 -left-20"
        aria-hidden="true"
      />
      <div
        className="absolute w-[360px] sm:w-[560px] h-[360px] sm:h-[560px] rounded-full bg-[#EBF0E9]/45 blur-3xl pointer-events-none -bottom-20 -right-20"
        aria-hidden="true"
      />

      {/* 4. Subtle Golden Bloom Light during the reveal */}
      <div
        className={`absolute inset-0 bg-radial from-[#FFF5E0]/45 via-transparent to-transparent pointer-events-none transition-all duration-1000 ${
          isCardEmerging ? 'opacity-100 scale-125' : 'opacity-0 scale-95'
        }`}
        aria-hidden="true"
      />

      {/* 5. Center Composition Container */}
      <div className="relative w-full max-w-[350px] sm:max-w-[420px] md:max-w-[470px] flex flex-col items-center">
        
        {/* PHYSICAL INVITATION FOLIO / ENVELOPE STAGE */}
        <div
          role="button"
          tabIndex={0}
          onClick={handleTriggerOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleTriggerOpen();
            }
          }}
          className={`relative w-full aspect-[1.3/1] sm:aspect-[1.35/1] perspective-1200 cursor-pointer group transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] focus-visible:ring-offset-4 rounded-3xl ${
            cardPressed ? 'scale-[0.98]' : 'hover:scale-[1.01]'
          }`}
          aria-label="Click or tap to open wedding invitation for Usama and Iqra"
        >
          {/* A. Back Shell of the Folio / Envelope */}
          <div className="absolute inset-0 rounded-3xl bg-[#F7F2EB] border border-[#C5A880]/40 shadow-[0_25px_60px_-15px_rgba(115,98,87,0.2),0_4px_16px_-2px_rgba(115,98,87,0.06)] overflow-hidden">
            {/* Subtle silk lining with fine gold grid */}
            <div className="absolute inset-0 bg-[#EFE9DE]/60" />
            <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-dashed border-[#C5A880]/25" />
          </div>

          {/* B. INNER INVITATION CARD (Glides gracefully upward during opening) */}
          <div
            className={`absolute left-[3%] right-[3%] top-[3%] bottom-[3%] card-paper rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-between text-center border border-[#C5A880]/45 shadow-[0_8px_25px_-5px_rgba(115,98,87,0.12)] transition-all duration-1000 ${
              isCardEmerging
                ? '-translate-y-[48%] sm:-translate-y-[54%] shadow-[0_18px_45px_rgba(197,168,128,0.35)]'
                : 'translate-y-0'
            }`}
            style={{
              zIndex: isCardEmerging ? 30 : 5,
              transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            {/* Double Champagne-Gold Hairline Card Border */}
            <div
              className="absolute inset-2 sm:inset-3 rounded-xl border border-[#C5A880]/40 pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute inset-[2.5px] rounded-[9px] border border-dashed border-[#C5A880]/20" />
            </div>

            {/* Corner Rose Botanical Flourishes */}
            <div className="absolute top-1 left-1 sm:top-2 sm:left-2">
              <CornerFlourish position="top-left" className="w-8 h-8 sm:w-11 sm:h-11" />
            </div>
            <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
              <CornerFlourish position="top-right" className="w-8 h-8 sm:w-11 sm:h-11" />
            </div>
            <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2">
              <CornerFlourish position="bottom-left" className="w-8 h-8 sm:w-11 sm:h-11" />
            </div>
            <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2">
              <CornerFlourish position="bottom-right" className="w-8 h-8 sm:w-11 sm:h-11" />
            </div>

            {/* Card Content Interior */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center h-full py-1">
              
              {/* Architectural Arch Detail */}
              <MihrabArch className="scale-65 -my-2 opacity-80" />

              {/* Monogram Crest */}
              <div className="scale-75 -my-1">
                <MonogramCrest initials="U & I" size="sm" />
              </div>

              {/* Couple Names on the Invitation: USAMA & IQRA */}
              <div className="my-1 sm:my-2 space-y-0.5">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] font-light text-[#2D231E] leading-tight">
                  USAMA
                </h1>
                
                <div className="flex items-center justify-center my-0.5">
                  <span className="font-script text-2xl sm:text-3xl text-[#B48C5E] select-none">
                    &amp;
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] font-light text-[#2D231E] leading-tight">
                  IQRA
                </h1>
              </div>

              {/* Subtext line */}
              <p className="font-sans text-[10px] sm:text-xs tracking-[0.26em] uppercase text-[#6B5A4E] font-medium mt-1">
                Together with their families
              </p>

              {/* Delicate Rosebud divider */}
              <ElegantDivider variant="rose" className="my-2 scale-75" />
            </div>
          </div>

          {/* C. FRONT ENVELOPE POCKET (Triangular folds holding the card) */}
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden"
            style={{ zIndex: 15 }}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 460 340"
              preserveAspectRatio="none"
              className="w-full h-full filter drop-shadow-[0_-3px_8px_rgba(115,98,87,0.08)]"
            >
              {/* Left Flap */}
              <polygon
                points="0,0 230,175 0,340"
                fill="#F8F3EC"
                stroke="#C5A880"
                strokeWidth="0.8"
                strokeOpacity="0.4"
              />
              {/* Right Flap */}
              <polygon
                points="460,0 230,175 460,340"
                fill="#F8F3EC"
                stroke="#C5A880"
                strokeWidth="0.8"
                strokeOpacity="0.4"
              />
              {/* Bottom Flap */}
              <polygon
                points="0,340 230,150 460,340"
                fill="#FCFAF6"
                stroke="#C5A880"
                strokeWidth="0.9"
                strokeOpacity="0.5"
              />
              {/* Bottom flap gold accent hairline */}
              <polyline
                points="8,335 230,155 452,335"
                fill="none"
                stroke="#C5A880"
                strokeWidth="0.6"
                strokeDasharray="3 3"
                strokeOpacity="0.45"
              />
            </svg>
          </div>

          {/* D. TOP TRIANGULAR FOLD FLAP (3D Rotation) */}
          <div
            className={`absolute top-0 left-0 right-0 h-[56%] origin-top preserve-3d transition-transform duration-900 ${
              isFlapOpen ? '-rotate-x-180 pointer-events-none' : 'rotate-x-0'
            }`}
            style={{
              zIndex: isFlapOpen ? 4 : 20,
              transformOrigin: 'top center',
              transitionTimingFunction: 'cubic-bezier(0.35, 0, 0.25, 1)',
            }}
          >
            {/* Flap Face */}
            <svg
              viewBox="0 0 460 190"
              preserveAspectRatio="none"
              className="w-full h-full filter drop-shadow-[0_4px_10px_rgba(115,98,87,0.14)]"
            >
              <polygon
                points="0,0 230,185 460,0"
                fill="#FAF6F0"
                stroke="#C5A880"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
              {/* Inner decorative hairline on flap */}
              <polyline
                points="12,4 230,178 448,4"
                fill="none"
                stroke="#C5A880"
                strokeWidth="0.6"
                strokeDasharray="3 3"
                strokeOpacity="0.5"
              />
            </svg>

            {/* Champagne-Gold Wax Seal on the Flap Tip */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 transition-all duration-500 ${
                isFlapOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
              }`}
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-[#E0CAA8] via-[#C5A880] to-[#997951] p-[1.5px] shadow-[0_4px_10px_rgba(90,70,56,0.25)] flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-[#FFF6E5]/40 flex items-center justify-center bg-[#BA986E]">
                  <span className="font-serif text-[10px] sm:text-xs font-semibold text-[#FFFDF9] tracking-widest uppercase select-none">
                    U &amp; I
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 6. REFINED PROMPT & "OPEN INVITATION" BUTTON */}
        <div className="mt-7 sm:mt-9 flex flex-col items-center">
          <button
            type="button"
            onClick={handleTriggerOpen}
            disabled={animationPhase !== 'idle'}
            className={`group relative inline-flex items-center justify-center px-9 sm:px-11 py-3 sm:py-3.5 rounded-full bg-[#FAF7F2] hover:bg-[#F5EDE4] text-[#2D231E] border border-[#C5A880] shadow-[0_4px_14px_rgba(115,98,87,0.08)] hover:shadow-[0_6px_18px_rgba(115,98,87,0.14)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] focus-visible:ring-offset-2 cursor-pointer ${
              cardPressed ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
            }`}
          >
            {/* Subtle inner gold accent ring */}
            <span
              className="absolute inset-[3px] rounded-full border border-[#C5A880]/30 group-hover:border-[#C5A880]/60 transition-colors pointer-events-none"
              aria-hidden="true"
            />
            <span className="font-sans text-xs sm:text-sm tracking-[0.28em] uppercase font-semibold text-[#3D3028] group-hover:text-[#211814] transition-colors">
              Open Invitation
            </span>
          </button>

          {/* Gentle touch affordance text */}
          <span className="mt-3 text-[11px] font-sans tracking-widest uppercase text-[#968478] flex items-center gap-1.5 opacity-80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]/60 animate-pulse" />
            Tap card or button to open
          </span>
        </div>

      </div>
    </div>
  );
};
