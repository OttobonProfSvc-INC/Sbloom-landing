import React from 'react';

export const HeroSubtleCurves: React.FC = () => {
  const curve1 = "M -40,190 C 240,150 480,320 740,290 C 1000,260 1220,150 1480,180";
  const curve2 = "M -30,470 C 260,430 540,500 790,420 C 1030,340 1260,490 1480,430";
  const curve3 = "M 480,120 C 680,85 920,130 1120,190 C 1300,240 1400,190 1480,160";

  return (
    <div className="hero-subtle-curves-layer" aria-hidden="true">
      <svg
        className="hero-subtle-curves-svg"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Extremely thin, low-opacity muted gold linear gradient */}
          <linearGradient id="subtleGoldLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9952E" stopOpacity="0.08" />
            <stop offset="25%" stopColor="#C9952E" stopOpacity="0.38" />
            <stop offset="55%" stopColor="#E7BD62" stopOpacity="0.55" />
            <stop offset="80%" stopColor="#C9952E" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C9952E" stopOpacity="0.08" />
          </linearGradient>

          {/* Delicate traveling pulse gradient (subtle highlight) */}
          <linearGradient id="delicateStream" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9952E" stopOpacity="0" />
            <stop offset="60%" stopColor="#E7BD62" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.75" />
          </linearGradient>

          {/* Soft blur for tiny sparkles */}
          <filter id="tinySparkleGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ========================================================
            1. DELICATE 1PX GOLDEN CURVES (ELEGANT & RESTRICTED)
            ======================================================== */}
        <path d={curve1} stroke="url(#subtleGoldLine)" strokeWidth="1" />
        <path d={curve2} stroke="url(#subtleGoldLine)" strokeWidth="1" />
        <path d={curve3} stroke="url(#subtleGoldLine)" strokeWidth="0.85" />

        {/* Traveling subtle highlight pulse (approx 1.2px) */}
        <path d={curve1} stroke="url(#delicateStream)" strokeWidth="1.3" className="subtle-curve-pulse pulse-1" />
        <path d={curve2} stroke="url(#delicateStream)" strokeWidth="1.2" className="subtle-curve-pulse pulse-2" />
        <path d={curve3} stroke="url(#delicateStream)" strokeWidth="1.1" className="subtle-curve-pulse pulse-3" />

        {/* ========================================================
            2. TINY DELICATE GOLDEN SPARKLES (3-7PX) GLIDING ON CURVES
            ======================================================== */}
        {/* Curve 1: Tiny Sparkle A (approx 5px) */}
        <g filter="url(#tinySparkleGlow)">
          <path
            d="M 0,-4.5 L 1.2,-1 L 4.5,0 L 1.2,1 L 0,4.5 L -1.2,1 L -4.5,0 L -1.2,-1 Z"
            fill="#FFFBE8"
          >
            <animateMotion path={curve1} dur="11s" repeatCount="indefinite" />
          </path>
          <circle r="1.5" fill="#E7BD62">
            <animateMotion path={curve1} dur="11s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Curve 1: Tiny Sparkle B (approx 3.5px trailing) */}
        <g filter="url(#tinySparkleGlow)">
          <path
            d="M 0,-3 L 0.8,-0.8 L 3,0 L 0.8,0.8 L 0,3 L -0.8,0.8 L -3,0 L -0.8,-0.8 Z"
            fill="#FFEBB0"
          >
            <animateMotion path={curve1} dur="11s" begin="5.5s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Curve 2: Tiny Sparkle A (approx 5.5px) */}
        <g filter="url(#tinySparkleGlow)">
          <path
            d="M 0,-5 L 1.3,-1.2 L 5,0 L 1.3,1.2 L 0,5 L -1.3,1.2 L -5,0 L -1.3,-1.2 Z"
            fill="#FFFBE8"
          >
            <animateMotion path={curve2} dur="14s" repeatCount="indefinite" />
          </path>
          <circle r="1.8" fill="#E7BD62">
            <animateMotion path={curve2} dur="14s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Curve 2: Tiny Sparkle B (approx 3.5px) */}
        <g filter="url(#tinySparkleGlow)">
          <circle r="1.6" fill="#FFFBE8">
            <animateMotion path={curve2} dur="14s" begin="7s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Curve 3: Tiny Sparkle (approx 4px) */}
        <g filter="url(#tinySparkleGlow)">
          <path
            d="M 0,-3.8 L 1,-1 L 3.8,0 L 1,1 L 0,3.8 L -1,1 L -3.8,0 L -1,-1 Z"
            fill="#FFFBE8"
          >
            <animateMotion path={curve3} dur="12s" repeatCount="indefinite" />
          </path>
        </g>
      </svg>
    </div>
  );
};
