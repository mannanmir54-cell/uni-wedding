/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { OpeningScreen } from './components/OpeningScreen.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { InvitationMessage } from './components/InvitationMessage.tsx';
import { EventsSection } from './components/EventsSection.tsx';
import { VenuesSection } from './components/VenuesSection.tsx';
import { ClosingSection } from './components/ClosingSection.tsx';
import { AmbientParticles } from './components/AmbientParticles.tsx';
import { MusicPlayer } from './components/MusicPlayer.tsx';
import { weddingAudio } from './utils/audioPlayer.ts';

export default function App() {
  const [hasOpened, setHasOpened] = useState(() => {
    try {
      return sessionStorage.getItem('usama_iqra_invitation_opened') === 'true';
    } catch {
      return false;
    }
  });
  const mainContentRef = useRef<HTMLDivElement>(null);

  const handleOpenComplete = () => {
    setHasOpened(true);
    try {
      sessionStorage.setItem('usama_iqra_invitation_opened', 'true');
      // If user hasn't explicitly disabled music, softly start background music upon invitation open
      const musicPref = sessionStorage.getItem('wedding_music_enabled');
      if (musicPref !== 'false') {
        weddingAudio.play().catch(() => {});
        sessionStorage.setItem('wedding_music_enabled', 'true');
      }
    } catch {
      // Safe fallback if sessionStorage is restricted
    }
  };

  const handleBackToEnvelope = () => {
    setHasOpened(false);
    try {
      sessionStorage.removeItem('usama_iqra_invitation_opened');
    } catch {
      // Safe fallback
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-[#FAF8F5] text-[#2D231E] selection:bg-[#EAD8D5] selection:text-[#2D231E] ${!hasOpened ? 'h-screen overflow-hidden' : ''}`}>
      
      {/* 1. INITIAL SCREEN: Luxury Physical Wedding Invitation Envelope & Card Opening */}
      <OpeningScreen
        isOpen={hasOpened}
        onOpenComplete={handleOpenComplete}
      />

      {/* 2. MAIN PAGE FOUNDATION */}
      <div ref={mainContentRef} id="main-content" className="relative">
        
        {/* Subtle persistent navigation bar when scrolling */}
        <Navbar showNav={hasOpened} onBackToCard={handleBackToEnvelope} />

        {/* Ambient floating rose petals and warm bokeh */}
        {hasOpened && <AmbientParticles />}

        {/* Floating subtle background music control */}
        {hasOpened && <MusicPlayer />}

        <main className="relative paper-texture overflow-hidden">
          {/* Subtle floral background radial glows */}
          <div
            className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#F5ECE8]/30 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-[1200px] right-0 w-[500px] h-[500px] rounded-full bg-[#EDF2EB]/30 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10">
            {/* Section 1: Hero */}
            <HeroSection />

            {/* Section 2: Invitation Message */}
            <InvitationMessage />

            {/* Section 3: Wedding Events */}
            <EventsSection />

            {/* Section 4: Venues */}
            <VenuesSection />

            {/* Section 5: Closing */}
            <ClosingSection />
          </div>
        </main>
      </div>

    </div>
  );
}
