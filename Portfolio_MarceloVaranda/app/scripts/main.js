function bindEvents(){
	$('#bot_menu').bind({
		click : function(){
			var menu 	= $('#menu');
			$(menu).slideToggle( "slow" );
		}
	});

	var animationEnds   = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	var animationClass2 = 'fadeOut animated';
	$('h1','.fadeLater').one(animationEnds, function(){
		$(this).parent().addClass(animationClass2);
	});
/* // CARROSSEL
	$(window).resize(function(){
		
		var $carrousel = $('.carrossel');

		if($(window).width() < 768){
		  if($carrousel.hasClass('slick-initialized')) {
		    $carrousel.slick('unslick');
		  }
		  $carrousel.slick({
			  infinite: false,
			  speed: 500,
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  arrows:true,
			  responsive: [
			        {
			          breakpoint: 768,
			          settings: {
			          slidesToShow: 3,
			          slidesToScroll: 3,
			          vertical:true,
			          arrows:true,
			          }
			        }
			        ]
			});
		} else {
		  $carrousel.slick('unslick');
		}
	});
*/
}

function detectScroll(){
	$(window).load(function() {
		window.scrollTo(0,0);
	});

	$(window).scroll(function () {

    	if ($(window).scrollTop() + $('#header').height() > $('#pg1').height()) {
        	showFullTop();
    	} else {
        	hideFullTop();
    	}
	});
}

var animationClassTop    = 'fadeIn animated';
function showFullTop(){
	$('#header').addClass('topFixed');
	$('#header').addClass(animationClassTop);
	$('#logo_top').css('display','inline-block');

}

function hideFullTop(){
	$('#header').removeClass(animationClassTop);
	$('#logo_top').css('display','none');
	$('#header').removeClass('topFixed');
}