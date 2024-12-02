let burgerBtn = document.querySelector(".header__burger");
let burgerMenu = document.querySelector(".mobile-overlay");
let burgerMenuLink = document.querySelector(".mobile-overlay__list");
let body = document.body;

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    burgerMenu.classList.toggle("active-menu");
    body.classList.toggle("no-scroll");
});

burgerMenuLink.addEventListener("click", () => {
    burgerBtn.classList.remove("active"),
    burgerMenu.classList.toggle("active-menu");
    body.classList.remove("no-scroll");
});
