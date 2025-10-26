const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));

    // Hide all sections and remove active class
    sections.forEach(sec => {
      sec.style.display = 'none';
      sec.classList.remove('active'); // remove active for heading color
    });

    // Show target section and add active class for heading
    target.style.display = 'block';
    target.classList.add('active');

    // Remove active class from all nav links
    navLinks.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');
  });
});

// Show first section on page load
document.addEventListener('DOMContentLoaded', () => {
  sections[0].style.display = 'block';
  sections[0].classList.add('active');
  navLinks[0].classList.add('active');
});

