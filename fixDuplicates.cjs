const fs = require('fs');
const path = require('path');

const homePagePath = path.join(__dirname, 'src/pages/HomePage.tsx');
let homePage = fs.readFileSync(homePagePath, 'utf8');

// 1. Remove SECTION 7: WHY S-BLOOM
const startWhy = homePage.indexOf('{/* SECTION 7: WHY S-BLOOM */}');
const endWhy = homePage.indexOf('{/* FINAL CTA */}');

if (startWhy !== -1 && endWhy !== -1) {
  homePage = homePage.substring(0, startWhy) + homePage.substring(endWhy);
  console.log("Removed Section 7: Why S-Bloom");
} else {
  console.log("Could not find start/end for Section 7");
}

// 2. Change the text in Final CTA
homePage = homePage.replace(
  '<h2>Ready to build, create and promote?</h2>',
  '<h2>Ready to grow your digital presence?</h2>'
);
homePage = homePage.replace(
  '<p>Let\'s build a stronger digital presence for your business.</p>',
  '<p>Let\'s build, create and promote the right way.</p>'
);

fs.writeFileSync(homePagePath, homePage);
console.log("Updated final CTA.");
