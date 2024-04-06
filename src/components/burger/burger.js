document.addEventListener("DOMContentLoaded", function() {
    const navToggler = document.querySelector(".navbar-toggler");
    const headerNav = document.querySelector(".header__nav");

    navbarToggler.addEventListener("click", function() {
        headerNav.classList.toggle("active");
    });
});