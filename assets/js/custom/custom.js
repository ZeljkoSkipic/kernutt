jQuery(document).ready(function ($) {

	// Accordion
	$(".kn_accordion_title").click(function () {
	  $(this).siblings(".kn_accordion_content").slideToggle();
	  $(this).parent('.kn_accordion').toggleClass('open')
  });

  $(".lb_trigger").click(function () {
	$('.ks_lightbox').fadeToggle();
	$('body').addClass('no_overflow');
});

$(".lb_close").click(function () {
	$('.ks_lightbox').fadeToggle();
	$('body').removeClass('no_overflow');
});


/* External Link Popup */

const menuItemConfimrBox = $('.menu-item-confirm-box');
const popupNotice = $('.menu-item-popup-notice');
const stay = $('.menu-item-popup-notice__stay');
const close = $('.menu-item-popup-notice__close');
const continueUrl = $('.menu-item-popup-notice__continue');

const showConfirmBox = (e) => {
	e.preventDefault();
	const form = $(e.currentTarget).prev('form');
	if(form.length) {
		popupNotice.fadeIn('.4s');
		continueUrl.on('click', function(e) {
			e.preventDefault();
			form[0].submit();
		})
	}
	else {
		const itemUrl = $(e.currentTarget).attr('href');
		popupNotice.find(continueUrl).attr('href', itemUrl);
		popupNotice.fadeIn('.4s');
	}

}

const hideConfirmBox = (e) => {
	popupNotice.fadeOut('.4s');
	setTimeout(() => {
		popupNotice.find(continueUrl).attr('href', '#');
	}, 500)
}

menuItemConfimrBox.on('click', showConfirmBox);
stay.on('click', hideConfirmBox);
close.on('click', hideConfirmBox);
continueUrl.on('click', hideConfirmBox);


});
