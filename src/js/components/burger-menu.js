const BURGEROPEN = document.querySelector('.js-burger-open');
const BURGERCLOSE = document.querySelector('#btnClose');
const BURGER = document.querySelector('.burger');
const NAV = document.querySelector('.js-burger');
const NAVWRAPPER = document.querySelector('.header__wrapper');

const BODY = document.querySelector('body');
const CLASS_OVERFLOW = 'overflow';
const CLASS_ACTIVE = 'active';
const overlay = document.querySelector('.overlay');

const menuBurger = (() => {
	const menuBurgers = function menuBurger() {
		BURGER.addEventListener('click', (e) => {
			e.preventDefault();
			if(BURGER.classList.contains(CLASS_ACTIVE)) {
				NAV.classList.remove(CLASS_ACTIVE);
				BODY.classList.remove(CLASS_OVERFLOW);
				BURGER.classList.remove(CLASS_ACTIVE);
				overlay.classList.remove(CLASS_ACTIVE);
			} else {
				NAV.classList.add(CLASS_ACTIVE);
				BODY.classList.add(CLASS_OVERFLOW);
				BURGER.classList.add(CLASS_ACTIVE);
				overlay.classList.add(CLASS_ACTIVE);
			}
		});
	};

	const init = () => {
		menuBurgers();
	};

	return {
		init,
	};
})();

export default menuBurger;
