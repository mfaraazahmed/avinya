function animateOnScroll(elements, animationClass) {
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const triggerOffset = windowHeight / 0.9 - element.clientHeight / 2;

    if (elementTop < triggerOffset) {
      element.classList.add(animationClass);
    }
  });
}

const subTitles = document.querySelectorAll('.sub-title');
const animateImageElements = document.querySelectorAll('.animate-image, .animate-text');
const animateImageElementsMore = document.querySelectorAll('.img1, .img2, .img3, .img4');

window.addEventListener('scroll', () => {
  animateOnScroll(subTitles, 'animate');
  animateOnScroll(animateImageElements, 'animate');
  animateOnScroll(animateImageElementsMore, 'animate');
});
