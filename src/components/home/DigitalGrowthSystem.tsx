import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ScrollReveal';

export const DigitalGrowthSystem: React.FC = () => {
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stages = [
    {
      id: 'build',
      num: '01',
      label: 'BUILD',
      headline: 'Make your expertise discoverable.',
      desc: 'We build the digital infrastructure required to make your organization\'s expertise and services easier to discover and navigate.',
      services: ['Website Design & Development', 'SEO', 'Google Business Profile'],
      link: '/solutions/build',
      linkText: 'Explore Build →'
    },
    {
      id: 'create',
      num: '02',
      label: 'CREATE',
      headline: 'Help audiences understand.',
      desc: 'We produce the materials required to help audiences understand your expertise, value, and approach.',
      services: ['Social Media Management', 'Social Media Posts', 'Reels and Videos', 'Digital Content'],
      link: '/solutions/create',
      linkText: 'Explore Create →'
    },
    {
      id: 'promote',
      num: '03',
      label: 'PROMOTE',
      headline: 'Reach relevant audiences.',
      desc: 'We amplify your message, putting your organization directly in front of relevant audiences through appropriate campaigns.',
      services: ['Meta Ads', 'Google Ads', 'Performance Marketing', 'Campaign Management'],
      link: '/solutions/promote',
      linkText: 'Explore Promote →'
    }
  ];

  if (isMobile) {
    return (
      <section className="dgs-section section">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="dgs-intro">
              <span className="dgs-label">THE S-BLOOM SYSTEM</span>
              <h2 className="dgs-main-heading">Everything your digital presence needs to move forward.</h2>
              <p className="dgs-supporting">A coordinated delivery framework applied dynamically based on your diagnosed needs.</p>
            </div>
          </ScrollReveal>

          <div className="dgs-mobile-journey">
            {stages.map((stage, idx) => (
              <ScrollReveal key={stage.id} delay={idx * 100}>
                <div className="dgs-mobile-stage">
                  <div className="dgs-mobile-num-label">
                    <span className="dgs-m-num">{stage.num}</span>
                    <span className="dgs-m-label">{stage.label}</span>
                  </div>
                  <h3 className="dgs-m-headline">{stage.headline}</h3>
                  <p className="dgs-m-desc">{stage.desc}</p>
                  
                  <div className="dgs-m-services">
                    {stage.services.map((service, i) => (
                      <div key={i} className="dgs-service-item">{service}</div>
                    ))}
                  </div>
                  
                  <Link to={stage.link} className="dgs-m-link">{stage.linkText}</Link>
                  
                  {/* Connecting Line */}
                  {idx < stages.length - 1 && <div className="dgs-m-line"></div>}
                </div>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>
    );
  }

  // Desktop Horizontal System
  return (
    <section className="dgs-section section">
      <div className="container">
        <ScrollReveal delay={0}>
          <div className="dgs-intro">
            <span className="dgs-label">THE S-BLOOM SYSTEM</span>
            <h2 className="dgs-main-heading">Everything your digital presence needs to move forward.</h2>
            <p className="dgs-supporting">A coordinated delivery framework applied dynamically based on your diagnosed needs.</p>
          </div>
        </ScrollReveal>

        <div className="dgs-system-wrapper">
          {/* Top Line & Labels */}
          <div className="dgs-diagram-top">
            {stages.map((stage) => {
              const isActive = hoveredStage === stage.id;
              const isDimmed = hoveredStage !== null && !isActive;
              
              return (
                <div 
                  key={stage.id} 
                  className={`dgs-node ${isActive ? 'active' : ''} ${isDimmed ? 'dimmed' : ''}`}
                >
                  <span className="dgs-node-num">{stage.num}</span>
                  <span className="dgs-node-label">{stage.label}</span>
                </div>
              );
            })}
          </div>

          {/* Connecting Line Architecture */}
          <div className="dgs-line-system">
            <div className="dgs-horizontal-line">
              <div 
                className="dgs-horizontal-line-highlight"
                style={{
                  width: hoveredStage === 'build' ? '16.66%' : hoveredStage === 'create' ? '50%' : hoveredStage === 'promote' ? '83.33%' : '0%',
                  opacity: hoveredStage ? 1 : 0
                }}
              />
            </div>
            <div className="dgs-vertical-drops">
              <div className={`dgs-v-drop ${hoveredStage === 'build' ? 'active' : ''}`}></div>
              <div className={`dgs-v-drop ${hoveredStage === 'create' ? 'active' : ''}`}></div>
              <div className={`dgs-v-drop ${hoveredStage === 'promote' ? 'active' : ''}`}></div>
            </div>
          </div>

          {/* Content Columns */}
          <div className="dgs-columns" onMouseLeave={() => setHoveredStage(null)}>
            {stages.map((stage) => {
              const isActive = hoveredStage === stage.id;
              const isDimmed = hoveredStage !== null && !isActive;

              return (
                <div 
                  key={stage.id} 
                  className={`dgs-col ${isActive ? 'active' : ''} ${isDimmed ? 'dimmed' : ''}`}
                  onMouseEnter={() => setHoveredStage(stage.id)}
                >
                  <h3 className="dgs-col-headline">{stage.headline}</h3>
                  <p className="dgs-col-desc">{stage.desc}</p>
                  
                  <div className="dgs-services-list">
                    {stage.services.map((service, i) => (
                      <div key={i} className="dgs-service-item">{service}</div>
                    ))}
                  </div>
                  
                  <Link to={stage.link} className="dgs-explore-link">{stage.linkText}</Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
