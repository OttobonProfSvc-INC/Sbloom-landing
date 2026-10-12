const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// Update CSS Variables Block
const newRootBlock = `:root {
  /* Restrained Premium Palette */
  --bg-primary: #F8F6F1;         /* Warm Ivory */
  --bg-secondary: #E9DDC8;       /* Light Champagne */
  --bg-light: #FFFFFF;           /* Pure White */
  
  --text-primary: #202126;       /* Deep Ink */
  --text-secondary: #706E6A;     /* Muted Text */
  
  --gold-primary: #C5A572;       /* Champagne Gold */
  --gold-highlight: #E9DDC8;     /* Light Champagne */
  --gold-deep: #C5A572;          /* Champagne Gold */
  
  --border-subtle: #E7E2D9;      /* Soft Border */
  --border-light: rgba(197, 165, 114, 0.2); /* Champagne Gold with opacity */

  /* Dark Theme Elements */
  --dark-bg: #202126;            /* Deep Ink */
  --dark-bg-secondary: #34353B;  /* Dark Hover */
  --dark-text: #FFFFFF;          /* Pure White */
  --dark-text-secondary: #E7E2D9; /* Soft Border */
  --dark-text-footer: #706E6A;    /* Muted Text */
  --dark-border: #34353B;         /* Dark Hover */
  
  /* Typography */
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;
}`;

cssContent = cssContent.replace(/:root\s*\{[\s\S]*?--font-body: 'Inter', sans-serif;\n\}/, newRootBlock);

// Replace hardcoded RGBA and hex colors in index.css
cssContent = cssContent.replace(/rgba\(243, 235, 221, 0\.9\)/g, 'rgba(248, 246, 241, 0.9)'); // Warm Ivory with 0.9 opacity for navbar
cssContent = cssContent.replace(/rgba\(217, 165, 46, 0\.15\)/g, 'rgba(197, 165, 114, 0.15)'); // Champagne Gold 0.15
cssContent = cssContent.replace(/rgba\(212, 175, 90, 0\.1\)/g, 'rgba(197, 165, 114, 0.1)'); // Champagne Gold 0.1
cssContent = cssContent.replace(/rgba\(217, 165, 46, 0\.04\)/g, 'rgba(197, 165, 114, 0.04)'); // Champagne Gold 0.04
cssContent = cssContent.replace(/rgba\(217, 165, 46, 0\.08\)/g, 'rgba(197, 165, 114, 0.08)'); // Champagne Gold 0.08
cssContent = cssContent.replace(/rgba\(217, 165, 46, 0\.1\)/g, 'rgba(197, 165, 114, 0.1)'); // Champagne Gold 0.1
cssContent = cssContent.replace(/rgba\(58, 43, 20, 0\.5\)/g, 'rgba(32, 33, 38, 0.2)'); // Deep Ink 0.2
cssContent = cssContent.replace(/rgba\(255, 255, 255, 0\.1\)/g, 'rgba(255, 255, 255, 0.1)');

fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('Updated index.css variables and colors.');

// Check for other files that might need updates
const filesToProcess = [
  'src/components/layout/Navbar.tsx',
  'src/components/layout/Footer.tsx',
  'src/pages/HomePage.tsx',
  'src/pages/AboutPage.tsx',
  'src/pages/ContactPage.tsx',
  'src/pages/CreativeWorkspacePage.tsx',
  'src/pages/HowItWorksPage.tsx',
];

function processDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      // Inline styles replacements for hardcoded colors
      // Example: style={{ backgroundColor: '#24212A' }} -> style={{ backgroundColor: '#202126' }}
      const replacements = {
        '#FFFEFC': '#F8F6F1',
        '#FFF3D6': '#E9DDC8',
        '#FFF7E8': '#FFFFFF',
        '#24212A': '#202126',
        '#625C67': '#706E6A',
        '#D9A52E': '#C5A572',
        '#A77719': '#C5A572',
        '#EAE1D2': '#E7E2D9',
        '#302C38': '#34353B',
        '#D8D0C3': '#E7E2D9',
        '#AFA79B': '#706E6A',
        '#4A4456': '#34353B'
      };

      for (const [oldC, newC] of Object.entries(replacements)) {
        if (content.includes(oldC)) {
          content = content.split(oldC).join(newC);
          changed = true;
        }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated colors in', fullPath);
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log('Done replacing hardcoded colors in JS/TS/TSX.');
