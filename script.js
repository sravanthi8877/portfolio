// Select navigation links and all sections
const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('.section');

// Add click event for each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));

    // Hide all sections and remove active state
    sections.forEach(sec => {
      sec.style.display = 'none';
      sec.classList.remove('active');
    });

    // Show target section and set active class
    target.style.display = 'block';
    target.classList.add('active');

    // Update active link styling
    navLinks.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');
  });
});

// Show first section (About) on initial page load
document.addEventListener('DOMContentLoaded', () => {
  sections[0].style.display = 'block';
  sections[0].classList.add('active');
  navLinks[0].classList.add('active');
});

