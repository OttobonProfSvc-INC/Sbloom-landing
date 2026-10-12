const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// 1. Update .navbar
cssContent = cssContent.replace(
  /\.navbar\s*\{[\s\S]*?align-items:\s*center;\s*\}/,
  `.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: var(--dark-bg);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(197, 165, 114, 0.25);
  display: flex;
  align-items: center;
  animation: navFadeIn 0.8s ease-out forwards;
}

@keyframes navFadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}`
);

// 2. Update .nav-link and .mobile-toggle
cssContent = cssContent.replace(
  /\.nav-link\s*\{[\s\S]*?cursor:\s*pointer;\s*\}/,
  `.nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--bg-primary);
  transition: color 0.3s ease;
  position: relative;
  padding: 4px 0;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--gold-primary);
  transition: width 0.3s ease;
}
.nav-link:hover, .nav-link.active {
  color: var(--bg-light);
}
.nav-link:hover::after, .nav-link.active::after {
  width: 100%;
}
.mobile-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--bg-light);
  cursor: pointer;
}

.btn-nav {
  background-color: var(--gold-primary) !important;
  color: var(--dark-bg) !important;
  border: none !important;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.btn-nav:hover {
  background-color: var(--bg-primary) !important;
  transform: translateY(-2px);
}`
);

// 3. Update mobile menu .nav-links
cssContent = cssContent.replace(
  /\.nav-links\s*\{\s*display:\s*none;\s*position:\s*absolute;\s*top:\s*80px;\s*left:\s*0;\s*right:\s*0;\s*background:\s*var\(--bg-primary\);\s*flex-direction:\s*column;\s*padding:\s*24px;\s*border-bottom:\s*1px\s*solid\s*var\(--border-subtle\);\s*\}/,
  `.nav-links {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: var(--dark-bg);
    flex-direction: column;
    padding: 24px;
    border-bottom: 1px solid rgba(197, 165, 114, 0.25);
  }`
);

// 4. Update dropdown colors
cssContent = cssContent.replace(
  /background-color:\s*var\(--bg-primary\);\s*border:\s*1px\s*solid\s*var\(--border-subtle\);\s*border-radius:\s*8px;\s*min-width:\s*380px;/g,
  `background-color: var(--dark-bg);\n  border: 1px solid rgba(197, 165, 114, 0.25);\n  border-radius: 8px;\n  min-width: 380px;`
);

cssContent = cssContent.replace(
  /\.dropdown-item-title\s*\{\s*font-size:\s*1\.05rem;\s*font-weight:\s*600;\s*color:\s*var\(--text-primary\);/g,
  `.dropdown-item-title {\n  font-size: 1.05rem;\n  font-weight: 600;\n  color: var(--bg-light);`
);

cssContent = cssContent.replace(
  /\.dropdown-item-desc\s*\{\s*font-size:\s*0\.85rem;\s*color:\s*var\(--text-secondary\);/g,
  `.dropdown-item-desc {\n  font-size: 0.85rem;\n  color: var(--bg-primary);`
);

cssContent = cssContent.replace(
  /\.dropdown-item:hover\s*\{\s*background-color:\s*var\(--bg-light\);\s*border-color:\s*rgba\(212,\s*175,\s*90,\s*0\.3\);\s*\}/g,
  `.dropdown-item:hover {\n  background-color: var(--dark-bg-secondary);\n  border-color: rgba(197, 165, 114, 0.3);\n}`
);

cssContent = cssContent.replace(
  /\.dropdown-item:hover\s*\.dropdown-item-desc\s*\{\s*color:\s*#c0c0c0;\s*\}/g,
  `.dropdown-item:hover .dropdown-item-desc {\n  color: var(--bg-light);\n}`
);

cssContent = cssContent.replace(
  /background-color:\s*var\(--bg-light\);\s*\}\s*\.dropdown-item-arrow\s*\{/g, // targeting mobile dropdown item
  `background-color: var(--dark-bg-secondary);\n  }\n  \n  .dropdown-item-arrow {`
);


// 5. Update nav-link color for dropdown chevron
cssContent = cssContent.replace(
  /\.nav-dropdown-btn\s*\{[\s\S]*?padding:\s*0;\s*\}/,
  `.nav-dropdown-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  color: inherit;
}`
);

fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('Updated Navbar CSS correctly.');
