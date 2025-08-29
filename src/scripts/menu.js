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
        if (banner) {
            banner.classList.toggle('hidden');
        }
        if (relative) {
            relative.classList.remove('relative');
        }
    }

    setTimeout(() => {
        if (!isMenuOpen) {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
            if (banner) {
                banner.classList.toggle('hidden');
            }
            if (relative) {
                relative.classList.add('relative');
            }
        }
    }, 300);
    
}

toggleButton.addEventListener('click', toggleMobileMenu);