// Typed.js for the typewriter effect on "I'm a" section
var typed = new Typed(".text", {
    strings: ["Fresh graduate"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Scroll animations or any dynamic interactivity can be added here
document.addEventListener("DOMContentLoaded", () => {
    // Example: Smooth scrolling to sections when clicking on navbar items
    const navbarLinks = document.querySelectorAll('.navbar a');
    
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop - 70,  // offset for fixed navbar
                behavior: 'smooth'
            });
        });
    });
});

// Form Validation
const form = document.querySelector('.contact-form form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Example of form validation
    const name = form.querySelector('input[type="name"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields!');
        return;
    }

    alert('Message sent successfully!');
    form.reset();  // Reset the form after submission
});

// For showing/hiding the navbar on smaller screens (Hamburger menu functionality)
// You can add a hamburger menu toggle to improve mobile navigation
const navbarToggle = document.querySelector('.navbar-toggle');
if (navbarToggle) {
    navbarToggle.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    });
}
