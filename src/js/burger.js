document.addEventListener("DOMContentLoaded", function() {
    const burgerBtn = document.querySelector(".burger-btn");
    const headerNav = document.querySelector(".header__nav");

    burgerBtn.addEventListener("click", function() {
        headerNav.classList.toggle("active");
    });
});