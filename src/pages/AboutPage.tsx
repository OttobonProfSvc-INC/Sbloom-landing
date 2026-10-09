import { ScrollReveal } from "../components/ScrollReveal";

export const AboutPage = () => {
  return (
    <div className="page phase5-wrapper">
      <section className="phase5-hero">
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <span className="phase5-hero-label">ABOUT S-BLOOM</span>
            <h1 className="phase5-hero-title mx-auto">Closing the gap between expertise and understanding.</h1>
            <p className="phase5-hero-desc mx-auto">
              S-Bloom was built to solve a specific problem: Expertise-led organizations—whether in healthcare, education, or professional consulting—do exceptional work, but often struggle to communicate their true value to the people who need them most.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="phase5-content">
        <div className="container">
          <div className="phase5-grid">
            <ScrollReveal delay={100} className="phase5-card">
              <h2>Our Strategy-Led Approach</h2>
              <p>We believe that high-stakes decisions require a different marketing approach. Generic digital packages and superficial metrics don't build trust for expertise-led services. Instead, we advocate for audience-centric marketing. We study how your patients, students, or B2B clients actually discover, evaluate, and choose a provider, and we build your digital strategy around that journey.</p>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="phase5-card">
              <h2>Our Model</h2>
              <p>By utilizing a core strategic team alongside a curated network of specialized creative partners, we ensure that every client receives high-level strategy backed by expert execution.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
