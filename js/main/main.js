$(document).ready(function () {
	// 
	$('.top-header__burger').on('click', function() {
		$('.top-header__navbar').toggleClass('navbar-width');
		$('.top-header__right').toggleClass('lock-button-right');
		$('.top-header__navbar').toggleClass('navbar-transition').delay(2000);
		$('.top-header__nav-item').toggleClass('nav-item-opacity').delay(3000);
		$('.top-header__burger').toggleClass('burger-right');
		$('.top-header__burger-button').toggleClass('burger-button-right');
		$('.top-header__burger-button::before').toggleClass('burger-button-right');
		$('.main-section__my-item').toggleClass('main-section__my-item-active-3');
		$('.main-section__my-items').toggleClass('main-section__my-item-active-4');
	});
	// Верхняя фиксированная навигационная панель

	// 
	$('.main-section__nav-1').hover( function() {
		$('.main-section__nav-item-arrow-1').toggleClass('main-section__nav-item-arrow-active-1');
	});
	$('.main-section__nav-2').hover( function() {
		$('.main-section__nav-item-arrow-2').toggleClass('main-section__nav-item-arrow-active-1');
	});
	$('.main-section__nav-3').hover( function() {
		$('.main-section__nav-item-arrow-3').toggleClass('main-section__nav-item-arrow-active-1');
	});
	$('.main-section__nav-4').hover( function() {
		$('.main-section__nav-item-arrow-4').toggleClass('main-section__nav-item-arrow-active-1');
	});
	$('.main-section__nav-5').hover( function() {
		$('.main-section__nav-item-arrow-5').toggleClass('main-section__nav-item-arrow-active-1');
	});
	$('.main-section__nav-6').hover( function() {
		$('.main-section__nav-item-arrow-6').toggleClass('main-section__nav-item-arrow-active-1');
	});

	$('.main-section__nav-1').hover( function() {
		$('.main-section__nav-item-arrow-1').toggleClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-2').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-3').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-4').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-5').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-6').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-list-1').toggleClass('main-section__nav-item-list-active-1');
		$('.main-section__nav-item-list-2').removeClass('main-section__nav-item-list-active-2');
		$('.main-section__nav-item-list-3').removeClass('main-section__nav-item-list-active-3');
		$('.main-section__nav-item-list-4').removeClass('main-section__nav-item-list-active-4');
		$('.main-section__nav-item-list-5').removeClass('main-section__nav-item-list-active-5');
		$('.main-section__nav-item-list-6').removeClass('main-section__nav-item-list-active-6');
	});
	$('.main-section__nav-2').hover( function() {
		$('.main-section__nav-item-arrow-2').toggleClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-1').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-3').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-4').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-5').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-6').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-list-2').toggleClass('main-section__nav-item-list-active-2');
		$('.main-section__nav-item-list-1').removeClass('main-section__nav-item-list-active-1');
		$('.main-section__nav-item-list-3').removeClass('main-section__nav-item-list-active-3');
		$('.main-section__nav-item-list-4').removeClass('main-section__nav-item-list-active-4');
		$('.main-section__nav-item-list-5').removeClass('main-section__nav-item-list-active-5');
		$('.main-section__nav-item-list-6').removeClass('main-section__nav-item-list-active-6');
	});
	$('.main-section__nav-3').hover( function() {
		$('.main-section__nav-item-arrow-3').toggleClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-1').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-2').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-4').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-5').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-6').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-list-3').toggleClass('main-section__nav-item-list-active-3');
		$('.main-section__nav-item-list-1').removeClass('main-section__nav-item-list-active-1');
		$('.main-section__nav-item-list-2').removeClass('main-section__nav-item-list-active-2');
		$('.main-section__nav-item-list-4').removeClass('main-section__nav-item-list-active-4');
		$('.main-section__nav-item-list-5').removeClass('main-section__nav-item-list-active-5');
		$('.main-section__nav-item-list-6').removeClass('main-section__nav-item-list-active-6');
	});
	$('.main-section__nav-4').hover( function() {
		$('.main-section__nav-item-arrow-4').toggleClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-1').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-2').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-3').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-5').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-6').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-list-4').toggleClass('main-section__nav-item-list-active-4');
		$('.main-section__nav-item-list-1').removeClass('main-section__nav-item-list-active-1');
		$('.main-section__nav-item-list-2').removeClass('main-section__nav-item-list-active-2');
		$('.main-section__nav-item-list-3').removeClass('main-section__nav-item-list-active-3');
		$('.main-section__nav-item-list-5').removeClass('main-section__nav-item-list-active-5');
		$('.main-section__nav-item-list-6').removeClass('main-section__nav-item-list-active-6');
	});
	$('.main-section__nav-5').hover( function() {
		$('.main-section__nav-item-arrow-5').toggleClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-1').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-2').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-3').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-4').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-6').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-list-5').toggleClass('main-section__nav-item-list-active-5');
		$('.main-section__nav-item-list-1').removeClass('main-section__nav-item-list-active-1');
		$('.main-section__nav-item-list-2').removeClass('main-section__nav-item-list-active-2');
		$('.main-section__nav-item-list-3').removeClass('main-section__nav-item-list-active-3');
		$('.main-section__nav-item-list-4').removeClass('main-section__nav-item-list-active-4');
		$('.main-section__nav-item-list-6').removeClass('main-section__nav-item-list-active-6');
	});
	$('.main-section__nav-6').hover( function() {
		$('.main-section__nav-item-arrow-6').toggleClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-1').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-2').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-3').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-4').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-arrow-5').removeClass('main-section__nav-item-arrow-active-2');
		$('.main-section__nav-item-list-6').toggleClass('main-section__nav-item-list-active-6');
		$('.main-section__nav-item-list-1').removeClass('main-section__nav-item-list-active-1');
		$('.main-section__nav-item-list-2').removeClass('main-section__nav-item-list-active-2');
		$('.main-section__nav-item-list-3').removeClass('main-section__nav-item-list-active-3');
		$('.main-section__nav-item-list-4').removeClass('main-section__nav-item-list-active-4');
		$('.main-section__nav-item-list-5').removeClass('main-section__nav-item-list-active-5');
	});

	$('.main-section__like').hover( function() {
		$('.main-section__like').toggleClass('main-section__my-item-active');
		$('.main-section__bag').toggleClass('main-section__my-item-active-2');
	});
	$('.main-section__bag').hover( function() {
		$('.main-section__bag').toggleClass('main-section__my-item-active');
		$('.main-section__like').toggleClass('main-section__my-item-active-2');
	});
	// Верхняя навигационная панель главного экрана

	// 
	var swiper1 = new Swiper('.swiper-container-1', {
		loop: true,
		spaceBetween: 10,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.main-section__pagination-right',
			prevEl: '.main-section__pagination-left',
		},
	});

	var swiper2 = new Swiper('.swiper-container-2', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.main-section__pagination-right',
			prevEl: '.main-section__pagination-left',
		},
	});
	//Слайдер на главном экране
	//
	$('.approved-form__card-button--1').hover( function() {
		$('.approved-form__card-button-arrow--1').toggleClass('approved-form__card-button-arrow-active')
	});
	$('.approved-form__card-button--2').hover( function() {
		$('.approved-form__card-button-arrow--2').toggleClass('approved-form__card-button-arrow-active')
	});
	$('.approved-form__card-button--3').hover( function() {
		$('.approved-form__card-button-arrow--3').toggleClass('approved-form__card-button-arrow-active')
	});
	//Утверждённая форма
	//
	$('.categories__category--1').hover( function() {
		$('.categories__category-img--1').toggleClass('categories__category-img-active');
		$('.categories__category-text--1').toggleClass('categories__category-text-active');
	});
	$('.categories__category--2').hover( function() {
		$('.categories__category-img--2').toggleClass('categories__category-img-active');
		$('.categories__category-text--2').toggleClass('categories__category-text-active');
	});
	$('.categories__category--3').hover( function() {
		$('.categories__category-img--3').toggleClass('categories__category-img-active');
		$('.categories__category-text--3').toggleClass('categories__category-text-active');
	});
	$('.categories__category--4').hover( function() {
		$('.categories__category-img--4').toggleClass('categories__category-img-active');
		$('.categories__category-text--4').toggleClass('categories__category-text-active');
	});
	$('.categories__other').hover( function() {
		$('.categories__other-arrow').toggleClass('categories__other-arrow-active');
	});
	// Категории товаров
	//
	$('.popular__other').hover( function() {
		$('.popular__other-arrow').toggleClass('popular__other-arrow-active');
	});
	//Популярные товары
	//
	$('.discount__card-like--1').on('click', function(){
		$('.discount__card-like--1-icon--1').toggleClass('discount__card-like--1-icon--1-active');
		$('.discount__card-like--1-icon--2').toggleClass('discount__card-like--1-icon--2-active');
	});
	$('.discount__card-like--2').on('click', function(){
		$('.discount__card-like--2-icon--1').toggleClass('discount__card-like--2-icon--1-active');
		$('.discount__card-like--2-icon--2').toggleClass('discount__card-like--2-icon--2-active');
	});
	$('.discount__card-like--3').on('click', function(){
		$('.discount__card-like--3-icon--1').toggleClass('discount__card-like--3-icon--1-active');
		$('.discount__card-like--3-icon--2').toggleClass('discount__card-like--3-icon--2-active');
	});
	$('.discount__card-like--4').on('click', function(){
		$('.discount__card-like--4-icon--1').toggleClass('discount__card-like--4-icon--1-active');
		$('.discount__card-like--4-icon--2').toggleClass('discount__card-like--4-icon--2-active');
	});
	$('.discount__card-add--1').on('click', function() {
		$('.discount__card-add--1-icon').toggleClass('discount__card-add--1-icon-active');
	});
	$('.discount__card-add--2').on('click', function() {
		$('.discount__card-add--2-icon').toggleClass('discount__card-add--2-icon-active');
	});
	$('.discount__card-add--3').on('click', function() {
		$('.discount__card-add--3-icon').toggleClass('discount__card-add--3-icon-active');
	});
	$('.discount__card-add--4').on('click', function() {
		$('.discount__card-add--4-icon').toggleClass('discount__card-add--4-icon-active');
	});
	//Товар со скидкой
	//
	var slides;
	if ($(window).width() > 1100) {
		slides = 4;
	}
	if ($(window).width() < 1100) {
		slides = 3;
	}
	if ($(window).width() < 992) {
		slides = 2;
	}
	if ($(window).width() < 570) {
		slides = 1;
	}

	function slider_3() {
		var swiper3 = new Swiper('.swiper-container-3', {
			slidesPerView: slides,
			spaceBetween: 5,
			loop: true,
			navigation: {
				nextEl: '.services__pagination-right',
				prevEl: '.services__pagination-left',
			},
		});
	};
	slider_3();
	$(window).resize( function() {
		if ($(window).width() > 1100) {
			slides = 4;
			slider_3();
		}
		if ($(window).width() < 1100) {
			slides = 3;
			slider_3();
		}
		if ($(window).width() < 992) {
			slides = 2;
			slider_3();
		}
		if ($(window).width() < 570) {
			slides = 1;
			slider_3();
		}
	});
	//Сервисы платформы
	//
	$('.footer__column--2-link').hover( function() {
		$('.footer__column--2-link-arrow').toggleClass('footer__column--2-link-arrow-active');
	});
	//Футер
	//
	var modal = $('.modal'),
			modalDialog = $('.modal__dialog'),
			modalBtn = $('[data-toggle=modal]'),
			closeBtn = $('.modal__close'),
			closeModal = $('.modal__close-block');

	modalBtn.on('click', function() {
		modal.addClass('modal--visible');
		modalDialog.addClass('modal--visible');
	});

	closeBtn.on('click', function() {
		modal.removeClass('modal--visible');
		modalDialog.removeClass('modal--visible');
	});

	closeModal.on('click', function() {
		modal.removeClass('modal--visible');
		modalDialog.removeClass('modal--visible');
	});

	$(document).keydown(function(e) {
		if (e.which == 27) {
			modal.removeClass('modal--visible');
			modalDialog.removeClass('modal--visible');
		}
	});

	$('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "Ваш номер телефона:"});

	$('.modal__form').validate({
		errorElement: "div",
		errorClass:"invalid",
		rules: {
			// simple rule, converted to {required:true}
			userName: {
				required: true,
				minlength: 2,
				maxlength: 15,
			},
			userPhone: { 
				required: true,
				minlength: 17
			},
			// compound rule
			userEmail: {
				required: true,
				email: true
			},
			policyCheckbox: {
				required: true
			}
		},
		messages: {
			userName: {
				required: "Имя обязательно",
				minlength: "Имя не короче 2-х букв",
				maxlength: "Имя не длиннее 15-ти букв"
			},
			userPhone:  {
				required: "Телефон обязателен",
				minlength: "Введите корректный номер телефона"
			},
			userEmail: {
				required: "Заполните поле",
				email: "Введите корректный email"
			},
			policyCheckbox: "Политика конфиденциальности"
		},
		submitHandler: function(form) {
			$.ajax({
				type: "POST",
				url: "modal-send.php",
				data: $(form).serialize(),
				success: function (response) {
					$(form)[0].reset();
					$('.modal__dialog-box').addClass('modal__dialog-box-active');
					$('.modal__dialog-success').addClass('modal__dialog-success-active')
				}
			});
		}
	});
	//
	$('.button').click(function() {
		window.location.href = "card.html";
	});
});