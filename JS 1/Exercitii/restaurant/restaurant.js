function addlisteners() {
    document.querySelector('.hamburger').addEventListener('click', toggleMenu);
}

function toggleMenu() {
    // get menu element
    document.querySelector('.menu');
    //if menu is visible hide it, else show it
    if(menu.classList.contains('visible')) {
        menu.classList.remove('visible');
    } else() {
        menu.classList.add('visible');
       } 
}

window.addEventListener('load', addlisteners);