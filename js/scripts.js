// Carrusel de tarjetas comerciales tipo showcase
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carrusel-tarjetas-track');
    const cards = document.querySelectorAll('.carrusel-tarjeta');
    const prevBtn = document.getElementById('carruselComercialPrev');
    const nextBtn = document.getElementById('carruselComercialNext');
    let focusIndex = 1;
    function updateFocus() {
        cards.forEach((card, i) => {
            card.classList.remove('focus', 'left', 'right');
            if (i === focusIndex) {
                card.classList.add('focus');
            } else if (i === (focusIndex - 1 + cards.length) % cards.length) {
                card.classList.add('left');
            } else if (i === (focusIndex + 1) % cards.length) {
                card.classList.add('right');
            }
        });
        // Ya no forzar scroll para evitar que la página salte
    }
    function moveFocus(dir) {
        focusIndex += dir;
        if(focusIndex < 0) focusIndex = cards.length-1;
        if(focusIndex >= cards.length) focusIndex = 0;
        updateFocus();
    }
    if(prevBtn && nextBtn) {
        prevBtn.addEventListener('click', ()=>moveFocus(-1));
        nextBtn.addEventListener('click', ()=>moveFocus(1));
    }
    // Auto avance
    setInterval(()=>moveFocus(1), 3500);
    updateFocus();
});
// Efecto de focus/ampliar imagen de ipad
document.addEventListener('DOMContentLoaded', function() {
    var ipad = document.getElementById('ipad-container');
    var overlay = document.getElementById('ipad-overlay');
    var closeBtn = document.getElementById('close-overlay');
    if(ipad && overlay && closeBtn) {
        ipad.addEventListener('click', function() {
            overlay.style.display = 'flex';
        });
        closeBtn.addEventListener('click', function() {
            overlay.style.display = 'none';
        });
        overlay.addEventListener('click', function(e) {
            if(e.target === overlay) overlay.style.display = 'none';
        });
    }
});
/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});