document.addEventListener('DOMContentLoaded', function () {
    const burguer = document.getElementById('burguer');
    const nav = document.getElementById('nav');

    burguer.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const reviewsSection = document.querySelector("#reviews");

  if (!reviewsSection) return;

  // Esperar a que Elfsight cargue el contenido
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

document.querySelectorAll('.submenu-toggle').forEach(toggle => {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    const parent = this.closest('.has-submenu');
    parent.classList.toggle('open');
  });
});

let lastScroll = 0;

const topbar = document.querySelector('.topbar');
const header = document.querySelector('.cabecera');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 50) {
    // Scroll hacia abajo
    topbar.classList.add('hidden');
    header.classList.add('stuck');
  } else {
    // Scroll hacia arriba
    topbar.classList.remove('hidden');
    header.classList.remove('stuck');
  }

  lastScroll = currentScroll;
});
