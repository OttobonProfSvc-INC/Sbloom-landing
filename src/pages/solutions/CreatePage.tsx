import { Link } from "react-router-dom";
import { ScrollReveal } from "../../components/ScrollReveal";

export const CreatePage = () => {
  return (
    <div className="page sol-detail-wrapper">
      <section className="sol-hero">
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <span className="sol-hero-label">S-BLOOM SYSTEM — 02</span>
            <h1 className="sol-hero-title mx-auto">Help audiences understand.</h1>
            <p className="sol-hero-desc mx-auto">
              Trust is built when audiences understand your true value. The CREATE phase focuses on producing the materials required to explain your expertise, showcase your culture, and keep your audience engaged through the decision journey.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="sol-activities">
        <div className="container">
          <div className="sol-activities-list">
            <ScrollReveal delay={100}>
              <div className="sol-activity-item">
                <h3>Social Media Management</h3>
                <p>Maintaining a consistent, professional presence across relevant platforms.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="sol-activity-item">
                <h3>Social Media Posts & Digital Content</h3>
                <p>Developing articles, thought leadership, and infographics that explain your value.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="sol-activity-item">
                <h3>Reels and Videos</h3>
                <p>Producing authentic, high-quality video content (e.g., campus tours, physician Q&As, expert insights) that humanize your organization.</p>
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
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/solutions" className="btn btn-secondary" style={{ marginLeft: '16px' }}>Back to Solutions</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default CreatePage;
