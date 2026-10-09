const fs = require('fs');
const path = require('path');

const pagesDir = path.join('src', 'pages');

const aboutContent = `import { ScrollReveal } from "../components/ScrollReveal";

export const AboutPage = () => {
  return (
    <div className="page phase5-wrapper">
      <section className="phase5-hero">
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <span className="phase5-hero-label">ABOUT S-BLOOM</span>
            <h1 className="phase5-hero-title mx-auto">We believe excellent organizations deserve to be understood.</h1>
            <p className="phase5-hero-desc mx-auto">
              S-Bloom was built to solve a specific problem: Many organizations provide exceptional services—whether in healthcare, education, or professional consulting—but struggle to communicate their true value to the people who need them.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="phase5-content">
        <div className="container">
          <div className="phase5-grid">
            <ScrollReveal delay={100} className="phase5-card">
              <h2>Our Philosophy</h2>
              <p>We believe that high-stakes decisions require a different marketing approach. Generic marketing packages, transactional ads, and buzzwords damage trust. Instead, we advocate for audience-centric marketing. We study how your patients, students, or B2B clients actually make decisions, and we build our strategies around their needs.</p>
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
`;

const howItWorksContent = `import { ScrollReveal } from "../components/ScrollReveal";

export const HowItWorksPage = () => {
  return (
    <div className="page phase5-wrapper">
      <section className="phase5-hero">
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <span className="phase5-hero-label">HOW IT WORKS</span>
            <h1 className="phase5-hero-title mx-auto">Strategy first. Execution second.</h1>
            <p className="phase5-hero-desc mx-auto">
              We approach every new client engagement systematically. BUILD, CREATE, and PROMOTE are selected according to the diagnosed needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="phase5-content">
        <div className="container">
          <div className="hiw-process phase5-process">
            <div className="hiw-line-bg"></div>
            
            <ScrollReveal delay={100} className="hiw-step">
              <div className="hiw-indicator"></div>
              <div className="hiw-step-line"></div>
              <div className="hiw-step-num">01</div>
              <h3>UNDERSTAND</h3>
              <p>We begin by thoroughly understanding your organization, the services you provide, your business goals, your target audiences, and your current digital footprint.</p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="hiw-step">
              <div className="hiw-indicator"></div>
              <div className="hiw-step-line"></div>
              <div className="hiw-step-num">02</div>
              <h3>DIAGNOSE</h3>
              <p>We identify the specific communication and visibility gaps preventing your intended audience from discovering, understanding, or evaluating your services.</p>
            </ScrollReveal>

            <ScrollReveal delay={300} className="hiw-step">
              <div className="hiw-indicator"></div>
              <div className="hiw-step-line"></div>
              <div className="hiw-step-num">03</div>
              <h3>STRATEGIZE</h3>
              <p>We define clear priorities, audience-specific messaging, the appropriate marketing channels, and measurable objectives.</p>
            </ScrollReveal>

            <ScrollReveal delay={400} className="hiw-step">
              <div className="hiw-indicator"></div>
              <div className="hiw-step-line"></div>
              <div className="hiw-step-num">04</div>
              <h3>EXECUTE</h3>
              <p>We deploy the precise mix of BUILD, CREATE, and PROMOTE activities required to address the diagnosed gaps.</p>
            </ScrollReveal>

            <ScrollReveal delay={500} className="hiw-step">
              <div className="hiw-indicator"></div>
              <div className="hiw-step-num">05</div>
              <h3>MEASURE AND IMPROVE</h3>
              <p>We continuously review relevant performance indicators, identify what is working, and recommend appropriate improvements to support long-term growth.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
`;

const creativeWorkspaceContent = `import { ScrollReveal } from "../components/ScrollReveal";

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
          
          <ScrollReveal delay={600} className="text-center" style={{ marginTop: '80px' }}>
            <h2>Roles We Look For:</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Video Editors, Videographers, Designers, Content Writers, and Digital Specialists.</p>
            <div className="hero-buttons" style={{ marginTop: '40px', justifyContent: 'center' }}>
              {/* CTA is safely unresolved until a destination is verified */}
              <button className="btn btn-primary" onClick={() => alert('Application destination is pending configuration.')}>Apply to the Partner Network</button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default CreativeWorkspacePage;
`;

const contactContent = `import { useState } from "react";
import { ScrollReveal } from "../components/ScrollReveal";

export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission - no backend exists currently
    setSubmitted(true);
  };

  return (
    <div className="page phase5-wrapper">
      <section className="phase5-hero">
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <span className="phase5-hero-label">STRATEGY REQUEST</span>
            <h1 className="phase5-hero-title mx-auto">Let's discuss your digital growth.</h1>
            <p className="phase5-hero-desc mx-auto">
              Tell us about your organization and what you are trying to achieve. We'll help you diagnose the gaps and find the right strategic starting point.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="phase5-content">
        <div className="container">
          <div className="contact-form-container">
            {submitted ? (
              <ScrollReveal delay={0}>
                <div className="contact-success">
                  <h2>Thank you.</h2>
                  <p>We have received your request and will be in touch shortly to schedule your consultation.</p>
                </div>
              </ScrollReveal>
            ) : (
              <ScrollReveal delay={100}>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="organization">Organization Name</label>
                    <input type="text" id="organization" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="industry">Industry</label>
                    <select id="industry" required>
                      <option value="">Select an industry...</option>
                      <option value="Education">Education</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Consulting & Professional Services">Consulting & Professional Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="challenge">What is your biggest current marketing challenge?</label>
                    <textarea id="challenge" rows="4" required></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="goals">What are your primary business goals for the next 6 months?</label>
                    <textarea id="goals" rows="4" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary submit-btn">Request Strategy Consultation</button>
                  <p className="form-note">Note: This form is currently in front-end preview mode. Submissions are not yet connected to a backend database.</p>
                </form>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
`;

fs.writeFileSync(path.join(pagesDir, 'AboutPage.tsx'), aboutContent);
fs.writeFileSync(path.join(pagesDir, 'HowItWorksPage.tsx'), howItWorksContent);
fs.writeFileSync(path.join(pagesDir, 'CreativeWorkspacePage.tsx'), creativeWorkspaceContent);
fs.writeFileSync(path.join(pagesDir, 'ContactPage.tsx'), contactContent);

// Update App.tsx
let appContent = fs.readFileSync('src/App.tsx', 'utf8');

// Add imports
appContent = appContent.replace(
  "import { PlaceholderPage } from './pages/PlaceholderPage';",
  `import { PlaceholderPage } from './pages/PlaceholderPage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import CreativeWorkspacePage from './pages/CreativeWorkspacePage';
import ContactPage from './pages/ContactPage';`
);

// We need to carefully replace routes since replace_file_content failed previously due to matching.
// We'll replace the line with /about and /contact.
appContent = appContent.replace(
  /<Route path="\/about" element=\{<PlaceholderPage title="About Us" \/>\} \/>/,
  '<Route path="/about" element={<AboutPage />} />\n            <Route path="/how-it-works" element={<HowItWorksPage />} />\n            <Route path="/creative-workspace" element={<CreativeWorkspacePage />} />'
);

appContent = appContent.replace(
  /<Route path="\/contact" element=\{<PlaceholderPage title="Contact" \/>\} \/>/,
  '<Route path="/contact" element={<ContactPage />} />'
);

fs.writeFileSync('src/App.tsx', appContent);

// Add CSS
let css = fs.readFileSync('src/index.css', 'utf8');

const phase5CSS = \`
/* Phase 5 Pages Shared */
.phase5-wrapper {
  background-color: var(--bg-primary);
}
.phase5-hero {
  padding-top: 140px;
  padding-bottom: 80px;
  background-color: var(--bg-primary);
}
.phase5-hero-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: var(--gold-primary);
  margin-bottom: 24px;
  display: block;
}
.phase5-hero-title {
  font-size: 3.5rem;
  margin-bottom: 24px;
  color: var(--text-primary);
  max-width: 800px;
}
.phase5-hero-desc {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 600px;
  line-height: 1.6;
}
.phase5-content {
  padding: 80px 0 120px;
  background-color: var(--bg-secondary);
}
.phase5-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}
.phase5-card {
  background: var(--bg-primary);
  padding: 40px;
  border: 1px solid var(--border-subtle);
}
.phase5-card.full-width {
  grid-column: 1 / -1;
}
.phase5-card h2, .phase5-card h3 {
  color: var(--text-primary);
  margin-bottom: 16px;
}
.phase5-card p {
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Form Styles */
.contact-form-container {
  max-width: 600px;
  margin: 0 auto;
  background: var(--bg-primary);
  padding: 40px;
  border: 1px solid var(--border-subtle);
}
.form-group {
  margin-bottom: 24px;
}
.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-primary);
}
.form-group input, .form-group select, .form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border-subtle);
  background: var(--bg-light);
  font-family: var(--font-body);
  color: var(--text-primary);
  border-radius: 4px;
}
.submit-btn {
  width: 100%;
  margin-top: 16px;
}
.contact-success {
  text-align: center;
  padding: 40px 0;
}
.contact-success h2 {
  color: var(--gold-primary);
  margin-bottom: 16px;
}
.form-note {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 16px;
  text-align: center;
}

@media (max-width: 768px) {
  .phase5-grid {
    grid-template-columns: 1fr;
  }
  .phase5-hero-title {
    font-size: 2.5rem;
  }
}
\`;

if (!css.includes('/* Phase 5 Pages Shared */')) {
  fs.writeFileSync('src/index.css', css + '\\n' + phase5CSS);
}
