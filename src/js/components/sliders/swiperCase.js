const swiperCase = (() => {
	const accountantInit = new Swiper('.swiper-case', {
		slidesPerView: 1,
		spaceBetween: 20,
		speed: 800,
		autoplay: {
			delay: 10000,
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
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		breakpoints: {
			768: {
				spaceBetween: 40,
				slidesPerView: 2,
			},
		},
	});

	const init = () => {};

	return {
		init,
	};
})();

export default swiperCase;
