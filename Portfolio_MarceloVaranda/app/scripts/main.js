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