"use strict";

const burger = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-menu]');
const menuLine = document.querySelector('.burger__line');
const menuLinks = document.querySelectorAll('.menu__items');
const body = document.body;

burger.addEventListener('click', () => {
	body.classList.toggle('stop-scroll');
	menuLine.classList.toggle('burger__line--active');
	burger.classList.toggle('burger--active');
	menu.classList.toggle('menu--visible');
})

menuLinks.forEach(el => {
	el.addEventListener('click', () => {
		body.classList.remove('stop-scroll');
		menuLine.classList.remove('burger__line--active');
		burger.classList.remove('burger--active');
		menu.classList.remove('menu--visible');
	});
})
