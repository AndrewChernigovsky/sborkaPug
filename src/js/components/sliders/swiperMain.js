const swiperMain = (() => {
	const accountantInit = new Swiper('.swiper-main', {
		slidesPerView: 'auto',
		spaceBetween: 10,
		speed: 800,
		centeredSlides: true,
		grabCursor: true,
		loop: true,
		preloadImages: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		centerInsufficientSlides: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			768: {
				spaceBetween: 50,
			},
			1024: {
				spaceBetween: 80,
			},
			1200: {
				spaceBetween: 100,
			},
		},
	});
	const init = () => {};

	return {
		init,
	};
})();

export default swiperMain;
