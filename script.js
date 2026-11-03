









/* ---------- Cart badge ---------- */
const cart = JSON.parse(localStorage.getItem('cart') || '[]');
document.getElementById('cartCount').textContent = cart.reduce((s, i) => s + i.qty, 0);

/* ---------- Mobile menu ---------- */
const navLeft = document.querySelector('.nav-left');
document.getElementById('navToggle').onclick = () => navLeft.classList.toggle('open');

/* ---------- Dropdowns: click to toggle (desktop + mobile) ---------- */
document.querySelectorAll('.dropdown > button, .dropdown-sub > button').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    btn.parentElement.classList.toggle('open');
  });
});
/* Click outside closes all */
document.addEventListener('click', e => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown.open, .dropdown-sub.open')
      .forEach(el => el.classList.remove('open'));
  }
});

/* ---------- Hero slider ---------- */
const track  = document.getElementById('track');
const slides = [...track.children];
const dotsEl = document.getElementById('dots');
let idx = 0, timer;

slides.forEach((_, i) => {
  const d = document.createElement('button');
  d.className = 'dot';
  d.onclick = () => go(i);
  dotsEl.appendChild(d);
});
const dots = [...dotsEl.children];

function go(i) {
  idx = (i + slides.length) % slides.length;
  track.style.transform = `translateX(-${idx * 100}%)`;
  dots.forEach((d, n) => d.classList.toggle('active', n === idx));

  slides.forEach((s, n) => {
    s.classList.toggle('active', n === idx);   // ← triggers Ken Burns + caption fade-in
    const v = s.querySelector('video');
    if (v) { v.pause(); if (n !== idx) v.currentTime = 0; }
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
document.querySelector('.next').onclick = () => go(idx + 1);
document.querySelector('.prev').onclick = () => go(idx - 1);
go(0);

/* ---------- Scroll reveal ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

