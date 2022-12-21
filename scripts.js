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

function popup() {

}
 const projects = [
  {
    id: proj1,
    name: 'Tonic',
    background: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    image: '<img src="images/Snapshoot Portfolio.svg" alt="Snapshoot Portfolio image"/>',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tools: ['html, css, javascript'],
    submitButton: 'work-section-button', 
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: proj2,
    name: 'Multi-Post Stories',
    background: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    image: '<img src="images/Snapshoot Portfolio (1).svg" alt="Snapshoot Portfolio image"/>',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tools: ['html, css, javascript'],
    submitButton: 'work-section-button',
    liveLink: '#',
    sourceLink: '#', 
  },
  {
    id: proj3,
    name: 'Tonic',
    background: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    image: 'img src="images/Snapshoot Portfolio (2).svg" alt="Snapshoot Portfolio image"/>',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tools: ['html, css, javascript'],
    submitButton: 'work-section-button',
    liveLink: '#',
    sourceLink: '#', 
  },
  {
    id: proj4,
    name: 'Multi-Post Stories',
    background: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    image: '<img src="images/Snapshoot Portfolio (3).svg" alt="Snapshoot Portfolio image"/>',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tools: ['html, css, javascript'],
    submitButton: 'work-section-button',
    liveLink: '#',
    sourceLink: '#',
  }
 ];

 for (let i = 0; i < projects.length; i += 1) {
  let technologies = '';

  for (let j = 0; j < projects[i].languages.length; j += 1) [
    technologies += `<li >${projects[i].tools[j]}</li>`,
  ]
 
 const container = document.createElement('div');
 container.classList.add('page-container');
 container.innerHTML = `
 <img src="${projects[i].image}" alt="">
 <div class="description">
      <h4>${projects[i].name}</h4>
      <ul> class="liststyle" type="none" 
      ${projects[i].technologies}
      </ul>
      <button type="button" class="grap">See Project<button>
 </div>
 `;
 }