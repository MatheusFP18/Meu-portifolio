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

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                const id = entry.target.getAttribute('id');
                const navLink = document.querySelector(`nav ul li a[href*="#${id}"]`);
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});