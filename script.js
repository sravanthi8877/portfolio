
const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();

    // Show the clicked section
    const target = document.querySelector(link.getAttribute('href'));
    sections.forEach(sec => sec.style.display = 'none'); // hide all sections
    target.style.display = 'block'; // show selected section

    // Remove active class from all links
    navLinks.forEach(nav => nav.classList.remove('active'));

    // Add active class to clicked link
    link.classList.add('active');
  });
});

// Optionally, show the first section on page load
document.addEventListener('DOMContentLoaded', () => {
  sections[0].style.display = 'block';
  navLinks[0].classList.add('active');
});
