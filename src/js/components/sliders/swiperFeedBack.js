const swiperFeedBack = (() => {
	const accountantInit = new Swiper('.swiper-FeedBack', {
		slidesPerView: 1,
		spaceBetween: 20,
		speed: 800,
		autoplay: {
			delay: 4000,
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
				slidesPerView: 1,
			},
		},
	});

	const init = () => {};

	return {
		init,
	};
})();

export default swiperFeedBack;
