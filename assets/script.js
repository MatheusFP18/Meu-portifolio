document.addEventListener('DOMContentLoaded', function() {
    const botaoMenu = document.querySelector('.menu-hamburguer');
    const menu = document.querySelector('#menu-principal');
    const linksMenu = document.querySelectorAll('#menu-principal a');

    botaoMenu.addEventListener('click', function() {
        menu.classList.toggle('ativo');
    });

    linksMenu.forEach(function(link) {
        link.addEventListener('click', function() {
            menu.classList.remove('ativo');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function ativarLinkNoScroll() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(function(section) {
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`nav ul li a[href="#${id}"]`);

            if (navLink) {
                if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', ativarLinkNoScroll);

    ativarLinkNoScroll();
});