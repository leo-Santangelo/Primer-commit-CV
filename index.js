const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu") 

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
    
    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label", "Cerrar Menu");
    } else{
        navToggle.setAttribute("aria-label", "Abrir Menu")
    }
})
/*
const navMenuItem = document.getElementsByClassName("nav-menu-item");
const e = window.matchMedia('(max-width: 900px)');
 
function screenTest(e) {
    if (e.matches) {
      navMenuItem.textContent = '';
    } else {
    }
}*/
   