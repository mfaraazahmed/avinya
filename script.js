function animateOnScroll(elements, animationClass) {
  elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const triggerOffset = windowHeight * 0.9; // 30% of the window height

      if (elementTop < triggerOffset) {
          element.classList.add(animationClass);
      }
  });
}

function animateCounters() {
  const counterElements = document.querySelectorAll('.counter');

  counterElements.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const increment = target / 200; // Adjust the increment speed as needed
      let current = 0;

      const updateCounter = () => {
          if (current < target) {
              current += increment;
              counter.textContent = Math.round(current);
              requestAnimationFrame(updateCounter);
          } else {
              counter.textContent = target;
          }
      };

      updateCounter();
  });
}

function handleScroll() {
  const achievementsSection = document.getElementById('achievements');
  const achievementsTop = achievementsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (achievementsTop < windowHeight) {
      animateCounters();
      window.removeEventListener('scroll', handleScroll); // Remove the scroll listener
  } else {
      animateOnScroll(subTitles, 'animation');
      animateOnScroll(animateImageElements, 'animation');
      animateOnScroll(animateImageElementsMore, 'animation');
  }
}

const subTitles = document.querySelectorAll('.sub-title');
const animateImageElements = document.querySelectorAll('.animate-image, .animate-text');
const animateImageElementsMore = document.querySelectorAll('.img1, .img2, .img3, .img4');

window.addEventListener('scroll', handleScroll);


// function animateOnScroll(elements, animationClass) {
//   elements.forEach(element => {
//     const elementTop = element.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;
//     const triggerOffset = windowHeight / 1.5 - element.clientHeight / 2;

//     if (elementTop < triggerOffset) {
//       element.classList.add(animationClass);
//     }
//   });
// }

// const subTitles = document.querySelectorAll('.sub-title');
// const animateImageElements = document.querySelectorAll('.animate-image, .animate-text');
// const animateImageElementsMore = document.querySelectorAll('.img1, .img2, .img3, .img4');

// window.addEventListener('scroll', () => {
//   animateOnScroll(subTitles, 'animation');
//   animateOnScroll(animateImageElements, 'animation');
//   animateOnScroll(animateImageElementsMore, 'animation');
// });

// const counterElements = document.querySelectorAll('.counter');

// counterElements.forEach(counter => {
//     const target = parseInt(counter.getAttribute('data-target'));
//     const increment = target / 200; // Adjust the increment speed as needed
//     let current = 0;

//     const updateCounter = () => {
//         if (current < target) {
//             current += increment;
//             counter.textContent = Math.round(current);
//             requestAnimationFrame(updateCounter);
//         } else {
//             counter.textContent = target;
//         }
//     };

//     updateCounter();
// });