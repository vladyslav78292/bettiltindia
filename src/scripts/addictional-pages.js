'use strict';

const colorMax = 192;

const scrollBreakpoint = window.innerHeight * 0.9;

document.addEventListener('DOMContentLoaded', () => {
  randomizeBackgrounds();
  setupScrollListener();
  setupScrollEvent();  
});

function setupScrollListener() {  
   window.addEventListener('scroll', (e) => {
     const scrollButton = document.querySelector('.scroll-top');
     
     const scrollOffset = window.scrollY;
    
     if (scrollOffset >= scrollBreakpoint) {
       scrollButton.classList.add('visible');
     } else if (scrollOffset <= 0) {
       scrollButton.classList.remove('visible');
     }    
  });
}

function randomizeBackgrounds() {
  const contentContainers = document.querySelectorAll('.content-container');
  
  [].forEach.call(contentContainers, container => {
    container.style.background = `rgb(${randVal(colorMax)},${randVal(colorMax)},${randVal(colorMax)})`;
  });
}
