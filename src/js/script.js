// $(document).ready(function(){
// 	$('.carousel__inner').slick({
// 		speed: 1200,
// 		adaptiveHeight: true,
// 		prevArrow: '<button type="button" class="slick-prev"><img src="./icons/arrow_left.svg" alt="arrow_left" /></button>',
// 		nextArrow: '<button type="button" class="slick-next"><img src="./icons/arrow_right.svg" alt="arrow_right" /></button>',
// 		responsive: [
// 			{
// 				breakpoint: 992,
// 				settings: {
// 					dots: true,
// 					arrows: false,
// 					infinite: true
// 				}
// 			}
// 		]
// 	});
// });

var slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false
});