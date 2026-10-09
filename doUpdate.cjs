const fs = require('fs');
const path = require('path');

const homePagePath = path.join(__dirname, 'src/pages/HomePage.tsx');
let homePage = fs.readFileSync(homePagePath, 'utf8');

const newHiwSection = `
      {/* SECTION 4: HOW WE WORK */}
      <section className="how-it-works-section">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="hiw-header">
              <span className="hiw-label">HOW WE WORK</span>
              <h2>From understanding your business to helping it grow.</h2>
              <p>We start by understanding your goals and digital presence, plan the right approach, bring together the right expertise, execute the work and continue improving as your business grows.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="hiw-process">
              <div className="hiw-line-bg"></div>
              
              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">01</div>
                <h3>UNDERSTAND</h3>
                <p>Understand the business, audience, goals and current digital presence.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">02</div>
                <h3>PLAN</h3>
                <p>Define the right priorities, strategy and digital growth direction.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">03</div>
                <h3>ASSEMBLE</h3>
                <p>Bring together the right S-Bloom team and specialized talent for the work required.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">04</div>
                <h3>EXECUTE</h3>
                <p>Build, create and promote through coordinated digital execution.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-num">05</div>
                <h3>GROW</h3>
                <p>Measure what is working, improve continuously and support long-term digital growth.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
`;

const startIndex = homePage.indexOf('{/* SECTION 4: HOW WE WORK */}');
const endIndex = homePage.indexOf('{/* SECTION 4: SERVICES DETAIL */}');

if (startIndex !== -1 && endIndex !== -1) {
  homePage = homePage.substring(0, startIndex) + newHiwSection + '\n      ' + homePage.substring(endIndex);
  fs.writeFileSync(homePagePath, homePage);
  console.log("Successfully replaced the section using string indices.");
} else {
  console.log("Could not find start or end index.", startIndex, endIndex);
}
