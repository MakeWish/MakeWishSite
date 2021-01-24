$(document).ready(function() {
	"use strict";

	$('body').scrollspy({
		target: '#navbar-example2',
		offset: $('nav').outerHeight()
	});
    
    $("#news-slider2").owlCarousel({
        loop:true,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            1000:{
                items:3,
            }
        },
    });

	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.navbar-expand-lg').addClass('navbar-reduce');
			$('.navbar-expand-lg').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-lg').addClass('navbar-trans');
			$('.navbar-expand-lg').removeClass('navbar-reduce');
		}
    });
    
    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
        } else {
        $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
        return false;
    });    
    
});
