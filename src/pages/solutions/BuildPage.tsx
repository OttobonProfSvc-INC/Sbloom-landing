import { Link } from "react-router-dom";
import { ScrollReveal } from "../../components/ScrollReveal";

export const BuildPage = () => {
  return (
    <div className="page sol-detail-wrapper">
      <section className="sol-hero">
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <span className="sol-hero-label">S-BLOOM SYSTEM — 01</span>
            <h1 className="sol-hero-title mx-auto">Make expertise discoverable.</h1>
            <p className="sol-hero-desc mx-auto">
              Your expertise cannot serve its purpose if the right audience cannot find it. The BUILD phase focuses on creating the digital infrastructure required to make your organization discoverable, accessible, and easy to navigate.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="sol-activities">
        <div className="container">
          <div className="sol-activities-list">
            <ScrollReveal delay={100}>
              <div className="sol-activity-item">
                <h3>Website Design & Development</h3>
                <p>Creating intuitive, fast, and professionally designed platforms that act as your primary digital storefront.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="sol-activity-item">
                <h3>SEO & Search Visibility</h3>
                <p>Ensuring your website ranks for the specific queries your audience is searching for.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="sol-activity-item">
                <h3>Google Business Profile</h3>
                <p>Optimizing your local footprint—crucial for healthcare clinics and regional institutions.</p>
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

export default BuildPage;
