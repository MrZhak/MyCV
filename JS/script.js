$(document).ready(function(){
	$('.menu__burger').click(function(event){
		$('.menu__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
});

$(document).ready(function() {
	$('.menu__link').click(function(event) {
		 $('.menu__burger, .header__menu').removeClass('active');
		 $('body').removeClass('lock')
	});
});



// _________________________________________________________
/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("slider__item");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}


// /_______________________________________________________________________

// let lastScroll = 0;
//const defaultOffset = 5000;
//const header = document.querySelector('.header');

//const  scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
//const containHide = () => header.classList.contains('hide');

//window.addEventListener('scroll', () => {
//	if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset){
//		header.classList.add('hide');
//		console.log('down');
//	}

//	else if (scrollPosition() < lastScroll && containHide()){
//		header.classList.remove('hide');
//		console.log('up');
//	}
//
//	lastScroll = scrollPosition();
// })