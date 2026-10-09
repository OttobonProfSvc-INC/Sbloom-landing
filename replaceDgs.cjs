const fs = require('fs');
const path = require('path');

const homePagePath = path.join(__dirname, 'src/pages/HomePage.tsx');
let homePage = fs.readFileSync(homePagePath, 'utf8');

// Add import if not present
if (!homePage.includes('DigitalGrowthSystem')) {
  homePage = homePage.replace(
    "import { ScrollReveal } from '../components/ScrollReveal';",
    "import { ScrollReveal } from '../components/ScrollReveal';\nimport { DigitalGrowthSystem } from '../components/home/DigitalGrowthSystem';"
  );
}

// Replace SECTION 4: SERVICES DETAIL
const startIndex = homePage.indexOf('{/* SECTION 4: SERVICES DETAIL */}');
const endIndex = homePage.indexOf('{/* SECTION 8: FINAL CTA */}');

if (startIndex !== -1 && endIndex !== -1) {
  const newSection = `
      {/* DIGITAL GROWTH SYSTEM */}
      <DigitalGrowthSystem />

      `;
  homePage = homePage.substring(0, startIndex) + newSection + homePage.substring(endIndex);
  fs.writeFileSync(homePagePath, homePage);
  console.log("Replaced services detail with Digital Growth System");
} else {
  console.log("Could not find start or end index", startIndex, endIndex);
}
