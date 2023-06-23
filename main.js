let menuEmail = document.querySelector(".navbar-email")
let desktopMenu = document.querySelector(".desktop-menu")

let menuIcon = document.querySelector(".menu")
let mobileMenu = document.querySelector(".mobile-menu")


menuEmail.addEventListener("click" , toggleDesktopMenu)

menuIcon.addEventListener("click", toogleMobileMenu)

function toggleDesktopMenu () {
    desktopMenu.classList.toggle("inactive")
}

function toogleMobileMenu() {
    mobileMenu.classList.toggle("inactive")
}