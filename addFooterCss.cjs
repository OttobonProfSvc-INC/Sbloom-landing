const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

const footerCss = `
/* Premium Footer Styles */
.footer-premium {
  background-color: var(--bg-primary);
  border-top: 1px solid var(--border-subtle);
  padding: 100px 0 40px;
  color: var(--text-primary);
}

.footer-main {
  display: flex;
  justify-content: space-between;
  gap: 80px;
  margin-bottom: 80px;
}

.footer-brand {
  max-width: 320px;
}

.footer-logo {
  height: 48px;
  margin-bottom: 24px;
}

.footer-desc {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 24px;
}

.footer-cta-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--gold-primary);
  font-weight: 600;
  text-decoration: none;
  font-size: 1.05rem;
  transition: opacity 0.3s ease;
}

.footer-cta-link:hover {
  opacity: 0.8;
}

.footer-cta-link .arrow {
  transition: transform 0.3s ease;
}

.footer-cta-link:hover .arrow {
  transform: translateX(4px);
}

.footer-links-grid {
  display: flex;
  gap: 60px;
  flex: 1;
  justify-content: flex-end;
}

.footer-nav-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-nav-title {
  color: var(--text-primary);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.footer-nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.footer-nav-link:hover {
  color: var(--gold-primary);
}

/* Footer Bottom Bar */
.footer-bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid var(--border-subtle);
  flex-wrap: wrap;
  gap: 20px;
}

.footer-bottom-left p {
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.footer-bottom-center {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-bottom-center a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.3s ease;
}

.footer-bottom-center a:hover {
  color: var(--gold-primary);
}

.footer-bottom-center .dot {
  color: var(--border-subtle);
  font-size: 0.85rem;
}

/* Contact Letter Animation System */
.contact-tiles-wrapper {
  display: flex;
  gap: 4px;
}

.contact-tile {
  position: relative;
  width: 40px;
  height: 40px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tile-letter {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: all 0.3s ease;
  position: absolute;
}

.tile-reveal {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 6px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.tile-icon {
  color: var(--gold-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.tile-label {
  color: var(--text-primary);
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
}

/* Hover States */
.contact-tile:hover {
  width: auto;
  min-width: 120px;
  padding: 0 16px;
  background-color: #0c0c0c;
  border-color: rgba(212, 175, 90, 0.5);
  box-shadow: 0 4px 12px rgba(212, 175, 90, 0.1);
  transform: scale(1.02);
}

.contact-tile:hover .tile-letter {
  opacity: 0;
  transform: translateY(-20px);
}

.contact-tile:hover .tile-reveal {
  opacity: 1;
  transform: translateY(0);
}

/* Mobile Adjustments */
@media (max-width: 1024px) {
  .footer-main {
    flex-direction: column;
    gap: 60px;
  }
  
  .footer-links-grid {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  
  .footer-nav-col {
    min-width: 200px;
  }
}

@media (max-width: 768px) {
  .footer-premium {
    padding: 60px 0 30px;
  }

  .footer-bottom-bar {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .footer-bottom-center {
    order: -1;
    margin-bottom: 10px;
  }
  
  .footer-bottom-right {
    margin-top: 20px;
    width: 100%;
  }

  .contact-tiles-wrapper {
    gap: 8px;
    flex-wrap: wrap;
  }

  .contact-tile {
    width: 45px;
    height: 45px;
  }
  
  /* Make tiles easier to tap and expand on mobile */
  .contact-tile:active, .contact-tile:focus {
    width: auto;
    min-width: 120px;
    padding: 0 16px;
    border-color: rgba(212, 175, 90, 0.5);
  }
  
  .contact-tile:active .tile-letter, .contact-tile:focus .tile-letter {
    opacity: 0;
  }
  
  .contact-tile:active .tile-reveal, .contact-tile:focus .tile-reveal {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

if (!css.includes('.footer-premium')) {
  css += '\n' + footerCss;
  fs.writeFileSync(cssPath, css);
}

console.log("CSS injected");
