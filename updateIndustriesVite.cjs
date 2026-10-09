const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Insert new CSS rules for "Industries" section
const industriesCss = `
/* Industries Section */
.industries-section {
  padding: 120px 0;
  background-color: var(--bg-primary);
}

.ind-label {
  font-size: 0.85rem;
  color: var(--gold-primary);
  letter-spacing: 3px;
  margin-bottom: 32px;
  display: block;
  text-transform: uppercase;
  font-weight: 600;
}

.ind-header {
  margin-bottom: 80px;
  max-width: 800px;
}

.ind-header h2 {
  font-size: 3.5rem;
  color: var(--text-primary);
  margin-bottom: 24px;
  line-height: 1.1;
}

.ind-header p {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.ind-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border-subtle);
}

.ind-block {
  display: flex;
  align-items: flex-start;
  padding: 60px 40px;
  border-bottom: 1px solid var(--border-subtle);
  transition: background-color 0.4s ease;
  text-decoration: none;
  gap: 60px;
  margin: 0 -40px;
  border-radius: 12px;
}
.ind-block:hover {
  background-color: var(--bg-secondary);
}

.ind-number-title {
  width: 30%;
  flex-shrink: 0;
}

.ind-number {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: var(--gold-primary);
  margin-bottom: 24px;
}

.ind-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text-primary);
  transition: color 0.3s ease;
  line-height: 1.1;
}
.ind-block:hover .ind-title {
  color: var(--gold-primary);
}

.ind-content-wrapper {
  display: flex;
  width: 70%;
  gap: 60px;
}

.ind-description-area {
  width: 60%;
}
.ind-description {
  font-size: 1.15rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.6;
}

.ind-cta {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  color: var(--text-primary);
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: color 0.3s ease;
}
.ind-cta-text {
  border-bottom: 1px solid transparent;
  padding-bottom: 4px;
  transition: border-color 0.3s ease;
}
.ind-cta-arrow {
  transition: transform 0.3s ease;
}
.ind-block:hover .ind-cta {
  color: var(--gold-primary);
}
.ind-block:hover .ind-cta-text {
  border-color: var(--gold-primary);
}
.ind-block:hover .ind-cta-arrow {
  transform: translateX(8px);
}

.ind-examples-area {
  width: 40%;
  border-left: 1px solid rgba(58, 43, 20, 0.5);
  padding-left: 40px;
}

.ind-examples-list {
  list-style: none;
}
.ind-examples-list li {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.ind-examples-list li::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: var(--gold-primary);
  border-radius: 50%;
}

@media (max-width: 1024px) {
  .ind-block {
    flex-direction: column;
    gap: 40px;
    padding: 40px 20px;
    margin: 0 -20px;
  }
  .ind-number-title, .ind-content-wrapper {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .ind-header h2 { font-size: 2.5rem; }
  .ind-content-wrapper {
    flex-direction: column;
    gap: 40px;
  }
  .ind-description-area, .ind-examples-area {
    width: 100%;
  }
  .ind-examples-area {
    border-left: none;
    padding-left: 0;
  }
}
`;

if (!css.includes('.industries-section')) {
  css = css.replace('/* Sections */', industriesCss + '\n/* Sections */');
  fs.writeFileSync(cssPath, css);
}

const homePagePath = path.join(__dirname, 'src/pages/HomePage.tsx');
let homePage = fs.readFileSync(homePagePath, 'utf8');

const newIndustriesSection = `
      {/* SECTION 4: INDUSTRIES */}
      <section className="industries-section">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="ind-header">
              <span className="ind-label">WHO WE WORK WITH</span>
              <h2>Digital growth, built around your industry.</h2>
              <p>Different industries have different audiences, challenges and ways of building trust. S-Bloom brings the right digital approach to each.</p>
            </div>
          </ScrollReveal>

          <div className="ind-list">
            
            {/* Education */}
            <ScrollReveal delay={100}>
              <Link to="/industries/education" className="ind-block">
                <div className="ind-number-title">
                  <div className="ind-number">01</div>
                  <h3 className="ind-title">Education</h3>
                </div>
                <div className="ind-content-wrapper">
                  <div className="ind-description-area">
                    <p className="ind-description">Help your institution get discovered, communicate its strengths and stay connected with students and parents.</p>
                    <div className="ind-cta">
                      <span className="ind-cta-text">Explore Education</span>
                      <span className="ind-cta-arrow">→</span>
                    </div>
                  </div>
                  <div className="ind-examples-area">
                    <ul className="ind-examples-list">
                      <li>Schools</li>
                      <li>Colleges</li>
                      <li>Training Institutes</li>
                      <li>EdTech</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Healthcare */}
            <ScrollReveal delay={200}>
              <Link to="/industries/healthcare" className="ind-block">
                <div className="ind-number-title">
                  <div className="ind-number">02</div>
                  <h3 className="ind-title">Healthcare</h3>
                </div>
                <div className="ind-content-wrapper">
                  <div className="ind-description-area">
                    <p className="ind-description">Build a stronger digital presence that helps patients find your services, understand your expertise and choose your organization with confidence.</p>
                    <div className="ind-cta">
                      <span className="ind-cta-text">Explore Healthcare</span>
                      <span className="ind-cta-arrow">→</span>
                    </div>
                  </div>
                  <div className="ind-examples-area">
                    <ul className="ind-examples-list">
                      <li>Hospitals</li>
                      <li>Clinics</li>
                      <li>Doctors</li>
                      <li>Diagnostic Centers</li>
                      <li>Healthcare Brands</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Consulting */}
            <ScrollReveal delay={300}>
              <Link to="/industries/professional-services" className="ind-block">
                <div className="ind-number-title">
                  <div className="ind-number">03</div>
                  <h3 className="ind-title">Consulting & Professional Services</h3>
                </div>
                <div className="ind-content-wrapper">
                  <div className="ind-description-area">
                    <p className="ind-description">Turn your expertise into a digital presence that builds credibility, reaches the right audience and creates opportunities.</p>
                    <div className="ind-cta">
                      <span className="ind-cta-text">Explore Professional Services</span>
                      <span className="ind-cta-arrow">→</span>
                    </div>
                  </div>
                  <div className="ind-examples-area">
                    <ul className="ind-examples-list">
                      <li>Consultants</li>
                      <li>IT Companies</li>
                      <li>Professional Firms</li>
                      <li>B2B Services</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* SECTION 5: HOW WE WORK */}`;

const oldSectionRegex = /\{\/\* SECTION 4: HOW WE WORK \*\/\}[\\s\\S]*?\{\/\* SECTION 5: OUR WORK \*\/\}/;
homePage = homePage.replace(oldSectionRegex, newIndustriesSection);
homePage = homePage.replace('{/* SECTION 5: HOW WE WORK */}', '{/* SECTION 5: HOW WE WORK */}');

fs.writeFileSync(homePagePath, homePage);
console.log('Industries section added to Vite project.');
