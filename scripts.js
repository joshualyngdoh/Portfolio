const img = document.getElementById('hamburger-menu');
const menu = document.querySelector('.menu-bar');
const specs = document.querySelectorAll('.specs');
const popUpModalWrapper = document.querySelector('#pop-up-window');

const toggleNav = () => {
  if (img.src.match('images/Union.svg')) {
    img.src = 'images/Icon.svg';
    menu.classList.toggle('active');
  } else {
    img.src = 'images/Union.svg';
    menu.classList.toggle('active');
  }
};
const closeMenu = () => {
  menu.classList.toggle('active');
  img.src = 'images/Union.svg';
};
img.addEventListener('click', toggleNav);
specs.forEach((element) => {
  element.addEventListener('click', closeMenu);
});

// Project object
const projects = [
  {
    id: 'proj1',
    name: 'Tonic',
    background: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    image: 'images/Snapshoot Portfolio.svg',
    alt: 'Snapshoot Portfolio image',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    excerpt:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tools: ['html', 'css', 'javascript'],
    submitButton: 'work-section-button',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'proj2',
    name: 'Multi-Post Stories',
    background: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    image: 'images/Snapshoot Portfolio (1).svg',
    alt: 'Snapshoot Portfolio image',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    excerpt:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tools: ['html', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'proj3',
    name: 'Tonic',
    background: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    image: 'images/Snapshoot Portfolio (2).svg',
    alt: 'Snapshoot Portfolio image',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    excerpt:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tools: ['html', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'proj4',
    name: 'Multi-Post Stories',
    background: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    image: 'images/Snapshoot Portfolio (3).svg',
    alt: 'Snapshoot Portfolio image',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    excerpt:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tools: ['html', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
];
// Tools template
const getToolsTemplate = (tools) => {
  let toolsContent = '';

  tools.forEach((tool) => {
    toolsContent += `
      <li>${tool}</li>
    `;
  });

  return toolsContent;
};
// Popup modal
const popUpModal = (project) => {
  const modalContent = `
  <div class="window-blur"></div>
  <div class="window-container">
    <div class="window-body">
      <div class="pop-up-header">
        <h2>${project.name}</h2>
        <img id="pop-up-close-button" src="images/CloseIcon.svg" />
      </div>
      <div class="pop-up-sub-header">
        <span class="can">${project.background}</span>
        <span class="dot"></span>
        <span class="back">${project.stack}</span>
        <span class="dot"></span>
        <span class="year">${project.year}</span>
      </div>
      <div class="pop-up-body">
        <div class="modal-img-wrapper">
            <img
              id="pop-up-image-cover"
              src="${project.image}"
              alt="${project.alt}"
            />
        </div>
        <div class="pop-up-body-contents">
          <p>${project.description}</p>
          <div class="pop-up-details">
            <div class="languages">
              <ul>
                ${getToolsTemplate(project.tools)}
              </ul>
            </div>
            <hr />
            <div class="pop-up-button-wrapper">
              <button class="pop-up-buttons">
                <span>See live</span> <img src="images/arrowbutton.svg" />
              </button>
              <button class="pop-up-buttons git-button">
                <span>See Source</span> <img src="images/secondgit.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  return modalContent;
};

// Project cards template
const loadProjectCards = (projects = []) => {
  let projectContents = '';

  projects.forEach((project) => {
    projectContents += `
    <div class="page-container">
    <div class="img-wrap">
      <img
        src="${project.image}"
        alt="${project.alt}"
      />
    </div>
    <div class="details">
      <div>
        <h2>${project.name}</h2>
      </div>
      <div>
        <ul>
          <li class="can">${project.background}</li>
          <li class="back">${project.stack}v</li>
          <li class="year">${project.year}</li>
        </ul>
      </div>
      <p>
        ${project.excerpt}
      </p>
      <div class="languages">
        <ul>
          ${getToolsTemplate(project.tools)}
        </ul>
      </div>
      <div class="work-section-button">
        <button data-project-id="${project.id}" id="see-project-button" class="grap">See project</button>
      </div>
    </div>
  </div>
    `;
  });

  return projectContents;
};

const closePopUp = () => {
  popUpModalWrapper.style.display = 'none';
};

const openPopUp = (project) => {
  const popUpTemplate = popUpModal(project);
  popUpModalWrapper.innerHTML = popUpTemplate;
  popUpModalWrapper.style.display = 'block';

  const popUpModalCloseButton = document.querySelector('#pop-up-close-button');

  popUpModalCloseButton.addEventListener('click', closePopUp);
};

window.addEventListener('load', () => {
  const portfolioSection = document.querySelector('#portfolio');
  popUpModalWrapper.style.display = 'none';

  portfolioSection.innerHTML = loadProjectCards(projects);

  const projectButtons = document.querySelectorAll('#see-project-button');

  Array.from(projectButtons).forEach((element) => {
    element.addEventListener('click', () => {
      const projectID = element.getAttribute('data-project-id');
      const projectObj = projects.find((project) => project.id === projectID);

      openPopUp(projectObj);
    });
  });
});

// validate form section

const email = document.getElementById('email');
document.querySelector('#press').addEventListener('click', (e) => {
  const name = document.getElementById('name');
  if (!name.validity.valid) {
    document.getElementById('logi').innerHTML = 'Form not sent! Kindly input valid name';
    e.preventDefault();
    return;
  }
  if (email.validity.typeMismatch) {
    document.getElementById('logi').innerHTML = 'Form not sent! Kindly input valid email.';
    e.preventDefault();
    return;
  }
  if (email.validity.patternMismatch) {
    document.getElementById('logi').innerHTML = 'Form not sent! Kindly input email in lowercase';
    e.preventDefault();
    return;
  }
  const text = document.getElementById('messagebox');
  if (!text.validity.valid) {
    document.getElementById('logi').innerHTML = 'Form not sent! Kindly input valid message';
    e.preventDefault();
    return;
  }
  document.getElementById('cont').press();
});
