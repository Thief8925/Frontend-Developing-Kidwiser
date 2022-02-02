window.addEventListener('load', function(){
	setTimeout(function () {
		/* Animate.css initialize */
		$('.hasAnimation').each(function () {
			var animateName = $(this).data('animate');
			$(this).addClass("hidden").viewportChecker({
				classToRemove: 'hidden',
				classToAdd: 'visible animate__animated ' + animateName,
				offset: 0
			});
		});	
	}, 200);
});

$(document).ready(function () {
	toggleFilterMobile($(window).width());
	productListSlider($('.product__list-slider .slider'));
	trandsListSlider($('.trands-slider .slider'));
	popupInitialize();
	menuDesktopToggle();
	menuMobileToggle();

	$('.search__btn').click(function(){
		$('.search').slideToggle();
	});
	
});
$(window).resize(function () {
	toggleFilterMobile($(window).width());
});

function toggleFilterMobile(widthScreen){
	$('.search__section .title').off('click');
	if(widthScreen < 992){
		$('.search__section .title').click(function(e){
			$(this).toggleClass('active');
			let $element = $('.search__section .form');
			if ($element.is(':visible')) {
					$element.slideUp();
			}
			else {
					$element.slideDown({
							start: function() {
								$(this).css('display','flex');
							}
					});
			}
		});
	}
}
function productListSlider(slider){
	if (slider.hasClass('slick-initialized')) {
		slider.slick('unslick');
	}
	slider.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
}
function trandsListSlider(slider){
	if (slider.hasClass('slick-initialized')) {
		slider.slick('unslick');
	}
	slider.slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
		]
	});
}
function menuDesktopToggle(){
	$('.menu .lvl_1 a').hover(function(e){
		e.preventDefault();
		let id = $(this).data('menu');
		$('.menu .submenu').hide();
		$('#'+id).show();
	});
	$('.menu .lvl_2 a').hover(function(){
		let id = $(this).data('menu');
		$('.menu .lvl_3').hide();
		$('#'+id).show();
	});
	$( ".menu .submenu" ).mouseleave(function() {
		$(this).hide();
	});
}
function menuMobileToggle(){
	$('.hamburger').click(function(){
		if ($(this).hasClass('active')) {
			hidePopup('menu_lvl_1');
			$(this).removeClass('active');
		} else{
			showPopup('menu_lvl_1');
			$(this).addClass('active');
		}
	});
	$('.menu__popup .lvl_2 .has_child').click(function(e){
		e.preventDefault();
		$(this).parent().parent().hide();
		let id = $(this).data('menu');
		$('.menu__popup #'+id).show();
		$('.menu__popup .back__menu').addClass('active');
	});

	$('.menu__popup .back__menu').click(function(){
		$('.menu__popup .lvl_2').show();
		$('.menu__popup .lvl_3').hide();
		$(this).removeClass('active');
	});
}