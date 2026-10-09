const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Insert new CSS rules for "Services Framework" section
const newSectionCss = `
/* Services Framework Section */
.services-framework {
  padding: 120px 0 80px;
  background-color: var(--bg-secondary);
}

.sf-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;
}
.sf-header h2 {
  font-size: 3rem;
  color: var(--text-primary);
  margin-bottom: 24px;
}
.sf-header p {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.sf-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 80px;
}

.sf-pillar {
  padding: 40px 32px;
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  position: relative;
  transition: border-color 0.4s ease;
  display: flex;
  flex-direction: column;
}
.sf-pillar:hover {
  border-color: var(--border-light);
}

.sf-label {
  font-size: 0.85rem;
  color: var(--gold-primary);
  letter-spacing: 2px;
  margin-bottom: 32px;
  display: block;
}

.sf-headline {
  font-size: 1.75rem;
  color: var(--text-primary);
  margin-bottom: 16px;
  line-height: 1.2;
}

.sf-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.5;
  flex-grow: 1;
}

.sf-list {
  list-style: none;
  margin-bottom: 40px;
  border-top: 1px solid var(--border-subtle);
  padding-top: 24px;
}

.sf-list li {
  color: var(--text-secondary);
  font-size: 0.95rem;
  padding: 12px 0;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
}
.sf-list li::before {
  content: '→';
  color: var(--gold-primary);
  position: absolute;
  left: 0;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.sf-pillar:hover .sf-list li:hover {
  color: var(--text-primary);
  padding-left: 24px;
}
.sf-pillar:hover .sf-list li:hover::before {
  opacity: 1;
  transform: translateX(0);
}
.sf-pillar:hover .sf-list li:hover::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 24px;
  width: 30px;
  height: 1px;
  background: var(--gold-primary);
}

.sf-transition {
  text-align: center;
  margin-top: 40px;
  border-top: 1px solid var(--border-subtle);
  padding-top: 60px;
}
.sf-transition h3 {
  font-size: 1.25rem;
  color: var(--text-secondary);
  font-weight: 400;
  margin-bottom: 16px;
}
.sf-transition p {
  font-size: 1rem;
  color: var(--gold-primary);
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* Abstract visuals per pillar */
.sf-visual {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  opacity: 0.05;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right;
  pointer-events: none;
}
.sf-visual.build {
  background-image: radial-gradient(var(--gold-primary) 2px, transparent 2px);
  background-size: 10px 10px;
}
.sf-visual.create {
  background-image: linear-gradient(45deg, transparent 48%, var(--gold-primary) 49%, var(--gold-primary) 51%, transparent 52%);
  background-size: 20px 20px;
}
.sf-visual.promote {
  border-top: 1px solid var(--gold-primary);
  border-right: 1px solid var(--gold-primary);
  border-radius: 0 100% 0 0;
}

@media (max-width: 1024px) {
  .sf-grid { grid-template-columns: 1fr 1fr; }
  .sf-header h2 { font-size: 2.5rem; }
}
@media (max-width: 768px) {
  .sf-grid { grid-template-columns: 1fr; }
  .sf-header h2 { font-size: 2.25rem; }
}
`;

if (!css.includes('.services-framework')) {
  css = css.replace('/* Sections */', newSectionCss + '\n/* Sections */');
  fs.writeFileSync(cssPath, css);
}

// Update HomePage.tsx
const homePagePath = path.join(__dirname, 'src/pages/HomePage.tsx');
let homePage = fs.readFileSync(homePagePath, 'utf8');

const oldSectionRegex = /\{\/\* SECTION 3: CORE FRAMEWORK \*\/\}[\\s\\S]*?\{\/\* SECTION 3: HOW WE WORK \*\/\}/;

const newSectionTsx = `{/* SECTION 3: CORE FRAMEWORK */}
      <section className="services-framework">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="sf-header">
              <h2>From being found to being remembered.</h2>
              <p>We bring together the digital foundation, content and marketing your organization needs to stay visible, build trust and reach the right people.</p>
            </div>
          </ScrollReveal>

          <div className="sf-grid">
            {/* BUILD */}
            <ScrollReveal delay={100}>
              <div className="sf-pillar">
                <div className="sf-visual build"></div>
                <span className="sf-label">01 / BUILD</span>
                <h3 className="sf-headline">Be found.<br/>Build trust.</h3>
                <p className="sf-desc">Build the digital foundation that helps your organization get discovered, understood and trusted online.</p>
                <ul className="sf-list">
                  <li>Google Business Profile</li>
                  <li>SEO</li>
                  <li>Website Design & Development</li>
                </ul>
                <div style={{ marginTop: 'auto' }}>
                  <Link to="/solutions/build" className="btn btn-secondary">Explore Build</Link>
                </div>
              </div>
            </ScrollReveal>

            {/* CREATE */}
            <ScrollReveal delay={200}>
              <div className="sf-pillar">
                <div className="sf-visual create"></div>
                <span className="sf-label">02 / CREATE</span>
                <h3 className="sf-headline">Give your<br/>organization a voice.</h3>
                <p className="sf-desc">Create consistent content that communicates what you do and keeps your audience connected to your organization.</p>
                <ul className="sf-list">
                  <li>Social Media Management</li>
                  <li>Social Media Posts</li>
                  <li>Reels</li>
                  <li>Digital Content</li>
                </ul>
                <div style={{ marginTop: 'auto' }}>
                  <Link to="/solutions/create" className="btn btn-secondary">Explore Create</Link>
                </div>
              </div>
            </ScrollReveal>

            {/* PROMOTE */}
            <ScrollReveal delay={300}>
              <div className="sf-pillar">
                <div className="sf-visual promote"></div>
                <span className="sf-label">03 / PROMOTE</span>
                <h3 className="sf-headline">Reach the<br/>people who matter.</h3>
                <p className="sf-desc">Put your organization in front of relevant audiences through targeted digital advertising and performance marketing.</p>
                <ul className="sf-list">
                  <li>Meta Ads</li>
                  <li>Google Ads</li>
                  <li>Performance Marketing</li>
                  <li>Campaign Management</li>
                </ul>
                <div style={{ marginTop: 'auto' }}>
                  <Link to="/solutions/promote" className="btn btn-secondary">Explore Promote</Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <div className="sf-transition">
              <h3>Different needs. One growth partner.</h3>
              <p>Education · Healthcare · Consulting</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4: HOW WE WORK */}`;

homePage = homePage.replace(oldSectionRegex, newSectionTsx);

// Fix the section numbering for the rest of the document
homePage = homePage.replace('{/* SECTION 4: HOW WE WORK */}', '{/* SECTION 4: HOW WE WORK */}');
homePage = homePage.replace('{/* SECTION 3: HOW WE WORK */}', '{/* SECTION 4: HOW WE WORK */}');

fs.writeFileSync(homePagePath, homePage);

console.log('Step 3 complete.');
