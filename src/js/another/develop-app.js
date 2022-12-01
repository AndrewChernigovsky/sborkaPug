import Accordion from '../components/accordion';
import scrollSmooth from '../components/scroll-smooth';
// import shapeResize from './components/animations/shapeResize';
// import initSelects from './components/select';
// import bntOFFER from './components/btnOffer';

(($) => {
	// When DOM is ready
	$(() => {
		const accordions = new Accordion();
		scrollSmooth.init();
	});
})(jQuery);
const SHAPE = document.getElementById('mainFormShape');
// 1) Отслеживаем высоту документа, его скролл
// window.addEventListener('scroll', function() {

//   console.log('расстояние пролистывания ' + Math.floor(scrollY, 1) + 'px');
//   const height = document.body.offsetHeight
//   const screenHeight = window.innerHeight
//   let elHeigth =  SHAPE.offsetHeight;
//   let scrollYY = scrollY + screenHeight;
//   let centerScreen = screenHeight / 2;
//   let centerScreen1 = screenHeight / 2;
//   let scrollbottom = document.body.scrollTop + c.bottom;

//   console.log('top:' + Math.floor(scrollYY, 1) + ' bottom: ' + Math.floor(scrollbottom, 1));
//   console.log('center:' + Math.floor(centerScreen1, 1));

//   if(scrollYY < centerScreen && scrollYY >= c.top) {
//     let x = scrollYY * 100% + '%';
//     console.log(x)
//   }
//   let x = scrollYY;
//   let y = ;
//   let z = ;
//   let o = ;
//   if (scrollYY >= c.top) {
//     SHAPE.style.borderRadius = `${x} ${y} ${z} ${o} / 100% 100% 0% 0%`;
//   }
// });

// let scrolltop = document.body.scrollTop + c.top;

//  1231234567
