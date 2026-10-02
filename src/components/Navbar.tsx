import React, { useState, useEffect, useRef } from 'react';

interface NavbarProps {
  onBackToCard: () => void;
  showNav: boolean;
}

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Invitation', href: '#invitation-hero' },
  { label: 'Message', href: '#invitation-message' },
  { label: 'Events', href: '#wedding-events' },
  { label: 'Venues', href: '#wedding-venues' },
  { label: 'Closing', href: '#wedding-closing' },
];

export const Navbar: React.FC<NavbarProps> = ({ onBackToCard, showNav }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  // Close menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!showNav) return null;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#E8DFD5] transition-all duration-300">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        
        {/* Left: Couple Wordmark */}
        <a
          href="#invitation-hero"
          onClick={(e) => handleNavClick(e, '#invitation-hero')}
          className="font-serif text-base sm:text-xl font-medium tracking-[0.14em] text-[#2D231E] hover:text-[#6A5A50] transition-colors whitespace-nowrap overflow-hidden text-ellipsis mr-2"
        >
          USAMA &amp; IQRA
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-8 text-xs font-sans uppercase tracking-[0.2em] text-[#705F55]"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="hover:text-[#2D231E] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: View Envelope Button + Mobile Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
          {/* "View Envelope" Action Button */}
          <button
            type="button"
            onClick={onBackToCard}
            className="px-2.5 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-sans font-medium uppercase tracking-[0.16em] text-[#3D3028] bg-[#F4EDE4] hover:bg-[#EFE5D9] border border-[#C5A880]/60 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap shadow-xs active:scale-95"
            title="View original opening envelope"
          >
            <span className="hidden xs:inline">View </span>Envelope
          </button>

          {/* Mobile Hamburger / Menu Toggle Button (Visible only on mobile/tablet < 768px) */}
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF7F2] border border-[#C5A880]/50 text-[#3D3028] hover:bg-[#F2ECE3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] cursor-pointer"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {/* Animated hamburger icon to X */}
            <div className="w-4 h-3.5 flex flex-col justify-between items-center relative">
              <span
                className={`w-4 h-[1.5px] bg-[#6A5A50] rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
                }`}
              />
              <span
                className={`w-3.5 h-[1.5px] bg-[#6A5A50] rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-4 h-[1.5px] bg-[#6A5A50] rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                }`}
              />
            </div>
          </button>

        </div>

      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden px-4 pb-4 pt-2 border-t border-[#E8DFD5]/80 bg-[#FCFAF6]/98 backdrop-blur-lg shadow-[0_12px_30px_-5px_rgba(115,98,87,0.14)] animate-in fade-in slide-in-from-top-2 duration-200"
          aria-label="Mobile Navigation"
        >
          <div className="max-w-md mx-auto py-2 flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3.5 py-2.5 rounded-xl font-sans text-xs tracking-[0.2em] uppercase text-[#5A4638] hover:text-[#2D231E] hover:bg-[#F5ECE2]/70 active:bg-[#EFE5D9] transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-[#C5A880]/60 text-xs">✦</span>
              </a>
            ))}
          </div>

          {/* Subtle bottom note */}
          <div className="pt-2 mt-1 border-t border-[#EFE8DE] text-center text-[10px] font-sans tracking-widest uppercase text-[#968478]">
            USAMA &amp; IQRA · WEDDING
          </div>
        </div>
      )}
    </header>
  );
};
