let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sectionBtns = document.querySelectorAll('.btn-nav');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
});

sectionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        sectionBtns.forEach((btn) => btn.classList.remove('nav-active'));
        btn.classList.add('nav-active');
    });
});



// Select the menu icon element
let menuIcon = document.getElementById('menu-icon');

// Select the first li element in the navbar
let firstNavItem = document.querySelector('.navbar li:first-child');

// Check if the first li element is visible
function isElementVisible(element) {
    return (element.offsetWidth > 0 || element.offsetHeight > 0);
}

// Toggle the menu icon visibility based on the visibility of the first li element
function toggleMenuIcon() {
    if (!isElementVisible(firstNavItem)) {
        menuIcon.style.display = 'block'; // Show the menu icon
    } else {
        menuIcon.style.display = 'none'; // Hide the menu icon
    }
}

// Call toggleMenuIcon initially and whenever the window is resized
toggleMenuIcon();
window.addEventListener('resize', toggleMenuIcon);
