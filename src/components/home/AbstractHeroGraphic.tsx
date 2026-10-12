import React from 'react';

export const AbstractHeroGraphic: React.FC = () => {
  return (
    <svg 
      viewBox="0 0 500 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block', maxWidth: '500px', margin: '0 auto', animation: 'float 6s ease-in-out infinite' }}
    >
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFEFC" />
          <stop offset="50%" stopColor="#F9F6FF" /> {/* subtle lavender */}
          <stop offset="100%" stopColor="#F0F7FF" /> {/* subtle ice-blue */}
        </linearGradient>
        <linearGradient id="champagneGlow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="#D9A52E" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      
      {/* Soft background shape */}
      <circle cx="250" cy="250" r="220" fill="url(#bgGradient)" />
      <circle cx="250" cy="250" r="220" fill="url(#champagneGlow)" />
      
      {/* Thin connecting lines */}
      <path d="M 120 300 L 250 365 L 380 300" stroke="var(--border-subtle)" strokeWidth="1" fill="none" />
      <path d="M 250 365 L 250 420" stroke="var(--border-subtle)" strokeWidth="1" fill="none" />
      <path d="M 150 180 L 250 230 L 350 180" stroke="var(--border-subtle)" strokeWidth="1" fill="none" />
      <path d="M 250 110 L 250 230" stroke="var(--border-subtle)" strokeWidth="1" fill="none" />
      
      <line x1="250" y1="230" x2="250" y2="365" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Main Isometric Cube - Deep Ink */}
      <g transform="translate(0, 40)">
        {/* Top */}
        <path d="M 250 150 L 310 180 L 250 210 L 190 180 Z" fill="var(--text-secondary)" opacity="0.1" />
        {/* Left */}
        <path d="M 190 180 L 250 210 L 250 280 L 190 250 Z" fill="var(--text-primary)" opacity="0.9" />
        {/* Right */}
        <path d="M 250 210 L 310 180 L 310 250 L 250 280 Z" fill="var(--dark-bg-secondary)" />
      </g>

      {/* Smaller Isometric Cube - Focal Gold */}
      <g transform="translate(-70, -20)">
        <path d="M 250 220 L 280 235 L 250 250 L 220 235 Z" fill="#E8BD56" />
        <path d="M 220 235 L 250 250 L 250 285 L 220 270 Z" fill="var(--gold-primary)" />
        <path d="M 250 250 L 280 235 L 280 270 L 250 285 Z" fill="#B3851D" />
      </g>
      
      {/* Minimal nodes */}
      <circle cx="120" cy="300" r="3" fill="var(--text-secondary)" />
      <circle cx="380" cy="300" r="3" fill="var(--text-secondary)" />
      <circle cx="150" cy="180" r="3" fill="var(--text-secondary)" />
      <circle cx="350" cy="180" r="3" fill="var(--text-secondary)" />
      <circle cx="250" cy="110" r="3" fill="var(--text-secondary)" />
      <circle cx="250" cy="420" r="3" fill="var(--text-secondary)" />

    </svg>
  );
};
