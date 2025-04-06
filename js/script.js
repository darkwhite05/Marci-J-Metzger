document.addEventListener("DOMContentLoaded", function () {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }

  // Search Form Placeholder
  const form = document.getElementById("searchForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Search functionality coming soon!");
    });
  }

  // Fade-in effect on scroll
  const faders = document.querySelectorAll(".fade-in");

  const appearOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
  );

  faders.forEach((fader) => appearOnScroll.observe(fader));
});
$(document).ready(function(){
  $('.gallery-slider').slick({
    infinite: true,  // Infinite scroll (looping through images)
    slidesToShow: 1, // Show 1 image at a time
    slidesToScroll: 1, // Scroll 1 image at a time
    arrows: true,  // Enable navigation arrows
    dots: true,  // Show navigation dots
    autoplay: true, // Automatically change images after a short period
    autoplaySpeed: 2000,  // Speed between auto slides (2 seconds)
    adaptiveHeight: true, // Adjust the height of the slider based on the image
  });
});
