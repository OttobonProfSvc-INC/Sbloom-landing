import { Link } from "react-router-dom";
import { ScrollReveal } from "../../components/ScrollReveal";

export const SolutionsOverviewPage = () => {
  return (
    <div className="page sol-overview-wrapper">
      <section className="sol-hero">
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <span className="sol-hero-label">SOLUTIONS OVERVIEW</span>
            <h1 className="sol-hero-title mx-auto">A coordinated approach to digital growth.</h1>
            <p className="sol-hero-desc mx-auto">
              We do not believe in one-size-fits-all digital marketing packages. Following a thorough diagnosis of your organization's communication gaps, we apply the exact combination of foundational building, content creation, and targeted promotion required to achieve your objectives.
            </p>
            <div className="hero-buttons" style={{ marginTop: '40px', justifyContent: 'center' }}>
              <Link to="/how-it-works" className="btn btn-primary">Learn How We Work</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="sol-pillars-grid">
        <div className="container">
          <div className="sol-pillars-container">
            <ScrollReveal delay={100}>
              <div className="sol-pillar-card">
                <h2>BUILD</h2>
                <p>Make your expertise discoverable. We build the digital infrastructure required to make your organization easy to find, navigate, and engage with.</p>
                <Link to="/solutions/build" className="sol-pillar-link">Explore Build →</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="sol-pillar-card">
                <h2>CREATE</h2>
                <p>Help audiences understand and trust your organization. We produce the materials required to explain your true value and approach.</p>
                <Link to="/solutions/create" className="sol-pillar-link">Explore Create →</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="sol-pillar-card">
                <h2>PROMOTE</h2>
                <p>Reach relevant audiences. We amplify your presence, putting your organization directly in front of the decision-makers that matter most.</p>
                <Link to="/solutions/promote" className="sol-pillar-link">Explore Promote →</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsOverviewPage;
