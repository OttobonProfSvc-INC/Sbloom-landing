const fs = require('fs');
const path = require('path');

const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;500;600;700;800&display=swap');

:root {
  /* Colors */
  --bg-primary: #050505;
  --bg-secondary: #0D0D0D;
  --gold-primary: #D4AF5A;
  --gold-highlight: #F2D58A;
  --gold-deep: #A67C32;
  --text-primary: #F7F4ED;
  --text-secondary: #A8A39A;
  --border-subtle: #3A2B14;
  --border-light: rgba(212, 175, 90, 0.15);

  /* Typography */
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-body);
  line-height: 1.6;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.2;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Animations */
.reveal-hidden {
  opacity: 0;
  transform: translateY(20px);
}
.reveal-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(5, 5, 5, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid var(--border-light);
  display: flex;
  align-items: center;
}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.logo-container {
  display: flex;
  align-items: center;
}
.logo-img {
  height: 40px;
  width: auto;
}
.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}
.nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}
.nav-link:hover, .nav-link.active {
  color: var(--gold-highlight);
}
.mobile-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-body);
}
.btn-primary {
  background-color: var(--gold-primary);
  color: var(--bg-primary);
  border: none;
}
.btn-primary:hover {
  background-color: var(--gold-highlight);
  transform: translateY(-2px);
}
.btn-secondary {
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid var(--gold-primary);
}
.btn-secondary:hover {
  background-color: rgba(212, 175, 90, 0.1);
  color: var(--gold-highlight);
  transform: translateY(-2px);
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  text-align: center;
  position: relative;
  background: radial-gradient(circle at center, rgba(212, 175, 90, 0.05) 0%, var(--bg-primary) 70%);
}
.hero h1 {
  font-size: 4.5rem;
  margin-bottom: 24px;
  background: linear-gradient(to right, var(--text-primary), var(--gold-highlight));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero h2 {
  font-size: 1.8rem;
  color: var(--gold-primary);
  margin-bottom: 24px;
  font-weight: 400;
}
.hero p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 40px;
}
.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

/* Sections */
.section {
  padding: 100px 0;
}
.section-darker {
  background-color: var(--bg-secondary);
}
.section-header {
  text-align: center;
  margin-bottom: 60px;
}
.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 16px;
}
.section-header p {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

/* Cards / Blocks */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.service-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  padding: 40px 32px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.service-card:hover {
  border-color: var(--gold-primary);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(212, 175, 90, 0.05);
}
.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: var(--gold-primary);
}
.service-card h4 {
  font-size: 1.1rem;
  margin-bottom: 24px;
  color: var(--text-primary);
  font-weight: 500;
}
.service-card p {
  color: var(--text-secondary);
  margin-bottom: 24px;
  font-size: 0.95rem;
}
.service-list {
  list-style: none;
  margin-bottom: 32px;
}
.service-list li {
  color: var(--text-secondary);
  margin-bottom: 12px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
}
.service-list li::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: var(--gold-primary);
  border-radius: 50%;
}

/* Process Section */
.process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.process-step {
  text-align: left;
}
.process-step-num {
  font-family: var(--font-heading);
  font-size: 3rem;
  color: var(--border-subtle);
  font-weight: 800;
  line-height: 1;
  margin-bottom: 16px;
  transition: color 0.3s ease;
}
.process-step:hover .process-step-num {
  color: var(--gold-primary);
}
.process-step h3 {
  font-size: 1.2rem;
  margin-bottom: 12px;
}
.process-step p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Services Detail */
.detail-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.detail-col h3 {
  font-size: 1.5rem;
  color: var(--gold-highlight);
  margin-bottom: 24px;
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 12px;
}
.detail-col ul {
  list-style: none;
}
.detail-col li {
  padding: 16px 0;
  border-bottom: 1px solid rgba(58, 43, 20, 0.3);
}
.detail-col li strong {
  display: block;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 4px;
}
.detail-col li span {
  display: block;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

/* Portfolio / Work */
.work-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.work-card {
  aspect-ratio: 1;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s ease;
  cursor: pointer;
}
.work-card:hover {
  border-color: var(--gold-primary);
  background-color: rgba(212, 175, 90, 0.05);
}
.work-card span {
  color: var(--gold-primary);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
}
.work-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Who We Help */
.help-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.help-item {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  padding: 24px;
  text-align: center;
  border-radius: 4px;
  font-weight: 500;
}

/* Final CTA */
.final-cta {
  text-align: center;
  padding: 120px 0;
  background: radial-gradient(circle at center, rgba(212, 175, 90, 0.08) 0%, var(--bg-primary) 60%);
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
}
.final-cta h2 {
  font-size: 3rem;
  margin-bottom: 16px;
}
.final-cta p {
  color: var(--text-secondary);
  font-size: 1.2rem;
  margin-bottom: 40px;
}

/* Footer */
.footer {
  background-color: var(--bg-secondary);
  padding: 60px 0 30px;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 60px;
}
.footer-logo {
  height: 40px;
  margin-bottom: 16px;
}
.footer-desc {
  color: var(--gold-primary);
  font-size: 1.1rem;
  font-weight: 500;
}
.footer-links {
  display: flex;
  gap: 32px;
}
.footer-bottom {
  border-top: 1px solid var(--border-subtle);
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .grid-3, .detail-grid, .work-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .hero h1 { font-size: 3rem; }
  .grid-3, .detail-grid, .work-grid, .process-grid, .help-grid {
    grid-template-columns: 1fr;
  }
  .nav-links {
    display: none;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background: var(--bg-secondary);
    flex-direction: column;
    padding: 24px;
    border-bottom: 1px solid var(--border-subtle);
  }
  .nav-links.mobile-open {
    display: flex;
  }
  .mobile-toggle {
    display: block;
  }
  .footer-top {
    flex-direction: column;
    gap: 40px;
  }
  .footer-links {
    flex-direction: column;
    gap: 16px;
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-dialog {
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  padding: 32px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  text-align: center;
}
.modal-close {
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
}
`;

const appTsx = `
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { PlaceholderPage } from './pages/PlaceholderPage';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-layout">
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<PlaceholderPage title="Services" />} />
            <Route path="/our-work" element={<PlaceholderPage title="Our Work" />} />
            <Route path="/about" element={<PlaceholderPage title="About Us" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
`;

const navbarTsx = `
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Our Work', href: '/our-work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
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

const footerTsx = `
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link to="/" aria-label="sBLOOM Home">
              <img src="/sbloom-logo.png" alt="sBLOOM Logo" className="footer-logo" />
            </Link>
            <p className="footer-desc">Build. Create. Promote.</p>
          </div>
          <div className="footer-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/our-work" className="nav-link">Our Work</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} sBLOOM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
`;

const homePageTsx = `
import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* SECTION 1: HERO */}
      <section className="hero">
        <div className="container">
          <ScrollReveal delay={0}>
            <h1>Build. Create. Promote.</h1>
            <h2>Everything your business needs to grow online.</h2>
            <p>
              We build your digital presence, create content that represents your brand, 
              and promote your business to the right audience.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">GET STARTED</Link>
              <Link to="/our-work" className="btn btn-secondary">VIEW OUR WORK</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DO */}
      <section className="section section-darker">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="section-header">
              <h2>Everything your business needs to grow online.</h2>
              <p>From building your digital foundation to creating content and promoting your brand, we bring the essential pieces together.</p>
            </div>
          </ScrollReveal>
          <div className="grid-3">
            {/* BUILD */}
            <ScrollReveal delay={100}>
              <div className="service-card">
                <h3>BUILD</h3>
                <h4>Build your digital foundation.</h4>
                <p>Get your business discovered, understood and trusted online.</p>
                <ul className="service-list">
                  <li>Google Business Profile</li>
                  <li>SEO</li>
                  <li>Websites</li>
                </ul>
                <Link to="/services" className="btn btn-secondary">Explore Build</Link>
              </div>
            </ScrollReveal>
            {/* CREATE */}
            <ScrollReveal delay={200}>
              <div className="service-card">
                <h3>CREATE</h3>
                <h4>Create content that represents your brand.</h4>
                <p>Give your brand a consistent voice and a reason for people to engage.</p>
                <ul className="service-list">
                  <li>Reels</li>
                  <li>Posts</li>
                  <li>Social Media Content</li>
                </ul>
                <Link to="/services" className="btn btn-secondary">Explore Create</Link>
              </div>
            </ScrollReveal>
            {/* PROMOTE */}
            <ScrollReveal delay={300}>
              <div className="service-card">
                <h3>PROMOTE</h3>
                <h4>Reach the right audience.</h4>
                <p>Put your business in front of the people who matter.</p>
                <ul className="service-list">
                  <li>Social Media Ads</li>
                  <li>Instagram Ads</li>
                  <li>Facebook Ads</li>
                </ul>
                <Link to="/services" className="btn btn-secondary">Explore Promote</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW WE WORK */}
      <section className="section">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="section-header">
              <h2>From foundation to growth.</h2>
            </div>
          </ScrollReveal>
          <div className="process-grid">
            <ScrollReveal delay={100}>
              <div className="process-step">
                <div className="process-step-num">01</div>
                <h3>UNDERSTAND</h3>
                <p>We understand your business, audience and goals.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="process-step">
                <div className="process-step-num">02</div>
                <h3>BUILD</h3>
                <p>We build the digital foundation your business needs.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="process-step">
                <div className="process-step-num">03</div>
                <h3>CREATE</h3>
                <p>We create content that communicates your brand.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="process-step">
                <div className="process-step-num">04</div>
                <h3>PROMOTE</h3>
                <p>We put your business in front of the right audience.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES DETAIL */}
      <section className="section section-darker">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="section-header">
              <h2>What can we build, create and promote for you?</h2>
            </div>
          </ScrollReveal>
          <div className="detail-grid">
            <ScrollReveal delay={100}>
              <div className="detail-col">
                <h3>BUILD</h3>
                <ul>
                  <li>
                    <strong>Google Business Profile</strong>
                    <span>Setup, optimization, and Maps visibility</span>
                  </li>
                  <li>
                    <strong>SEO</strong>
                    <span>Local & on-page search optimization</span>
                  </li>
                  <li>
                    <strong>Websites</strong>
                    <span>Business websites and landing pages</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="detail-col">
                <h3>CREATE</h3>
                <ul>
                  <li>
                    <strong>Reels & Video Content</strong>
                    <span>Engaging short-form and brand videos</span>
                  </li>
                  <li>
                    <strong>Social Media Posts</strong>
                    <span>Consistent branding and communication</span>
                  </li>
                  <li>
                    <strong>Creative Designs</strong>
                    <span>Graphics and content planning</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="detail-col">
                <h3>PROMOTE</h3>
                <ul>
                  <li>
                    <strong>Social Media Ads</strong>
                    <span>Targeted campaigns for Facebook & Instagram</span>
                  </li>
                  <li>
                    <strong>Lead Generation Campaigns</strong>
                    <span>Converting attention into opportunities</span>
                  </li>
                  <li>
                    <strong>Awareness Campaigns</strong>
                    <span>Putting your brand in front of the right people</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR WORK */}
      <section className="section">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="section-header">
              <h2>Work that speaks for itself.</h2>
            </div>
          </ScrollReveal>
          <div className="work-grid">
            <ScrollReveal delay={100}><div className="work-card"><span>WEBSITES</span><p>Digital Foundations</p></div></ScrollReveal>
            <ScrollReveal delay={200}><div className="work-card"><span>GBP & SEO</span><p>Search Visibility</p></div></ScrollReveal>
            <ScrollReveal delay={300}><div className="work-card"><span>SOCIAL MEDIA</span><p>Brand Presence</p></div></ScrollReveal>
            <ScrollReveal delay={400}><div className="work-card"><span>REELS</span><p>Video Content</p></div></ScrollReveal>
            <ScrollReveal delay={500}><div className="work-card"><span>ADS</span><p>Targeted Growth</p></div></ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHO WE HELP */}
      <section className="section section-darker">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="section-header">
              <h2>Built for businesses ready to grow.</h2>
            </div>
          </ScrollReveal>
          <div className="help-grid">
            <div className="help-item">Schools & Colleges</div>
            <div className="help-item">Hospitals & Clinics</div>
            <div className="help-item">Coaching Institutes</div>
            <div className="help-item">Local Businesses</div>
            <div className="help-item">Professionals</div>
            <div className="help-item">Growing Brands</div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY S-BLOOM */}
      <section className="section">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="section-header">
              <h2>One team. Three ways to grow.</h2>
            </div>
          </ScrollReveal>
          <div className="grid-3" style={{ textAlign: 'center' }}>
            <ScrollReveal delay={100}>
              <div>
                <h3 style={{ color: 'var(--gold-primary)', marginBottom: '16px', fontSize: '1.4rem' }}>BUILD</h3>
                <p style={{ color: 'var(--text-secondary)' }}>We strengthen your digital foundation.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <h3 style={{ color: 'var(--gold-primary)', marginBottom: '16px', fontSize: '1.4rem' }}>CREATE</h3>
                <p style={{ color: 'var(--text-secondary)' }}>We keep your brand visible and consistent.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div>
                <h3 style={{ color: 'var(--gold-primary)', marginBottom: '16px', fontSize: '1.4rem' }}>PROMOTE</h3>
                <p style={{ color: 'var(--text-secondary)' }}>We help you reach the right audience.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <ScrollReveal delay={0}>
            <h2>Ready to build, create and promote?</h2>
            <p>Let's build a stronger digital presence for your business.</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">GET STARTED</Link>
              <Link to="/our-work" className="btn btn-secondary">VIEW OUR WORK</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
`;

const placeholderPageTsx = `
import React from 'react';

export const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div style={{ paddingTop: '160px', paddingBottom: '100px', minHeight: '80vh', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', color: 'var(--gold-primary)', marginBottom: '24px' }}>{title}</h1>
        <p style={{ color: 'var(--text-secondary)' }}>This page is coming soon as part of the new BUILD. CREATE. PROMOTE. experience.</p>
      </div>
    </div>
  );
};
`;

const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/sbloom-logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="sBLOOM - Build. Create. Promote." />
    <title>sBLOOM | Build. Create. Promote.</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'src/index.css'), css);
fs.writeFileSync(path.join(__dirname, 'src/App.tsx'), appTsx);
fs.writeFileSync(path.join(__dirname, 'src/components/layout/Navbar.tsx'), navbarTsx);
fs.writeFileSync(path.join(__dirname, 'src/components/layout/Footer.tsx'), footerTsx);
fs.writeFileSync(path.join(__dirname, 'src/pages/HomePage.tsx'), homePageTsx);
fs.writeFileSync(path.join(__dirname, 'src/pages/PlaceholderPage.tsx'), placeholderPageTsx);
fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtml);

console.log('Setup complete.');
