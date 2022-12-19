let img = document.querySelector(".hamburger_menu")
let menu = document.querySelector(".menu-bar")

img.addEventListener('click', toggleNav)

function toggleNav() {
    if (img.src.match("images/Union.svg")) {
      img.src = "images/icon.svg";
      menu.classList.toggle("active")
      
    } 
    else{
      img.src = "images/Union.svg";
      menu.classList.toggle("active")
      
    }
  }