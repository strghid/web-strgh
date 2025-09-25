document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        once: true, // Animation happens only once
        offset: 100, // Trigger animation when element is 100px from the viewport
        duration: 800, // Animation duration
        easing: 'ease-in-out-quad', // Animation easing
    });

    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (menuToggle) {
                   menuToggle.classList.remove('active');
                }
            }
        });
    });

    // Meta Pixel Event Tracking for Button
    const getInTouchBtn = document.getElementById('getInTouchBtn');
    if (getInTouchBtn) {
        getInTouchBtn.addEventListener('click', function() {
            // Melacak event 'Contact' saat tombol diklik
            if (typeof fbq === 'function') {
                fbq('track', 'Contact');
            }
        });
    }
});
