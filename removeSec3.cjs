const fs = require('fs');
const path = require('path');

const homePagePath = path.join(__dirname, 'src/pages/HomePage.tsx');
let homePage = fs.readFileSync(homePagePath, 'utf8');

const startIndex = homePage.indexOf('{/* SECTION 3: CORE FRAMEWORK */}');
// find the next section to know where to stop
const endIndex = homePage.indexOf('{/* SECTION 4: HOW WE WORK */}', startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  homePage = homePage.substring(0, startIndex) + homePage.substring(endIndex);
  fs.writeFileSync(homePagePath, homePage);
  console.log("Successfully removed Section 3.");
} else {
  console.log("Could not find start or end index for Section 3.", startIndex, endIndex);
}
