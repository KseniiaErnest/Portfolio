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
