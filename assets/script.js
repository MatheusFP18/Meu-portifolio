document.addEventListener('DOMContentLoaded', function() {
    const botaoMenu = document.querySelector('.menu-hamburguer');
    const menu = document.querySelector('#menu-principal');

    botaoMenu.addEventListener('click', function() {
        menu.classList.toggle('ativo');
    });
});