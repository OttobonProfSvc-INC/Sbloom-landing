const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

const navCss = `
/* Navbar Dropdown Styles */
.nav-dropdown-wrapper {
  position: relative;
}

.nav-dropdown-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
}

.dropdown-chevron {
  transition: transform 0.3s ease;
}

.dropdown-chevron.rotated {
  transform: rotate(180deg);
}

.nav-dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(0); /* Default positioning */
  background-color: #080808;
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  min-width: 380px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 100;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.dropdown-item-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dropdown-item-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.2s ease;
}

.dropdown-item-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  transition: color 0.2s ease;
}

.dropdown-item-arrow {
  color: var(--text-secondary);
  transition: all 0.2s ease;
  opacity: 0;
  transform: translateX(-10px);
}

.dropdown-item:hover {
  background-color: #0c0c0c;
  border-color: rgba(212, 175, 90, 0.3);
}

.dropdown-item:hover .dropdown-item-title {
  color: var(--gold-primary);
}

.dropdown-item:hover .dropdown-item-desc {
  color: #c0c0c0;
}

.dropdown-item:hover .dropdown-item-arrow {
  color: var(--gold-primary);
  opacity: 1;
  transform: translateX(0);
}

/* Mobile Dropdown Fixes */
@media (max-width: 768px) {
  .nav-dropdown {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    width: 100%;
    min-width: 100%;
    box-shadow: none;
    border: none;
    background-color: transparent;
    padding: 10px 0 0 15px;
  }
  
  .nav-dropdown-btn {
    width: 100%;
    justify-content: flex-start;
  }
  
  .dropdown-item {
    padding: 12px 15px;
    border: 1px solid var(--border-subtle);
    margin-bottom: 8px;
    background-color: #0A0A0A;
  }
  
  .dropdown-item-arrow {
    opacity: 1;
    transform: none;
  }
}
`;

if (!css.includes('.nav-dropdown-wrapper')) {
  css += '\n' + navCss;
  fs.writeFileSync(cssPath, css);
}
