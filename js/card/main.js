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
	$('.catalog__left-button--1').hover( function() {
		$('.catalog__left-button--1-icon').toggleClass('catalog__left-button--1-icon-active');
	});
	$('.catalog__left-button--2').hover( function() {
		$('.catalog__left-button--2-icon').toggleClass('catalog__left-button--2-icon-active');
	});
	$('.catalog__header-box').click( function() {
		$('.catalog__left').toggleClass('catalog__left-active');
	});
	$('.catalog__left-close').click( function() {
		$('.catalog__left').toggleClass('catalog__left-active');
	});
	//
	var slides2;
	if ($(window).width() > 1100) {
		slides2 = 5;
	}
	if ($(window).width() < 1100) {
		slides2 = 3;
	}
	function slider_5() {
		var galleryThumbs = new Swiper('.gallery-thumbs', {
			spaceBetween: 10,
			slidesPerView: slides2,
			
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});

		var galleryTop = new Swiper('.gallery-top', {
			spaceBetween: 10,
			thumbs: {
				swiper: galleryThumbs,
			},
		});
	}
	slider_5();
	
	$(window).resize( function() {
		if ($(window).width() > 1100) {
			slides2 = 3;
			slider_5();
		}
	});

	$('.top-side__right-colors-btn--1').click( function() {
		$('.top-side__right-colors-btn').removeClass('top-side__right-colors-btn-active')
		$(this).addClass('top-side__right-colors-btn-active')
	});
	$('.top-side__right-colors-btn--2').click( function() {
		$('.top-side__right-colors-btn').removeClass('top-side__right-colors-btn-active')
		$(this).addClass('top-side__right-colors-btn-active')
	});
	$('.top-side__right-colors-btn--3').click( function() {
		$('.top-side__right-colors-btn').removeClass('top-side__right-colors-btn-active')
		$(this).addClass('top-side__right-colors-btn-active')
	});
	$('.top-side__right-colors-btn--4').click( function() {
		$('.top-side__right-colors-btn').removeClass('top-side__right-colors-btn-active')
		$(this).addClass('top-side__right-colors-btn-active')
	});
	//
	$('.top-side__right-delivery-way-other--1').click( function() {
		$(this).addClass('top-side__right-delivery-way-other--1-active')
		$('.top-side__right-delivery-way-other--2').removeClass('top-side__right-delivery-way-other--2-active')
		$('.top-side__right-delivery-pickup').addClass('top-side__right-delivery-pickup-active')
		$('.top-side__right-delivery-delivery').removeClass('top-side__right-delivery-delivery-active')
		$('.top-side__right-delivery-point-pickup').addClass('top-side__right-delivery-point-pickup-active')
		$('.top-side__right-delivery-point-delivery').removeClass('top-side__right-delivery-point-delivery-active')
	});
	$('.top-side__right-delivery-way-other--2').click( function() {
		$(this).addClass('top-side__right-delivery-way-other--2-active')
		$('.top-side__right-delivery-way-other--1').removeClass('top-side__right-delivery-way-other--1-active')
		$('.top-side__right-delivery-pickup').removeClass('top-side__right-delivery-pickup-active')
		$('.top-side__right-delivery-delivery').addClass('top-side__right-delivery-delivery-active')
		$('.top-side__right-delivery-point-pickup').removeClass('top-side__right-delivery-point-pickup-active')
		$('.top-side__right-delivery-point-delivery').addClass('top-side__right-delivery-point-delivery-active')
	});
	//
	$('.down-side__left-header--1').click( function() {
		$(this).addClass('down-side__left-header--1-active')
		$('.down-side__left-header--2').removeClass('down-side__left-header--2-active')
		$('.down-side__left-header--3').removeClass('down-side__left-header--3-active')
		$('.down-side__left-content--1').removeClass('down-side__left-content--1-disabled')
		$('.down-side__left-content--2').addClass('down-side__left-content--2-disabled')
		$('.down-side__left-content--3').addClass('down-side__left-content--3-disabled')
	});
	$('.down-side__left-header--2').click( function() {
		$(this).addClass('down-side__left-header--2-active')
		$('.down-side__left-header--1').removeClass('down-side__left-header--1-active')
		$('.down-side__left-header--3').removeClass('down-side__left-header--3-active')
		$('.down-side__left-content--2').removeClass('down-side__left-content--2-disabled')
		$('.down-side__left-content--1').addClass('down-side__left-content--1-disabled')
		$('.down-side__left-content--3').addClass('down-side__left-content--3-disabled')
	});
	$('.down-side__left-header--3').click( function() {
		$(this).addClass('down-side__left-header--3-active')
		$('.down-side__left-header--1').removeClass('down-side__left-header--1-active')
		$('.down-side__left-header--2').removeClass('down-side__left-header--2-active')
		$('.down-side__left-content--3').removeClass('down-side__left-content--3-disabled')
		$('.down-side__left-content--1').addClass('down-side__left-content--1-disabled')
		$('.down-side__left-content--2').addClass('down-side__left-content--2-disabled')
	});

	function slider_4() {
		var swiper5 = new Swiper('.swiper-container-5', {
			slidesPerView: slides1,
			spaceBetween: 5,
			loop: true,
			navigation: {
				nextEl: '.like__pagination-right',
				prevEl: '.like__pagination-left',
			},
		});
	};

	var slides1;
	if ($(window).width() > 1264) {
		slides1 = 4;
	}
	if ($(window).width() < 1264) {
		slides1 = 3;
	}
	if ($(window).width() < 992) {
		slides1 = 2;
	}
	if ($(window).width() < 570) {
		slides1 = 1;
	}

	slider_4();
	$(window).resize( function() {
		if ($(window).width() > 1264) {
			slides1 = 4;
			slider_4();
		}
		if ($(window).width() < 1264) {
			slides1 = 3;
			slider_4();
		}
		if ($(window).width() < 992) {
			slides1 = 2;
			slider_4();
		}
		if ($(window).width() < 570) {
			slides1 = 1;
			slider_4();
		}
	});

	//
	$('.like__card-like--1').on('click', function(){
		$('.like__card-like--1-icon--1').toggleClass('like__card-like--1-icon--1-active');
		$('.like__card-like--1-icon--2').toggleClass('like__card-like--1-icon--2-active');
	});
	$('.like__card-like--2').on('click', function(){
		$('.like__card-like--2-icon--1').toggleClass('like__card-like--2-icon--1-active');
		$('.like__card-like--2-icon--2').toggleClass('like__card-like--2-icon--2-active');
	});
	$('.like__card-like--3').on('click', function(){
		$('.like__card-like--3-icon--1').toggleClass('like__card-like--3-icon--1-active');
		$('.like__card-like--3-icon--2').toggleClass('like__card-like--3-icon--2-active');
	});
	$('.like__card-like--4').on('click', function(){
		$('.like__card-like--4-icon--1').toggleClass('like__card-like--4-icon--1-active');
		$('.like__card-like--4-icon--2').toggleClass('like__card-like--4-icon--2-active');
	});
	$('.like__card-add--1').on('click', function() {
		$('.like__card-add--1-icon').toggleClass('like__card-add--1-icon-active');
	});
	$('.like__card-add--2').on('click', function() {
		$('.like__card-add--2-icon').toggleClass('like__card-add--2-icon-active');
	});
	$('.like__card-add--3').on('click', function() {
		$('.like__card-add--3-icon').toggleClass('like__card-add--3-icon-active');
	});
	$('.like__card-add--4').on('click', function() {
		$('.like__card-add--4-icon').toggleClass('like__card-add--4-icon-active');
	});
	//Товар со скидкой
	
	function slider_3() {
		var swiper4 = new Swiper('.swiper-container-4', {
			slidesPerView: slides,
			spaceBetween: 5,
			loop: true,
			navigation: {
				nextEl: '.services__pagination-right',
				prevEl: '.services__pagination-left',
			},
		});
	};

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
	$('.button').click(function() {
		window.location.href = "card.html";
	});
});