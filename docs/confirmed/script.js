const boot = document.getElementById('boot');
const story = document.querySelector('.story');
const winner = document.getElementById('winner-name');
const percent = document.getElementById('boot-percent');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const requestedName = new URLSearchParams(window.location.search).get('name')?.trim();

if (requestedName) {
  const safeName = requestedName.slice(0, 60);
  winner.textContent = safeName;
  winner.dataset.text = safeName;
  document.title = `${safeName} — победитель Illidiance`;
}

if (!reducedMotion) {
  const startedAt = performance.now();
  const updateProgress = () => {
    const progress = Math.min(100, Math.round(((performance.now() - startedAt) / 4800) * 100));
    percent.textContent = `${String(progress).padStart(2, '0')}%`;
    if (progress < 100) requestAnimationFrame(updateProgress);
  };
  requestAnimationFrame(updateProgress);

  const triggerGlitch = () => {
    story.classList.add('hard-glitch');
    window.setTimeout(() => story.classList.remove('hard-glitch'), 90 + Math.random() * 130);
    window.setTimeout(triggerGlitch, 900 + Math.random() * 2400);
  };
  window.setTimeout(triggerGlitch, 5500);
}

window.setTimeout(() => boot?.remove(), reducedMotion ? 0 : 4800);
