import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

export const DigitalGrowthSystem: React.FC = () => {
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const navigate = useNavigate();

  const stages = [
    {
      id: 'build',
      num: '01',
      label: 'BUILD',
      headline: 'Be easier to find.',
      link: '/solutions#build',
    },
    {
      id: 'create',
      num: '02',
      label: 'CREATE',
      headline: 'Be easier to understand.',
      link: '/solutions#create',
    },
    {
      id: 'promote',
      num: '03',
      label: 'PROMOTE',
      headline: 'Be easier to reach the people who matter.',
      link: '/solutions#promote',
    },
    {
      id: 'grow',
      num: '04',
      label: 'GROW',
      headline: 'Be easier to drive sustainable growth.',
      link: '/solutions#grow',
    }
  ];

  return (
    <section className="dgs-section section">
      <div className="container">
        <ScrollReveal delay={0}>
          <div className="dgs-intro">
            <span className="dgs-label">WHAT SBLOOM CHANGES</span>
            <h2 className="dgs-main-heading">We turn what you do well into something people can see, understand and act on.</h2>
          </div>
        </ScrollReveal>

        <div className="dgs-stream-wrapper">
          {/* Connecting Track Line behind the steps */}
          <div className="dgs-stream-track" aria-hidden="true" />

          {/* 4 Clean Minimal Stage Columns (No Boxes, No Descriptions) */}
          <div className="dgs-stream-grid">
            {stages.map((stage, idx) => {
              const isHovered = hoveredStage === stage.id;

              return (
                <div
                  key={stage.id}
                  className={`dgs-stream-item ${isHovered ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredStage(stage.id)}
                  onMouseLeave={() => setHoveredStage(null)}
                >
                  {/* Step Number & Label */}
                  <div className="dgs-stream-header">
                    <span className="dgs-stream-num">{stage.num}</span>
                    <span className="dgs-stream-label">{stage.label}</span>
                  </div>

                  {/* Headline */}
                  <h3 className="dgs-stream-headline">{stage.headline}</h3>

                  {/* Explore Action Button */}
                  <div className="dgs-stream-action">
                    <Link
                      to={stage.link}
                      className="dgs-explore-btn"
                      aria-label={`Explore ${stage.label}`}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <span>Explore {stage.label.charAt(0) + stage.label.slice(1).toLowerCase()}</span>
                    </Link>
                  </div>

                  {/* Connector Arrow for all except last item on desktop */}
                  {idx < stages.length - 1 && (
                    <div className="dgs-stream-arrow-divider" aria-hidden="true">
                      <span className="dgs-divider-line" />
                      <ArrowRight size={14} className="dgs-divider-icon" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalGrowthSystem;
