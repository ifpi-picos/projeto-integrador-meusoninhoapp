/* Nav matriz */

let menuHamburguer = document.querySelector(".menu-hamburguer");
let nav = document.querySelector(".nav-home");

menuHamburguer.onclick = function() {
    menuHamburguer.classList.toggle("active");
    nav.classList.toggle("active-nav");
}

document.onclick = function(e) {
    if (!menuHamburguer.contains(e.target) && !nav.contains(e.target)) {
        menuHamburguer.classList.remove("active");
        nav.classList.remove("active-nav");
    }
}
