 

function resetNav(){
	$('#s').removeClass('here');
	$('#a').removeClass('here');
	$('#f').removeClass('here');
	$('#p').removeClass('here');
	$('#c').removeClass('here');
}

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

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    var Top_INICIO = $('#inicio').position().top;
    var Top_SOMOS = $('#Somos').position().top;

    var Top_ADN = ($('#ADN').position().top) - 20;
    var Top_FRAC = ($('#FracIMG').position().top)- 20;
    var Top_PORQ = ($('#PorQ').position().top)- 20;
    var Top_ECOT = ($('#EcoT').position().top)- 20;
    var Top_PTSV = ($('#PtsV').position().top)- 20;

    var Bot_PTSV = $('#PtsV').position().top + $('#PtsV').height();
    var Top_CONT = $('#Cont').position().top;


    if (scroll <= Top_SOMOS) {
    	resetNav();
    	$('#s').addClass('here');
    }
    else if (scroll <= Top_ADN) {
    	// console.log('SOMOS');
    	resetNav();
    	$('#s').addClass('here');
    }
    else if (scroll <= Top_FRAC) {
    	// console.log('ADN');
    	resetNav();
    	$('#a').addClass('here');
    }
    else if (scroll <= Top_PORQ) {
    	// console.log('FRACCIONAMIENTOS');
    	resetNav();
    	$('#f').addClass('here');
    }
    else if (scroll <= Top_ECOT) {
    	// console.log('POR QUE');
    	resetNav();
    	$('#p').addClass('here');
    }
    else if (scroll <= Top_PTSV) {
    	// console.log('CONT');
    	resetNav();
    	$('#c').addClass('here');
    }

});
