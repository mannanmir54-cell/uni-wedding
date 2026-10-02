import React from 'react';

/**
 * Botanical & South Asian Wedding Stationery Motifs
 * Color palette:
 * Champagne Gold: #C5A880, #B48C5E, #DFC7A2
 * Soft Sage Green: #7C8B76, #98A892
 * Blush Pink: #E4C5BE, #F3DDD8, #D89C94
 */

export const CornerFlourish: React.FC<{
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}> = ({ className = '', position = 'top-left' }) => {
  const rotationMap = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-x-[-1] scale-y-[-1]',
  };

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-14 h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 ${rotationMap[position]} ${className}`}
      aria-hidden="true"
    >
      {/* Corner geometric hairline guide */}
      <path
        d="M 6 42 L 6 6 L 42 6"
        stroke="#C5A880"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      <circle cx="6" cy="6" r="2" fill="#C5A880" fillOpacity="0.8" />
      <path
        d="M 12 36 L 12 12 L 36 12"
        stroke="#C5A880"
        strokeWidth="0.75"
        strokeDasharray="2 2"
        strokeOpacity="0.45"
      />

      {/* Gentle botanical stem */}
      <path
        d="M 6 6 C 24 10, 40 22, 54 42 C 64 56, 72 74, 82 86"
        stroke="#7C8B76"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Sage Leaves */}
      <path
        d="M 22 13 C 25 7, 34 8, 32 16 C 30 22, 23 18, 22 13 Z"
        fill="#7C8B76"
        fillOpacity="0.75"
      />
      <path
        d="M 33 21 C 41 18, 47 25, 42 31 C 37 36, 32 28, 33 21 Z"
        fill="#98A892"
        fillOpacity="0.85"
      />
      <path
        d="M 45 33 C 54 31, 58 40, 52 46 C 46 51, 42 41, 45 33 Z"
        fill="#7C8B76"
        fillOpacity="0.75"
      />
      <path
        d="M 58 50 C 68 49, 71 58, 65 65 C 60 70, 56 59, 58 50 Z"
        fill="#98A892"
        fillOpacity="0.8"
      />
      <path
        d="M 70 70 C 80 69, 83 78, 77 84 C 72 88, 68 79, 70 70 Z"
        fill="#7C8B76"
        fillOpacity="0.75"
      />

      {/* Soft Blush Petals & Rosebuds */}
      <circle cx="28" cy="18" r="2.5" fill="#E4C5BE" fillOpacity="0.9" />
      <circle cx="39" cy="27" r="3.2" fill="#EAD1CC" fillOpacity="0.85" />
      <circle cx="51" cy="42" r="3.5" fill="#E4C5BE" fillOpacity="0.9" />
      <circle cx="64" cy="60" r="3" fill="#F3DDD8" fillOpacity="0.85" />

      {/* Delicate Champagne Berries */}
      <circle cx="17" cy="18" r="1.5" fill="#C5A880" fillOpacity="0.75" />
      <circle cx="48" cy="30" r="1.5" fill="#C5A880" fillOpacity="0.75" />
      <circle cx="61" cy="45" r="1.5" fill="#C5A880" fillOpacity="0.75" />
    </svg>
  );
};

export const MonogramCrest: React.FC<{
  initials?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ initials = 'U & I', className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-20 h-20 text-xs',
    md: 'w-28 h-28 text-sm',
    lg: 'w-36 h-36 text-base',
  };

  return (
    <div className={`relative flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        {/* Outer subtle gold ring */}
        <circle
          cx="70"
          cy="70"
          r="66"
          stroke="#C5A880"
          strokeWidth="0.75"
          strokeOpacity="0.5"
          strokeDasharray="3 3"
        />
        {/* Inner solid gold ring */}
        <circle
          cx="70"
          cy="70"
          r="61"
          stroke="#C5A880"
          strokeWidth="1.2"
          strokeOpacity="0.85"
        />

        {/* Delicate Wreath Left */}
        <path
          d="M 70 12 C 40 14, 18 36, 18 70 C 18 95, 36 118, 70 126"
          stroke="#7C8B76"
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />
        {/* Delicate Wreath Right */}
        <path
          d="M 70 12 C 100 14, 122 36, 122 70 C 122 95, 104 118, 70 126"
          stroke="#7C8B76"
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />

        {/* Soft botanical leaves on wreath */}
        <path
          d="M 32 34 C 28 26, 38 24, 39 31 C 40 37, 34 39, 32 34 Z"
          fill="#7C8B76"
          fillOpacity="0.7"
        />
        <path
          d="M 21 54 C 13 50, 18 42, 25 45 C 30 48, 26 56, 21 54 Z"
          fill="#98A892"
          fillOpacity="0.8"
        />
        <path
          d="M 20 86 C 13 88, 15 98, 23 95 C 28 93, 26 84, 20 86 Z"
          fill="#7C8B76"
          fillOpacity="0.7"
        />
        <path
          d="M 35 108 C 30 114, 40 118, 43 111 C 45 106, 39 104, 35 108 Z"
          fill="#98A892"
          fillOpacity="0.8"
        />

        <path
          d="M 108 34 C 112 26, 102 24, 101 31 C 100 37, 106 39, 108 34 Z"
          fill="#7C8B76"
          fillOpacity="0.7"
        />
        <path
          d="M 119 54 C 127 50, 122 42, 115 45 C 110 48, 114 56, 119 54 Z"
          fill="#98A892"
          fillOpacity="0.8"
        />
        <path
          d="M 120 86 C 127 88, 125 98, 117 95 C 112 93, 114 84, 120 86 Z"
          fill="#7C8B76"
          fillOpacity="0.7"
        />
        <path
          d="M 105 108 C 110 114, 100 118, 97 111 C 95 106, 101 104, 105 108 Z"
          fill="#98A892"
          fillOpacity="0.8"
        />

        {/* Blush floral dots */}
        <circle cx="70" cy="12" r="3" fill="#E4C5BE" />
        <circle cx="70" cy="126" r="3" fill="#E4C5BE" />
        <circle cx="18" cy="70" r="2.5" fill="#F3DDD8" />
        <circle cx="122" cy="70" r="2.5" fill="#F3DDD8" />
      </svg>

      <span className="font-serif tracking-[0.25em] text-[#5A4638] uppercase font-medium pl-1 select-none">
        {initials}
      </span>
    </div>
  );
};

export const ElegantDivider: React.FC<{
  className?: string;
  variant?: 'floral' | 'simple' | 'diamond' | 'rose';
}> = ({ className = '', variant = 'floral' }) => {
  if (variant === 'simple') {
    return (
      <div className={`flex items-center justify-center gap-3 my-6 ${className}`} aria-hidden="true">
        <span className="h-[1px] w-16 md:w-28 bg-gradient-to-r from-transparent to-[#C5A880]/60" />
        <span className="w-1.5 h-1.5 rotate-45 border border-[#C5A880] bg-[#FAF8F5]" />
        <span className="h-[1px] w-16 md:w-28 bg-gradient-to-l from-transparent to-[#C5A880]/60" />
      </div>
    );
  }

  if (variant === 'diamond') {
    return (
      <div className={`flex items-center justify-center gap-2 my-8 ${className}`} aria-hidden="true">
        <span className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent via-[#C5A880]/50 to-[#C5A880]" />
        <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
        <span className="w-2 h-2 rotate-45 border border-[#C5A880] bg-[#FAF8F5]" />
        <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
        <span className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent via-[#C5A880]/50 to-[#C5A880]" />
      </div>
    );
  }

  if (variant === 'rose') {
    return (
      <div className={`flex items-center justify-center gap-3 my-6 ${className}`} aria-hidden="true">
        <span className="h-[1px] w-14 md:w-24 bg-gradient-to-r from-transparent to-[#C5A880]/60" />
        <svg viewBox="0 0 60 24" fill="none" className="w-12 h-5">
          {/* Stem & Leaves */}
          <path d="M 4 12 C 16 12, 22 10, 30 12 C 38 14, 44 12, 56 12" stroke="#C5A880" strokeWidth="0.8" />
          <path d="M 23 11 C 18 7, 25 5, 27 9 Z" fill="#7C8B76" fillOpacity="0.8" />
          <path d="M 37 13 C 42 17, 35 19, 33 15 Z" fill="#7C8B76" fillOpacity="0.8" />
          {/* Layered Rosebud Center */}
          <circle cx="30" cy="12" r="4" fill="#E4C5BE" />
          <path d="M 28 11 C 29 9, 32 10, 32 12 C 31 14, 28 13, 28 11 Z" fill="#D89C94" />
          <circle cx="30" cy="12" r="1.5" fill="#C5A880" />
        </svg>
        <span className="h-[1px] w-14 md:w-24 bg-gradient-to-l from-transparent to-[#C5A880]/60" />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center gap-3 my-8 ${className}`} aria-hidden="true">
      <span className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-[#C5A880]/60" />
      
      {/* Center delicate rosebud / leaf motif */}
      <svg
        viewBox="0 0 48 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-5"
      >
        <path
          d="M 6 12 C 14 12, 18 10, 24 12 C 30 14, 34 12, 42 12"
          stroke="#C5A880"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Left leaf */}
        <path
          d="M 19 11 C 15 7, 21 5, 23 9 Z"
          fill="#7C8B76"
          fillOpacity="0.75"
        />
        {/* Right leaf */}
        <path
          d="M 29 13 C 33 17, 27 19, 25 15 Z"
          fill="#7C8B76"
          fillOpacity="0.75"
        />
        {/* Center blush bud */}
        <circle cx="24" cy="12" r="2.8" fill="#E4C5BE" />
        <circle cx="24" cy="12" r="1.4" fill="#C5A880" />
      </svg>

      <span className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-[#C5A880]/60" />
    </div>
  );
};

/**
 * Traditional South Asian Mughal/Islamic Scalloped Arch Motif
 */
export const MihrabArch: React.FC<{
  className?: string;
}> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 160 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-36 sm:w-44 h-12 mx-auto text-[#C5A880] ${className}`}
      aria-hidden="true"
    >
      {/* Fine Arch Apex */}
      <path
        d="M 10 46 C 25 46, 35 34, 45 28 C 55 22, 65 24, 75 14 C 77 12, 79 10, 80 6 C 81 10, 83 12, 85 14 C 95 24, 105 22, 115 28 C 125 34, 135 46, 150 46"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.7"
        strokeLinecap="round"
      />
      {/* Delicate inner scalloped hairline */}
      <path
        d="M 20 46 C 32 46, 42 36, 50 31 C 60 25, 68 28, 76 18 C 78 15, 79 12, 80 9 C 81 12, 82 15, 84 18 C 92 28, 100 25, 110 31 C 118 36, 128 46, 140 46"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="2 2"
        strokeOpacity="0.45"
      />
      {/* Center finial dot */}
      <circle cx="80" cy="4" r="2" fill="currentColor" fillOpacity="0.85" />
      <circle cx="80" cy="4" r="4" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
    </svg>
  );
};

/**
 * Sacred Bismillah Calligraphic Header
 */
export const BismillahHeader: React.FC<{
  className?: string;
}> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center justify-center my-4 ${className}`}>
      {/* Authentic elegant Bismillah calligraphic vector representation */}
      <svg
        viewBox="0 0 260 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-48 sm:w-56 h-auto text-[#7A6455]"
        aria-label="In the name of Allah, the Most Beneficent, the Most Merciful"
      >
        <path
          d="M 20 28 C 24 24, 28 20, 36 21 C 42 22, 46 27, 50 25 C 54 23, 56 16, 62 18 C 66 19, 68 26, 74 24 C 80 22, 84 15, 90 17 C 96 19, 98 25, 104 23 C 112 20, 118 14, 124 20 C 130 26, 134 22, 140 18 C 146 14, 152 18, 158 22 C 164 26, 172 20, 178 16 C 184 12, 192 18, 198 24 C 204 30, 212 24, 218 19 C 224 14, 232 20, 240 24"
          stroke="#9D8366"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Subtle diacritics & dots */}
        <circle cx="48" cy="14" r="1.5" fill="#C5A880" />
        <circle cx="86" cy="11" r="1.5" fill="#C5A880" />
        <circle cx="128" cy="12" r="1.5" fill="#C5A880" />
        <circle cx="170" cy="11" r="1.5" fill="#C5A880" />
        <circle cx="214" cy="13" r="1.5" fill="#C5A880" />
        <circle cx="68" cy="33" r="1.5" fill="#C5A880" />
        <circle cx="152" cy="31" r="1.5" fill="#C5A880" />
      </svg>
      <span className="font-serif italic text-xs tracking-widest text-[#9D8366] mt-1 select-none">
        In the name of Allah, the Most Beneficent, the Most Merciful
      </span>
    </div>
  );
};

/**
 * Exquisite Couple Floral Wreath & Rose Halo for Hero Centerpiece
 */
export const CoupleFloralWreath: React.FC<{
  className?: string;
}> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] h-auto pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Outer subtle gold oval guidelines */}
      <ellipse
        cx="200"
        cy="160"
        rx="180"
        ry="135"
        stroke="#C5A880"
        strokeWidth="0.75"
        strokeDasharray="4 4"
        strokeOpacity="0.35"
      />
      <ellipse
        cx="200"
        cy="160"
        rx="168"
        ry="125"
        stroke="#C5A880"
        strokeWidth="1"
        strokeOpacity="0.45"
      />

      {/* Left Botanical Branch */}
      <path
        d="M 200 35 C 105 38, 30 95, 30 160 C 30 225, 105 282, 200 285"
        stroke="#7C8B76"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
      {/* Right Botanical Branch */}
      <path
        d="M 200 35 C 295 38, 370 95, 370 160 C 370 225, 295 282, 200 285"
        stroke="#7C8B76"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />

      {/* Top Rose Trio */}
      <circle cx="200" cy="35" r="7" fill="#E4C5BE" />
      <circle cx="200" cy="35" r="4" fill="#D89C94" />
      <circle cx="200" cy="35" r="2" fill="#C5A880" />
      <circle cx="185" cy="40" r="4.5" fill="#EEDAD6" />
      <circle cx="215" cy="40" r="4.5" fill="#EEDAD6" />

      {/* Bottom Rose Trio */}
      <circle cx="200" cy="285" r="7" fill="#E4C5BE" />
      <circle cx="200" cy="285" r="4" fill="#D89C94" />
      <circle cx="200" cy="285" r="2" fill="#C5A880" />
      <circle cx="185" cy="280" r="4.5" fill="#EEDAD6" />
      <circle cx="215" cy="280" r="4.5" fill="#EEDAD6" />

      {/* Left Side Rose Medallions */}
      <circle cx="36" cy="120" r="5.5" fill="#E4C5BE" />
      <circle cx="36" cy="120" r="2.5" fill="#D89C94" />
      <circle cx="36" cy="200" r="5.5" fill="#E4C5BE" />
      <circle cx="36" cy="200" r="2.5" fill="#D89C94" />

      {/* Right Side Rose Medallions */}
      <circle cx="364" cy="120" r="5.5" fill="#E4C5BE" />
      <circle cx="364" cy="120" r="2.5" fill="#D89C94" />
      <circle cx="364" cy="200" r="5.5" fill="#E4C5BE" />
      <circle cx="364" cy="200" r="2.5" fill="#D89C94" />

      {/* Sage Green Leaves Left */}
      <path d="M 68 76 C 58 66, 74 62, 78 72 C 80 80, 72 82, 68 76 Z" fill="#7C8B76" fillOpacity="0.75" />
      <path d="M 38 155 C 26 150, 32 140, 42 144 C 48 148, 44 158, 38 155 Z" fill="#98A892" fillOpacity="0.8" />
      <path d="M 72 245 C 62 254, 76 260, 80 250 C 82 242, 74 240, 72 245 Z" fill="#7C8B76" fillOpacity="0.75" />

      {/* Sage Green Leaves Right */}
      <path d="M 332 76 C 342 66, 326 62, 322 72 C 320 80, 328 82, 332 76 Z" fill="#7C8B76" fillOpacity="0.75" />
      <path d="M 362 155 C 374 150, 368 140, 358 144 C 352 148, 356 158, 362 155 Z" fill="#98A892" fillOpacity="0.8" />
      <path d="M 328 245 C 338 254, 324 260, 320 250 C 318 242, 326 240, 328 245 Z" fill="#7C8B76" fillOpacity="0.75" />

      {/* Gold Berries */}
      <circle cx="95" cy="58" r="2" fill="#C5A880" fillOpacity="0.8" />
      <circle cx="305" cy="58" r="2" fill="#C5A880" fillOpacity="0.8" />
      <circle cx="95" cy="262" r="2" fill="#C5A880" fillOpacity="0.8" />
      <circle cx="305" cy="262" r="2" fill="#C5A880" fillOpacity="0.8" />
    </svg>
  );
};
