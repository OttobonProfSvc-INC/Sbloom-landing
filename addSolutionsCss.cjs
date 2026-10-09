const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

const solutionsCSS = `
/* Solutions Pages Shared */
.sol-hero {
  padding-top: 140px;
  padding-bottom: 80px;
  background-color: var(--bg-primary);
}
.sol-hero-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: var(--gold-primary);
  margin-bottom: 24px;
  display: block;
}
.sol-hero-title {
  font-size: 3.5rem;
  margin-bottom: 24px;
  color: var(--text-primary);
  max-width: 800px;
}
.sol-hero-desc {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 600px;
  line-height: 1.6;
}

/* Solutions Overview Grid */
.sol-pillars-grid {
  padding: 80px 0;
  background-color: var(--bg-secondary);
}
.sol-pillars-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.sol-pillar-card {
  background: var(--bg-primary);
  padding: 40px;
  border: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  height: 100%;
}
.sol-pillar-card h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: var(--text-primary);
}
.sol-pillar-card p {
  color: var(--text-secondary);
  margin-bottom: 24px;
  flex: 1;
}
.sol-pillar-link {
  color: var(--gold-primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.85rem;
}

/* Solutions Detail Activities */
.sol-activities {
  padding: 80px 0;
  background-color: var(--bg-light);
}
.sol-activities-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 800px;
}
.sol-activity-item {
  border-left: 2px solid var(--gold-primary);
  padding-left: 24px;
}
.sol-activity-item h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
}
.sol-activity-item p {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .sol-pillars-container {
    grid-template-columns: 1fr;
  }
  .sol-hero-title {
    font-size: 2.5rem;
  }
}
`;

if (!css.includes('/* Solutions Pages Shared */')) {
  fs.writeFileSync('src/index.css', css + '\n' + solutionsCSS);
}
