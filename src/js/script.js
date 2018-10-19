"use strict";
(function loadHeader(){
    let rootLocation = document.location.hostname;
    console.log(rootLocation);
    $("#header").load("/header.html");
    $("#footer").load("/footer.html");
})();

jQuery(document).ready(function() {
	$(".owl1").owlCarousel({
		loop:true,
	margin:10,
	autoplay:true,
    autoplayTimeout:5000,
	autoplayHoverPause:false,
	nav: false,
	dots: false,
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
				nav:false,
				loop:true
			}
		}
	});

	$('.owl2').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
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
});

($(function() {
	$('.lazy').Lazy();
}))();


