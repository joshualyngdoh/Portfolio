let img = document.getElementById("hamburger-menu")
let menu = document.querySelector(".menu-bar")


function toggleNav() {
    if (img.src.match("images/Union.svg")) {
      img.src = "images/Icon.svg";
      menu.classList.toggle("active")
      console.log('red')
      
    } 
    else{
      img.src = "images/Union.svg";
      menu.classList.toggle("active")
      console.log('blue')
    }
  }
  img.addEventListener('click', toggleNav)
