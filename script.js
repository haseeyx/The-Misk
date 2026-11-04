/* ============================================================
   MISK — script.js
   Mobile dropdown is fully handled by the inline script in
   index.html. Everything here is desktop-only for the navbar
   so the two systems never fight each other.
   ============================================================ */

/* ---------- Cart badge ---------- */
const cart = JSON.parse(localStorage.getItem('cart') || '[]');
const cartCountEl = document.getElementById('cartCount');
if (cartCountEl) {
  cartCountEl.textContent = cart.reduce((s, i) => s + i.qty, 0);
}

/* ---------- Mobile menu (hamburger) ---------- */
const navLeft = document.querySelector('.nav-left');
const navToggle = document.getElementById('navToggle');
if (navToggle && navLeft) {
  navToggle.onclick = () => navLeft.classList.toggle('open');
}

/* ---------- Dropdowns — DESKTOP ONLY ----------
   On mobile (<= 900px) the inline script inside index.html
   owns the whole dropdown lifecycle (open/close + inline styles).
   Running this here would clash with it and leave menus stuck
   open, so we bail out early. */
const isMobileNav = () => window.matchMedia('(max-width: 900px)').matches;

document.querySelectorAll('.dropdown > button, .dropdown-sub > button').forEach(btn => {
  btn.addEventListener('click', e => {
    if (isMobileNav()) return;          // mobile → inline script handles it
    e.preventDefault();
    e.stopPropagation();
    btn.parentElement.classList.toggle('open');
  });
});

/* Click outside closes all — desktop only */
document.addEventListener('click', e => {
  if (isMobileNav()) return;
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown.open, .dropdown-sub.open')
      .forEach(el => el.classList.remove('open'));
  }
});

/* ---------- Hero slider ---------- */
const track  = document.getElementById('track');

if (track) {
  const slides = [...track.children];
  const dotsEl = document.getElementById('dots');
  let idx = 0, timer;

  /* Build dots */
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'dot';
    d.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    d.onclick = () => go(i);
    dotsEl.appendChild(d);
  });
  const dots = [...dotsEl.children];

  function go(i) {
    idx = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d, n) => d.classList.toggle('active', n === idx));

    slides.forEach((s, n) => {
      s.classList.toggle('active', n === idx);   // triggers Ken Burns + caption fade-in
      const v = s.querySelector('video');
      if (v) {
        v.pause();
        if (n !== idx) v.currentTime = 0;
      }
    });

    clearTimeout(timer);
    const video = slides[idx].querySelector('video');
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
      video.onended = () => go(idx + 1);
    } else {
      timer = setTimeout(() => go(idx + 1), 5500);
    }
  }

  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  if (nextBtn) nextBtn.onclick = () => go(idx + 1);
  if (prevBtn) prevBtn.onclick = () => go(idx - 1);

  go(0);
}

/* ---------- Scroll reveal ---------- */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}