const grid = document.querySelector('.grid');
let active = null;

function setActive(cell) {
  if (cell === active) return;
  if (active) active.classList.remove('touch');
  if (cell) cell.classList.add('touch');
  active = cell;
}

function track(e) {
  const t = e.touches[0];
  if (!t) return;
  const el = document.elementFromPoint(t.clientX, t.clientY);
  setActive(el && grid.contains(el) ? el.closest('.cell') : null);
}

function release(e) {
  setActive(null);
  if (e.cancelable) e.preventDefault();
}

grid.addEventListener('touchstart', track, { passive: true });
grid.addEventListener('touchmove', track, { passive: true });
grid.addEventListener('touchend', release);
grid.addEventListener('touchcancel', release);
