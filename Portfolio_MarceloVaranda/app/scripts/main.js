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
}

function detectScroll(){
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