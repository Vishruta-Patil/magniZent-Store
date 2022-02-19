const navbar_close_btn = document.querySelector(".nav-close-btn")
const collapeNavbarContainer = document.querySelector(".collape-navbar-container")
// const overlayContainer = document.querySelector(".overlay-container")
const menuLogo = document.querySelector(".menu-logo")
const emptyBox = document.querySelector("#empty-box")

// navbar_close_btn.addEventListener("click", () => {
//     // collapeNavbarContainer.style.display = "none"
//     // emptyBox.style.display = "none"
//     collapeNavbarContainer.classList.add("hide-nav")
//     collapeNavbarContainer.classList.remove("display-nav")
//     // emptyBox.classList.add("abc")
//     // console.log("closed")
// })

// menuLogo.addEventListener("click", () => {
//     collapeNavbarContainer.classList.remove("hide-nav")
//     collapeNavbarContainer.classList.add("display-nav")
//     // emptyBox.classList.add("overlay-container")
//     // console.log("open")
// })


navbar_close_btn.addEventListener("click", () => {
    collapeNavbarContainer.classList.add("hide-nav")
    collapeNavbarContainer.classList.remove("display-nav")
    emptyBox.classList.remove("overlay-container")
    emptyBox.classList.add("white-container")
})

menuLogo.addEventListener("click", () => {
    collapeNavbarContainer.classList.remove("hide-nav")
    collapeNavbarContainer.classList.add("display-nav")
    emptyBox.classList.add("overlay-container")
})





  const filterDropdown = document.querySelector(".filter-dropdown")
  const filterMobcontainer = document.querySelector(".filter-mob-container")
  const productContainer = document.querySelector(".product-container")
  const filterDropUp = document.querySelector(".filter-dropup")

  filterDropdown.addEventListener("click", () => {
    filterMobcontainer.classList.remove("hide-nav")
    filterMobcontainer.classList.add("display-nav")
    productContainer.style.display = "none"
    filterDropdown.innerHTML = "arrow_drop_up"
    filterDropdown.classList.add("qwe")
    filterDropdown.classList.add("hide-nav")
    filterDropUp.classList.remove("hide-nav")
  })

  filterDropUp.addEventListener("click", () => {
    filterDropdown.classList.remove("hide-nav")
    filterDropUp.classList.add("hide-nav")
    console.log("hello")
    productContainer.style.display = "block"
    filterMobcontainer.classList.add("hide-nav")
    filterMobcontainer.classList.remove("display-nav")
  })