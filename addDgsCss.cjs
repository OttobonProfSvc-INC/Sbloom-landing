const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

const dgsCss = `
/* Digital Growth System Styles */
.dgs-section {
  padding: 120px 0;
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-subtle);
}

.dgs-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;
}

.dgs-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: var(--gold-primary);
  margin-bottom: 20px;
  display: block;
  text-transform: uppercase;
}

.dgs-main-heading {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 24px;
  line-height: 1.1;
}

.dgs-supporting {
  font-size: 1.25rem;
  color: var(--text-secondary);
}

/* System Diagram */
.dgs-system-wrapper {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
}

.dgs-diagram-top {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 0 5%;
}

.dgs-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: all 0.4s ease;
  width: 30%;
  text-align: center;
}

.dgs-node.dimmed {
  opacity: 0.4;
}

.dgs-node.active .dgs-node-num {
  color: var(--gold-primary);
}

.dgs-node.active .dgs-node-label {
  color: var(--text-primary);
}

.dgs-node-num {
  font-size: 3rem;
  font-weight: 700;
  color: var(--border-light);
  line-height: 1;
  transition: color 0.4s ease;
}

.dgs-node-label {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--text-secondary);
  transition: color 0.4s ease;
}

/* Line Architecture */
.dgs-line-system {
  position: relative;
  height: 80px;
  margin-bottom: 40px;
}

.dgs-horizontal-line {
  position: absolute;
  top: 0;
  left: 16.66%;
  right: 16.66%;
  height: 1px;
  background-color: var(--border-subtle);
}

.dgs-horizontal-line-highlight {
  height: 1px;
  background-color: var(--gold-primary);
  transition: all 0.4s ease;
  box-shadow: 0 0 10px rgba(212, 175, 90, 0.4);
}

.dgs-vertical-drops {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
}

.dgs-v-drop {
  position: absolute;
  top: 0;
  width: 1px;
  height: 20px;
  background-color: var(--border-subtle);
  transition: background-color 0.4s ease;
}

.dgs-v-drop:nth-child(1) { left: 16.66%; }
.dgs-v-drop:nth-child(2) { left: 50%; }
.dgs-v-drop:nth-child(3) { left: 83.33%; }

.dgs-v-drop.active {
  background-color: var(--gold-primary);
  box-shadow: 0 0 10px rgba(212, 175, 90, 0.4);
}

.dgs-center-drop {
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 40px;
  background-color: var(--border-subtle);
}

.dgs-grow-node-wrapper {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.dgs-grow-node {
  border: 1px solid var(--gold-primary);
  color: var(--gold-primary);
  padding: 8px 24px;
  border-radius: 40px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 2px;
  background-color: #080808;
  box-shadow: 0 0 20px rgba(212, 175, 90, 0.15);
}

/* Content Columns */
.dgs-columns {
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
}

.dgs-col {
  width: 30%;
  padding: 30px 0;
  border-top: 1px solid var(--border-subtle);
  transition: all 0.4s ease;
  position: relative;
}

.dgs-col::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 0;
  width: 0%;
  height: 1px;
  background-color: var(--gold-primary);
  transition: width 0.4s ease;
}

.dgs-col.active::before {
  width: 100%;
}

.dgs-col.dimmed {
  opacity: 0.3;
}

.dgs-col-headline {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.dgs-col-desc {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 30px;
}

.dgs-services-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
}

.dgs-service-item {
  color: var(--text-primary);
  font-size: 0.95rem;
  padding-left: 16px;
  position: relative;
}

.dgs-service-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 4px;
  height: 4px;
  background-color: var(--gold-primary);
  border-radius: 50%;
}

.dgs-explore-link {
  color: var(--gold-primary);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.3s ease;
}

.dgs-explore-link:hover {
  opacity: 0.8;
}

/* Grow Outcome */
.dgs-grow-outcome {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 40px;
  border-top: 1px solid var(--border-subtle);
}

.dgs-grow-headline {
  font-size: 2rem;
  color: var(--gold-primary);
  margin-bottom: 16px;
}

.dgs-grow-desc {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Mobile Journey */
.dgs-mobile-journey {
  position: relative;
  padding-left: 30px;
  margin-top: 60px;
}

.dgs-mobile-stage {
  position: relative;
  margin-bottom: 60px;
}

.dgs-mobile-num-label {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.dgs-m-num {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--border-light);
  line-height: 1;
}

.dgs-m-label {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--gold-primary);
}

.dgs-m-headline {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.dgs-m-desc {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 24px;
}

.dgs-m-services {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dgs-m-link {
  color: var(--gold-primary);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 20px;
}

.dgs-m-line {
  position: absolute;
  left: -20px;
  top: 0;
  bottom: -40px;
  width: 1px;
  background-color: var(--border-subtle);
}

.dgs-mobile-grow {
  position: relative;
}

.dgs-grow-label {
  display: inline-block;
  border: 1px solid var(--gold-primary);
  color: var(--gold-primary);
  padding: 6px 16px;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 20px;
}
`;

if (!css.includes('.dgs-section')) {
  css += '\n' + dgsCss;
  fs.writeFileSync(cssPath, css);
}

console.log("CSS injected");
