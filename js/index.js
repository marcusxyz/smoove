// Nav bg on scroll

window.onscroll = () => {
  const nav = document.querySelector('nav');
  if (this.scrollY <= 40) nav.className = '';
  else nav.className = 'scroll shorter-nav';
};

// Slide in unlock-content
let scrollpos = window.scrollY;
const unlock = document.querySelector('.unlock-content');
const unlock_height = unlock.offsetHeight;

const add_class_on_scroll = () =>
  unlock.classList.add('unlock-content-animation');
const remove_class_on_scroll = () =>
  unlock.classList.remove('unlock-content-animation');

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= 40) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }

  if (scrollpos >= 1750) {
    remove_class_on_scroll();
  }

  console.log(scrollpos);
});
// Progress bar

const bodyTag = document.querySelector('body');
const progressTag = document.querySelector('div.progress');

document.addEventListener('scroll', function () {
  const currentDistance = window.pageYOffset;
  const pageHeight = bodyTag.getBoundingClientRect().height;
  const totalDistance = pageHeight - window.innerHeight;

  const percentage = currentDistance / totalDistance;

  progressTag.style.width = `${100 * percentage}%`;
})(
  // Anchor smooth scrolling

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

// // Setting up parallax

// const sections = document.querySelectorAll('section');

// document.addEventListener('scroll', function () {
//   const topViewport = window.pageYOffset;
//   const midViewport = topViewport + (window.innerHeight / 20);

//   sections.forEach(section => {
//     const topSection = section.offsetTop;
//     const midSection = topSection + (section.offsetHeight / 20);

//     const distanceToSection = midViewport - midSection;

//     const tag = document.querySelector('.section-title .tag')
//     const speed = parseInt(tag.getAttribute('data-parallax'))

//     tag.style.transform = `translate(0, ${distanceToSection / speed}px)`

//   });
// })
