import { Link } from "react-router-dom";
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
              We help expertise-led schools, colleges, training institutes, and education brands close the gap between their academic quality and what students and parents understand about them.
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
