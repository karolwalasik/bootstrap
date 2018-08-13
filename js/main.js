$(document).ready(function () {

	//scroll

	$(window).scroll(function () {


		if ($(this).scrollTop() >= $('#main-nav').outerHeight()) {
			$('#main-nav').addClass('scrolled');
		} else {
			$('#main-nav').removeClass('scrolled');
		}
	});



});
