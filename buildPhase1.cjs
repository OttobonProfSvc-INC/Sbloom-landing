const fs = require('fs');
const path = require('path');

const homePageContent = `import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { DigitalGrowthSystem } from '../components/home/DigitalGrowthSystem';
import { AudienceDecisionJourney } from '../components/home/AudienceDecisionJourney';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* SECTION 1: HERO */}
      <section className="hero">
        <div className="hero-background-grid"></div>
        <div className="hero-radial-glow"></div>
        
        <div className="container hero-container">
          <ScrollReveal delay={0}>
            <span className="hero-label" style={{ letterSpacing: '3px' }}>FOR BUSINESSES WHERE TRUST MATTERS</span>
          </ScrollReveal>
          
          <ScrollReveal delay={150}>
            <h1 style={{ maxWidth: '900px', margin: '0 auto 24px' }}>
              Good work deserves to be <span className="gold-text">seen, understood and chosen.</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p style={{ maxWidth: '650px', margin: '0 auto' }}>
              We help education, healthcare, technology, and professional-services businesses communicate their value, build trust, and reach the right people.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={450}>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Talk to sBLOOM</Link>
              <Link to="/how-it-works" className="btn btn-secondary">See How We Help</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: WHY MARKETING IS DIFFERENT */}
      <section className="what-is-sbloom" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="what-is-sbloom-grid">
            <ScrollReveal delay={100}>
              <h2 className="what-is-heading">
                Not every business is <span className="gold-highlight">chosen the same way.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={250}>
              <div className="what-is-content">
                <p>
                  Parents choosing a school, patients choosing a healthcare provider, and businesses choosing a technology partner have different concerns and reasons to trust.
                </p>
                <div className="what-is-transition" style={{ marginTop: '24px', fontSize: '1.25rem', fontWeight: '500', color: 'var(--gold-deep)' }}>
                  Attention gets you noticed. Trust helps people choose you.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE CUSTOMER DECISION JOURNEY */}
      <AudienceDecisionJourney />

      {/* SECTION 4: WHAT S-BLOOM CHANGES */}
      <DigitalGrowthSystem />

      {/* SECTION 5: INDUSTRIES */}
      <section className="ind-grid-section">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="ind-grid-header">
              <span className="ind-grid-label">INDUSTRIES</span>
              <h2>The decision changes. So does the marketing.</h2>
            </div>
          </ScrollReveal>

          <div className="ind-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <ScrollReveal delay={100} className="h-full">
              <Link to="/industries/education" className="ind-card h-full flex-col">
                <div className="ind-card-num">01</div>
                <h3 className="ind-card-title">Education</h3>
                <p className="ind-card-desc"><strong>Choosing a future.</strong><br/><br/>Reputation, learning experience, programs, outcomes, and institutional credibility.</p>
                <div className="ind-card-cta" style={{ marginTop: 'auto' }}>
                  <span>Explore Education</span>
                  <span className="ind-card-arrow">→</span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200} className="h-full">
              <Link to="/industries/healthcare" className="ind-card h-full flex-col">
                <div className="ind-card-num">02</div>
                <h3 className="ind-card-title">Healthcare</h3>
                <p className="ind-card-desc"><strong>Choosing whom to trust with health.</strong><br/><br/>Expertise, credibility, care, clarity, and confidence.</p>
                <div className="ind-card-cta" style={{ marginTop: 'auto' }}>
                  <span>Explore Healthcare</span>
                  <span className="ind-card-arrow">→</span>
                </div>
              </Link>
            </ScrollReveal>
            
            <ScrollReveal delay={300} className="h-full">
              <Link to="/industries/technology" className="ind-card h-full flex-col">
                <div className="ind-card-num">03</div>
                <h3 className="ind-card-title">Technology & IT</h3>
                <p className="ind-card-desc"><strong>Choosing who can solve a problem.</strong><br/><br/>Capability, expertise, solutions, reliability, and proof.</p>
                <div className="ind-card-cta" style={{ marginTop: 'auto' }}>
                  <span>Explore Technology</span>
                  <span className="ind-card-arrow">→</span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={400} className="h-full">
              <Link to="/industries/professional-services" className="ind-card h-full flex-col">
                <div className="ind-card-num">04</div>
                <h3 className="ind-card-title">Professional Services</h3>
                <p className="ind-card-desc"><strong>Choosing whose expertise to trust.</strong><br/><br/>Specialisation, credibility, value, and professional reputation.</p>
                <div className="ind-card-cta" style={{ marginTop: 'auto' }}>
                  <span>Explore Services</span>
                  <span className="ind-card-arrow">→</span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY S-BLOOM */}
      <section className="why-sbloom-section" style={{ padding: '120px 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="text-center" style={{ marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--text-primary)' }}>
                We start with your business. Then bring the right capabilities together.
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
            <ScrollReveal delay={100}>
              <div style={{ padding: '32px', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: 'var(--gold-deep)', marginBottom: '16px' }}>Strategy before execution.</h3>
                <p style={{ color: 'var(--text-secondary)' }}>We don't jump straight into tactics. We diagnose the gap between your expertise and your audience's perception first.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div style={{ padding: '32px', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: 'var(--gold-deep)', marginBottom: '16px' }}>An approach shaped around the business.</h3>
                <p style={{ color: 'var(--text-secondary)' }}>No generic packages. Everything we do is custom-fitted to your unique industry, audience, and goals.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div style={{ padding: '32px', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: 'var(--gold-deep)', marginBottom: '16px' }}>The right capabilities for the work.</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Through our creative workspace ecosystem, we bring in specialized talent exactly when and where the strategy demands it.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div style={{ padding: '32px', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)' }}>
                <h3 style={{ color: 'var(--gold-deep)', marginBottom: '16px' }}>One connected approach to digital growth.</h3>
                <p style={{ color: 'var(--text-secondary)' }}>From foundational SEO to high-end video production, every deliverable pushes toward the same strategic outcome.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 7: HOW WE WORK */}
      <section className="how-it-works-section" style={{ padding: '120px 0', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="hiw-header">
              <h2>A clear plan. The right people. Work that moves you forward.</h2>
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
                <p>Learn about the business, audience, and goals.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">02</div>
                <h3>PLAN</h3>
                <p>Identify priorities and define the approach.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">03</div>
                <h3>ASSEMBLE</h3>
                <p>Bring together the capabilities needed for the work.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">04</div>
                <h3>DELIVER</h3>
                <p>Execute the relevant BUILD, CREATE, and PROMOTE activities.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-num">05</div>
                <h3>IMPROVE</h3>
                <p>Review performance and refine the approach.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 8: OUR WORK AND PROOF */}
      <section className="portfolio-preview-section" style={{ padding: '120px 0', backgroundColor: 'var(--bg-light)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="text-center" style={{ marginBottom: '60px' }}>
              <h2>Good strategy should show up in the work.</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <ScrollReveal delay={100}>
              <Link to="/work" className="port-card" style={{ display: 'block', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ aspectRatio: '16/9', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Vizag Sainik Academy Project</span>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Vizag Sainik Academy</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>View Case Study →</p>
                </div>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link to="/work" className="port-card" style={{ display: 'block', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ aspectRatio: '16/9', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Bansal Classes Project</span>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Bansal Classes</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>View Case Study →</p>
                </div>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Link to="/work" className="port-card" style={{ display: 'block', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ aspectRatio: '16/9', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Abhyasa Project</span>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Abhyasa Child Development</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>View Case Study →</p>
                </div>
              </Link>
            </ScrollReveal>
          </div>
          <div className="text-center" style={{ marginTop: '48px' }}>
            <Link to="/work" className="btn btn-secondary">View All Work</Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: BRAND PHILOSOPHY */}
      <section className="brand-philosophy-section" style={{ padding: '120px 0', backgroundColor: 'var(--bg-lavender)' }}>
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)' }}>BELIEVE</div>
              <div style={{ color: 'var(--gold-deep)', fontSize: '1.5rem' }}>→</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)' }}>BEGIN</div>
              <div style={{ color: 'var(--gold-deep)', fontSize: '1.5rem' }}>→</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)' }}>BECOME</div>
            </div>
            <p style={{ maxWidth: '600px', margin: '32px auto 0', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              Our philosophy drives everything we do. We believe in your expertise, we begin with a strategic foundation, and we help you become the obvious choice for your audience.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="final-cta">
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <h2>Your business has potential. Let's help the right people see it.</h2>
            <div className="hero-buttons" style={{ justifyContent: 'center', marginTop: '32px' }}>
              <Link to="/contact" className="btn btn-primary">Talk to sBLOOM</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
`;

const audienceContent = `import React from 'react';
import { ScrollReveal } from './../ScrollReveal';

export const AudienceDecisionJourney: React.FC = () => {
  const steps = [
    {
      id: 'discover',
      title: 'DISCOVER',
      desc: 'People find out you exist.'
    },
    {
      id: 'understand',
      title: 'UNDERSTAND',
      desc: 'They recognise what you offer and why it matters.'
    },
    {
      id: 'trust',
      title: 'TRUST',
      desc: 'They find reasons to feel confident in you.'
    },
    {
      id: 'consider',
      title: 'CONSIDER',
      desc: 'They compare you with other options.'
    },
    {
      id: 'act',
      title: 'ACT',
      desc: 'They take the next step.'
    }
  ];

  return (
    <section className="audience-journey-section" style={{ padding: '100px 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <ScrollReveal delay={0}>
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)' }}>Before people choose you, they need to understand you.</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '24px auto 0', fontSize: '1.1rem' }}>
              The customer decision journey is not a straight line.
            </p>
          </div>
        </ScrollReveal>

        <div className="journey-interactive" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="journey-mobile-list" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {steps.map((step, idx) => (
              <ScrollReveal delay={idx * 100} key={step.id}>
                <div className="journey-card" style={{ padding: '24px', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', borderRadius: '4px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <div style={{ color: 'var(--gold-deep)', fontWeight: 'bold', fontSize: '1.5rem', minWidth: '40px' }}>0{idx + 1}</div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{step.title}</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
`;

const dgsContent = `import React from 'react';
import { ScrollReveal } from './../ScrollReveal';

export const DigitalGrowthSystem: React.FC = () => {
  return (
    <section className="dgs-section" style={{ padding: '120px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <ScrollReveal delay={0}>
          <div className="dgs-intro text-center" style={{ marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>We turn what you do well into something people can see, understand and act on.</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Website development, local SEO, creative production, and advertising are capabilities. We deploy them to achieve these four business outcomes.
            </p>
          </div>
        </ScrollReveal>

        <div className="dgs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
          
          <ScrollReveal delay={100} className="h-full">
            <div className="dgs-card h-full" style={{ padding: '40px', background: 'var(--bg-light)', border: '1px solid var(--border-subtle)' }}>
              <h3 style={{ color: 'var(--gold-deep)', fontSize: '1.75rem', marginBottom: '16px' }}>BUILD</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: '500', marginBottom: '16px' }}>Be easier to find.</p>
              <p style={{ color: 'var(--text-secondary)' }}>Establish a strong, clear digital foundation so your audience can discover you when they are searching.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200} className="h-full">
            <div className="dgs-card h-full" style={{ padding: '40px', background: 'var(--bg-light)', border: '1px solid var(--border-subtle)' }}>
              <h3 style={{ color: 'var(--gold-deep)', fontSize: '1.75rem', marginBottom: '16px' }}>CREATE</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: '500', marginBottom: '16px' }}>Be easier to understand.</p>
              <p style={{ color: 'var(--text-secondary)' }}>Communicate expertise and value through meaningful content, design, and creative work that builds trust.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300} className="h-full">
            <div className="dgs-card h-full" style={{ padding: '40px', background: 'var(--bg-light)', border: '1px solid var(--border-subtle)' }}>
              <h3 style={{ color: 'var(--gold-deep)', fontSize: '1.75rem', marginBottom: '16px' }}>PROMOTE</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: '500', marginBottom: '16px' }}>Reach the people who matter.</p>
              <p style={{ color: 'var(--text-secondary)' }}>Amplify your message through targeted campaigns and distribution to the right audience.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400} className="h-full">
            <div className="dgs-card h-full" style={{ padding: '40px', background: 'var(--bg-light)', border: '1px solid var(--border-subtle)' }}>
              <h3 style={{ color: 'var(--gold-deep)', fontSize: '1.75rem', marginBottom: '16px' }}>GROW</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: '500', marginBottom: '16px' }}>Turn presence into results.</p>
              <p style={{ color: 'var(--text-secondary)' }}>The intended business outcome. Convert a stronger digital presence into measurable business growth.</p>
            </div>
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  );
};
`;

fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'HomePage.tsx'), homePageContent);
fs.writeFileSync(path.join(__dirname, 'src', 'components', 'home', 'AudienceDecisionJourney.tsx'), audienceContent);
fs.writeFileSync(path.join(__dirname, 'src', 'components', 'home', 'DigitalGrowthSystem.tsx'), dgsContent);
console.log('Phase 1 homepage layout applied successfully.');
