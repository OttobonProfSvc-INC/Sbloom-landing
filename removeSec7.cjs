const fs = require('fs');
const path = require('path');

const homePagePath = path.join(__dirname, 'src/pages/HomePage.tsx');
let homePage = fs.readFileSync(homePagePath, 'utf8');

const startWhy = homePage.indexOf('{/* SECTION 7: WHY S-BLOOM */}');
const endWhy = homePage.indexOf('{/* SECTION 8: FINAL CTA */}');

if (startWhy !== -1 && endWhy !== -1) {
  homePage = homePage.substring(0, startWhy) + homePage.substring(endWhy);
  fs.writeFileSync(homePagePath, homePage);
  console.log("Removed Section 7: Why S-Bloom");
} else {
  console.log("Could not find start/end for Section 7", startWhy, endWhy);
}
