const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Insert new CSS rules for "What is S-Bloom" section
const newSectionCss = `
/* What is S-Bloom Section */
.what-is-sbloom {
  position: relative;
  padding: 120px 0;
  background-color: var(--bg-primary);
  overflow: hidden;
}

.what-is-sbloom-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: flex-start;
  position: relative;
  z-index: 2;
}

.what-is-heading {
  font-size: 3rem;
  line-height: 1.2;
  color: var(--text-primary);
  max-width: 600px;
}

.what-is-heading .gold-highlight {
  color: var(--gold-primary);
}

.what-is-content p {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 40px;
}

.what-is-transition {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--gold-highlight);
  letter-spacing: 1px;
  display: inline-block;
  position: relative;
  padding-bottom: 8px;
}
.what-is-transition::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 2px;
  background-color: var(--gold-primary);
  transition: width 0.4s ease;
}

.what-is-sbloom:hover .what-is-transition::after {
  width: 100%;
}

.subtle-line-connector {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: -100px;
  width: 1px;
  background: linear-gradient(to bottom, transparent, var(--border-light), transparent);
  z-index: 1;
}

@media (max-width: 1024px) {
  .what-is-sbloom-grid {
    gap: 40px;
  }
  .what-is-heading {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .what-is-sbloom-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .what-is-heading {
    font-size: 2.25rem;
  }
  .subtle-line-connector {
    display: none;
  }
  .what-is-sbloom {
    padding: 80px 0;
  }
}

`;

if (!css.includes('.what-is-sbloom')) {
  // Find a good place to insert it, maybe before `/* Sections */`
  css = css.replace('/* Sections */', newSectionCss + '\n/* Sections */');
  fs.writeFileSync(cssPath, css);
}

// 2. Update HomePage.tsx
const homePagePath = path.join(__dirname, 'src/pages/HomePage.tsx');
let homePage = fs.readFileSync(homePagePath, 'utf8');

const newSectionTsx = `
      {/* SECTION 2: WHAT IS S-BLOOM */}
      <section className="what-is-sbloom">
        <div className="subtle-line-connector"></div>
        <div className="container">
          <div className="what-is-sbloom-grid">
            <ScrollReveal delay={100}>
              <h2 className="what-is-heading">
                Good businesses don't need more noise.<br/>
                They need the <span className="gold-highlight">right digital presence.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={250}>
              <div className="what-is-content">
                <p>
                  S-Bloom is a digital growth company helping businesses build a stronger presence online — from being discovered on Google, to showing up consistently on social media, to reaching the right audience through digital marketing.
                </p>
                <div className="what-is-transition">
                  One partner. From foundation to visibility.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE FRAMEWORK */}`;

homePage = homePage.replace('{/* SECTION 2: CORE FRAMEWORK */}', newSectionTsx);
fs.writeFileSync(homePagePath, homePage);

console.log('Step 2 complete.');
