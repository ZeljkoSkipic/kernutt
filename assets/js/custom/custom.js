jQuery(document).ready(function ($) {

	// Accordion
	$(".kn_accordion_title").click(function () {
	  $(this).siblings(".kn_accordion_content").slideToggle();
	  $(this).parent('.kn_accordion').toggleClass('open')
  });

  });
