//--------Кнопка "Показать всё/Скрыть"--------------------------------------------------------------------------//

let button = document.querySelector('.trademarks__button-read-more');
let page = document.querySelector('.trademarks__main');
let text = document.querySelector('.trademarks__button-read-more>span');

button.onclick = function () {
	
  	page.classList.toggle('trademarks__main_open'); 
  	button.classList.toggle('trademarks__button-read-more_rotated'); 
  	if (text.innerHTML == 'Показать все') {
  		text.innerHTML = 'Скрыть';
  			page.classList.remove('trademarks__main_hidden');
  	} else {
  		text.innerHTML = 'Показать все';
  		page.classList.add('trademarks__main_hidden');
  	}
}




