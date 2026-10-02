import React from 'react';

/**
 * PetalShower
 * Renders 7-8 delicate organic rose / blossom petals that drift gently across the screen
 * Blush, cream, and pale pink tones.
 */
interface PetalProps {
  left: string;
  delay: string;
  size: number;
  color: string;
  animationClass: string;
}

const PETALS_CONFIG: PetalProps[] = [
  { left: '15%', delay: '0.2s', size: 20, color: '#E8D2CE', animationClass: 'animate-petal-drift-1' },
  { left: '30%', delay: '0.5s', size: 16, color: '#F4E4E1', animationClass: 'animate-petal-drift-2' },
  { left: '48%', delay: '0.1s', size: 22, color: '#DEC0BB', animationClass: 'animate-petal-drift-3' },
  { left: '62%', delay: '0.7s', size: 18, color: '#F9ECE9', animationClass: 'animate-petal-drift-1' },
  { left: '78%', delay: '0.3s', size: 24, color: '#E5C8C2', animationClass: 'animate-petal-drift-2' },
  { left: '88%', delay: '0.8s', size: 15, color: '#F3E0DC', animationClass: 'animate-petal-drift-3' },
  { left: '38%', delay: '1.0s', size: 19, color: '#EAD1CC', animationClass: 'animate-petal-drift-1' },
];

export const PetalShower: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      aria-hidden="true"
    >
      {PETALS_CONFIG.map((petal, idx) => (
        <div
          key={idx}
          className={`absolute top-0 opacity-0 ${petal.animationClass}`}
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            willChange: 'transform, opacity',
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.3}
            viewBox="0 0 30 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="filter drop-shadow-[0_2px_4px_rgba(115,98,87,0.12)]"
          >
            {/* Delicate organic petal silhouette */}
            <path
              d="M 15 2 C 22 2, 29 10, 28 22 C 27 31, 20 38, 15 39 C 10 38, 3 31, 2 22 C 1 10, 8 2, 15 2 Z"
              fill={petal.color}
              fillOpacity="0.88"
            />
            {/* Soft petal vein highlight */}
            <path
              d="M 15 6 Q 16 20 15 34"
              stroke="#FFFFFF"
              strokeWidth="0.75"
              strokeOpacity="0.4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
