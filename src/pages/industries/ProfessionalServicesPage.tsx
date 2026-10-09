import { Link } from "react-router-dom";
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
                We help IT consultancies, independent experts, and professional firms close the gap between their complex expertise and what their B2B clients actually understand.
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
