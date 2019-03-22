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

 });

