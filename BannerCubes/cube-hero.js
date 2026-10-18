const grid = document.querySelector('.grid');

if (grid) {
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
}

document.querySelectorAll('.nav .dropdown').forEach((dropdown) => {
  const toggle = dropdown.querySelector('.dropdown-toggle');

  function setOpen(open) {
    dropdown.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  }

  toggle.addEventListener('click', () => setOpen(!dropdown.classList.contains('open')));

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) setOpen(false);
  });

  dropdown.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setOpen(false);
      toggle.focus();
    }
  });

  dropdown.addEventListener('focusout', (e) => {
    if (!dropdown.contains(e.relatedTarget)) setOpen(false);
  });
});
