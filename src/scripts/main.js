'use strict';

$(document).ready(function(){
  $(".MainSliderCarousel").slick({
    rtl:false,
    autoplay:true,
    autoplaySpeed: 4500,
    speed: 500,
    dots: true,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:true,
    appendArrows:$(".SliderArrows"),
    prevArrow:'<span class="Slider-Slick-Prev"></span>',
    nextArrow:'<span class="Slider-Slick-Next"></span>',
    easing:"linear",
  })
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    menu.classList.toggle('menu-open');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      select.classList.remove('select-clicked');
      menu.classList.remove('menu-open');
    });
  });
});