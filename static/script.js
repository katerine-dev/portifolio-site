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

// fechar o menu quando clicar em algum item e muda o ícone para list

const navItem = document.querySelectorAll('.nav-item');
// quando algum item for clicado ele vai remover a lista
navItem.forEach(item => {
    item.addEventListener('click', () => {
        if (body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})