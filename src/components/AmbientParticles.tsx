import React from 'react';

/**
 * AmbientParticles
 * Subtly renders 8-10 ultra-soft floating rose petals and warm champagne bokeh particles
 * Creates a dreamy, royal South Asian wedding ambiance without visual distraction.
 */
interface Particle {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: string;
  delay: string;
  type: 'petal' | 'dust';
  opacity: number;
}

const PARTICLES: Particle[] = [
  { id: 1, left: '8%', top: '15%', size: 14, duration: '22s', delay: '0s', type: 'petal', opacity: 0.45 },
  { id: 2, left: '22%', top: '45%', size: 6, duration: '18s', delay: '4s', type: 'dust', opacity: 0.4 },
  { id: 3, left: '42%', top: '10%', size: 16, duration: '26s', delay: '2s', type: 'petal', opacity: 0.4 },
  { id: 4, left: '65%', top: '30%', size: 5, duration: '20s', delay: '6s', type: 'dust', opacity: 0.35 },
  { id: 5, left: '85%', top: '20%', size: 15, duration: '24s', delay: '1s', type: 'petal', opacity: 0.45 },
  { id: 6, left: '15%', top: '75%', size: 6, duration: '19s', delay: '5s', type: 'dust', opacity: 0.35 },
  { id: 7, left: '52%', top: '80%', size: 13, duration: '25s', delay: '3s', type: 'petal', opacity: 0.4 },
  { id: 8, left: '78%', top: '65%', size: 15, duration: '21s', delay: '7s', type: 'petal', opacity: 0.45 },
  { id: 9, left: '92%', top: '85%', size: 5, duration: '17s', delay: '2s', type: 'dust', opacity: 0.3 },
];

export const AmbientParticles: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      aria-hidden="true"
    >
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute animate-ambient-drift"
          style={{
            left: p.left,
            top: p.top,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
            willChange: 'transform',
          }}
        >
          {p.type === 'petal' ? (
            <svg
              width={p.size}
              height={p.size * 1.3}
              viewBox="0 0 20 26"
              fill="none"
              className="drop-shadow-sm"
            >
              <path
                d="M 10 1 C 15 1, 19 6, 18 15 C 17 21, 13 25, 10 25 C 7 25, 3 21, 2 15 C 1 6, 5 1, 10 1 Z"
                fill="#E8D2CE"
                fillOpacity="0.8"
              />
            </svg>
          ) : (
            <div
              className="rounded-full bg-[#E5D3BC]"
              style={{
                width: p.size,
                height: p.size,
                boxShadow: '0 0 8px rgba(197, 168, 128, 0.4)',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
