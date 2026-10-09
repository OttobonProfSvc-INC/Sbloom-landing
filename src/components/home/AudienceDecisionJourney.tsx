import React, { useState, useEffect } from 'react';
import { ScrollReveal } from '../ScrollReveal';

export const AudienceDecisionJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
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
      desc: 'The audience becomes aware of your organization and the services you provide.'
    },
    {
      id: 'understand',
      title: 'Understand',
      desc: 'They seek to understand your true value, expertise, and how you can help them.'
    },
    {
      id: 'trust',
      title: 'Trust',
      desc: 'They look for credibility, peer validation, and signals that reduce perceived risk.'
    },
    {
      id: 'evaluate',
      title: 'Evaluate',
      desc: 'They compare you against alternatives to see who is the best fit.'
    },
    {
      id: 'choose',
      title: 'Choose',
      desc: 'They make a high-stakes decision and reach out to engage your services.'
    }
  ];

  return (
    <section className="audience-journey-section" style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <ScrollReveal delay={0}>
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="hiw-label" style={{ color: 'var(--gold-deep)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>THE AUDIENCE DECISION JOURNEY</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '16px', marginBottom: '16px', color: 'var(--text-primary)' }}>High-stakes decisions require a different path.</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
              Your audience doesn't just click and buy. They research, evaluate, establish confidence, and compare before making a choice.
            </p>
          </div>
        </ScrollReveal>

        <div className="journey-interactive" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {isMobile ? (
            <div className="journey-mobile-list" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {steps.map((step, idx) => (
                <ScrollReveal delay={idx * 100} key={step.id}>
                  <div className="journey-mobile-card" style={{ backgroundColor: 'var(--bg-primary)', padding: '24px', borderRadius: '8px', borderLeft: '4px solid var(--gold-deep)' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-primary)' }}>{idx + 1}. {step.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="journey-desktop" role="tablist" aria-orientation="horizontal">
              <div className="journey-tabs" style={{ display: 'flex', position: 'relative', marginBottom: '40px' }}>
                {/* Connecting background line */}
                <div style={{ position: 'absolute', top: '50%', left: '10%', right: '10%', height: '2px', backgroundColor: 'var(--border-subtle)', transform: 'translateY(-50%)', zIndex: 1 }}></div>
                {/* Active progress line */}
                <div style={{ position: 'absolute', top: '50%', left: '10%', width: `${(activeStep / (steps.length - 1)) * 80}%`, height: '2px', backgroundColor: 'var(--gold-deep)', transform: 'translateY(-50%)', zIndex: 2, transition: 'width 0.4s ease' }}></div>
                
                {steps.map((step, idx) => (
                  <button
                    key={step.id}
                    role="tab"
                    aria-selected={activeStep === idx}
                    aria-controls={`panel-${step.id}`}
                    id={`tab-${step.id}`}
                    onClick={() => setActiveStep(idx)}
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      zIndex: 3,
                      position: 'relative',
                      outline: 'none'
                    }}
                  >
                    <div style={{ 
                      width: '24px', 
                      height: '24px', 
                      borderRadius: '50%', 
                      backgroundColor: activeStep >= idx ? 'var(--gold-deep)' : 'var(--bg-primary)',
                      border: activeStep >= idx ? '2px solid var(--gold-deep)' : '2px solid var(--border-subtle)',
                      marginBottom: '12px',
                      transition: 'all 0.3s ease'
                    }}></div>
                    <span style={{
                      fontSize: '1.1rem',
                      fontWeight: activeStep === idx ? '600' : '500',
                      color: activeStep === idx ? 'var(--text-primary)' : 'var(--text-secondary)',
                      transition: 'all 0.3s ease'
                    }}>
                      {step.title}
                    </span>
                  </button>
                ))}
              </div>
              <div 
                id={`panel-${steps[activeStep].id}`}
                role="tabpanel"
                aria-labelledby={`tab-${steps[activeStep].id}`}
                className="journey-content" 
                style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-primary)', padding: '40px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}
              >
                <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', textAlign: 'center', maxWidth: '600px' }}>
                  {steps[activeStep].desc}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
