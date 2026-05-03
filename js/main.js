document.addEventListener('DOMContentLoaded', function () {
    const burguer = document.getElementById('burguer');
    const nav = document.getElementById('nav');

    if (burguer && nav) {
        burguer.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const reviewsSection = document.querySelector("#reviews");
  if (!reviewsSection) return;

  const observer = new MutationObserver(() => {
    const links = reviewsSection.querySelectorAll("a");
    if (links.length > 0) {
      const lastLink = links[links.length - 1];
      lastLink.style.display = "none";
    }
  });

  observer.observe(reviewsSection, { childList: true, subtree: true });
});

let lastScroll = 0;
const topbar = document.querySelector('.topbar');
const header = document.querySelector('.cabecera');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 50) {
    if (topbar) topbar.classList.add('hidden');
    if (header) header.classList.add('stuck');
  } else {
    if (topbar) topbar.classList.remove('hidden');
    if (header) header.classList.remove('stuck');
  }
  lastScroll = currentScroll;
});

// ═══ EVENT DELEGATION: capturamos clics en TODO el documento ═══
// Esto funciona aunque los elementos no existan al cargar
document.addEventListener('click', function(e) {
  // 1. ¿Clic en "+ Servicios" o cualquier link dentro de .has-submenu?
  const submenuLink = e.target.closest('.has-submenu > a');
  if (submenuLink && window.innerWidth <= 1033) {
    e.preventDefault();
    e.stopPropagation();
    const parent = submenuLink.closest('.has-submenu');
    if (parent) parent.classList.toggle('active');
    return;
  }

  // 2. ¿Clic en el fondo del nav (no en un link)?
  const nav = document.getElementById('nav');
  if (nav && (e.target === nav || e.target.classList.contains('menu'))) {
    nav.classList.remove('active');
    const burg = document.getElementById('burguer');
    if (burg) burg.classList.remove('active');
  }
});
