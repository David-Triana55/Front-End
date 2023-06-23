// menuDesktop
let menuEmail = document.querySelector(".navbar-email")
let desktopMenu = document.querySelector(".desktop-menu")

// menuMobile
let menuIcon = document.querySelector(".menu")
let mobileMenu = document.querySelector(".mobile-menu")

// aside

let menuCarritoIcon = document.querySelector(".navbar-shopping-cart")

let aside = document.querySelector(".my-total")

// eventos

menuEmail.addEventListener("click" , toggleDesktopMenu)

menuIcon.addEventListener("click", toogleMobileMenu)

menuCarritoIcon.addEventListener("click", toogleCarritoAside)

function toggleDesktopMenu () {
    let isAsideClosed = aside.classList.contains("inactive")

    if(isAsideClosed){
        desktopMenu.classList.toggle("inactive")
    } else {
        aside.add("inactive")
    }
}


function toogleMobileMenu() {
    let isAsideClosed = aside.classList.contains("inactive")

    if(isAsideClosed){
        mobileMenu.classList.toggle("inactive")
    }else {
        aside.add("inactive")
    }

}

function toogleCarritoAside() {
    let isMobileMenuClosed = mobileMenu.classList.contains("inactive")

    if(isMobileMenuClosed) {
        aside.classList.toggle("inactive")
    } else {
        mobileMenu.add("inactive")
    }

   
}