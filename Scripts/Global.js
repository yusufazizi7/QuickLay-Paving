const popup = document.getElementById('quotePopup');
const openButtons = document.querySelectorAll('.open-popup-btn');
const closeBtn = document.querySelector('.close-popup-btn');

// Loop through all open buttons
openButtons.forEach(button => {
    button.addEventListener('click', () => {
        popup.classList.add('active');
    });
});
const menuBtn = document.querySelector('.mobile-menu-button');
const closeBtn2 = document.querySelector('.close-menu-button');
const nav = document.querySelector('.main-nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
});

closeBtn2.addEventListener('click', () => {
    nav.classList.remove('show');
});


// Close the popup
closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
});

// Close popup when clicking outside the form
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('active');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeEls = document.querySelectorAll('main *:not(script):not(style):not(link):not(.contact-overlay-content):not(.contact-overlay-content *)');

    fadeEls.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeEls.forEach(el => observer.observe(el));
});




