
$(document).ready(function (){

// CAROUSEL
    $('.fadeCarou').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    });

	
	//----------------------RESPONSIVA-------------------//
	    var _window = $(window);

	    function checkWidth() {
	        var windowsize = _window.width();
	        if(windowsize > 1360 && windowsize < 1900){
	        	  
	        }
	        else{
	        }

	        if (windowsize < 992) {
					
	        }
	        else{
	        		
	        }

	        if(windowsize < 768){
	        }
	        else{
	        }
	    }   
	    checkWidth();    
	    $(window).resize(checkWidth);

      //------------------------------------------------//
});
