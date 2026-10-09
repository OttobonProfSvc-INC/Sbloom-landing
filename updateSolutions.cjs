const fs = require('fs');
const path = require('path');

const solutionsDir = path.join('src', 'pages', 'solutions');
if (!fs.existsSync(solutionsDir)) {
  fs.mkdirSync(solutionsDir);
}

const solutionsOverviewContent = `import { Link } from "react-router-dom";
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
                <p>Build the digital infrastructure required to make your organization discoverable, accessible, and structured for growth.</p>
                <Link to="/solutions/build" className="sol-pillar-link">Explore Build →</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="sol-pillar-card">
                <h2>CREATE</h2>
                <p>Produce the materials required to explain your expertise, showcase your culture, and keep your audience engaged over time.</p>
                <Link to="/solutions/create" className="sol-pillar-link">Explore Create →</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="sol-pillar-card">
                <h2>PROMOTE</h2>
                <p>Amplify your presence, putting your organization directly in front of the audiences that matter most.</p>
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
`;

const buildContent = `import { Link } from "react-router-dom";
import { ScrollReveal } from "../../components/ScrollReveal";

export const BuildPage = () => {
  return (
    <div className="page sol-detail-wrapper">
      <section className="sol-hero">
        <div className="container">
          <ScrollReveal delay={0}>
            <span className="sol-hero-label">S-BLOOM SYSTEM — 01</span>
            <h1 className="sol-hero-title">Build the foundation.</h1>
            <p className="sol-hero-desc">
              A great service cannot succeed if the audience cannot find it or understand it. The BUILD pillar focuses on the digital infrastructure required to make your organization discoverable, accessible, and structured for growth.
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
              <Link to="/solutions" className="btn btn-secondary">Back to Solutions</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default BuildPage;
`;

const createContent = `import { Link } from "react-router-dom";
import { ScrollReveal } from "../../components/ScrollReveal";

export const CreatePage = () => {
  return (
    <div className="page sol-detail-wrapper">
      <section className="sol-hero">
        <div className="container">
          <ScrollReveal delay={0}>
            <span className="sol-hero-label">S-BLOOM SYSTEM — 02</span>
            <h1 className="sol-hero-title">Give your brand a voice.</h1>
            <p className="sol-hero-desc">
              Trust is built through communication. The CREATE pillar focuses on producing the materials required to explain your expertise, showcase your culture, and keep your audience engaged over time.
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
              <Link to="/solutions" className="btn btn-secondary">Back to Solutions</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default CreatePage;
`;

const promoteContent = `import { Link } from "react-router-dom";
import { ScrollReveal } from "../../components/ScrollReveal";

export const PromotePage = () => {
  return (
    <div className="page sol-detail-wrapper">
      <section className="sol-hero">
        <div className="container">
          <ScrollReveal delay={0}>
            <span className="sol-hero-label">S-BLOOM SYSTEM — 03</span>
            <h1 className="sol-hero-title">Reach the right people.</h1>
            <p className="sol-hero-desc">
              Once your foundation is strong and your message is clear, the PROMOTE pillar amplifies your presence, putting your organization directly in front of the audiences that matter most.
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
              <Link to="/solutions" className="btn btn-secondary">Back to Solutions</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default PromotePage;
`;

fs.writeFileSync(path.join(solutionsDir, 'SolutionsOverviewPage.tsx'), solutionsOverviewContent);
fs.writeFileSync(path.join(solutionsDir, 'BuildPage.tsx'), buildContent);
fs.writeFileSync(path.join(solutionsDir, 'CreatePage.tsx'), createContent);
fs.writeFileSync(path.join(solutionsDir, 'PromotePage.tsx'), promoteContent);

// Update App.tsx
let appContent = fs.readFileSync('src/App.tsx', 'utf8');

// Add imports
appContent = appContent.replace(
  "import { PlaceholderPage } from './pages/PlaceholderPage';",
  `import { PlaceholderPage } from './pages/PlaceholderPage';\nimport SolutionsOverviewPage from './pages/solutions/SolutionsOverviewPage';\nimport BuildPage from './pages/solutions/BuildPage';\nimport CreatePage from './pages/solutions/CreatePage';\nimport PromotePage from './pages/solutions/PromotePage';`
);

// Replace routes
appContent = appContent.replace(
  '<Route path="/solutions/build" element={<PlaceholderPage title="Build" />} />',
  '<Route path="/solutions" element={<SolutionsOverviewPage />} />\n            <Route path="/solutions/build" element={<BuildPage />} />'
);
appContent = appContent.replace(
  '<Route path="/solutions/create" element={<PlaceholderPage title="Create" />} />',
  '<Route path="/solutions/create" element={<CreatePage />} />'
);
appContent = appContent.replace(
  '<Route path="/solutions/promote" element={<PlaceholderPage title="Promote" />} />',
  '<Route path="/solutions/promote" element={<PromotePage />} />'
);

fs.writeFileSync('src/App.tsx', appContent);

// Add CSS
let css = fs.readFileSync('src/index.css', 'utf8');

const solutionsCSS = \`
/* Solutions Pages Shared */
.sol-hero {
  padding-top: 140px;
  padding-bottom: 80px;
  background-color: var(--bg-primary);
}
.sol-hero-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: var(--gold-primary);
  margin-bottom: 24px;
  display: block;
}
.sol-hero-title {
  font-size: 3.5rem;
  margin-bottom: 24px;
  color: var(--text-primary);
  max-width: 800px;
}
.sol-hero-desc {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 600px;
  line-height: 1.6;
}

/* Solutions Overview Grid */
.sol-pillars-grid {
  padding: 80px 0;
  background-color: var(--bg-secondary);
}
.sol-pillars-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.sol-pillar-card {
  background: var(--bg-primary);
  padding: 40px;
  border: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  height: 100%;
}
.sol-pillar-card h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: var(--text-primary);
}
.sol-pillar-card p {
  color: var(--text-secondary);
  margin-bottom: 24px;
  flex: 1;
}
.sol-pillar-link {
  color: var(--gold-primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.85rem;
}

/* Solutions Detail Activities */
.sol-activities {
  padding: 80px 0;
  background-color: var(--bg-light);
}
.sol-activities-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 800px;
}
.sol-activity-item {
  border-left: 2px solid var(--gold-primary);
  padding-left: 24px;
}
.sol-activity-item h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
}
.sol-activity-item p {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .sol-pillars-container {
    grid-template-columns: 1fr;
  }
  .sol-hero-title {
    font-size: 2.5rem;
  }
}
\`;

if (!css.includes('/* Solutions Pages Shared */')) {
  fs.writeFileSync('src/index.css', css + '\\n' + solutionsCSS);
}
