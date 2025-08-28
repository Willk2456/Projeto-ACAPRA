// 1. Selecionar os elementos do DOM
const toggleButton = document.getElementById('mobileMenuToggle');
const banner = document.getElementById('banner');
const relative = document.getElementById('imagemRelative');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = toggleButton.querySelector('i');


function toggleMobileMenu() {
    mobileMenu.classList.toggle('menu-open');

    const isMenuOpen = mobileMenu.classList.contains('menu-open');

    if (isMenuOpen) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
        banner.classList.toggle('hidden');
        relative.classList.remove('relative');
    }

    setTimeout(() => {
        if (!isMenuOpen) {
            banner.classList.toggle('hidden');
            relative.classList.add('relative');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    }, 300);
    
}

toggleButton.addEventListener('click', toggleMobileMenu);