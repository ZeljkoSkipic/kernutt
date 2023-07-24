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

  });
