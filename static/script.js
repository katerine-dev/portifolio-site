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

// Animar todos os itens na tela que tiverem o atributo data-anime

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.scrollY + window.innerHeight * 0.85;
    item.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    })
}

animeScroll();

window.addEventListener("scroll", () => {
    animeScroll();
})