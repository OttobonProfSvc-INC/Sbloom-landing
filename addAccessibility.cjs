const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf-8');

const accessibilityCSS = `

/* Accessibility Focus States */
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--text-primary);
  outline-offset: 2px;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

if (!css.includes('/* Accessibility Focus States */')) {
  fs.writeFileSync('src/index.css', css + accessibilityCSS);
}
