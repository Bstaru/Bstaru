

function htmlbodyHeightUpdate(){
	var height3 = $( window ).height()
	var height1 = $('.nav').height()+50
	height2 = $('.main').height()
	if(height2 > height3){
		$('html').height(Math.max(height1,height3,height2)+10);
		$('body').height(Math.max(height1,height3,height2)+10);
	}
	else
	{
		$('html').height(Math.max(height1,height3,height2));
		$('body').height(Math.max(height1,height3,height2));
	}	
}

$(document).ready(function (){

	//----------------------CAROUSEL, INTERVALO---------------// 

		var t;

		var start = $('#carou_pts').find('.active').attr('data-interval');
		t = setTimeout("$('#carou_pts').carousel({interval: 1000});", start-1000);

		$('#carou_pts').on('slid.bs.carousel', function () {  
		     clearTimeout(t);  
		     var duration = $(this).find('.active').attr('data-interval');
		    
		     $('#carou_pts').carousel('pause');
		     t = setTimeout("$('#carou_pts').carousel();", duration-1000);
		})

		$('.carousel-control.right').on('click', function(){
		    clearTimeout(t);   
		});

		$('.carousel-control.left').on('click', function(){
		    clearTimeout(t);   
		});

	//-----------------------------NAVBAR---------------------//
		htmlbodyHeightUpdate()
		$( window ).resize(function() {
			htmlbodyHeightUpdate()
		});
		$( window ).scroll(function() {
			height2 = $('.main').height()
  			htmlbodyHeightUpdate()

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
