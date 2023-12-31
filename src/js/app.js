/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
import Tabs from './modules/Tabs';
import Accordion from './modules/Accordion.js';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

new Tabs('tabs-example', {
	onChange: (data) => {
		console.log(data);
	},
});

new Accordion('.accordion', {
	shouldOpenAll: false, // true
	defaultOpen: [], // [0,1]
	collapsedClass: 'open',
});


const swiper = new Swiper(".swiper", {
	slidesPerView: 3,
	spaceBetween: 25,
	modules: [Navigation,],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
		disabledClass: 'disabled_swiper_button'
	},
});


function myFunction() {
  if (window.matchMedia("(min-width: 1260px)").matches) { 
    swiper.params.slidesPerView = 3;
		swiper.update();
  } else if(window.matchMedia("(min-width: 850px)").matches) {
    swiper.params.slidesPerView = 2;
		swiper.update();
  } else {
		swiper.params.slidesPerView = 1;
		swiper.update();
	}
	console.log(swiper.params.slidesPerView)
}

myFunction();
window.addEventListener("resize", function() {
  myFunction();
});