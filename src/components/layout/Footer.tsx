import React from 'react';
import { Link, useLocation } from 'react-router';
import { Camera, MessageCircle, Briefcase, Mail, Phone, ArrowRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const location = useLocation();
  if (location.pathname === '/contact') {
    return null;
  }

  return (
    <motion.footer 
      className="footer-premium"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="footer-main">
          {/* LEFT: Branding */}
          <div className="footer-brand">
            <Link to="/" aria-label="sBLOOM Home" className="footer-logo-link">
              <img src="/sbloom-logo-v2.jpg" alt="sBLOOM Logo" className="footer-logo" />
            </Link>
            <p className="footer-desc">
              S-Bloom is a specialized digital growth partner for expertise-led organizations in healthcare, education, and professional services.
            </p>
            <Link to="/contact" className="footer-cta-link">
              Talk to sBLOOM <span className="arrow">→</span>
            </Link>
          </div>

          {/* MIDDLE: Links */}
          <div className="footer-links-grid">
            <div className="footer-nav-col">
              <h4 className="footer-nav-title">INDUSTRIES</h4>
              <Link to="/industries/education" className="footer-nav-link">Education</Link>
              <Link to="/industries/healthcare" className="footer-nav-link">Healthcare</Link>
              <Link to="/industries/professional-services" className="footer-nav-link">Consulting & Professional Services</Link>
            </div>
            
            <div className="footer-nav-col">
              <h4 className="footer-nav-title">SOLUTIONS</h4>
              <Link to="/solutions/build" className="footer-nav-link">Build</Link>
              <Link to="/solutions/create" className="footer-nav-link">Create</Link>
              <Link to="/solutions/promote" className="footer-nav-link">Promote</Link>
            </div>
            
            <div className="footer-nav-col">
              <h4 className="footer-nav-title">COMPANY</h4>
              <Link to="/about" className="footer-nav-link">About</Link>
              <Link to="/how-it-works" className="footer-nav-link">How It Works</Link>
              <Link to="/contact" className="footer-nav-link">Contact</Link>
              <Link to="/creative-workspace" className="footer-nav-link">Creative Workspace</Link>
            </div>
          </div>
        </div>

        {/* BOTTOM: Bar & Interactive Contact */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <p>&copy; {new Date().getFullYear()} S-Bloom. All rights reserved.</p>
          </div>
          
          <div className="footer-bottom-center">
            <Link to="/industries/healthcare">Healthcare</Link>
            <span className="dot">•</span>
            <Link to="/industries/education">Education</Link>
            <span className="dot">•</span>
            <Link to="/industries/professional-services">Consulting</Link>
          </div>

          <div className="footer-bottom-right">
            <div className="contact-tiles-wrapper">
              <ContactTile letter="C" label="Instagram" icon={<Camera size={16} />} href="https://instagram.com" external />
              <ContactTile letter="O" label="WhatsApp" icon={<MessageCircle size={16} />} href="https://wa.me/" external />
              <ContactTile letter="N" label="LinkedIn" icon={<Briefcase size={16} />} href="https://linkedin.com" external />
              <ContactTile letter="T" label="Email" icon={<Mail size={16} />} href="mailto:hello@s-bloom.com" external />
              <ContactTile letter="A" label="Phone" icon={<Phone size={16} />} href="tel:+1234567890" external />
              <ContactTile letter="C" label="Website" icon={<Globe size={16} />} href="/" external={false} />
              <ContactTile letter="T" label="Contact" icon={<ArrowRight size={16} />} href="/contact" external={false} />
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

const ContactTile: React.FC<{ letter: string; label: string; icon: React.ReactNode; href: string; external: boolean }> = ({ letter, label, icon, href, external }) => {
  const isInternal = !external;

  const content = (
    <>
      <div className="tile-letter">{letter}</div>
      <div className="tile-reveal">
        <span className="tile-icon">{icon}</span>
        <span className="tile-label">{label}</span>
      </div>
    </>
  );

  if (isInternal) {
    return (
      <Link to={href} className="contact-tile">
        {content}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="contact-tile">
      {content}
    </a>
  );
};
