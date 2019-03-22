
$(document).ready(function (){

	var FUNC = new METODOS();

    var btnHelpActive = 0;
    $('#btnHelp').on('click',function(){
        if (btnHelpActive == 0) {
            $(this).parent().addClass('active');
            btnHelpActive = 1;
        }
        else{
            $(this).parent().removeClass('active');
            btnHelpActive = 0;            
        }
    });

    //----------------------RESPONSIVA---------------------//
	    var _window = $(window);

	    function checkWidth() {
	        var windowsize = _window.width();
	        var windowsize2 = _window.height();
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

$(document).keyup(function(e) {
  // if (e.keyCode === 13) $('.save').click();     // enter
	if (e.keyCode === 27) { // esc
		setTimeout(function(){ $('.dialog').addClass('elem_hide'); },800);
		$('.dialog').removeClass('slideInDown').addClass('slideOutUp');
	}

});

