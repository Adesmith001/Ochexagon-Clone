//For Hamburger Icon
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navLinks = document.querySelector('.nav-links');

    hamburgerIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});