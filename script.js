// smooth scroll + active nav link + mobile toggle
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-link');
  const header = document.querySelector('.site-header');
  const menuBtn = document.getElementById('menuBtn');

  // smooth scroll for anchor links
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - header.offsetHeight + 8,
          behavior: 'smooth'
        });
      }
      // close mobile menu if open
      document.body.classList.remove('show-nav');
    });
  });

  // observe sections to toggle active nav class
  const sections = document.querySelectorAll('main section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  }, { root:null, threshold: 0.55 }); // 55% visible

  sections.forEach(s => observer.observe(s));

  // mobile menu toggle
  menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
  });

  // set year in footer
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;
});

