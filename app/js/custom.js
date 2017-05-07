'use strict';
$(document).ready(function () {
	$('.slidersokalla').slick({
		accessibility: true,
		adaptiveHeight: true,
		arrows: false,
		variableWidth: true,
		centerMode: true,
		centerPadding: '80px',
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
  		slidesToScroll: 1,
		autoplaySpeed: 2000,
		responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
		
	});
});