// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('alexandria-theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
} else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        if (next === 'light') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        localStorage.setItem('alexandria-theme', next);
    });
}

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const navBar = document.getElementById('navBar');
if (hamburger && navBar) {
    hamburger.addEventListener('click', () => navBar.classList.toggle('open'));
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Reading progress bar
(function () {
    const bar = document.getElementById('readingProgressBar');
    if (!bar) return;
    function update() {
        const doc = document.documentElement;
        const scrolled = doc.scrollTop || document.body.scrollTop;
        const total = doc.scrollHeight - doc.clientHeight;
        const pct = total > 0 ? Math.min(100, (scrolled / total) * 100) : 0;
        bar.style.width = pct + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
})();
