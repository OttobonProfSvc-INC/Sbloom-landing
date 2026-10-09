import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { DigitalGrowthSystem } from '../components/home/DigitalGrowthSystem';
import { AudienceDecisionJourney } from '../components/home/AudienceDecisionJourney';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* 1. HERO */}
      <section className="hero">
        <div className="hero-background-grid"></div>
        <div className="hero-radial-glow"></div>
        
        <div className="container hero-container">
          <ScrollReveal delay={0}>
            <span className="hero-label">SBLOOM — DIGITAL GROWTH PARTNER</span>
          </ScrollReveal>
          
          <ScrollReveal delay={150}>
            <h1>
              You have the expertise.<br/>
              <span className="gold-text">We make it easier to discover, understand, and choose.</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p style={{ maxWidth: '650px' }}>
              We help expertise-led organizations close the gap between the excellent work they do and what their audiences understand about them. Our digital strategies are built around how people discover, evaluate, trust, and choose an organization.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={450}>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Talk to S-Bloom</Link>
              <Link to="/how-it-works" className="btn btn-secondary">Explore Our Approach</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      
      {/* 2. SHARED CHALLENGE */}
      <section className="what-is-sbloom">
        <div className="subtle-line-connector"></div>
        <div className="container">
          <div className="what-is-sbloom-grid">
            <ScrollReveal delay={100}>
              <h2 className="what-is-heading">
                The quality of your work isn't always reflected in <span className="gold-highlight">what the outside world sees.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={250}>
              <div className="what-is-content">
                <p>
                  Educational institutions, healthcare providers, and professional consultancies all share a common problem: their marketing is high-consideration and trust-dependent. Instead of generic marketing packages, you need a digital approach built entirely around your audience's decision process.
                </p>
                <div className="what-is-transition" style={{ marginTop: '24px' }}>
                  Bridging the gap between your expertise and your audience.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. AUDIENCE DECISION JOURNEY */}
      <AudienceDecisionJourney />

      {/* 4. S-BLOOM METHODOLOGY */}
      <section className="how-it-works-section" style={{ paddingTop: '100px' }}>
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="hiw-header">
              <span className="hiw-label">OUR METHODOLOGY</span>
              <h2>Diagnose before prescribing.</h2>
              <p>We do not prescribe a fixed sequence of services. We diagnose your communication gaps and build a strategy around your actual objectives.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="hiw-process">
              <div className="hiw-line-bg"></div>
              
              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">01</div>
                <h3>UNDERSTAND</h3>
                <p>We learn your business goals, target audiences, and current digital presence.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">02</div>
                <h3>DIAGNOSE</h3>
                <p>We identify the gaps preventing your audience from discovering or trusting you.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">03</div>
                <h3>STRATEGIZE</h3>
                <p>We define priorities, audience-specific messaging, and measurable objectives.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">04</div>
                <h3>EXECUTE</h3>
                <p>We deploy the exact mix of building, creating, and promoting required to succeed.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-num">05</div>
                <h3>MEASURE AND IMPROVE</h3>
                <p>We review performance, identify what is working, and refine the approach.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. INDUSTRIES SERVED */}
      <section className="ind-grid-section">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="ind-grid-header">
              <span className="ind-grid-label">INDUSTRIES SERVED</span>
              <h2>Expertise-led organizations.</h2>
              <p>We work with organizations in Education, Healthcare, and Professional Services, developing digital strategies around their unique audiences and decision-making processes.</p>
            </div>
          </ScrollReveal>

          <div className="ind-grid">
            <ScrollReveal delay={100} className="h-full">
              <Link to="/industries/education" className="ind-card">
                <div className="ind-card-num">01</div>
                <h3 className="ind-card-title">Education</h3>
                <p className="ind-card-desc">Build a stronger digital presence for schools, colleges, training institutes and education brands.</p>
                <div className="ind-card-cta">
                  <span>Explore Education</span>
                  <span className="ind-card-arrow">→</span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200} className="h-full">
              <Link to="/industries/healthcare" className="ind-card">
                <div className="ind-card-num">02</div>
                <h3 className="ind-card-title">Healthcare</h3>
                <p className="ind-card-desc">Build trust and visibility for hospitals, clinics, doctors, diagnostic centers and healthcare brands.</p>
                <div className="ind-card-cta">
                  <span>Explore Healthcare</span>
                  <span className="ind-card-arrow">→</span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={300} className="h-full">
              <Link to="/industries/professional-services" className="ind-card">
                <div className="ind-card-num">03</div>
                <h3 className="ind-card-title">Consulting & IT</h3>
                <p className="ind-card-desc">Build a digital presence that communicates expertise, builds credibility and reaches the right B2B audience.</p>
                <div className="ind-card-cta">
                  <span>Explore Professional Services</span>
                  <span className="ind-card-arrow">→</span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. BUILD, CREATE, PROMOTE */}
      <DigitalGrowthSystem />

      {/* 7. FINAL CTA */}
      <section className="final-cta">
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <h2>Ready to grow your digital presence?</h2>
            <p style={{ marginBottom: '32px' }}>Let's discuss your organization and find the right strategic starting point.</p>
            <div className="hero-buttons" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary">Talk to S-Bloom</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
