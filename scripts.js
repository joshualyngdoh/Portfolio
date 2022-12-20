const img = document.getElementById('hamburger-menu');
const menu = document.querySelector('.menu-bar');
const specs = document.querySelectorAll('.specs');

function toggleNav() {
  if (img.src.match('images/Union.svg')) {
    img.src = 'images/Icon.svg';
    menu.classList.toggle('active');
  } else {
    img.src = 'images/Union.svg';
    menu.classList.toggle('active');
  }
}
function closeMenu() {
  menu.classList.toggle('active');
  img.src = 'images/Union.svg';
}
img.addEventListener('click', toggleNav);
specs.forEach((element) => {
  element.addEventListener('click', closeMenu);
});
