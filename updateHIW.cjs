const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

const howItWorksCss = `
/* How It Works Section */
.how-it-works-section {
  padding: 100px 0;
  background-color: var(--bg-primary);
  border-top: 1px solid var(--border-subtle);
}

.hiw-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;
}

.hiw-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: var(--gold-primary);
  margin-bottom: 20px;
  display: block;
  text-transform: uppercase;
}

.hiw-header h2 {
  font-size: 2.5rem; /* Smaller than hero */
  color: var(--text-primary);
  margin-bottom: 20px;
  line-height: 1.2;
}

.hiw-header p {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.hiw-process {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 60px;
}

/* Connecting Line Background */
.hiw-line-bg {
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--border-subtle);
  z-index: 1;
}

.hiw-step {
  position: relative;
  z-index: 2;
  width: 18%;
  padding-top: 40px;
  transition: all 0.3s ease;
}

.hiw-indicator {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  background-color: var(--bg-primary);
  border: 1px solid var(--gold-primary);
  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 3;
}

.hiw-step-line {
  position: absolute;
  top: 15px;
  left: 50%;
  width: 0;
  height: 1px;
  background-color: var(--gold-primary);
  z-index: 2;
  transition: width 0.5s ease;
}

.hiw-step:hover .hiw-indicator {
  background-color: var(--gold-primary);
  box-shadow: 0 0 10px rgba(212, 175, 90, 0.4);
}

.hiw-step:hover .hiw-step-line {
  width: 100%;
}

.hiw-step-num {
  font-size: 0.75rem;
  color: var(--gold-primary);
  letter-spacing: 2px;
  margin-bottom: 12px;
  text-align: center;
  font-weight: 600;
}

.hiw-step h3 {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 12px;
  text-align: center;
}

.hiw-step p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-align: center;
  line-height: 1.5;
  transition: color 0.3s ease;
}

.hiw-step:hover p {
  color: #dcdcdc; /* slightly more prominent */
}

.hiw-closing {
  text-align: center;
  font-size: 0.9rem;
  color: var(--gold-primary);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 60px;
  font-weight: 500;
}

@media (max-width: 900px) {
  .hiw-process {
    flex-direction: column;
    gap: 40px;
    padding-left: 20px;
  }
  .hiw-line-bg {
    top: 0;
    bottom: 0;
    left: 24px;
    width: 1px;
    height: 100%;
  }
  .hiw-step {
    width: 100%;
    padding-top: 0;
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .hiw-indicator {
    top: 6px;
    left: -20px;
    transform: none;
  }
  .hiw-step-line {
    top: 6px;
    left: -16px;
    width: 1px;
    height: 0;
    transition: height 0.5s ease;
  }
  .hiw-step:hover .hiw-step-line {
    width: 1px;
    height: 100%;
  }
  .hiw-step-num, .hiw-step h3, .hiw-step p {
    text-align: left;
  }
}
`;

if (!css.includes('.how-it-works-section')) {
  css = css.replace('/* Sections */', howItWorksCss + '\n/* Sections */');
  fs.writeFileSync(cssPath, css);
}

const homePagePath = path.join(__dirname, 'src/pages/HomePage.tsx');
let homePage = fs.readFileSync(homePagePath, 'utf8');

const newHiwSection = `
      {/* SECTION 4: HOW WE WORK */}
      <section className="how-it-works-section">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="hiw-header">
              <span className="hiw-label">HOW WE WORK</span>
              <h2>From understanding your business to helping it grow.</h2>
              <p>We start with your goals, build the right digital foundation, create what your audience needs, and put it in front of the right people.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="hiw-process">
              <div className="hiw-line-bg"></div>
              
              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">01</div>
                <h3>UNDERSTAND</h3>
                <p>First, we understand your business, audience, goals and current digital presence.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">02</div>
                <h3>PLAN</h3>
                <p>We identify what needs to be built, created or improved and define a clear direction.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">03</div>
                <h3>BUILD</h3>
                <p>We put the right digital foundations in place — from websites and Google presence to SEO.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">04</div>
                <h3>CREATE</h3>
                <p>We create consistent content that communicates your brand and keeps your audience engaged.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-num">05</div>
                <h3>PROMOTE</h3>
                <p>We reach relevant audiences through targeted digital marketing and campaigns.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="hiw-closing">
              Build the foundation. Create the presence. Promote with purpose.
            </div>
          </ScrollReveal>
        </div>
      </section>
`;

const oldSectionRegex = /\{\/\* SECTION 4: HOW WE WORK \*\/\}[\\s\\S]*?<\/section>/;
homePage = homePage.replace(oldSectionRegex, newHiwSection);

fs.writeFileSync(homePagePath, homePage);
console.log('How it works section updated in Vite project.');
