import React, { useState } from 'react';

interface ConstellationNode {
  id: string;
  name: string;
  category: string;
  desc: string;
  top: string;
  left: string;
  width: string;
  height: string;
}

const constellationNodes: ConstellationNode[] = [
  {
    id: 'website-design',
    name: 'Website Design',
    category: 'Digital Architecture',
    desc: 'High-conversion responsive portals, UX systems & CMS infrastructure.',
    top: '11%',
    left: '26%',
    width: '18%',
    height: '18%',
  },
  {
    id: 'seo',
    name: 'SEO',
    category: 'Organic Dominance',
    desc: 'High-intent search authority, keyword rank acceleration & technical SEO.',
    top: '14%',
    left: '56%',
    width: '17%',
    height: '18%',
  },
  {
    id: 'google-business',
    name: 'Google Business Profile',
    category: 'Local Authority',
    desc: 'Map pack rankings, geo-targeted prominence & verified reputation.',
    top: '32%',
    left: '75%',
    width: '19%',
    height: '18%',
  },
  {
    id: 'video-reels',
    name: 'Video & Reels',
    category: 'Visual Storytelling',
    desc: 'High-retention hooks, cinematic explainers & short-form video production.',
    top: '33%',
    left: '5%',
    width: '18%',
    height: '18%',
  },
  {
    id: 'creative-content',
    name: 'Creative Content',
    category: 'Thought Leadership',
    desc: 'Authoritative research, executive thought leadership & strategic copywriting.',
    top: '36%',
    left: '38%',
    width: '19%',
    height: '20%',
  },
  {
    id: 'digital-campaigns',
    name: 'Digital Campaigns',
    category: 'Performance Marketing',
    desc: 'Cross-channel paid acquisition, retargeting funnels & pipeline generation.',
    top: '47%',
    left: '62%',
    width: '18%',
    height: '18%',
  },
  {
    id: 'social-media',
    name: 'Social Media',
    category: 'Community & Reach',
    desc: 'B2B social presence, inbound relationship nurturing & brand positioning.',
    top: '59%',
    left: '10%',
    width: '18%',
    height: '18%',
  },
  {
    id: 'analytics-growth',
    name: 'Analytics & Growth',
    category: 'Data & Telemetry',
    desc: 'Full-funnel attribution, conversion optimization & growth metric intelligence.',
    top: '67%',
    left: '34%',
    width: '19%',
    height: '18%',
  },
  {
    id: 'collaboration',
    name: 'Collaboration',
    category: 'Ecosystem Synergies',
    desc: 'Strategic partnerships, expert networks & unified client delivery teams.',
    top: '70%',
    left: '61%',
    width: '18%',
    height: '18%',
  },
];

export const HeroConstellationShowcase: React.FC = () => {
  const [activeNode, setActiveNode] = useState<ConstellationNode | null>(null);

  return (
    <div className="hero-constellation-container">
      {/* Background radial ambient glow behind constellation */}
      <div className="constellation-glow-aura" />

      {/* Main 3D Orbit Ecosystem Artwork (High-Res 2X Lanczos Feathered) */}
      <div className="constellation-art-wrapper">
        <img
          src="/hero-constellation-alpha.png"
          alt="sBLOOM 3D Digital Growth Ecosystem"
          className="constellation-art-image"
          draggable={false}
          loading="eager"
        />

        {/* Floating pulse particles along orbits */}
        <div className="orbit-pulse-particle particle-1" />
        <div className="orbit-pulse-particle particle-2" />
        <div className="orbit-pulse-particle particle-3" />

        {/* Interactive Hotspots positioned directly over each 3D tile */}
        {constellationNodes.map((node) => {
          const isActive = activeNode?.id === node.id;

          return (
            <div
              key={node.id}
              className={`constellation-hotspot ${isActive ? 'is-active' : ''}`}
              style={{
                top: node.top,
                left: node.left,
                width: node.width,
                height: node.height,
              }}
              onMouseEnter={() => setActiveNode(node)}
              onMouseLeave={() => setActiveNode(null)}
              onClick={() => setActiveNode(isActive ? null : node)}
              aria-label={node.name}
              role="button"
              tabIndex={0}
            >
              {/* Highlight Aura on Hover */}
              <div className="hotspot-halo" />

              {/* Tooltip Card with details */}
              {isActive && (
                <div className="hotspot-tooltip">
                  <div className="tooltip-cat">{node.category}</div>
                  <div className="tooltip-name">{node.name}</div>
                  <div className="tooltip-desc">{node.desc}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
