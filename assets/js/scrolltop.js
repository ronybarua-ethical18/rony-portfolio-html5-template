
/* <!--Scroll to top animation--> */
$(document).on('click','#ScrollToTop',function(){
	$('html,body').animate({scrollTop:0},500);
	return false;
	
});
/* <!--Button Control--> */
$(document).scroll(function(e){
	var scrollPos=$(this).scrollTop();
	if(scrollPos<100){
		$('#ScrollToTop').addClass('disappear');
	}
	else{
		$('#ScrollToTop').removeClass('disappear');
	}
});