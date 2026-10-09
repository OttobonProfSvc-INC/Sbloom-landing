import { ScrollReveal } from "../components/ScrollReveal";

export const CreativeWorkspacePage = () => {
  return (
    <div className="page phase5-wrapper">
      <section className="phase5-hero">
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <span className="phase5-hero-label">PARTNER NETWORK</span>
            <h1 className="phase5-hero-title mx-auto">Join the S-Bloom Creative Workspace.</h1>
            <p className="phase5-hero-desc mx-auto">
              We partner with specialized creative and technical professionals to execute high-quality digital work for organizations in education, healthcare, and professional services.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="phase5-content">
        <div className="container">
          <div className="phase5-grid">
            <ScrollReveal delay={100} className="phase5-card full-width">
              <h2>Focus on the work, not the client management.</h2>
              <p>S-Bloom secures the clients, develops the overarching strategy, provides the creative briefs, and handles all client communication. Our partners focus solely on what they do best: executing excellent technical and creative work.</p>
            </ScrollReveal>
          </div>
          
          <div className="phase5-workflow" style={{ marginTop: '80px' }}>
            <ScrollReveal delay={200}>
              <h2 className="text-center" style={{ marginBottom: '40px' }}>The Workflow</h2>
            </ScrollReveal>
            <div className="phase5-grid">
              <ScrollReveal delay={300} className="phase5-card">
                <h3>01 S-Bloom Strategy</h3>
                <p>We secure the client and generate the brief, script, or technical requirements.</p>
              </ScrollReveal>
              <ScrollReveal delay={400} className="phase5-card">
                <h3>02 Partner Execution</h3>
                <p>You claim the project and execute the specialized work.</p>
              </ScrollReveal>
              <ScrollReveal delay={500} className="phase5-card">
                <h3>03 S-Bloom Deployment</h3>
                <p>We handle the final deployment, campaign management, and client feedback.</p>
              </ScrollReveal>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '80px' }}>
            <ScrollReveal delay={600}>
              <h2>Roles We Look For:</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Video Editors, Videographers, Designers, Content Writers, and Digital Specialists.</p>
              <div className="hero-buttons" style={{ marginTop: '40px', justifyContent: 'center' }}>
                <button className="btn btn-primary" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>Apply to the Partner Network</button>
              </div>
              <div className="form-note" style={{ color: '#d32f2f', fontWeight: 'bold', marginTop: '16px' }}>
                 Application process is pending destination configuration.
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreativeWorkspacePage;
