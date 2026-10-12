import React, { useState } from 'react';

interface HeroIconTile {
  id: string;
  imageSrc: string;
  label: string;
  sublabel: string;
  top: string;
  left: string;
  size: number;
  isBlurred: boolean;
  blurAmount?: string;
  opacity?: number;
  animationClass: string;
  zIndex: number;
}

const heroIconsData: HeroIconTile[] = [
  // ========================================================
  // 1. BACKGROUND BOKEH LAYER (HEAVILY BLURRED DEPTH-OF-FIELD)
  // Matches the blurred atmospheric tiles in the Webflow screenshot
  // ========================================================
  {
    id: 'blur-trust-top',
    imageSrc: '/hero-icons/audience-trust.png',
    label: 'Audience Relationships',
    sublabel: 'Authentic Connection',
    top: '2%',
    left: '8%',
    size: 82,
    isBlurred: true,
    blurAmount: '11px',
    opacity: 0.32,
    animationClass: 'hero-float-1',
    zIndex: 1,
  },
  {
    id: 'blur-location-top',
    imageSrc: '/hero-icons/location-pin.png',
    label: 'Local Authority',
    sublabel: 'Geo-Targeting & Multi-Location',
    top: '6%',
    left: '82%',
    size: 88,
    isBlurred: true,
    blurAmount: '10px',
    opacity: 0.35,
    animationClass: 'hero-float-3',
    zIndex: 1,
  },
  {
    id: 'blur-reputation-mid',
    imageSrc: '/hero-icons/reputation-star.png',
    label: 'Verified Social Proof',
    sublabel: 'Accreditation & Trust',
    top: '26%',
    left: '42%',
    size: 82,
    isBlurred: true,
    blurAmount: '10px',
    opacity: 0.34,
    animationClass: 'hero-float-2',
    zIndex: 1,
  },
  {
    id: 'blur-plane-mid',
    imageSrc: '/hero-icons/campaign-plane.png',
    label: 'Multi-Channel Outreach',
    sublabel: 'B2B Growth Broadcasting',
    top: '44%',
    left: '58%',
    size: 84,
    isBlurred: true,
    blurAmount: '11px',
    opacity: 0.32,
    animationClass: 'hero-float-3',
    zIndex: 1,
  },
  {
    id: 'blur-compass-right',
    imageSrc: '/hero-icons/strategy-compass.png',
    label: 'Market Navigation',
    sublabel: 'Strategic Direction',
    top: '52%',
    left: '88%',
    size: 84,
    isBlurred: true,
    blurAmount: '10px',
    opacity: 0.32,
    animationClass: 'hero-float-1',
    zIndex: 1,
  },
  {
    id: 'blur-chart-bottom',
    imageSrc: '/hero-icons/analytics-chart.png',
    label: 'Performance Analytics',
    sublabel: 'Data-Driven Insights',
    top: '76%',
    left: '30%',
    size: 82,
    isBlurred: true,
    blurAmount: '10px',
    opacity: 0.35,
    animationClass: 'hero-float-2',
    zIndex: 1,
  },
  {
    id: 'blur-trust-bottom',
    imageSrc: '/hero-icons/audience-trust.png',
    label: 'Community Alignment',
    sublabel: 'Target Audience Engagement',
    top: '74%',
    left: '74%',
    size: 86,
    isBlurred: true,
    blurAmount: '11px',
    opacity: 0.3,
    animationClass: 'hero-float-3',
    zIndex: 1,
  },

  // ========================================================
  // 2. FOREGROUND VISIBLE LAYER (CRYSTAL CLEAR, SHARP & 3D POP)
  // The 5 key visible tiles matching the 5 sharp tiles in the screenshot
  // ========================================================
  {
    id: 'sharp-browser',
    imageSrc: '/hero-icons/browser-ui.png',
    label: 'Digital Experience & Platforms',
    sublabel: 'Websites, CMS & Portal Infrastructure',
    top: '12%',
    left: '20%',
    size: 96,
    isBlurred: false,
    animationClass: 'hero-float-1',
    zIndex: 10,
  },
  {
    id: 'sharp-search',
    imageSrc: '/hero-icons/search-growth.png',
    label: 'SEO & Search Engine Discovery',
    sublabel: 'High-Intent Traffic & Search Authority',
    top: '4%',
    left: '52%',
    size: 98,
    isBlurred: false,
    animationClass: 'hero-float-2',
    zIndex: 10,
  },
  {
    id: 'sharp-pen',
    imageSrc: '/hero-icons/content-pen.png',
    label: 'Thought Leadership & Content',
    sublabel: 'Articles, Research & Authoritative Voice',
    top: '38%',
    left: '36%',
    size: 106,
    isBlurred: false,
    animationClass: 'hero-float-3',
    zIndex: 12, // Central focal hero tile
  },
  {
    id: 'sharp-chat',
    imageSrc: '/hero-icons/social-chat.png',
    label: 'Social Engagement & Conversions',
    sublabel: 'Audience Conversations & Inbound Nurturing',
    top: '50%',
    left: '8%',
    size: 92,
    isBlurred: false,
    animationClass: 'hero-float-1',
    zIndex: 10,
  },
  {
    id: 'sharp-video',
    imageSrc: '/hero-icons/video-play.png',
    label: 'Video & Media Storytelling',
    sublabel: 'Explainers & High-Impact Visual Content',
    top: '34%',
    left: '70%',
    size: 94,
    isBlurred: false,
    animationClass: 'hero-float-2',
    zIndex: 10,
  },
];

export const HeroWebflowShowcase: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <div className="webflow-showcase-container">
      {/* Ambient background glow behind the tiles */}
      <div className="webflow-showcase-glow" />

      {/* Floating 3D Tiles: 5 Sharp Visible + 7 Heavy Bokeh Blurred */}
      {heroIconsData.map((tile) => {
        const isHovered = activeTooltip === tile.id;

        return (
          <div
            key={tile.id}
            className={`webflow-tile-wrapper ${tile.animationClass}`}
            style={{
              position: 'absolute',
              top: tile.top,
              left: tile.left,
              zIndex: isHovered ? 25 : tile.zIndex,
              pointerEvents: tile.isBlurred ? 'none' : 'auto',
            }}
            onMouseEnter={() => !tile.isBlurred && setActiveTooltip(tile.id)}
            onMouseLeave={() => !tile.isBlurred && setActiveTooltip(null)}
          >
            <div
              className={`webflow-icon-card ${tile.isBlurred ? 'tile-blurred' : 'tile-sharp'}`}
              style={{
                width: `${tile.size}px`,
                height: `${tile.size}px`,
                filter: tile.isBlurred ? `blur(${tile.blurAmount})` : 'none',
                opacity: tile.isBlurred ? (tile.opacity ?? 0.35) : 1,
                transform: isHovered ? 'scale(1.18) translateY(-8px)' : 'scale(1)',
                transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease',
                cursor: tile.isBlurred ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={tile.imageSrc}
                alt={tile.label}
                className="hero-glossy-icon-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: tile.isBlurred
                    ? 'none'
                    : isHovered 
                      ? 'drop-shadow(0 16px 28px rgba(217, 165, 46, 0.45)) drop-shadow(0 6px 12px rgba(0,0,0,0.6))' 
                      : 'drop-shadow(0 14px 22px rgba(0,0,0,0.48))',
                  transition: 'filter 0.3s ease',
                  userSelect: 'none',
                }}
                loading="eager"
                draggable={false}
              />
            </div>

            {/* Capability Tooltip on Hover for Sharp Tiles */}
            {!tile.isBlurred && isHovered && (
              <div className="webflow-tile-tooltip">
                <span className="tooltip-title">{tile.label}</span>
                <span className="tooltip-sub">{tile.sublabel}</span>
              </div>
            )}
          </div>
        );
      })}

      {/* "Made in Webflow" Style Pill Badge in bottom corner */}
      <div className="made-in-sbloom-badge">
        <span className="badge-flower">🌸</span>
        <span>Made with <strong>sBLOOM</strong></span>
      </div>
    </div>
  );
};
