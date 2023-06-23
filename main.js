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
    const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}


function toogleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive'); 
  }
  
  mobileMenu.classList.toggle('inactive');

}

function toogleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }
  
  aside.classList.toggle('inactive');

}