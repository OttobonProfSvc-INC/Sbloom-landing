import React from 'react';

export const HeroFloatingIcons: React.FC = () => {
  return (
    <div className="hero-floating-icons-container" aria-hidden="true">
      {/* 
        ============================================================
        1. AMBIENT BACKGROUND GLOW & DEPTH-OF-FIELD ACCENTS
        ============================================================
      */}
      <div className="hero-icons-ambient-glow" />

      {/* Tiny Metallic-Gold Dots / Beads floating at different depths */}
      <div className="subtle-gold-bead bead-pos-1" />
      <div className="subtle-gold-bead bead-pos-2" />
      <div className="subtle-gold-bead bead-pos-3" />
      <div className="subtle-gold-bead bead-pos-4" />
      <div className="subtle-gold-bead bead-pos-5" />

      {/* Subtle Depth-of-Field Blurred Background Symbols */}
      <div className="dof-blur-symbol dof-star" />
      <div className="dof-blur-symbol dof-google" />
      <div className="dof-blur-symbol dof-diamond" />

      {/*
        ============================================================
        2. FREELY FLOATING EMBLEMS (NO CARD FRAMES, NO BACKPLATES)
        Each symbol floats independently with subtle staggered motions.
        ============================================================
      */}

      {/* --- ICON 1: CREATIVE CONTENT & THOUGHT LEADERSHIP (CENTER FOCAL EMBLEM) --- */}
      {/* Luxury fountain pen nib with Saturn-style 3D gold orbital ring */}
      <div className="floating-symbol-node node-pen anim-float-focal" style={{ top: '35%', left: '38%', zIndex: 20 }}>
        <svg width="92" height="92" viewBox="0 0 92 92" fill="none" className="free-floating-svg">
          <defs>
            <linearGradient id="penNibGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A372E" />
              <stop offset="50%" stopColor="#2E201A" />
              <stop offset="100%" stopColor="#1E1410" />
            </linearGradient>
            <linearGradient id="goldNibTip" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="40%" stopColor="#E7BD62" />
              <stop offset="85%" stopColor="#C9952E" />
              <stop offset="100%" stopColor="#8F6216" />
            </linearGradient>
            <linearGradient id="saturnRing" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C9952E" stopOpacity="0.2" />
              <stop offset="35%" stopColor="#E7BD62" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#FFF2B2" stopOpacity="1" />
              <stop offset="100%" stopColor="#C9952E" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Back half of Saturn ring */}
          <ellipse cx="46" cy="48" rx="42" ry="14" stroke="url(#saturnRing)" strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="65 140" />
          {/* Main Pen Nib Body */}
          <path d="M 46 12 L 64 36 L 56 68 L 36 68 L 28 36 Z" fill="url(#penNibGrad)" />
          {/* Inner Pen Rib Line */}
          <path d="M 46 16 L 46 44" stroke="#C9952E" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="46" cy="44" r="3" fill="#E7BD62" />
          {/* 24K Gold Nib Tip */}
          <path d="M 46 12 L 54 26 L 38 26 Z" fill="url(#goldNibTip)" />
          {/* Lower Collar */}
          <path d="M 33 66 L 59 66 L 57 74 L 35 74 Z" fill="url(#goldNibTip)" />
          {/* Front half of Saturn ring */}
          <ellipse cx="46" cy="48" rx="42" ry="14" stroke="url(#saturnRing)" strokeWidth="2.4" fill="none" strokeDasharray="130 90" strokeDashoffset="-70" />
          <circle cx="20" cy="54" r="3.5" fill="#E7BD62" />
        </svg>
      </div>

      {/* --- ICON 2: WEBSITE & DIGITAL EXPERIENCE --- */}
      {/* 3D Browser Window Layout with Gold Header Controls */}
      <div className="floating-symbol-node node-web anim-float-2" style={{ top: '8%', left: '54%', zIndex: 14 }}>
        <svg width="86" height="74" viewBox="0 0 86 74" fill="none" className="free-floating-svg">
          <defs>
            <linearGradient id="browserBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBF8F2" />
              <stop offset="60%" stopColor="#EDE1D1" />
              <stop offset="100%" stopColor="#D9C7B2" />
            </linearGradient>
            <linearGradient id="browserHeader" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4A372E" />
              <stop offset="100%" stopColor="#2E201A" />
            </linearGradient>
          </defs>
          {/* Browser Container */}
          <rect x="4" y="4" width="78" height="64" rx="10" fill="url(#browserBody)" stroke="rgba(120, 90, 70, 0.25)" strokeWidth="1.2" />
          {/* Browser Header */}
          <path d="M 4 14 Q 4 4 14 4 L 72 4 Q 82 4 82 14 L 82 20 L 4 20 Z" fill="url(#browserHeader)" />
          {/* Window Control Dots */}
          <circle cx="14" cy="12" r="2.4" fill="#C9952E" />
          <circle cx="22" cy="12" r="2.4" fill="#E7BD62" />
          <circle cx="30" cy="12" r="2.4" fill="#785A46" />
          {/* Wireframe Hero Media Block */}
          <rect x="12" y="28" width="30" height="22" rx="4" fill="#785A46" opacity="0.85" />
          <polygon points="17,45 23,37 29,45" fill="#FBF8F2" opacity="0.9" />
          <polygon points="26,45 32,39 38,45" fill="#E7BD62" opacity="0.9" />
          <circle cx="34" cy="34" r="2.5" fill="#E7BD62" />
          {/* Content Text Lines */}
          <rect x="48" y="29" width="26" height="3.5" rx="1.5" fill="#4A372E" opacity="0.75" />
          <rect x="48" y="37" width="22" height="3" rx="1.5" fill="#785A46" opacity="0.6" />
          <rect x="48" y="44" width="18" height="3" rx="1.5" fill="#785A46" opacity="0.45" />
          {/* Bottom CTA Bar */}
          <rect x="12" y="55" width="62" height="6" rx="3" fill="#C9952E" opacity="0.85" />
        </svg>
      </div>

      {/* --- ICON 3: SEO & SEARCH DOMINANCE --- */}
      {/* Dimensional Magnifying Glass with Gold Bezel */}
      <div className="floating-symbol-node node-seo anim-float-1" style={{ top: '10%', left: '16%', zIndex: 12 }}>
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" className="free-floating-svg">
          <defs>
            <linearGradient id="lensRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="50%" stopColor="#C9952E" />
              <stop offset="100%" stopColor="#63440F" />
            </linearGradient>
            <linearGradient id="lensGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E201A" />
              <stop offset="70%" stopColor="#1E1410" />
              <stop offset="100%" stopColor="#120A07" />
            </linearGradient>
            <linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#785A46" />
              <stop offset="100%" stopColor="#35251F" />
            </linearGradient>
          </defs>
          {/* Handle */}
          <rect x="46" y="46" width="12" height="24" rx="4" transform="rotate(-45 46 46)" fill="url(#handleGrad)" stroke="#C9952E" strokeWidth="1" />
          {/* Lens Rim Ring */}
          <circle cx="32" cy="32" r="22" fill="url(#lensRim)" />
          {/* Inner Dark Optics */}
          <circle cx="32" cy="32" r="17" fill="url(#lensGlass)" />
          {/* SEO Upward Growth Arrow inside lens */}
          <path d="M 23 38 L 30 31 L 34 35 L 41 26" stroke="#E7BD62" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 36 26 L 41 26 L 41 31" fill="none" stroke="#E7BD62" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* --- ICON 4: ANALYTICS & PERFORMANCE --- */}
      {/* 3D Ascending Growth Bars with Metallic Gold Caps */}
      <div className="floating-symbol-node node-analytics anim-float-3" style={{ top: '22%', left: '32%', zIndex: 13 }}>
        <svg width="74" height="74" viewBox="0 0 74 74" fill="none" className="free-floating-svg">
          <defs>
            <linearGradient id="bar1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#785A46" />
              <stop offset="100%" stopColor="#35251F" />
            </linearGradient>
            <linearGradient id="bar2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4A372E" />
              <stop offset="100%" stopColor="#211C1A" />
            </linearGradient>
            <linearGradient id="bar3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2E201A" />
              <stop offset="100%" stopColor="#140D09" />
            </linearGradient>
            <linearGradient id="goldCap" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="50%" stopColor="#E7BD62" />
              <stop offset="100%" stopColor="#C9952E" />
            </linearGradient>
          </defs>
          {/* Bar 1 (Short) */}
          <rect x="14" y="40" width="12" height="22" rx="3" fill="url(#bar1)" />
          <rect x="14" y="38" width="12" height="4" rx="2" fill="url(#goldCap)" />
          {/* Bar 2 (Medium) */}
          <rect x="31" y="26" width="12" height="36" rx="3" fill="url(#bar2)" />
          <rect x="31" y="24" width="12" height="4" rx="2" fill="url(#goldCap)" />
          {/* Bar 3 (Tall) */}
          <rect x="48" y="14" width="12" height="48" rx="3" fill="url(#bar3)" />
          <rect x="48" y="12" width="12" height="4" rx="2" fill="url(#goldCap)" />
          {/* Upward Growth Trend Arc */}
          <path d="M 10 46 C 22 42, 36 28, 58 10" stroke="#E7BD62" strokeWidth="2" strokeDasharray="3 3" fill="none" opacity="0.85" />
          <circle cx="58" cy="10" r="3" fill="#FFF2B2" />
        </svg>
      </div>

      {/* --- ICON 5: GOOGLE BUSINESS PROFILE & LOCAL VISIBILITY --- */}
      {/* 3D Location Marker Pin with Golden Radar Aura */}
      <div className="floating-symbol-node node-pin anim-float-5" style={{ top: '25%', left: '74%', zIndex: 12 }}>
        <svg width="78" height="82" viewBox="0 0 78 82" fill="none" className="free-floating-svg">
          <defs>
            <linearGradient id="pinBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBF8F2" />
              <stop offset="60%" stopColor="#EDE1D1" />
              <stop offset="100%" stopColor="#785A46" />
            </linearGradient>
            <radialGradient id="pinGoldCenter" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="60%" stopColor="#E7BD62" />
              <stop offset="100%" stopColor="#8F6216" />
            </radialGradient>
          </defs>
          {/* Ground Shadow Ripple */}
          <ellipse cx="39" cy="74" rx="20" ry="6" fill="#35251F" opacity="0.2" />
          <ellipse cx="39" cy="74" rx="26" ry="7" stroke="#C9952E" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.45" />
          {/* 3D Pin Silhouette */}
          <path
            d="M 39 8 C 24 8, 14 18, 14 33 C 14 48, 35 68, 39 72 C 43 68, 64 48, 64 33 C 64 18, 54 8, 39 8 Z"
            fill="url(#pinBody)"
            stroke="rgba(120, 90, 70, 0.3)"
            strokeWidth="1.2"
          />
          {/* Inner Golden Aperture Center */}
          <circle cx="39" cy="32" r="11" fill="url(#pinGoldCenter)" />
          {/* Subtle star inside pin */}
          <path d="M 39 25 L 41 29 L 45 30 L 42 33 L 43 37 L 39 35 L 35 37 L 36 33 L 33 30 L 37 29 Z" fill="#FFFFFF" opacity="0.9" />
        </svg>
      </div>

      {/* --- ICON 6: VIDEO & REELS PRODUCTION --- */}
      {/* 3D Clapper / Play Triangle Emblem in Espresso & Muted Gold */}
      <div className="floating-symbol-node node-video anim-float-4" style={{ top: '33%', left: '7%', zIndex: 11 }}>
        <svg width="74" height="74" viewBox="0 0 74 74" fill="none" className="free-floating-svg">
          <defs>
            <linearGradient id="clapperBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#35251F" />
              <stop offset="50%" stopColor="#211C1A" />
              <stop offset="100%" stopColor="#120A07" />
            </linearGradient>
            <linearGradient id="playTriGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="60%" stopColor="#E7BD62" />
              <stop offset="100%" stopColor="#C9952E" />
            </linearGradient>
          </defs>
          {/* Clapperboard Top Plate */}
          <rect x="8" y="10" width="58" height="15" rx="3.5" fill="url(#clapperBody)" stroke="#C9952E" strokeWidth="1" />
          {/* Clapperboard stripes */}
          <polygon points="18,10 24,10 18,25 12,25" fill="#E7BD62" opacity="0.85" />
          <polygon points="32,10 38,10 32,25 26,25" fill="#E7BD62" opacity="0.85" />
          <polygon points="46,10 52,10 46,25 40,25" fill="#E7BD62" opacity="0.85" />
          {/* Main Monitor Screen */}
          <rect x="8" y="23" width="58" height="42" rx="4" fill="url(#clapperBody)" />
          {/* Polished Gold Play Triangle */}
          <polygon points="30,34 30,54 48,44" fill="url(#playTriGrad)" />
        </svg>
      </div>

      {/* --- ICON 7: SOCIAL MEDIA & COMMUNITY MESSAGING --- */}
      {/* 3D Rounded Dialogue Bubble with Ivory Dots & Gold Bevel */}
      <div className="floating-symbol-node node-chat anim-float-4" style={{ top: '56%', left: '17%', zIndex: 12 }}>
        <svg width="76" height="74" viewBox="0 0 76 74" fill="none" className="free-floating-svg">
          <defs>
            <linearGradient id="bubbleBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBF8F2" />
              <stop offset="50%" stopColor="#EDE1D1" />
              <stop offset="100%" stopColor="#785A46" />
            </linearGradient>
          </defs>
          {/* Main Bubble */}
          <path
            d="M 12 10 Q 12 4 22 4 L 54 4 Q 64 4 64 14 L 64 42 Q 64 52 54 52 L 28 52 L 14 66 L 16 52 Q 12 50 12 42 Z"
            fill="url(#bubbleBody)"
            stroke="rgba(120, 90, 70, 0.3)"
            strokeWidth="1.2"
          />
          {/* 3 Conversation Dots */}
          <circle cx="27" cy="28" r="4" fill="#35251F" />
          <circle cx="38" cy="28" r="4" fill="#785A46" />
          <circle cx="49" cy="28" r="4" fill="#C9952E" />
        </svg>
      </div>

      {/* --- ICON 8: DIGITAL CAMPAIGNS & OUTREACH --- */}
      {/* 3D Supersonic Paper Plane in Espresso & Gold Flight Accent */}
      <div className="floating-symbol-node node-campaign anim-float-2" style={{ top: '51%', left: '68%', zIndex: 13 }}>
        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" className="free-floating-svg">
          <defs>
            <linearGradient id="planeBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A372E" />
              <stop offset="50%" stopColor="#2E201A" />
              <stop offset="100%" stopColor="#1E1410" />
            </linearGradient>
            <linearGradient id="planeFold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="50%" stopColor="#E7BD62" />
              <stop offset="100%" stopColor="#8F6216" />
            </linearGradient>
          </defs>
          {/* Banked Paper Plane Wings */}
          <polygon points="68,14 16,40 38,50" fill="url(#planeBody)" />
          <polygon points="68,14 38,50 44,66" fill="#35251F" />
          <polygon points="68,14 44,66 52,48" fill="url(#planeFold)" />
          <polygon points="68,14 38,50 68,14" stroke="#C9952E" strokeWidth="1" />
          {/* Golden Jet Flight Trail */}
          <path d="M 12 56 C 20 54, 30 52, 38 50" stroke="#E7BD62" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.75" />
        </svg>
      </div>

      {/* --- ICON 9: COLLABORATION & COMMUNITY --- */}
      {/* 3-Person Executive Team Silhouette with Golden Synergy Nodes */}
      <div className="floating-symbol-node node-team anim-float-1" style={{ top: '66%', left: '46%', zIndex: 13 }}>
        <svg width="82" height="76" viewBox="0 0 82 76" fill="none" className="free-floating-svg">
          <defs>
            <linearGradient id="teamCenter" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A372E" />
              <stop offset="100%" stopColor="#211C1A" />
            </linearGradient>
            <linearGradient id="teamSide" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#785A46" />
              <stop offset="100%" stopColor="#35251F" />
            </linearGradient>
          </defs>
          {/* Left Person */}
          <circle cx="23" cy="24" r="7" fill="url(#teamSide)" />
          <path d="M 12 48 C 12 38, 17 34, 23 34 C 29 34, 34 38, 34 48 Z" fill="url(#teamSide)" />
          {/* Right Person */}
          <circle cx="59" cy="24" r="7" fill="url(#teamSide)" />
          <path d="M 48 48 C 48 38, 53 34, 59 34 C 65 34, 70 38, 70 48 Z" fill="url(#teamSide)" />
          {/* Center Leader Person (Foreground) */}
          <circle cx="41" cy="18" r="9" fill="url(#teamCenter)" stroke="#C9952E" strokeWidth="1.2" />
          <path d="M 27 50 C 27 38, 33 32, 41 32 C 49 32, 55 38, 55 50 Z" fill="url(#teamCenter)" stroke="#C9952E" strokeWidth="1" />
          {/* Interconnection Gold Line */}
          <path d="M 23 24 L 41 18 L 59 24" stroke="#E7BD62" strokeWidth="1.2" opacity="0.65" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* --- ICON 10: GROWTH & SCALING TELEMETRY --- */}
      {/* 3D Ascending Growth Zig-zag Arrow in Muted Gold & Charcoal */}
      <div className="floating-symbol-node node-growth anim-float-5" style={{ top: '71%', left: '78%', zIndex: 12 }}>
        <svg width="74" height="74" viewBox="0 0 74 74" fill="none" className="free-floating-svg">
          <defs>
            <linearGradient id="growthGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#35251F" />
              <stop offset="50%" stopColor="#785A46" />
              <stop offset="85%" stopColor="#C9952E" />
              <stop offset="100%" stopColor="#FFF2B2" />
            </linearGradient>
          </defs>
          {/* Stepped Base Pedestals */}
          <rect x="12" y="52" width="10" height="14" rx="2" fill="#35251F" />
          <rect x="26" y="42" width="10" height="24" rx="2" fill="#4A372E" />
          <rect x="40" y="32" width="10" height="34" rx="2" fill="#785A46" />
          <rect x="54" y="22" width="10" height="44" rx="2" fill="#C9952E" />
          {/* Soaring Trajectory Arrow */}
          <path d="M 12 46 L 28 34 L 40 40 L 62 16" stroke="url(#growthGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <polygon points="56,14 65,14 65,23" fill="#FFF2B2" />
        </svg>
      </div>

      {/* --- ICON 11: INSTAGRAM REELS / SHORT-FORM VIDEO --- */}
      {/* Dimensional Reels Camera Glyph in Espresso & Light Gold */}
      <div className="floating-symbol-node node-reels anim-float-3" style={{ top: '42%', left: '91%', zIndex: 10 }}>
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" className="free-floating-svg">
          <defs>
            <linearGradient id="reelsBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A372E" />
              <stop offset="50%" stopColor="#2E201A" />
              <stop offset="100%" stopColor="#1E1410" />
            </linearGradient>
          </defs>
          <rect x="8" y="8" width="52" height="52" rx="14" fill="url(#reelsBody)" stroke="#C9952E" strokeWidth="1.2" />
          <circle cx="34" cy="34" r="14" stroke="#E7BD62" strokeWidth="2.2" />
          <polygon points="31,27 31,41 42,34" fill="#FFF2B2" />
        </svg>
      </div>
    </div>
  );
};
