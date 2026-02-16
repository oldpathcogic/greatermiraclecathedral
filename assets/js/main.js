document.addEventListener("DOMContentLoaded", function () {

  const navbar = document.getElementById("navbar");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  // Scroll effect
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Mobile menu toggle
  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }

  // Scroll reveal
  const revealElements = document.querySelectorAll("section");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);

});
