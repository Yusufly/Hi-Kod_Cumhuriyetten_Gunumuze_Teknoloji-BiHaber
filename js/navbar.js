const links = document.querySelectorAll('.nav-bar a');

let activeLink = null;

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    if (activeLink !== null) {
      activeLink.classList.remove('active');
    }

    activeLink = link;
    activeLink.classList.add('active');
  });
});