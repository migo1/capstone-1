window.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.close-button');
  const menuItems = document.querySelectorAll('.mobile-menu-item');
  function toggleMenu() {
    if (mobileMenu.style.display === 'block') {
      mobileMenu.style.display = 'none';
    } else {
      mobileMenu.style.display = 'block';
    }
  }
  hamburger.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);
  window.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.style.display = 'none';
    }
  });
  for (let i = 0; i < menuItems.length; i += 1) {
    menuItems[i].addEventListener('click', toggleMenu);
  }

  const contestants = [
    {
      name: 'Jonathan Majors',
      breif: 'one of the best we have seen so far in all the seasons hosted, great person too .',
      desc: 'started singing at the age of six and now is at the top of the mountain with the rest of the contestants ready to take it all to the end',
      picture: 'images/person1.jpeg',
    },
    {
      name: 'Shelila Monet',
      breif: 'one of the best we have seen so far in all the seasons hosted, great person too .',
      desc: 'started singing at the age of six and now is at the top of the mountain with the rest of the contestants ready to take it all to the end',
      picture: 'images/person2.jpeg',
    },
    {
      name: 'Candice Parker',
      breif: 'one of the best we have seen so far in all the seasons hosted, great person too .',
      desc: 'started singing at the age of six and now is at the top of the mountain with the rest of the contestants ready to take it all to the end',
      picture: 'images/perosn3.jpeg',
    },
    {
      name: 'Chris Buck',
      breif: 'one of the best we have seen so far in all the seasons hosted, great person too .',
      desc: 'started singing at the age of six and now is at the top of the mountain with the rest of the contestants ready to take it all to the end',
      picture: 'images/person4.jpeg',
    },
    {
      name: 'Leile Queen',
      breif: 'one of the best we have seen so far in all the seasons hosted, great person too .',
      desc: 'started singing at the age of six and now is at the top of the mountain with the rest of the contestants ready to take it all to the end',
      picture: 'images/person5.png',
    },
    {
      name: 'David Visions',
      breif: 'one of the best we have seen so far in all the seasons hosted, great person too .',
      desc: 'started singing at the age of six and now is at the top of the mountain with the rest of the contestants ready to take it all to the end',
      picture: 'images/person6.jpeg',
    },
  ];
  const checkers = 'images/check.png';
  const thumbUp = 'images/thumb_up.png';
  const thumbDown = 'images/thumb_down.png';

  const finalists = document.getElementById('finalists');
  for (let i = 0; i < contestants.length; i += 1) {
    const finalist = document.createElement('li');
    finalist.classList.add('finalist');
    const images = document.createElement('div');
    images.classList.add('images');
    const checkImage = document.createElement('img');
    checkImage.classList.add('check-image');
    checkImage.setAttribute('src', checkers);
    checkImage.setAttribute('alt', `checker image ${i}`);
    const finImage = document.createElement('img');
    finImage.classList.add('finalist-image');
    finImage.setAttribute('src', contestants[i].picture);
    finImage.setAttribute('alt', `${contestants[i].name} Picture`);
    images.appendChild(checkImage);
    images.appendChild(finImage);
    finalist.appendChild(images);
    const detail = document.createElement('div');
    detail.classList.add('finalist-detail');
    const name = document.createElement('h4');
    name.classList.add('name');
    name.innerText = contestants[i].name;
    name.addEventListener('mouseenter', () => {
      const hoverCard = document.createElement('div');
      hoverCard.classList.add('hover-card');
      const hoverHeader = document.createElement('div');
      hoverHeader.classList.add('hover-header');
      const hoverImage = document.createElement('img');
      hoverImage.classList.add('hover-image');
      hoverImage.setAttribute('src', contestants[i].picture);
      hoverImage.setAttribute('alt', `${contestants[i].name} Picture`);
      const hoverName = document.createElement('p');
      hoverName.classList.add('hover-name');
      hoverName.innerText = contestants[i].name;
      hoverHeader.appendChild(hoverImage);
      hoverHeader.appendChild(hoverName);
      hoverCard.appendChild(hoverHeader);
      const hoverText = document.createElement('p');
      hoverText.classList.add('hover-text');
      hoverText.innerText = contestants[i].desc;
      hoverCard.appendChild(hoverText);
      const thumbs = document.createElement('div');
      thumbs.classList.add('thumbs');
      const up = document.createElement('img');
      up.classList.add('thumb');
      up.setAttribute('src', thumbUp);
      const down = document.createElement('img');
      down.classList.add('thumb');
      down.setAttribute('src', thumbDown);
      thumbs.appendChild(up);
      thumbs.appendChild(down);
      hoverCard.appendChild(thumbs);
      name.appendChild(hoverCard);
      name.addEventListener('mouseleave', () => {
        name.removeChild(hoverCard);
      });
    });
    const specalty = document.createElement('p');
    specalty.classList.add('specalty');
    specalty.innerText = contestants[i].breif;
    const line = document.createElement('hr');
    line.classList.add('detail-line');
    const about = document.createElement('p');
    about.classList.add('about-finalist');
    about.innerText = contestants[i].desc;
    detail.appendChild(name);
    detail.appendChild(specalty);
    detail.appendChild(line);
    detail.appendChild(about);
    finalist.appendChild(detail);
    finalists.appendChild(finalist);
  }
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  const listOfFinalists = document.querySelectorAll('.finalist');
  const moreButton = document.querySelector('.finalist-button');
  const lessButton = document.querySelector('.less-finalist-button');
  function handleScreenChange(event) {
    if (event.matches) {
      lessButton.classList.add('d-none');
      moreButton.classList.remove('button-display');
      for (let k = 0; k < listOfFinalists.length; k += 1) {
        if (k > 1) {
          listOfFinalists[k].classList.add('d-none');
        }
      }
      moreButton.addEventListener('click', () => {
        for (let q = 0; q < listOfFinalists.length; q += 1) {
          if (listOfFinalists[q].classList.contains('d-none')) {
            listOfFinalists[q].classList.add('slide-up');
            listOfFinalists[q].classList.remove('d-none');
          }
        }
        moreButton.classList.add('button-display');
        lessButton.classList.remove('d-none');
      });

      lessButton.addEventListener('click', () => {
        for (let z = 0; z < listOfFinalists.length; z += 1) {
          if (z > 1) {
            listOfFinalists[z].classList.add('slide-down');
            listOfFinalists[z].addEventListener('animationend', () => {
              listOfFinalists[z].classList.add('d-none');
              listOfFinalists[z].classList.remove('slide-down');
            }, { once: true });
          }
        }
        lessButton.classList.add('d-none');
        moreButton.classList.remove('button-display');
      });
    } else {
      for (let q = 0; q < listOfFinalists.length; q += 1) {
        if (listOfFinalists[q].classList.contains('d-none')) {
          listOfFinalists[q].classList.remove('d-none');
        }
      }
    }
  }
  mediaQuery.addEventListener('change', handleScreenChange);
  handleScreenChange(mediaQuery);
});