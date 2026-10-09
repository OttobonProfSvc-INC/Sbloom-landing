const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Navbar height
css = css.replace(/height: 80px;/g, 'height: 60px;');

// 2. Logo size
css = css.replace(/height: 36px;\s*width: auto;\s*margin-left: -20px;/g, 'height: 26px;\n  width: auto;\n  margin-left: -14px;');

// 3. Nav container
css = css.replace(/max-width: 950px;/g, 'max-width: 800px;');

// 4. Hero padding
css = css.replace(/padding-top: 135px;\s*padding-bottom: 60px;/g, 'padding-top: 100px;\n  padding-bottom: 40px;');

// 5. Hero label
css = css.replace(/font-size: 0\.85rem;\s*font-weight: 600;\s*letter-spacing: 3px;\s*color: var\(--gold-primary\);\s*margin-bottom: 24px;/g, 'font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 3px;\n  color: var(--gold-primary);\n  margin-bottom: 16px;');

// 6. Hero h1
css = css.replace(/font-size: 4\.25rem;\s*margin-bottom: 24px;\s*max-width: 900px;/g, 'font-size: 3.25rem;\n  margin-bottom: 16px;\n  max-width: 750px;');

// 7. Hero p
css = css.replace(/font-size: 1\.125rem;\s*color: var\(--text-secondary\);\s*max-width: 600px;\s*margin: 0 auto 28px;/g, 'font-size: 0.95rem;\n  color: var(--text-secondary);\n  max-width: 550px;\n  margin: 0 auto 24px;');

// 8. Btn
css = css.replace(/padding: 12px 24px;\s*border-radius: 4px;\s*font-weight: 600;\s*font-size: 0\.95rem;/g, 'padding: 10px 24px;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 0.85rem;');

fs.writeFileSync(cssPath, css);
console.log("CSS successfully scaled down.");
