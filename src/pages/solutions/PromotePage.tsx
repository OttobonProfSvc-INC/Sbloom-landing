import { Link } from "react-router-dom";
import { ScrollReveal } from "../../components/ScrollReveal";

export const PromotePage = () => {
  return (
    <div className="page sol-detail-wrapper">
      <section className="sol-hero">
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <span className="sol-hero-label">S-BLOOM SYSTEM — 03</span>
            <h1 className="sol-hero-title mx-auto">Reach relevant audiences.</h1>
            <p className="sol-hero-desc mx-auto">
              Once your foundation is strong and your expertise is clear, the PROMOTE phase amplifies your presence, putting your organization directly in front of the audiences that matter most to accelerate discovery.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="sol-activities">
        <div className="container">
          <div className="sol-activities-list">
            <ScrollReveal delay={100}>
              <div className="sol-activity-item">
                <h3>Meta Ads</h3>
                <p>Targeted campaigns on Facebook and Instagram, ideal for demographic targeting in Education.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="sol-activity-item">
                <h3>Google Ads</h3>
                <p>High-intent search campaigns, crucial for capturing urgent Healthcare needs.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="sol-activity-item">
                <h3>Performance Marketing & Campaign Management</h3>
                <p>End-to-end management of your advertising spend to ensure measurable progress.</p>
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

export default PromotePage;
