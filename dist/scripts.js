"use strict";

var burger = document.querySelector('[data-burger]');
var menu = document.querySelector('[data-menu]');
var menuLine = document.querySelector('.burger__line');
var menuLinks = document.querySelectorAll('.menu__items');
var body = document.body;
burger.addEventListener('click', function () {
  body.classList.toggle('stop-scroll');
  menuLine.classList.toggle('burger__line--active');
  burger.classList.toggle('burger--active');
  menu.classList.toggle('menu--visible');
});
menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    body.classList.remove('stop-scroll');
    menuLine.classList.remove('burger__line--active');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--visible');
  });
});