"use strict";

const burger = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-menu]') ;
const menuLine = document.querySelector('.burger__line');

burger.addEventListener('click' , () => {
	menuLine.classList.toggle('burger__line--active');
	burger.classList.toggle('burger--active');
	menu.classList.toggle('menu--visible');
})
