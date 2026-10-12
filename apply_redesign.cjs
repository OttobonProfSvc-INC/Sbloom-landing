const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Update navbar
css = css.replace(
  /background: rgba\(243, 235, 221, 0\.9\);/,
  'background: rgba(248, 246, 241, 0.9);'
);

// Update buttons
css = css.replace(
  /\.btn-primary \{[\s\S]*?\}/,
  `.btn-primary {
  background-color: var(--deep-ink);
  color: var(--pure-white);
  border: none;
}`
);

css = css.replace(
  /\.btn-primary:hover \{[\s\S]*?\}/,
  `.btn-primary:hover {
  background-color: var(--dark-hover);
  transform: translateY(-2px);
}`
);

css = css.replace(
  /\.btn-secondary \{[\s\S]*?\}/,
  `.btn-secondary {
  background-color: transparent;
  color: var(--deep-ink);
  border: 1px solid var(--deep-ink);
}`
);

css = css.replace(
  /\.btn-secondary:hover \{[\s\S]*?\}/,
  `.btn-secondary:hover {
  background-color: var(--bg-ivory);
  color: var(--deep-ink);
  transform: translateY(-2px);
}`
);

// Update footer-premium
css = css.replace(
  /\.footer-premium \{[\s\S]*?\}/,
  `.footer-premium {
  background-color: var(--deep-ink);
  border-top: 1px solid var(--deep-ink);
  padding: 100px 0 40px;
  color: var(--pure-white);
}`
);

css = css.replace(
  /\.footer-desc \{[\s\S]*?\}/,
  `.footer-desc {
  color: var(--light-champagne);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 24px;
}`
);

css = css.replace(
  /\.footer-nav-title \{[\s\S]*?\}/,
  `.footer-nav-title {
  color: var(--champagne-gold);
  font-size: 0.85rem;
  letter-spacing: 2px;
  margin-bottom: 24px;
}`
);

css = css.replace(
  /\.footer-nav-link \{[\s\S]*?\}/,
  `.footer-nav-link {
  display: block;
  color: var(--light-champagne);
  text-decoration: none;
  margin-bottom: 16px;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}`
);

css = css.replace(
  /\.footer-nav-link:hover \{[\s\S]*?\}/,
  `.footer-nav-link:hover {
  color: var(--pure-white);
}`
);

css = css.replace(
  /\.footer-bottom-bar \{[\s\S]*?\}/,
  `.footer-bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  color: var(--muted-text);
  font-size: 0.85rem;
}`
);

css = css.replace(
  /\.footer-bottom-center a \{[\s\S]*?\}/,
  `.footer-bottom-center a {
  color: var(--muted-text);
  text-decoration: none;
  transition: color 0.3s ease;
}`
);

css = css.replace(
  /\.footer-bottom-center a:hover \{[\s\S]*?\}/,
  `.footer-bottom-center a:hover {
  color: var(--light-champagne);
}`
);

css = css.replace(
  /\.footer-cta-link \{[\s\S]*?\}/,
  `.footer-cta-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--champagne-gold);
  font-weight: 600;
  text-decoration: none;
  font-size: 1.05rem;
  transition: opacity 0.3s ease;
}`
);

fs.writeFileSync(cssPath, css);
console.log('CSS updated successfully.');
