// Abre e fecha menulateral em modo mobile
const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

// if ternário
menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x","bi-list");
    body.classList.toggle("menu-nav-active");
});

