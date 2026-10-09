const fs = require('fs');

let homePage = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

homePage = homePage.replace(
  'Talk to Sbloom',
  'Talk to S-Bloom'
);

homePage = homePage.replace(
  'reaches the right audience.',
  'reaches the right B2B audience.'
);

homePage = homePage.replace(
  '<p>We start by understanding your goals and digital presence, plan the right approach, bring together the right expertise, execute the work and continue improving as your business grows.</p>',
  '<p>We do not sell generic service packages. We diagnose your communication gaps and build a strategy around your actual objectives.</p>'
);

// Replace methodology steps
homePage = homePage.replace(
  /<div className="hiw-process">[\s\S]*?<\/div>\s*<\/ScrollReveal>/,
  `<div className="hiw-process">
              <div className="hiw-line-bg"></div>
              
              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">01</div>
                <h3>UNDERSTAND</h3>
                <p>We learn your business goals, target audiences, and current digital presence.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">02</div>
                <h3>DIAGNOSE</h3>
                <p>We identify the gaps preventing your audience from discovering or trusting you.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">03</div>
                <h3>STRATEGIZE</h3>
                <p>We define priorities, audience-specific messaging, and measurable objectives.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-line"></div>
                <div className="hiw-step-num">04</div>
                <h3>EXECUTE</h3>
                <p>We deploy the exact mix of building, creating, and promoting required to succeed.</p>
              </div>

              <div className="hiw-step">
                <div className="hiw-indicator"></div>
                <div className="hiw-step-num">05</div>
                <h3>MEASURE AND IMPROVE</h3>
                <p>We review performance, identify what is working, and refine the approach.</p>
              </div>
            </div>
          </ScrollReveal>`
);

homePage = homePage.replace(
  "Let's build, create and promote the right way.",
  "Let's build, create, and promote the right way."
);

homePage = homePage.replace(
  '<Link to="/our-work" className="btn btn-secondary">VIEW OUR WORK</Link>',
  '{/* <Link to="/our-work" className="btn btn-secondary">VIEW OUR WORK</Link> - Hidden pending portfolio content */}'
);

fs.writeFileSync('src/pages/HomePage.tsx', homePage);

let dgs = fs.readFileSync('src/components/home/DigitalGrowthSystem.tsx', 'utf8');

dgs = dgs.replace(
  "desc: 'Build the digital foundation that helps your organization get discovered, understood and trusted.'",
  "desc: 'Build the digital presence that helps your organization get discovered and trusted.'"
);

dgs = dgs.replace(
  "services: ['Social Media Management', 'Social Media Posts', 'Reels', 'Digital Content']",
  "services: ['Social Media Management', 'Social Media Posts', 'Reels and Videos', 'Digital Content']"
);

dgs = dgs.replace(
  "desc: 'Create consistent content that communicates what you do and keeps your audience connected.'",
  "desc: 'Create consistent content that communicates your expertise and keeps your audience connected.'"
);

dgs = dgs.replace(
  "A coordinated delivery framework applied dynamically based on your diagnosed needs.",
  "A coordinated delivery framework applied dynamically based on your diagnosed needs." 
);

dgs = dgs.replace(
  /<p className="dgs-supporting">Build the foundation. Create a presence people remember. Promote it to the people who matter.<\/p>/g,
  '<p className="dgs-supporting">A coordinated delivery framework applied dynamically based on your diagnosed needs.</p>'
);

fs.writeFileSync('src/components/home/DigitalGrowthSystem.tsx', dgs);
