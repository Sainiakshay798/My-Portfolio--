// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(2000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/a1.jpg", 
	 		 "images/a2.png",
			 "images/a3.jpg",
			 "images/a4.gif",
			 "images/a5.gif"
	 			], 	{duration: 3200, fade: 1300});
		});
})