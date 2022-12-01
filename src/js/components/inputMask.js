import Inputmask from 'inputmask';

const phoneInput = document.querySelector('.js-form input[data-mask="tel"]');

export default function inputmask() {
	Inputmask({
		mask: '+7 (999) 999-99-99',
	}).mask('input[data-mask="tel"]');

	Inputmask({
		alias: 'email',
	}).mask('input[data-mask="email"]');

	Inputmask('datetime', {
		mask: "2.1.y h:s:s t\m",
		alias: "mm/dd/yyyy",
		placeholder: "mm/dd/yyyy hh:mm:ss xm",
		separator: '.',
		hourFormat: "12"
	}).mask('input[data-mask="date"]');
}
