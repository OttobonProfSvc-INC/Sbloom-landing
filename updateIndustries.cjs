const fs = require('fs');

const educationContent = `import { Link } from "react-router-dom";
import { ScrollReveal } from "../../components/ScrollReveal";

export const EducationPage = () => {
  return (
    <div className="page edu-page-wrapper">
      <section className="ind-hero edu-hero-visual">
        <div className="container">
          <ScrollReveal delay={0}>
            <span className="ind-hero-label">SBLOOM — EDUCATION</span>
            <h1 className="ind-hero-title">Digital growth for education.</h1>
            <p className="ind-hero-desc">
              Helping schools, colleges, training institutes, and education brands build a stronger digital presence, communicate their culture, and reach the right students and parents.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="ind-journey edu-journey">
        <div className="container">
          <div className="ind-journey-grid edu-journey-grid">
            <ScrollReveal delay={100} className="ind-journey-text">
              <h2>Education decisions are aspirational.</h2>
              <p>Choosing an educational institution is a high-stakes decision that often involves both students and parents. They are looking for the right academic fit, positive outcomes, and a strong community culture. We map our digital marketing strategies to how families research programs, validate credentials, and ultimately decide to enroll.</p>
            </ScrollReveal>
            <ScrollReveal delay={200} className="ind-journey-visual">
              <div className="placeholder-video-frame">
                <span>[Campus Culture Video Placeholder]</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="ind-challenge edu-challenge">
        <div className="container">
          <ScrollReveal delay={100}>
            <h2>Moving beyond generic enrollment ads.</h2>
            <p>A generic marketing approach doesn't work for education. You need to clearly showcase campus life, alumni success, and detailed program information while navigating strict, cyclical admission periods. We help you bridge the gap between the great education you provide and the families looking for it.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="ind-approach">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="ind-approach-header">
              <h2>Our Approach applied to Education</h2>
            </div>
          </ScrollReveal>
          <div className="ind-approach-grid">
            <ScrollReveal delay={100}>
              <div className="ind-approach-card">
                <h3>BUILD</h3>
                <p>We streamline your website architecture ensuring prospective students can easily discover programs, admission requirements, and campus details.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="ind-approach-card">
                <h3>CREATE</h3>
                <p>We produce authentic student-life videos, Reels, and digital content that accurately reflect your institution's culture.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="ind-approach-card">
                <h3>PROMOTE</h3>
                <p>We run highly targeted Meta Ads and search campaigns perfectly timed with your academic calendar and enrollment periods.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <h2>Ready to grow your digital presence?</h2>
            <div className="hero-buttons" style={{ marginTop: '40px', justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary">Request an Education Strategy Consultation</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;
`;

const healthcareContent = `import { Link } from "react-router-dom";
import { ScrollReveal } from "../../components/ScrollReveal";

export const HealthcarePage = () => {
  return (
    <div className="page health-page-wrapper">
      <section className="ind-hero health-hero-visual">
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <span className="ind-hero-label">SBLOOM — HEALTHCARE</span>
            <h1 className="ind-hero-title mx-auto">Digital growth for healthcare.</h1>
            <p className="ind-hero-desc mx-auto">
              Helping hospitals, clinics, doctors, diagnostic centers, and wellness brands build local visibility, communicate their clinical expertise, and reach the right patients.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="ind-journey health-journey">
        <div className="container">
          <ScrollReveal delay={100}>
            <div className="health-trust-badge-layout">
              <div className="health-badge-icon">⚕</div>
              <h2>Healthcare decisions are built on trust and urgency.</h2>
              <p>When patients seek medical care, they are often anxious or in urgent need. They evaluate your organization based on the qualifications of your doctors, clear explanations of treatments, and the perceived safety of your facilities. Our marketing approach respects this journey by prioritizing trust, empathy, and easy access to information.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="ind-challenge health-challenge">
        <div className="container">
          <div className="health-challenge-grid">
            <ScrollReveal delay={100}>
              <h2>Balancing clinical authority with approachability.</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p>Healthcare organizations face strict compliance regulations and the challenge of managing local reputation. Flashy, transactional ads can damage a clinic's credibility. We ensure your digital presence is professional, compliant, and highly visible to those actively seeking care.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="ind-approach health-approach">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="ind-approach-header">
              <h2>Our Approach applied to Healthcare</h2>
            </div>
          </ScrollReveal>
          <div className="health-approach-list">
            <ScrollReveal delay={100}>
              <div className="health-approach-item">
                <div className="health-approach-label">BUILD</div>
                <div className="health-approach-text">We focus heavily on hyper-local SEO and Google Business Profile optimization so patients find you exactly when they search for care "near me."</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="health-approach-item">
                <div className="health-approach-label">CREATE</div>
                <div className="health-approach-text">We develop patient education content and physician Q&As that build clinical authority while remaining empathetic and easy to understand.</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="health-approach-item">
                <div className="health-approach-label">PROMOTE</div>
                <div className="health-approach-text">We deploy high-intent Google Search Ads capturing patients actively seeking specific treatments or urgent care.</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <h2>Ready to grow your digital presence?</h2>
            <div className="hero-buttons" style={{ marginTop: '40px', justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary">Request a Healthcare Strategy Consultation</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HealthcarePage;
`;

const professionalServicesContent = `import { Link } from "react-router-dom";
import { ScrollReveal } from "../../components/ScrollReveal";

export const ConsultingProfessionalServicesPage = () => {
  return (
    <div className="page ps-page-wrapper">
      <section className="ind-hero ps-hero-visual">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="ps-editorial-header">
              <span className="ind-hero-label">SBLOOM — PROFESSIONAL SERVICES</span>
              <h1 className="ind-hero-title">Digital growth for consulting and professional services.</h1>
              <p className="ind-hero-desc">
                Helping IT consultancies, independent experts, and professional firms communicate complex value, differentiate their expertise, and generate high-quality B2B leads.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="ind-journey ps-journey">
        <div className="container">
          <div className="ps-editorial-columns">
            <ScrollReveal delay={100} className="ps-col">
              <h2>B2B decisions focus on risk mitigation and authority.</h2>
            </ScrollReveal>
            <ScrollReveal delay={200} className="ps-col">
              <p>Corporate clients and procurement teams do not make impulse purchases. They evaluate your firm based on proven methodologies, deep industry understanding, and past success. Whether you are an independent consultant or a large IT firm, our approach focuses on proving your capability before the first conversation even happens.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="ind-challenge ps-challenge">
        <div className="container">
          <div className="ps-editorial-box">
            <ScrollReveal delay={100}>
              <h2>Making invisible expertise visible.</h2>
              <p>The biggest challenge for professional services is differentiation. Jargon-heavy websites and generic B2B marketing obscure your true value. You don't just need local visibility; you need to establish thought leadership and build authority in a crowded, competitive market.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="ind-approach ps-approach">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="ind-approach-header border-top">
              <h2>Our Approach applied to Professional Services</h2>
            </div>
          </ScrollReveal>
          <div className="ps-approach-grid ind-approach-grid">
            <ScrollReveal delay={100}>
              <div className="ps-approach-card ind-approach-card">
                <h3>BUILD</h3>
                <p>We develop a technical SEO architecture centered around the complex business problems your firm solves.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="ps-approach-card ind-approach-card">
                <h3>CREATE</h3>
                <p>We produce authoritative digital content, including long-form articles and optimized LinkedIn posts, that showcase your methodology.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="ps-approach-card ind-approach-card">
                <h3>PROMOTE</h3>
                <p>We utilize targeted LinkedIn B2B advertising and Account-Based Marketing (ABM) strategies to reach specific decision-makers.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <h2>Ready to grow your digital presence?</h2>
            <div className="hero-buttons" style={{ marginTop: '40px', justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary">Request a Professional Services Strategy Consultation</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ConsultingProfessionalServicesPage;
`;

fs.writeFileSync('src/pages/industries/EducationPage.tsx', educationContent);
fs.writeFileSync('src/pages/industries/HealthcarePage.tsx', healthcareContent);
fs.writeFileSync('src/pages/industries/ProfessionalServicesPage.tsx', professionalServicesContent);

// Add custom CSS for industry pages
let css = fs.readFileSync('src/index.css', 'utf8');

const industryCSS = `
/* Industry Pages Shared */
.ind-hero {
  padding-top: 140px;
  padding-bottom: 60px;
  background-color: var(--bg-primary);
}
.ind-hero-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: var(--gold-primary);
  margin-bottom: 24px;
  display: block;
}
.ind-hero-title {
  font-size: 3.5rem;
  margin-bottom: 24px;
  color: var(--text-primary);
  max-width: 800px;
}
.ind-hero-desc {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 600px;
  line-height: 1.6;
}
.ind-journey {
  padding: 80px 0;
  background-color: var(--bg-secondary);
}
.ind-journey h2 {
  font-size: 2.25rem;
  margin-bottom: 24px;
}
.ind-challenge {
  padding: 80px 0;
  background-color: var(--bg-primary);
}
.ind-challenge h2 {
  font-size: 2.25rem;
  margin-bottom: 24px;
}
.ind-approach {
  padding: 80px 0;
  background-color: var(--bg-light);
}
.ind-approach-header h2 {
  font-size: 2.5rem;
  margin-bottom: 60px;
  text-align: center;
}
.ind-approach-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.ind-approach-card {
  padding: 40px;
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  height: 100%;
}
.ind-approach-card h3 {
  color: var(--gold-primary);
  margin-bottom: 16px;
  font-size: 1.25rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

/* Education Specific */
.edu-journey-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.placeholder-video-frame {
  aspect-ratio: 16 / 9;
  background: var(--border-light);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold-primary);
  font-size: 0.85rem;
  letter-spacing: 2px;
}
.edu-challenge {
  text-align: center;
}
.edu-challenge h2, .edu-challenge p {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Healthcare Specific */
.health-trust-badge-layout {
  background: var(--bg-primary);
  padding: 60px;
  border: 1px solid var(--border-subtle);
  text-align: center;
}
.health-badge-icon {
  font-size: 3rem;
  color: var(--gold-primary);
  margin-bottom: 24px;
}
.health-challenge-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
}
.health-approach-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.health-approach-item {
  display: flex;
  padding: 40px;
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  align-items: flex-start;
  gap: 40px;
}
.health-approach-label {
  width: 150px;
  font-weight: 600;
  color: var(--gold-primary);
  letter-spacing: 2px;
}
.health-approach-text {
  flex: 1;
  font-size: 1.1rem;
}

/* Professional Services Specific */
.ps-editorial-header {
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 60px;
}
.ps-editorial-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}
.ps-col h2 {
  font-size: 2.5rem;
}
.ps-editorial-box {
  border-left: 4px solid var(--gold-primary);
  padding-left: 40px;
  max-width: 800px;
}
.border-top {
  border-top: 1px solid var(--border-subtle);
  padding-top: 60px;
}

@media (max-width: 768px) {
  .edu-journey-grid, .health-challenge-grid, .ps-editorial-columns, .ind-approach-grid {
    grid-template-columns: 1fr;
  }
  .health-approach-item {
    flex-direction: column;
    gap: 16px;
  }
  .ind-hero-title {
    font-size: 2.5rem;
  }
}
`;

if (!css.includes('/* Industry Pages Shared */')) {
  fs.writeFileSync('src/index.css', css + '\\n' + industryCSS);
}
