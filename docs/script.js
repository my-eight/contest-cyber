const boot = document.getElementById('boot');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.setTimeout(() => {
  boot?.setAttribute('aria-hidden', 'true');
  boot?.remove();
}, reducedMotion ? 450 : 4600);
