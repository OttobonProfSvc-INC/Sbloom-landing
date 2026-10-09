const fs = require('fs');
const path = require('path');

const homePagePath = path.join(__dirname, 'src/pages/HomePage.tsx');
let homePage = fs.readFileSync(homePagePath, 'utf8');

const startIndex = homePage.indexOf('{/* SECTION 6: WHO WE HELP */}');
const endIndex = homePage.indexOf('{/* SECTION 7: WHY S-BLOOM */}');

if (startIndex !== -1 && endIndex !== -1) {
  homePage = homePage.substring(0, startIndex) + homePage.substring(endIndex);
  fs.writeFileSync(homePagePath, homePage);
  console.log("Successfully removed Section 6: Who We Help.");
} else {
  console.log("Could not find start or end index for Section 6.", startIndex, endIndex);
}
