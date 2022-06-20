// add header scroll

window.addEventListener("scroll", function () {
  let nav = document.querySelector(".navbar");
  nav.classList.toggle("scroll", scrollY > 0);
});

// hide menu

let collapse = document.querySelector(".navbar-collapse.collapse");
let navlink = document.querySelectorAll(".nav-link");
navlink.forEach(function (e) {
  e.addEventListener("click", function () {
    collapse.classList.remove("show");
  });
});
