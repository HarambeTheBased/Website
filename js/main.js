document.addEventListener('DOMContentLoaded', function () {
    const burguer = document.getElementById('burguer');
    const nav = document.getElementById('nav');

    burguer.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});

