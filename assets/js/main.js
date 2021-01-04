(function ($) {
	"use strict";
	
    jQuery(document).ready(function($){
		/* full screen image */
		$(window).on('resizeEnd', function(){
			$('.home-slider, .single-slide').height($(window).height());
		});
		
		/* Typing effect */
		/* 	var typed = new Typed('#typed', {
			stringsElement: '.heading',
			typeSpeed:70,
			backSpeed:30,
			loop:true, 
			cursorChar: '!'
			
		}); */
		/* skillbar section */
		var _bars=[].slice.call(document.querySelectorAll('.skillbar-overlay'));
		_bars.map(function(skillbar,index){
			setTimeout(function(){
				skillbar.style.width=skillbar.dataset.percent;
			},index*1000);
		});
		
		/* web preloader */
		$(window).on('load',function(){
			$('.page-loader').fadeOut();
		});
		
		$(window).on('resize',function(){
			if(this.resizeTo) clearTimeout(this.resizeTo);
			this.resizeTo=setTimeout(function(){
				$(this).trigger('resizeEnd');
			},300);
		}).trigger('resize');
		
		//Main Slider
		var owl = $('.slider-active');
		owl.owlCarousel({
			items:1,
			autoplay:true,
			autoplayHoverPause:false,
			autoplayTimeout:6000,
			dots:true,
			nav:true,
			animateOut:'fadeOut',
			loop:true,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			margin:0
		});	
		
		var owl = $('.single-testimonial');
		owl.owlCarousel({
			items:1,
			autoplay:true,
			autoplayHoverPause:false,
			autoplayTimeout:4000,
			dots:true,
			nav:false,
			animateIn:'fadeInRight',
			loop:true,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			margin:0
		});
		
		$('.venobox').venobox({
			framewidth: '500px',        // default: ''
			frameheight: '400px',       // default: ''
			border: '5px',  // default: '0'
			bgcolor: '#fff',         // default: '#fff'
			titleattr: 'data-title', 
			spinner:'rotating-plane',// default: 'title'
			numeratio: true,            // default: false
			infinigall: true            // default: false
		})
		/* portfolio activation */
		$('#container').imagesLoaded( function() {
			// images have loaded
			$('.filter-button-group').on( 'click', 'button', function() {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({ filter: filterValue });
			});
			var $grid = $('.grid').isotope({
				
				// set itemSelector so .grid-sizer is not used in layout
				itemSelector: '.grid-item',
				percentPosition: true,
				masonry: {
					// use element for option
					columnWidth: '.grid-item'
				}
			})
		});
		
		
		
		// Navigation Scroll
		$(window).scroll(function(event) {
			Scroll();
		});
		
		$('.menu-list ul li a').click(function() {  
			$('html, body').animate({scrollTop: $(this.hash).offset().top - 79}, 1000);
			return false;
		});
		
	});
	
	
    jQuery(window).load(function(){
		
        
	});
	
	
}(jQuery));	