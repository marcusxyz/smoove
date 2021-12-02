// Nav bg on scroll

window.onscroll = () => {
  const nav = document.querySelector('nav');
  if (this.scrollY <= 40) nav.className = '';
  else nav.className = 'scroll shorter-nav';
};

// Progress bar as scrollbar

const bodyTag = document.querySelector('body');
const progressTag = document.querySelector('div.progress');

document.addEventListener('scroll', function () {
  const currentDistance = window.pageYOffset;
  const pageHeight = bodyTag.getBoundingClientRect().height;
  const totalDistance = pageHeight - window.innerHeight;

  const percentage = currentDistance / totalDistance;

  progressTag.style.width = `${100 * percentage}%`;
});

// Slide in unlock-content
let scrollpos = window.scrollY;
const unlock = document.querySelector('.unlock-content');
const addClassOnScroll = () => unlock.classList.add('left-to-right');
const removeClassOnScroll = () => unlock.classList.remove('left-to-right');

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;
  if (scrollpos >= 500) {
    addClassOnScroll();
  } else {
    removeClassOnScroll();
  }
});

// Slide in NEVER TRAVEL ALONE

const neverTravelAlone = document.querySelector('#first-h3');
const neverTravelAloneP = document.querySelector('#first-p');
const addTravelSlide = () => neverTravelAlone.classList.add('left-to-right');
const addTravelSlideP = () =>
  neverTravelAloneP.classList.add('left-to-right-2');

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;
  console.log(scrollpos);
  if (scrollpos >= 1150) {
    addTravelSlide();
    addTravelSlideP();
  }
});

// Slide in EFFORTLESS MOVEMENT
const effortlessMovement = document.querySelector('#second-h3');
const effortlessMovementP = document.querySelector('#second-p');
const addEffortless = () => effortlessMovement.classList.add('right-to-left');
const addEffortlessP = () =>
  effortlessMovementP.classList.add('right-to-left-2');

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;
  if (scrollpos >= 1650) {
    addEffortless();
    addEffortlessP();
  }
})(
  // Vanilla JavaScript Scroll to Anchor
  // @ https://perishablepress.com/vanilla-javascript-scroll-anchor/

  function () {
    scrollTo();
  }
)();

function scrollTo() {
  const links = document.querySelectorAll('.scroll');
  links.forEach((each) => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
  const distanceToTop = (el) => Math.floor(el.getBoundingClientRect().top);
  e.preventDefault();
  var targetID = respond
    ? respond.getAttribute('href')
    : this.getAttribute('href');
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);
  window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
  const checkIfDone = setInterval(function () {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = '-1';
      targetAnchor.focus();
      window.history.pushState('', '', targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}
