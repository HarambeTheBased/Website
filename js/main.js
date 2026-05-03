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

  observer.observe(reviewsSection, {
    childList: true,
    subtree: true
  });
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

const navEl = document.getElementById('nav');
if (navEl) {
  navEl.addEventListener('click', function(e){
    if (e.target === this || e.target.classList.contains('menu')) {
      this.classList.remove('active');
      const burg = document.getElementById('burguer');
      if (burg) burg.classList.remove('active');
    }
  });
}

// ═══ SUBMENÚ MÓVIL — captura cualquier link a servicios.html ═══
// Funciona aunque el HTML no tenga la clase submenu-link
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.has-submenu > a, .submenu-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 1033) {
        e.preventDefault();
        e.stopPropagation();
        const parent = this.closest('.has-submenu');
        if (parent) parent.classList.toggle('active');
      }
    });
  });
});
