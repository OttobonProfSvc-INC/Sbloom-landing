const fs = require('fs');
const path = require('path');

const homePagePath = path.join(__dirname, 'src/pages/HomePage.tsx');
let homePage = fs.readFileSync(homePagePath, 'utf8');

const oldGridStart = '<div className="ind-grid">';
const gridStartIdx = homePage.indexOf(oldGridStart);

if (gridStartIdx !== -1) {
  const gridEndIdx = homePage.indexOf('</section>', gridStartIdx);
  let gridSection = homePage.substring(gridStartIdx, gridEndIdx);
  
  gridSection = gridSection.replace(/<ScrollReveal delay=\{100\}>/g, '<ScrollReveal delay={100} className="h-full">');
  gridSection = gridSection.replace(/<ScrollReveal delay=\{200\}>/g, '<ScrollReveal delay={200} className="h-full">');
  gridSection = gridSection.replace(/<ScrollReveal delay=\{300\}>/g, '<ScrollReveal delay={300} className="h-full">');
  
  homePage = homePage.substring(0, gridStartIdx) + gridSection + homePage.substring(gridEndIdx);
  fs.writeFileSync(homePagePath, homePage);
  console.log("Successfully added h-full to industries grid ScrollReveals.");
} else {
  console.log("Could not find ind-grid");
}
