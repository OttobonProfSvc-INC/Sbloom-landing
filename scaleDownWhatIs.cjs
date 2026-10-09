const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Padding
css = css.replace(/padding: 120px 0;\s*background-color: var\(--bg-primary\);/g, 'padding: 90px 0;\n  background-color: var(--bg-primary);');

// 2. Grid gap
css = css.replace(/grid-template-columns: 1fr 1fr;\s*gap: 80px;/g, 'grid-template-columns: 1fr 1fr;\n  gap: 60px;');

// 3. Heading
css = css.replace(/font-size: 3rem;\s*line-height: 1\.2;\s*color: var\(--text-primary\);\s*max-width: 600px;/g, 'font-size: 2.25rem;\n  line-height: 1.2;\n  color: var(--text-primary);\n  max-width: 450px;');

// 4. Content p
css = css.replace(/font-size: 1\.25rem;\s*color: var\(--text-secondary\);\s*line-height: 1\.7;\s*margin-bottom: 40px;/g, 'font-size: 0.95rem;\n  color: var(--text-secondary);\n  line-height: 1.7;\n  margin-bottom: 30px;');

// 5. Transition text
css = css.replace(/font-size: 1\.1rem;\s*font-weight: 500;/g, 'font-size: 0.85rem;\n  font-weight: 500;');

fs.writeFileSync(cssPath, css);
console.log("What Is S-Bloom CSS successfully scaled down.");
