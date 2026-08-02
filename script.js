// typing effect
var typed = new Typed("#typed", {
  strings: [
    "Frontend Developer",
    "Python Enthusiast",
    "Problem Solver"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// smooth scroll fix for buttons
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
