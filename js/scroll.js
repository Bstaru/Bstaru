 $(document).ready(function (){

 	$('a.op-links[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {          
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

 });


 $(window).scroll(function (event) {

    var scroll = $(window).scrollTop();

    // var InicioT = $('#inicio').position().top ;     
    // var InicioB = $('#inicio').position().top + $('#inicio').height();

    // var SomosT = $('#Somos').position().top ;     
    // var SomosB = $('#Somos').position().top + $('#Somos').outerHeight(true);

    // var ADNT = $('#ADN').position().top;     
    // var ADNB = $('#ADN').position().top + $('#ADN').height();

  
    // console.log(scroll+' '+SomosT+' '+SomosB);
    // if (SomosT>=scroll || SomosB<=scroll) {
    // 	console.log('estoy en somos');
    // }
    // else{
    // 	console.log('no es somos');
    // }
   

 });

