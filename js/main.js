(function ($) {

$('.test .slider-active').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
//    fade: true,
    autoplaySpeed: 10000,
		dots: false,
		arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
});
    
    
    
$('.test-2 .active').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 10000,
  dots: false,
  arrows: true,
});

    
    
 
})(jQuery);