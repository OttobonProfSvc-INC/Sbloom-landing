const fs = require('fs');
const path = require('path');

const homePagePath = path.join(__dirname, 'src/pages/HomePage.tsx');
let homePage = fs.readFileSync(homePagePath, 'utf8');

const startIndex = homePage.indexOf('{/* SECTION 5: OUR WORK */}');
const endIndex = homePage.indexOf('{/* SECTION 6: WHO WE HELP */}');

if (startIndex !== -1 && endIndex !== -1) {
  homePage = homePage.substring(0, startIndex) + homePage.substring(endIndex);
  fs.writeFileSync(homePagePath, homePage);
  console.log("Successfully removed Section 5: Our Work.");
} else {
  console.log("Could not find start or end index for Section 5.", startIndex, endIndex);
}
