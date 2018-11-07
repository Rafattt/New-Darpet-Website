"use strict";

(function loadHeader(){
	let rootLocation = document.location.hostname;
	$("#header").load("/header.html");
	$("#footer").load("/footer.html");
})();

jQuery(document).ready(function() {

	

	

	$(".owl1").owlCarousel({
		loop:true,
	margin:0,
	autoplay:true,
    autoplayTimeout:7000,
	autoplayHoverPause:false,
	nav: false,
	dots: true,
	autoWidth: false,
    responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:1,
				nav:false
			},
			1000:{
				items:1,
				nav:true,
				loop:true
			}
		}
	});

	$('.owl2').owlCarousel({
		loop:true,
		stagePadding: 0,
		margin:5,
		nav:false,
		dots: false,
		autoplay:true,
    	autoplayTimeout:5000,
		autoplayHoverPause:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
		
	})

	$('.owl3').owlCarousel({
		loop:true,
		stagePadding: 0,
		margin:0,
		nav:false,
		dots: false,
		autoplay:true,
    	autoplayTimeout:5000,
		autoplayHoverPause:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
	

	new WOW().init();
	jQuery('.tabs .tab-links a').on('click', function(e) {
		var currentAttrValue = jQuery(this).attr('href');

		// Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

		e.preventDefault();
	});

//invisible hinges switch
$(function() {
	$('#hinges-but').click(function(){
		if($("#regular-invisible-hinges-title").text() == 'Regular Hinges'){
			$("#inv-hinges").attr('src',"/src/images/invisible-hinges.jpg");
			$("#regular-invisible-hinges-title").text('Invisible Hinges');
			$('#hinges-but').text('Switch to Regular Hinges');
		} else {
			$("#inv-hinges").attr('src',"/src/images/regular-hinges.jpg");
			$("#regular-invisible-hinges-title").text('Regular Hinges');
			$('#hinges-but').text('Switch to Invisible Hinges');
		}
	  
	  return false;
	});
   });

});




