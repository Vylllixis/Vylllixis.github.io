// =========================================
// NAVBAR — Comportements
// =========================================

const navbar = document.getElementById('navbar');
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navbarLinks = document.querySelectorAll('.navbar__link');
const backToTopBtn = document.getElementById('back-to-top');
const scrollProgressBar = document.getElementById('scroll-progress');

// ---- Navbar scrolled + progress bar + back-to-top ----
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollY / docHeight) * 100;

  // Fond navbar après 50px de scroll
  navbar.classList.toggle('scrolled', scrollY > 50);

  // Barre de progression
  scrollProgressBar.style.width = scrollPercent + '%';

  // Bouton back-to-top après 400px
  backToTopBtn.classList.toggle('visible', scrollY > 400);
}, { passive: true }); // passive: true = meilleure performance

// ---- Back to top ----
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---- Hamburger menu ----
hamburgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburgerBtn.setAttribute('aria-expanded', isOpen.toString());
  mobileMenu.setAttribute('aria-hidden', (!isOpen).toString());

  // Bloquer le scroll du body quand le menu est ouvert
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Fermer le menu mobile au clic sur un lien
document.querySelectorAll('.mobile-menu__link').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
});

// ---- Lien navbar actif au scroll (IntersectionObserver) ----
const sections = document.querySelectorAll('section[id]');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`.navbar__link[href="#${id}"]`);

      if (!link) return;

      if (entry.isIntersecting) {
        // Désactiver tous les liens
        navbarLinks.forEach((l) => l.classList.remove('active'));
        // Activer le lien correspondant
        link.classList.add('active');
      }
    });
  },
  {
    rootMargin: `-${parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--navbar-height')) + 10}px 0px -60% 0px`,
    threshold: 0,
  }
);

sections.forEach((section) => navObserver.observe(section));