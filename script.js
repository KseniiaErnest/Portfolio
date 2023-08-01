'use strict'
// Sticky navigation
const sectionHero = document.querySelector('.section-hero');

const observer = new IntersectionObserver(
function (entries) {
const ent = entries[0];
console.log(ent);

if(ent.isIntersecting === false) {
  document.body.classList.add('sticky');
};

if(ent.isIntersecting) {
  document.body.classList.remove('sticky');
};


}, 
{
  root: null,
  threshold: 0,
  rootMargin: '-64px'
});
observer.observe(sectionHero);

// Infinite running text with GSAP
const textContainer = document.querySelector('.contact-me-container');
const textLine = document.querySelector('.contact-me-link');

// Calculate the total width of the text line
const textLineWidth = textLine.offsetWidth;

// Set the initial position of the link at the beginning of the container
gsap.set(textLine, { x: 0 });

// Create the animation timeline
const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

// Add the animation to the timeline
timeline.fromTo(
  textLine,
  { x: textContainer.offsetWidth },
  { x: -textLineWidth, duration: 7, ease: 'linear' }
);
