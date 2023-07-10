// menuDesktop
let menuEmail = document.querySelector(".navbar-email")
let desktopMenu = document.querySelector(".desktop-menu")

// menuMobile
let menuIcon = document.querySelector(".menu")
let mobileMenu = document.querySelector(".mobile-menu")

// aside

let menuCarritoIcon = document.querySelector(".navbar-shopping-cart")

let shoppingCartContainer = document.querySelector("#shoppingCartContainer")

let productDetailContainer = document.querySelector("#productDetail")

let producteDetailClose = document.querySelector("#productDetail .close")


// contenido de cartas

const cardsConteiner = document.querySelector(".cards-container")

// eventos

menuEmail.addEventListener("click" , toggleDesktopMenu)

menuIcon.addEventListener("click", toogleMobileMenu)

menuCarritoIcon.addEventListener("click", toogleCarritoAside)

producteDetailClose.addEventListener("click", closeDetail)

/////

function closeDetail() {
    productDetailContainer.classList.add("inactive")
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add("inactive")
    productDetailContainer.classList.remove("inactive")
}

function toggleDesktopMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }
  
  mobileMenu.classList.toggle('inactive');
  closeDetail()

}

function toogleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }

  desktopMenu.classList.add("inactive")
  
  const isProductDetailClosed = productDetailContainer.classList.contains("inactive")


  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }  


  shoppingCartContainer.classList.toggle('inactive');
}

const productList = []

productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "pantalla",
    price: 620,
    image: "https://th.bing.com/th/id/OIP.2cbjlF-1WDHRufzjaGrDaAAAAA?pid=ImgDet&rs=1"
})

productList.push({
    name: "computador",
    price: 900,
    image: "https://th.bing.com/th/id/OIP.jtx697iuJNZM6UE-iS-6WAHaHa?pid=ImgDet&rs=1"
})

productList.push({
  name: "carro",
  price: 1000,
  image: "https://th.bing.com/th/id/R.261e055b0aec0400c695e1f2a2e94ed6?rik=lmFJIMzk%2brP1ig&riu=http%3a%2f%2fblog.espol.edu.ec%2fbgauria%2ffiles%2f2011%2f06%2fCARRO3.jpg&ehk=HaudVt2wonSwzJoUHP%2bPxMG%2bX88og9OIA4zA%2fYBRkjk%3d&risl=&pid=ImgRaw&r=0"
})
productList.push({
  name: "carro",
  price: 1000,
  image: "https://th.bing.com/th/id/R.261e055b0aec0400c695e1f2a2e94ed6?rik=lmFJIMzk%2brP1ig&riu=http%3a%2f%2fblog.espol.edu.ec%2fbgauria%2ffiles%2f2011%2f06%2fCARRO3.jpg&ehk=HaudVt2wonSwzJoUHP%2bPxMG%2bX88og9OIA4zA%2fYBRkjk%3d&risl=&pid=ImgRaw&r=0"
})
productList.push({
  name: "carro",
  price: 1000,
  image: "https://th.bing.com/th/id/R.261e055b0aec0400c695e1f2a2e94ed6?rik=lmFJIMzk%2brP1ig&riu=http%3a%2f%2fblog.espol.edu.ec%2fbgauria%2ffiles%2f2011%2f06%2fCARRO3.jpg&ehk=HaudVt2wonSwzJoUHP%2bPxMG%2bX88og9OIA4zA%2fYBRkjk%3d&risl=&pid=ImgRaw&r=0"
})
productList.push({
  name: "carro",
  price: 1000,
  image: "https://th.bing.com/th/id/R.261e055b0aec0400c695e1f2a2e94ed6?rik=lmFJIMzk%2brP1ig&riu=http%3a%2f%2fblog.espol.edu.ec%2fbgauria%2ffiles%2f2011%2f06%2fCARRO3.jpg&ehk=HaudVt2wonSwzJoUHP%2bPxMG%2bX88og9OIA4zA%2fYBRkjk%3d&risl=&pid=ImgRaw&r=0"
})


function renderProduct(arr){
    for (product of arr){
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
        productImg.addEventListener("click", openProductDetailAside)
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
        
        const productPrice = document.createElement("p")
        productPrice.innerText = "$" + product.price
        const productName = document.createElement("p")
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement("figure")
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsConteiner.appendChild(productCard)
    }
}

renderProduct(productList)