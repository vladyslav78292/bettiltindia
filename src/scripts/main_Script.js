'use strict';

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

const cookies = document.getElementsByClassName('cookie-none'); 

if (!sessionStorage.getItem('scriptExecuted')) {
  for (let i = 0; i < cookies.length; i++) {
    cookies[i].classList.add('cookie-visible');
  }

  sessionStorage.setItem('scriptExecuted', 'true');
}

$(".cookie-popup button").click(function() {
  $(".cookie-popup").fadeOut();
});

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          menu.classList.toggle('active');
  })
})


const buttons = document.querySelectorAll('.tabs__header-item button');

const tabs = document.querySelectorAll('.tab');

// Добавляем обработчики событий для каждой кнопки
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Убираем класс 'active' у всех <li> и всех вкладок
    document.querySelectorAll('.tabs__header-item').forEach((item) => item.classList.remove('active'));
    tabs.forEach((tab) => tab.classList.remove('active'));

    // Добавляем класс 'active' к текущему <li> и соответствующей вкладке
    button.parentElement.classList.add('active'); // Активируем текущий li
    tabs[index].classList.add('active'); // Активируем вкладку по индексу кнопки
  });
});