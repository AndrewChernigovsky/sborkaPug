import scrollSmooth from './components/scroll-smooth';
import swiperMain from './components/sliders/swiperMain';
(($) => {
	$(() => {
		scrollSmooth.init();
		swiperMain.init();
	});
})(jQuery);