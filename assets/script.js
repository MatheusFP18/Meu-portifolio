document.addEventListener('DOMContentLoaded', function() {
    // --- Lógica do Menu Hambúrguer ---
    const botaoMenu = document.querySelector('.menu-hamburguer');
    const menu = document.querySelector('#menu-principal');
    const linksMenu = document.querySelectorAll('#menu-principal a');

    if (botaoMenu && menu) {
        botaoMenu.addEventListener('click', function() {
            menu.classList.toggle('ativo');
        });
    }

    if (linksMenu.length > 0 && menu) {
        linksMenu.forEach(function(link) {
            link.addEventListener('click', function() {
                menu.classList.remove('ativo');
            });
        });
    }
    
    // --- Lógica do Scroll Ativo na Navegação ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (sections.length > 0 && navLinks.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    
                    const id = entry.target.getAttribute('id');
                    const navLink = document.querySelector(`nav ul li a[href*="#${id}"]`);
                    if (navLink) {
                        navLink.classList.add('active');
                    }
                }
            });
        }, { threshold: 0.8 });
    
        sections.forEach(section => observer.observe(section));
    }
});