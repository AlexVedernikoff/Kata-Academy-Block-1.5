let switcher = document.querySelector('.trademarks__wrapper:nth-child(2)');
let switcherTwo = document.querySelector('.trademarks__main');
let switcherThree = document.querySelectorAll('.trademarks__logo');
let isSviperInit = false;

function swiperInit() {
	const swiper = new Swiper('.swiper', {
	  direction: 'horizontal',
	  slidesPerView: 2,
	  spaceBetween: 10,
	  breakpoints: {
	    320: {
	      slidesPerView: 2,
	      spaceBetween: 20
	    },
	    480: {
	      slidesPerView: 3,
	      spaceBetween: 30
	    },
	    640: {
	      slidesPerView: 4,
	      spaceBetween: 40
	    }
	  },
	  pagination: {
	    el: '.swiper-pagination',
	    dynamicBullets: true,
	    dynamicMainBullets: 9,
	    clickable: true,
	  },
	});
return(swiper);
}

let mobile = window.matchMedia("(min-width: 0px) and (max-width: 767px)");

function changeClasses () {
 	 	
 	if (mobile.matches) {
 		// console.log('Ширина экрана меньше или равна 767px');
 		//	Если ширина экрана меньше или равна 767px, 
 		//	подключаем классы для свайпера и инициализиурем свайпер.
 		switcher.classList.add('swiper'); 
 		switcherTwo.classList.add('swiper-wrapper');
 		for (var i=0; i<switcherThree.length; i++) {
 			switcherThree[i].classList.add('swiper-slide');
 		}
 
 		if (isSviperInit == false) {
 			swiper = swiperInit();	
 			isSviperInit = true;
 		}
 		
 	} else {
 		// console.log('Ширина экрана больше или равна 768px');
 		//	Если ширина экрана больше или равна 768px, отключаем классы для свайпера. 
 		//	Если свайпер был включён ранее, уничтожаем его. 
 		switcher.classList.remove('swiper');
 		switcherTwo.classList.remove('swiper-wrapper');
 		for (var i=0; i<switcherThree.length; i++) {
 			switcherThree[i].classList.remove('swiper-slide');
 		}

 		if (isSviperInit == true) {
 			swiper.destroy();
 			isSviperInit = false;
 		}
 	}
}

changeClasses();

window.addEventListener('resize',function() {
	changeClasses();    
});