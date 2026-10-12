import React from 'react';

export const HeroSparkleLines: React.FC = () => {
  const path1 = "M -40,160 C 220,130 460,330 720,290 C 980,250 1200,140 1480,180";
  const path2 = "M -30,460 C 260,420 540,490 780,410 C 1020,330 1240,480 1480,420";
  const path3 = "M 500,100 C 700,70 940,120 1140,180 C 1320,230 1420,180 1480,150";
  const path4 = "M 520,380 C 460,240 820,160 980,260 C 1140,360 840,480 620,440";

  return (
    <div className="hero-sparkle-lines-layer" aria-hidden="true">
      <svg
        className="hero-sparkle-svg"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Radiant Golden Line Gradient */}
          <linearGradient id="goldLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C88A2C" stopOpacity="0.2" />
            <stop offset="30%" stopColor="#E5A83E" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#FFF2B2" stopOpacity="0.95" />
            <stop offset="85%" stopColor="#E5A83E" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#C88A2C" stopOpacity="0.2" />
          </linearGradient>

          {/* Shooting Light Stream Gradient */}
          <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E5A83E" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFE082" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>

          {/* Glow Filters */}
          <filter id="goldLineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="sparkleAura" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ========================================================
            1. BASE VISIBLE GOLDEN CURVES (ELEGANT & CLEAN)
            ======================================================== */}
        <path d={path1} stroke="url(#goldLineGrad)" strokeWidth="1.8" filter="url(#goldLineGlow)" opacity="0.7" />
        <path d={path2} stroke="url(#goldLineGrad)" strokeWidth="1.6" filter="url(#goldLineGlow)" opacity="0.65" />
        <path d={path3} stroke="url(#goldLineGrad)" strokeWidth="1.5" filter="url(#goldLineGlow)" opacity="0.55" />
        <path d={path4} stroke="url(#goldLineGrad)" strokeWidth="1.6" filter="url(#goldLineGlow)" opacity="0.6" />

        {/* ========================================================
            2. SHOOTING LIGHT PULSE RAYS TRAVELING ON THE LINES
            ======================================================== */}
        <path d={path1} stroke="url(#streamGrad)" strokeWidth="2.8" className="svg-traveling-ray ray-fast" />
        <path d={path2} stroke="url(#streamGrad)" strokeWidth="2.6" className="svg-traveling-ray ray-mid" />
        <path d={path3} stroke="url(#streamGrad)" strokeWidth="2.4" className="svg-traveling-ray ray-slow" />
        <path d={path4} stroke="url(#streamGrad)" strokeWidth="2.6" className="svg-traveling-ray ray-orbit" />

        {/* ========================================================
            3. GLOWING SPARKLES MOVING ACROSS THE LINES
            ======================================================== */}
        {/* Line 1 Sparkle A */}
        <g filter="url(#sparkleAura)">
          <path
            d="M 0,-13 L 2.5,-3 L 13,0 L 2.5,3 L 0,13 L -2.5,3 L -13,0 L -2.5,-3 Z"
            fill="#FFF7D6"
          >
            <animateMotion path={path1} dur="7s" repeatCount="indefinite" />
          </path>
          <circle r="3.5" fill="#FFFFFF">
            <animateMotion path={path1} dur="7s" repeatCount="indefinite" />
          </circle>
          <circle r="9" fill="rgba(240, 185, 55, 0.45)">
            <animateMotion path={path1} dur="7s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Line 1 Sparkle B (Staggered trailing sparkle) */}
        <g filter="url(#sparkleAura)">
          <path
            d="M 0,-10 L 2,-2 L 10,0 L 2,2 L 0,10 L -2,2 L -10,0 L -2,-2 Z"
            fill="#FFEAA7"
          >
            <animateMotion path={path1} dur="7s" begin="3.5s" repeatCount="indefinite" />
          </path>
          <circle r="2.8" fill="#FFFFFF">
            <animateMotion path={path1} dur="7s" begin="3.5s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Line 2 Sparkle A */}
        <g filter="url(#sparkleAura)">
          <path
            d="M 0,-13 L 2.5,-3 L 13,0 L 2.5,3 L 0,13 L -2.5,3 L -13,0 L -2.5,-3 Z"
            fill="#FFF7D6"
          >
            <animateMotion path={path2} dur="8.5s" repeatCount="indefinite" />
          </path>
          <circle r="3.5" fill="#FFFFFF">
            <animateMotion path={path2} dur="8.5s" repeatCount="indefinite" />
          </circle>
          <circle r="9" fill="rgba(240, 185, 55, 0.45)">
            <animateMotion path={path2} dur="8.5s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Line 2 Sparkle B */}
        <g filter="url(#sparkleAura)">
          <path
            d="M 0,-10 L 2,-2 L 10,0 L 2,2 L 0,10 L -2,2 L -10,0 L -2,-2 Z"
            fill="#FFEAA7"
          >
            <animateMotion path={path2} dur="8.5s" begin="4.2s" repeatCount="indefinite" />
          </path>
          <circle r="2.8" fill="#FFFFFF">
            <animateMotion path={path2} dur="8.5s" begin="4.2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Line 3 Sparkle */}
        <g filter="url(#sparkleAura)">
          <path
            d="M 0,-11 L 2,-2.5 L 11,0 L 2,2.5 L 0,11 L -2,2.5 L -11,0 L -2,-2.5 Z"
            fill="#FFF7D6"
          >
            <animateMotion path={path3} dur="6.2s" repeatCount="indefinite" />
          </path>
          <circle r="3" fill="#FFFFFF">
            <animateMotion path={path3} dur="6.2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Line 4 Orbit Loop Sparkle */}
        <g filter="url(#sparkleAura)">
          <path
            d="M 0,-12 L 2.2,-2.8 L 12,0 L 2.2,2.8 L 0,12 L -2.2,2.8 L -12,0 L -2.2,-2.8 Z"
            fill="#FFFDF0"
          >
            <animateMotion path={path4} dur="9.5s" repeatCount="indefinite" />
          </path>
          <circle r="3.5" fill="#FFFFFF">
            <animateMotion path={path4} dur="9.5s" repeatCount="indefinite" />
          </circle>
          <circle r="8" fill="rgba(255, 215, 0, 0.45)">
            <animateMotion path={path4} dur="9.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
};
