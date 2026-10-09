const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

const eduCss = `
/* Education Page Styles */
.edu-hero {
  padding: 120px 0 80px;
  background-color: var(--bg-primary);
  text-align: center;
}

.edu-hero-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: var(--gold-primary);
  margin-bottom: 20px;
  display: block;
  text-transform: uppercase;
}

.edu-hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.edu-hero-desc {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

/* Scroll-driven desktop section */
.edu-scroll-container {
  height: 500vh; /* 5 stages * 100vh */
  position: relative;
  background-color: var(--bg-primary);
}

.edu-sticky-section {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: var(--bg-primary);
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
}

.edu-bg-number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40vw;
  font-weight: 800;
  color: var(--text-primary); /* Will be opacity 0.05 via framer */
  z-index: 0;
  line-height: 1;
  pointer-events: none;
  font-family: serif;
}

.edu-scroll-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}

.edu-split-layout {
  display: flex;
  width: 100%;
  padding-right: 80px; /* Space for indicators */
  align-items: center;
  justify-content: space-between;
}

.edu-left {
  width: 45%;
}

.edu-huge-num {
  font-size: 5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 10px;
  line-height: 1;
}

.edu-stage-label {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: var(--gold-primary);
  margin-bottom: 24px;
}

.edu-stage-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.1;
}

.edu-right {
  width: 45%;
}

.edu-stage-desc {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 30px;
}

.edu-stage-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.edu-stage-list li {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}

.edu-bullet {
  width: 6px;
  height: 6px;
  background-color: var(--gold-primary);
  border-radius: 50%;
  margin-right: 16px;
}

/* Progress Indicators */
.edu-progress-indicators {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;
}

.edu-indicator-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.edu-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid var(--border-light);
  background-color: transparent;
  transition: all 0.3s ease;
}

.edu-dot.active {
  border-color: var(--gold-primary);
  background-color: var(--gold-primary);
  box-shadow: 0 0 10px rgba(212, 175, 90, 0.5);
}

.edu-line {
  width: 1px;
  height: 40px;
  background-color: var(--border-subtle);
  margin: 10px 0;
}

/* Mobile section */
.edu-mobile-stages {
  padding: 60px 20px;
  background-color: var(--bg-primary);
}

.edu-mobile-stage {
  position: relative;
  padding-left: 40px;
  margin-bottom: 60px;
}

.edu-mobile-num {
  position: absolute;
  left: 0;
  top: -10px;
  font-size: 3rem;
  font-weight: 700;
  color: var(--border-light);
  opacity: 0.5;
}

.edu-mobile-label {
  font-size: 0.75rem;
  color: var(--gold-primary);
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.edu-mobile-title {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 20px;
  line-height: 1.2;
}

.edu-mobile-desc {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.edu-mobile-line {
  position: absolute;
  left: 15px;
  top: 60px;
  bottom: -40px;
  width: 1px;
  background-color: var(--border-subtle);
}

/* Proof Section */
.edu-proof {
  padding: 100px 0;
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-subtle);
}

.edu-proof-title {
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 40px;
}

.edu-proof-placeholder {
  border: 1px dashed var(--border-light);
  padding: 60px 20px;
  border-radius: 8px;
}

.edu-proof-placeholder p {
  color: var(--text-secondary);
  font-size: 1.1rem;
}
`;

if (!css.includes('.edu-scroll-container')) {
  css = css + '\n\n' + eduCss;
  fs.writeFileSync(cssPath, css);
}

console.log("CSS updated");
