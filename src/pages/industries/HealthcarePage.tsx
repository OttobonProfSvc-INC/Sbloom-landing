import { Link } from "react-router-dom";
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
              We help expertise-led hospitals, clinics, doctors, and wellness brands close the gap between their clinical excellence and what patients understand about them.
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
