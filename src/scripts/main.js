'use strict';

$(document).ready(function(){
  $(".MainSliderCarousel").slick({
    rtl:false,
    autoplay:true,
    speed: 500,
    dots: true,
    autoplaySpeed: 4000,
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

const button = $('#button');
const header = $('#header');
const button_pp = $('#button_pp');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    button.addClass('show');
    button_pp.addClass('show');
    header.addClass('header__background');
  } else {
    button.removeClass('show');
    button_pp.removeClass('show');
    header.removeClass('header__background');
  }
});

button.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$("#cookie-popup button").click(function() {
  $("#cookie-popup").fadeOut();
});