const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    sections.forEach(sec => sec.style.display = 'none');
    target.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Show About section on page load
document.querySelector('#about').style.display = 'block';
