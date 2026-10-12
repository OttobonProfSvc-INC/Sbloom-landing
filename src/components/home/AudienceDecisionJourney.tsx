import React, { useState, useEffect } from 'react';
import { ScrollReveal } from '../ScrollReveal';
import { Compass, Lightbulb, ShieldCheck, Scale, MousePointerClick } from 'lucide-react';

export const AudienceDecisionJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1); // Default to Understand
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const steps = [
    {
      id: 'discover',
      title: 'Discover',
      heading: 'They find your brand and become aware of what you offer.',
      desc: 'People first find your brand and become aware of what you offer.',
      icon: Compass
    },
    {
      id: 'understand',
      title: 'Understand',
      heading: 'They recognise what you offer and why it matters.',
      desc: 'They clearly see your value, differentiate you from others, and understand how it helps them.',
      icon: Lightbulb
    },
    {
      id: 'trust',
      title: 'Trust',
      heading: 'They see evidence that your business is credible.',
      desc: 'They see evidence that your business is credible and reliable.',
      icon: ShieldCheck
    },
    {
      id: 'consider',
      title: 'Consider',
      heading: 'They evaluate whether it fits their needs.',
      desc: 'They compare your offering with alternatives and evaluate whether it fits their needs.',
      icon: Scale
    },
    {
      id: 'act',
      title: 'Act',
      heading: 'They feel ready to take the next step.',
      desc: 'They feel ready to contact you, enquire, or take the next step.',
      icon: MousePointerClick
    }
  ];

  return (
    <section className="audience-journey-section" style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <ScrollReveal delay={0}>
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <span style={{ color: '#785A46', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>THE AUDIENCE DECISION JOURNEY</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '16px', marginBottom: '16px', color: '#35251F' }}>Before people choose you, they need to understand you.</h2>
          </div>
        </ScrollReveal>

        <div className="journey-interactive" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {isMobile ? (
            <div className="journey-mobile-list" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <ScrollReveal delay={idx * 100} key={step.id}>
                    <div style={{ 
                      backgroundColor: '#F8F5F1', 
                      padding: '24px', 
                      borderRadius: '16px', 
                      borderLeft: '4px solid #35251F',
                      display: 'flex',
                      gap: '16px'
                    }}>
                      <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#35251F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={24} color="#F8F5F1" />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#35251F' }}>{idx + 1}. {step.title}</h3>
                        <p style={{ color: '#785A46', fontSize: '1rem', fontWeight: '600', marginBottom: '4px' }}>{step.heading}</p>
                        <p style={{ color: '#785A46', fontSize: '0.95rem' }}>{step.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          ) : (
            <div className="journey-desktop">
              {/* Timeline Graphic */}
              <div style={{ position: 'relative', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', padding: '0 40px', height: '120px', alignItems: 'center' }}>
                {/* Connecting Line */}
                <div style={{ position: 'absolute', top: '50%', left: '80px', right: '80px', height: '2px', backgroundColor: '#E5DCD3', transform: 'translateY(-50%)', zIndex: 1 }}></div>
                
                {steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  const isPast = activeStep > idx;
                  return (
                    <button
                      key={step.id}
                      onMouseEnter={() => setActiveStep(idx)}
                      onFocus={() => setActiveStep(idx)}
                      onClick={() => setActiveStep(idx)}
                      style={{
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        outline: 'none',
                        width: '120px',
                        transform: isActive ? 'translateY(-4px)' : 'none',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      {/* Node Circle */}
                      <div style={{
                        width: isActive ? '32px' : '24px',
                        height: isActive ? '32px' : '24px',
                        borderRadius: '50%',
                        backgroundColor: isActive ? '#35251F' : '#F8F5F1',
                        border: isActive ? '4px solid #F8F5F1' : '3px solid #F8F5F1',
                        boxShadow: isActive ? '0 0 0 8px rgba(120, 90, 70, 0.15), 0 4px 12px rgba(53, 37, 31, 0.2)' : '0 2px 6px rgba(0,0,0,0.05)',
                        position: 'relative',
                        marginBottom: '16px',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {/* Inner Dot for past or active */}
                        {(isPast || isActive) && !isActive && (
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D9A52E' }}></div>
                        )}
                      </div>
                      
                      {/* Label Pill */}
                      <div style={{
                        padding: '6px 20px',
                        backgroundColor: isActive ? '#35251F' : '#F8F5F1',
                        color: isActive ? '#FFFFFF' : '#35251F',
                        borderRadius: '20px',
                        fontSize: '0.95rem',
                        fontWeight: isActive ? '600' : '500',
                        boxShadow: isActive ? '0 8px 16px rgba(53, 37, 31, 0.15)' : '0 2px 6px rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease'
                      }}>
                        {step.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Content Card */}
              <div 
                style={{ 
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '48px',
                  border: '1px solid #E5DCD3',
                  boxShadow: '0 24px 48px rgba(53, 37, 31, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '40px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease'
                }}
              >
                {/* Active Stage Pointer Triangle */}
                <div style={{
                  position: 'absolute',
                  top: '-1px',
                  left: `calc(${(activeStep / (steps.length - 1)) * 100}% - 12px)`,
                  marginLeft: `calc(${(activeStep / (steps.length - 1)) * -160 + 80}px)`,
                  width: '0',
                  height: '0',
                  borderLeft: '12px solid transparent',
                  borderRight: '12px solid transparent',
                  borderTop: '12px solid #35251F',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: 0 /* Hide triangle since it conflicts with the pill sometimes, can re-enable if needed */
                }}></div>

                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeStep === idx;
                  return (
                    <div 
                      key={step.id}
                      style={{
                        display: isActive ? 'flex' : 'none',
                        alignItems: 'center',
                        gap: '40px',
                        width: '100%',
                        animation: isActive ? 'fadeInUp 0.4s ease forwards' : 'none'
                      }}
                    >
                      {/* Icon Container */}
                      <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: '#F8F5F1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '2px solid #E5DCD3',
                        boxShadow: '0 8px 16px rgba(120, 90, 70, 0.1)'
                      }}>
                        <Icon size={36} color="#35251F" />
                      </div>
                      
                      {/* Text Content */}
                      <div>
                        <h3 style={{ fontSize: '1.5rem', color: '#35251F', marginBottom: '12px', fontWeight: '600' }}>
                          <span style={{ color: '#785A46' }}>They {step.title.toLowerCase()}</span>{' '}
                          {step.heading.replace(`They ${step.title.toLowerCase()} `, '').replace(`They `, '')}
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: '#785A46', lineHeight: '1.6' }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};
