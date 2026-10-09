const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

const phase5CSS = `
/* Phase 5 Pages Shared */
.phase5-wrapper {
  background-color: var(--bg-primary);
}
.phase5-hero {
  padding-top: 140px;
  padding-bottom: 80px;
  background-color: var(--bg-primary);
}
.phase5-hero-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: var(--gold-primary);
  margin-bottom: 24px;
  display: block;
}
.phase5-hero-title {
  font-size: 3.5rem;
  margin-bottom: 24px;
  color: var(--text-primary);
  max-width: 800px;
}
.phase5-hero-desc {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 600px;
  line-height: 1.6;
}
.phase5-content {
  padding: 80px 0 120px;
  background-color: var(--bg-secondary);
}
.phase5-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}
.phase5-card {
  background: var(--bg-primary);
  padding: 40px;
  border: 1px solid var(--border-subtle);
}
.phase5-card.full-width {
  grid-column: 1 / -1;
}
.phase5-card h2, .phase5-card h3 {
  color: var(--text-primary);
  margin-bottom: 16px;
}
.phase5-card p {
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Form Styles */
.contact-form-container {
  max-width: 600px;
  margin: 0 auto;
  background: var(--bg-primary);
  padding: 40px;
  border: 1px solid var(--border-subtle);
}
.form-group {
  margin-bottom: 24px;
}
.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-primary);
}
.form-group input, .form-group select, .form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border-subtle);
  background: var(--bg-light);
  font-family: var(--font-body);
  color: var(--text-primary);
  border-radius: 4px;
}
.submit-btn {
  width: 100%;
  margin-top: 16px;
}
.contact-success {
  text-align: center;
  padding: 40px 0;
}
.contact-success h2 {
  color: var(--gold-primary);
  margin-bottom: 16px;
}
.form-note {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 16px;
  text-align: center;
}

@media (max-width: 768px) {
  .phase5-grid {
    grid-template-columns: 1fr;
  }
  .phase5-hero-title {
    font-size: 2.5rem;
  }
}
`;

if (!css.includes('/* Phase 5 Pages Shared */')) {
  fs.writeFileSync('src/index.css', css + '\n' + phase5CSS);
}
