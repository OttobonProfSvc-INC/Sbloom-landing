const fs = require('fs');
const path = require('path');

// 1. Update Navbar.tsx
const navbarPath = path.join(__dirname, 'src/components/layout/Navbar.tsx');
const navbarTsx = `
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Industries', href: '/industries' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'About', href: '/about' },
    { label: 'For Talent', href: '/talent' }
  ];

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo-container" aria-label="sBLOOM Home">
          <img src="/sbloom-logo.png" alt="sBLOOM Logo" className="logo-img" />
        </Link>
        <nav>
          <ul className={\`nav-links \${mobileMenuOpen ? 'mobile-open' : ''}\`}>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={\`nav-link \${location.pathname === item.href ? 'active' : ''}\`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="nav-cta-item">
              <Link to="/contact" className="btn btn-primary btn-nav" onClick={() => setMobileMenuOpen(false)}>Talk to Sbloom</Link>
            </li>
          </ul>
        </nav>
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};
`;
fs.writeFileSync(navbarPath, navbarTsx);

// 2. Update index.css
const cssPath = path.join(__dirname, 'src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replace nav-links to add align-items
css = css.replace('.nav-links {\n  display: flex;\n  gap: 32px;\n  list-style: none;\n}', '.nav-links {\n  display: flex;\n  gap: 32px;\n  list-style: none;\n  align-items: center;\n}');

// Add btn-nav
if (!css.includes('.btn-nav')) {
  css += `\n.btn-nav {\n  padding: 8px 16px;\n  font-size: 0.85rem;\n}\n`;
}

// Replace hero section CSS completely
const heroCssRegex = new RegExp('\\\\/\\\\* Hero Section \\\\*\\\\/[\\\\s\\\\S]*?\\\\/\\\\* Sections \\\\*\\\\/');
const newHeroCss = `/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 120px;
  padding-bottom: 60px;
  text-align: center;
  position: relative;
  background: var(--bg-primary);
}

.hero-label {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--gold-primary);
  margin-bottom: 24px;
  display: inline-block;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 32px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  color: var(--text-primary);
  line-height: 1.1;
}
.hero h1 .gold-text {
  color: var(--gold-primary);
}
.hero p {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.6;
}
.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.hero-intro-system {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.system-flow {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
}

.system-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 250px;
}
.system-step h3 {
  color: var(--gold-primary);
  font-size: 1.2rem;
  margin-bottom: 12px;
  letter-spacing: 1px;
}
.system-step p {
  font-size: 0.95rem;
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.4;
}
.system-step span {
  font-size: 0.85rem;
  color: var(--text-secondary);
}
.system-arrow {
  color: var(--border-subtle);
  font-size: 1.5rem;
  margin-top: 24px;
}

.system-outcome {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--border-subtle);
  width: 100%;
  max-width: 600px;
  text-align: center;
}
.system-outcome h3 {
  color: var(--gold-highlight);
  font-size: 1.5rem;
  letter-spacing: 4px;
}

@media (max-width: 768px) {
  .hero h1 { font-size: 2.5rem; }
  .system-flow {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .system-arrow {
    transform: rotate(90deg);
    margin-top: 0;
    margin-bottom: 16px;
  }
}

/* Sections */`;
css = css.replace(heroCssRegex, newHeroCss);
fs.writeFileSync(cssPath, css);

// 3. Update HomePage.tsx Hero section
const homePagePath = path.join(__dirname, 'src/pages/HomePage.tsx');
let homePage = fs.readFileSync(homePagePath, 'utf8');

const oldHeroRegex = /\{\/\* SECTION 1: HERO \*\/\}[\\s\\S]*?\{\/\* SECTION 2: WHAT WE DO \*\/\}/;
const newHero = `{/* SECTION 1: HERO */}
      <section className="hero">
        <div className="container">
          <ScrollReveal delay={0}>
            <span className="hero-label">SBLOOM — DIGITAL GROWTH COMPANY</span>
            <h1>Digital growth for businesses <br />ready to be seen, trusted, <br />and <span className="gold-text">chosen.</span></h1>
            <p>
              Sbloom helps businesses build their digital presence, create content that represents their brand, 
              and promote their services to the right audience.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Talk to Sbloom</Link>
              <Link to="/solutions" className="btn btn-secondary">Explore Our Solutions</Link>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="hero-intro-system">
              <div className="system-flow">
                <div className="system-step">
                  <h3>BUILD</h3>
                  <p>Build your digital foundation.</p>
                  <span>GBP · SEO · Websites</span>
                </div>
                <div className="system-arrow">→</div>
                <div className="system-step">
                  <h3>CREATE</h3>
                  <p>Create content that represents your brand.</p>
                  <span>Social Media · Posts · Reels · Digital Content</span>
                </div>
                <div className="system-arrow">→</div>
                <div className="system-step">
                  <h3>PROMOTE</h3>
                  <p>Reach the right audience.</p>
                  <span>Meta Ads · Google Ads · Performance Marketing</span>
                </div>
              </div>
              <div className="system-outcome">
                <h3>GROW</h3>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DO */}`;

homePage = homePage.replace(oldHeroRegex, newHero);
fs.writeFileSync(homePagePath, homePage);

console.log('Update complete.');
