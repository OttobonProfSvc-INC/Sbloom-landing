const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

const newIndustriesCss = `
/* Industries Grid Section */
.ind-grid-section {
  padding: 100px 0;
  background-color: var(--bg-primary);
  border-top: 1px solid var(--border-subtle);
}

.ind-grid-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.ind-grid-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: var(--gold-primary);
  margin-bottom: 20px;
  display: block;
  text-transform: uppercase;
}

.ind-grid-header h2 {
  font-size: 2.25rem;
  color: var(--text-primary);
  margin-bottom: 20px;
  line-height: 1.2;
}

.ind-grid-header p {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 650px;
  margin: 0 auto;
}

.ind-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.ind-card {
  background-color: #080808;
  border: 1px solid var(--border-subtle);
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: all 0.4s ease;
  position: relative;
  border-radius: 8px;
}

.ind-card-num {
  font-size: 0.85rem;
  color: var(--gold-primary);
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-weight: 600;
}

.ind-card-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
  line-height: 1.2;
}

.ind-card-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 40px;
  flex-grow: 1;
}

.ind-card-cta {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: var(--text-primary);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;
}

.ind-card-arrow {
  transition: transform 0.3s ease;
}

.ind-card:hover {
  border-color: rgba(212, 175, 90, 0.4);
  transform: translateY(-4px);
  background-color: #0A0A0A;
}

.ind-card:hover .ind-card-num {
  color: var(--gold-highlight);
}

.ind-card:hover .ind-card-cta {
  color: var(--gold-primary);
}

.ind-card:hover .ind-card-arrow {
  transform: translateX(6px);
}

@media (max-width: 1024px) {
  .ind-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .ind-grid {
    grid-template-columns: 1fr;
  }
  .ind-card {
    padding: 40px 30px;
  }
}
`;

if (!css.includes('.ind-grid-section')) {
  css = css.replace('/* Sections */', newIndustriesCss + '\n/* Sections */');
  fs.writeFileSync(cssPath, css);
}

const homePagePath = path.join(__dirname, 'src/pages/HomePage.tsx');
let homePage = fs.readFileSync(homePagePath, 'utf8');

const indSectionJSX = `
      {/* SECTION: WHO WE WORK WITH */}
      <section className="ind-grid-section">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="ind-grid-header">
              <span className="ind-grid-label">WHO WE WORK WITH</span>
              <h2>Digital growth for the industries we understand.</h2>
              <p>We work with organizations in Education, Healthcare and Consulting & Professional Services, building digital solutions around the way they work and the people they serve.</p>
            </div>
          </ScrollReveal>

          <div className="ind-grid">
            <ScrollReveal delay={100}>
              <Link to="/industries/education" className="ind-card">
                <div className="ind-card-num">01</div>
                <h3 className="ind-card-title">Education</h3>
                <p className="ind-card-desc">Build a stronger digital presence for schools, colleges, training institutes and education brands.</p>
                <div className="ind-card-cta">
                  <span>Explore Education</span>
                  <span className="ind-card-arrow">→</span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Link to="/industries/healthcare" className="ind-card">
                <div className="ind-card-num">02</div>
                <h3 className="ind-card-title">Healthcare</h3>
                <p className="ind-card-desc">Build trust and visibility for hospitals, clinics, doctors, diagnostic centers and healthcare brands.</p>
                <div className="ind-card-cta">
                  <span>Explore Healthcare</span>
                  <span className="ind-card-arrow">→</span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Link to="/industries/professional-services" className="ind-card">
                <div className="ind-card-num">03</div>
                <h3 className="ind-card-title">Consulting & Professional Services</h3>
                <p className="ind-card-desc">Build a digital presence that communicates expertise, builds credibility and reaches the right audience.</p>
                <div className="ind-card-cta">
                  <span>Explore Professional Services</span>
                  <span className="ind-card-arrow">→</span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
`;

// Insert the industries section between What is S-Bloom and How it works
const insertTarget = '{/* SECTION 4: HOW WE WORK */}';
const insertIndex = homePage.indexOf(insertTarget);

if (insertIndex !== -1 && !homePage.includes('WHO WE WORK WITH')) {
  homePage = homePage.substring(0, insertIndex) + indSectionJSX + '\n      ' + homePage.substring(insertIndex);
  fs.writeFileSync(homePagePath, homePage);
  console.log("Industries section inserted successfully.");
} else {
  console.log("Could not find insertion point or section already exists.");
}

// Ensure pages exist
const indDir = path.join(__dirname, 'src/pages/industries');
if (!fs.existsSync(indDir)) {
  fs.mkdirSync(indDir, { recursive: true });
}

const template = (title) => 'import React from "react";\nimport ScrollReveal from "../../components/animations/ScrollReveal";\n\nconst ' + title.replace(/[^a-zA-Z]/g, '') + 'Page = () => {\n  return (\n    <div className="page">\n      <section className="hero" style={{ minHeight: "60vh" }}>\n        <div className="container">\n          <ScrollReveal delay={0}>\n            <h1>' + title + '</h1>\n            <p>Digital growth solutions tailored for the industry.</p>\n          </ScrollReveal>\n        </div>\n      </section>\n    </div>\n  );\n};\n\nexport default ' + title.replace(/[^a-zA-Z]/g, '') + 'Page;';

if (!fs.existsSync(path.join(indDir, 'EducationPage.tsx'))) {
  fs.writeFileSync(path.join(indDir, 'EducationPage.tsx'), template('Education'));
}
if (!fs.existsSync(path.join(indDir, 'HealthcarePage.tsx'))) {
  fs.writeFileSync(path.join(indDir, 'HealthcarePage.tsx'), template('Healthcare'));
}
if (!fs.existsSync(path.join(indDir, 'ProfessionalServicesPage.tsx'))) {
  fs.writeFileSync(path.join(indDir, 'ProfessionalServicesPage.tsx'), template('Consulting & Professional Services'));
}
