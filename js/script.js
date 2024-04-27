// Header Scroll

let nav = document.querySelector(".navbar");

window.onscroll = function() {
    if (window.scrollY > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
};