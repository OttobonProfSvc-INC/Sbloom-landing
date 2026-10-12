import React, { useState } from 'react';

interface HeroTile {
  id: string;
  imageSrc: string;
  title: string;
  category: string;
  desc: string;
  top: string;
  left: string;
  size: number;
  animationClass: string;
  zIndex?: number;
}

const heroTilesData: HeroTile[] = [
  {
    id: 'seo',
    imageSrc: '/hero-champagne-tile-seo-clean.png',
    title: 'SEO & Search Authority',
    category: 'Organic Growth',
    desc: 'High-intent search keyword rankings & technical search authority.',
    top: '10%',
    left: '14%',
    size: 70,
    animationClass: 'champagne-tile-float-1',
    zIndex: 10,
  },
  {
    id: 'web',
    imageSrc: '/hero-champagne-tile-web-clean.png',
    title: 'Website & Digital Experience',
    category: 'Digital Architecture',
    desc: 'High-conversion interactive websites, design systems & CMS platforms.',
    top: '8%',
    left: '52%',
    size: 86,
    animationClass: 'champagne-tile-float-2',
    zIndex: 11,
  },
  {
    id: 'analytics',
    imageSrc: '/hero-champagne-tile-analytics-clean.png',
    title: 'Analytics & Growth Intelligence',
    category: 'Data & Telemetry',
    desc: 'Attribution modeling, conversion funnel telemetry & growth metrics.',
    top: '23%',
    left: '32%',
    size: 78,
    animationClass: 'champagne-tile-float-3',
    zIndex: 12,
  },
  {
    id: 'video',
    imageSrc: '/hero-champagne-tile-video-clean.png',
    title: 'Video & Reels Production',
    category: 'Visual Storytelling',
    desc: 'Short-form social reels, high-hook video explainers & brand cinema.',
    top: '33%',
    left: '6%',
    size: 74,
    animationClass: 'champagne-tile-float-4',
    zIndex: 10,
  },
  {
    id: 'pen',
    imageSrc: '/hero-champagne-tile-pen-clean.png',
    title: 'Creative Content & Thought Leadership',
    category: 'Editorial Authority',
    desc: 'Authoritative research publications, executive voice & storytelling.',
    top: '37%',
    left: '39%',
    size: 84,
    animationClass: 'champagne-tile-float-1',
    zIndex: 14, // Focal centerpiece
  },
  {
    id: 'pin',
    imageSrc: '/hero-champagne-tile-pin-clean.png',
    title: 'Google Business Profile',
    category: 'Local Prominence',
    desc: 'Google Maps 3-pack dominance, local geo-targeting & verified reviews.',
    top: '26%',
    left: '73%',
    size: 80,
    animationClass: 'champagne-tile-float-5',
    zIndex: 11,
  },
  {
    id: 'campaign',
    imageSrc: '/hero-champagne-tile-campaign-clean.png',
    title: 'Digital Campaigns & Ads',
    category: 'Targeted Outreach',
    desc: 'Precision B2B multi-channel campaigns, paid acquisition & retargeting.',
    top: '51%',
    left: '67%',
    size: 76,
    animationClass: 'champagne-tile-float-2',
    zIndex: 12,
  },
  {
    id: 'reels',
    imageSrc: '/hero-champagne-tile-reels-clean.png',
    title: 'Social Reels & Short Form',
    category: 'Audience Reach',
    desc: 'Viral social short-form video hooks & high-engagement content loops.',
    top: '43%',
    left: '90%',
    size: 66,
    animationClass: 'champagne-tile-float-3',
    zIndex: 9,
  },
  {
    id: 'chat',
    imageSrc: '/hero-champagne-tile-chat-clean.png',
    title: 'Social Media & Community',
    category: 'Conversations & Trust',
    desc: 'Direct audience engagement, LinkedIn brand growth & inbound nurturing.',
    top: '57%',
    left: '16%',
    size: 76,
    animationClass: 'champagne-tile-float-4',
    zIndex: 11,
  },
  {
    id: 'growth',
    imageSrc: '/hero-champagne-tile-growth-clean.png',
    title: 'Strategic Growth & Scaling',
    category: 'Strategic Momentum',
    desc: 'Predictable audience pipeline, brand prestige & compounding market share.',
    top: '73%',
    left: '26%',
    size: 70,
    animationClass: 'champagne-tile-float-5',
    zIndex: 10,
  },
  {
    id: 'team',
    imageSrc: '/hero-champagne-tile-team-clean.png',
    title: 'Collaboration & Partnerships',
    category: 'Unified Delivery',
    desc: 'Integrated growth teams, collaborative co-marketing & trusted delivery.',
    top: '67%',
    left: '48%',
    size: 80,
    animationClass: 'champagne-tile-float-1',
    zIndex: 12,
  },
  {
    id: 'globe',
    imageSrc: '/hero-champagne-tile-globe-clean.png',
    title: 'Global Digital Reach',
    category: 'Cross-Border Authority',
    desc: 'Multi-region visibility, international domain strategy & global clients.',
    top: '73%',
    left: '77%',
    size: 72,
    animationClass: 'champagne-tile-float-2',
    zIndex: 10,
  },
];

export const HeroChampagneShowcase: React.FC = () => {
  const [activeTileId, setActiveTileId] = useState<string | null>(null);

  return (
    <div className="champagne-showcase-container">
      {/* Ambient warm champagne radial lighting behind tiles (DOES NOT MOVE) */}
      <div className="champagne-ambient-glow" />

      {/* Decorative Golden Beads (3D metallic spheres anchored in space) */}
      <div className="gold-bead bead-1" />
      <div className="gold-bead bead-2" />
      <div className="gold-bead bead-3" />
      <div className="gold-bead bead-4" />
      <div className="gold-bead bead-5" />

      {/* Subtle Blurred Bokeh Background Icons (Atmospheric depth) */}
      <div className="bokeh-icon bokeh-star" />
      <div className="bokeh-icon bokeh-g" />
      <div className="bokeh-icon bokeh-gear" />
      <div className="bokeh-icon bokeh-photo" />

      {/* INDEPENDENT FLOATING TILES (ONLY THE ICONS MOVE) */}
      {heroTilesData.map((tile) => {
        const isHovered = activeTileId === tile.id;

        return (
          <div
            key={tile.id}
            className={`champagne-tile-wrapper ${tile.animationClass}`}
            style={{
              top: tile.top,
              left: tile.left,
              zIndex: isHovered ? 40 : (tile.zIndex ?? 10),
            }}
            onMouseEnter={() => setActiveTileId(tile.id)}
            onMouseLeave={() => setActiveTileId(null)}
            onClick={() => setActiveTileId(isHovered ? null : tile.id)}
          >
            <div
              className={`champagne-tile-card ${isHovered ? 'tile-is-hovered' : ''}`}
              style={{
                width: `${tile.size}px`,
                height: `${tile.size}px`,
              }}
            >
              <img
                src={tile.imageSrc}
                alt={tile.title}
                className="champagne-tile-img"
                draggable={false}
                loading="eager"
              />
              <div className="tile-hover-halo" />
            </div>

            {/* Capability Tooltip on Hover */}
            {isHovered && (
              <div className="champagne-tile-tooltip">
                <span className="tooltip-tag">{tile.category}</span>
                <span className="tooltip-title">{tile.title}</span>
                <span className="tooltip-desc">{tile.desc}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
