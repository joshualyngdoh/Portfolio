let img = document.getElementById("hamburger-menu")
let menu = document.querySelector(".menu-bar")
let specs = document.querySelector(".specs")


function toggleNav() {
    if (img.src.match("images/Union.svg")) {
      img.src = "images/Icon.svg";
      menu.classList.toggle("active")
    } 
    else{
      img.src = "images/Union.svg";
      menu.classList.toggle("active")
    }
  }
  img.addEventListener('click', toggleNav)
  specs.addEventListener('click', toggleNav)
