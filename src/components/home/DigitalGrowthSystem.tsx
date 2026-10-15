import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { ScrollReveal } from '../ScrollReveal';

export const DigitalGrowthSystem: React.FC = () => {
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

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
      headline: 'Be easier to find.',
      desc: 'Establish a strong digital foundation with websites, local SEO, and business profiles.',
      services: ['Website Design & Development', 'SEO', 'Google Business Profile'],
      link: '/solutions#build',
      linkText: 'Explore Build →'
    },
    {
      id: 'create',
      num: '02',
      label: 'CREATE',
      headline: 'Be easier to understand.',
      desc: 'Communicate expertise and value through meaningful content, video, and creative work.',
      services: ['Social Media Management', 'Social Media Posts', 'Reels and Videos', 'Digital Content'],
      link: '/solutions#create',
      linkText: 'Explore Create →'
    },
    {
      id: 'promote',
      num: '03',
      label: 'PROMOTE',
      headline: 'Reach the people who matter.',
      desc: 'Reach relevant audiences through targeted campaigns and distribution.',
      services: ['Meta Ads', 'Google Ads', 'Performance Marketing', 'Campaign Management'],
      link: '/solutions#promote',
      linkText: 'Explore Promote →'
    },
    {
      id: 'grow',
      num: '04',
      label: 'GROW',
      headline: 'Drive sustainable growth.',
      desc: 'The intended business outcome, turning a stronger digital presence into a foundation for business growth.',
      services: ['Increased Visibility', 'Qualified Leads', 'Brand Trust'],
      link: '/solutions#grow',
      linkText: 'Explore Solutions →'
    }
  ];

  if (isMobile) {
    return (
      <section className="dgs-section section">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="dgs-intro">
              <span className="dgs-label">WHAT SBLOOM CHANGES</span>
              <h2 className="dgs-main-heading">We turn what you do well into something people can see, understand and act on.</h2>
            </div>
          </ScrollReveal>

          <div className="dgs-mobile-journey">
            {stages.map((stage, idx) => (
              <ScrollReveal key={stage.id} delay={idx * 100}>
                <div 
                  className="dgs-mobile-stage"
                  onClick={() => navigate(stage.link)}
                  style={{ cursor: 'pointer' }}
                >
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
                  
                  <Link 
                    to={stage.link} 
                    className="dgs-m-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {stage.linkText}
                  </Link>
                  
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
            <span className="dgs-label">WHAT SBLOOM CHANGES</span>
            <h2 className="dgs-main-heading">We turn what you do well into something people can see, understand and act on.</h2>
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
                  width: hoveredStage === 'build' ? '12.5%' : hoveredStage === 'create' ? '37.5%' : hoveredStage === 'promote' ? '62.5%' : hoveredStage === 'grow' ? '87.5%' : '0%',
                  opacity: hoveredStage ? 1 : 0
                }}
              />
            </div>
            <div className="dgs-vertical-drops">
              <div className={`dgs-v-drop ${hoveredStage === 'build' ? 'active' : ''}`}></div>
              <div className={`dgs-v-drop ${hoveredStage === 'create' ? 'active' : ''}`}></div>
              <div className={`dgs-v-drop ${hoveredStage === 'promote' ? 'active' : ''}`}></div>
              <div className={`dgs-v-drop ${hoveredStage === 'grow' ? 'active' : ''}`}></div>
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
                  onClick={() => navigate(stage.link)}
                  style={{ cursor: 'pointer' }}
                >
                  <h3 className="dgs-col-headline">{stage.headline}</h3>
                  <p className="dgs-col-desc">{stage.desc}</p>
                  
                  <div className="dgs-services-list">
                    {stage.services.map((service, i) => (
                      <div key={i} className="dgs-service-item">{service}</div>
                    ))}
                  </div>
                  
                  <Link 
                    to={stage.link} 
                    className="dgs-explore-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {stage.linkText}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
