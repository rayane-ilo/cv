// Reveal on scroll with stagger support
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  }),
  { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Scroll progress bar
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  document.getElementById('scrollProgress').style.width = pct + '%';
});

// Theme toggle
const toggle = document.getElementById('themeToggle');
const html = document.documentElement;

function updateToggleIcon() {
  toggle.textContent = html.getAttribute('data-theme') === 'dark' ? '\u263E' : '\u2600';
}

// Restore saved theme
const saved = localStorage.getItem('theme');
if (saved) {
  html.setAttribute('data-theme', saved);
}
updateToggleIcon();

toggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateToggleIcon();
});

// Mobile hamburger
const hamburger = document.getElementById('navHamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});
