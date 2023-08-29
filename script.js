

// const subTitles = document.querySelectorAll('.sub-title');
// const triggerOffset = window.innerHeight / 2; // Half of the window height

// function animateOnScroll() {
//   subTitles.forEach(title => {
//     const titleTop = title.getBoundingClientRect().top;
//     if (titleTop < triggerOffset) {
//       title.classList.add('animate');
//     }
//   });
// }

// window.addEventListener('scroll', animateOnScroll);

const subTitles = document.querySelectorAll('.sub-title');
const triggerOffset = window.innerHeight / 2; // Half of the window height

function animateOnScroll() {
  subTitles.forEach(title => {
    const titleTop = title.getBoundingClientRect().top;
    if (titleTop < triggerOffset) {
      title.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);

const animateElements = document.querySelectorAll('.animate-image, .animate-text');
const triggerOffsetAnimate = window.innerHeight / 2;

function animateOnScrollAnimate() {
  animateElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < triggerOffsetAnimate) {
      element.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', animateOnScrollAnimate);
