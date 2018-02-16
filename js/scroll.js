 

function resetNav(){
    $('#s').removeClass('here');
    $('#a').removeClass('here');
    $('#f').removeClass('here');
    $('#p').removeClass('here');
    $('#c').removeClass('here');
}

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

// $(window).scroll(function (event) {
//     var scroll = $(window).scrollTop();

//     var Top_INICIO = $('#inicio').position().top;
//     var Top_SOMOS = $('#Somos').position().top;

//     var Top_ADN = ($('#ADN').position().top) - 20;
//     var Top_FRAC = ($('#FracIMG').position().top)- 20;
//     var Top_PORQ = ($('#PorQ').position().top)- 20;
//     var Top_ECOT = ($('#EcoT').position().top)- 20;
//     var Top_PTSV = ($('#PtsV').position().top)- 20;

//     var Bot_PTSV = $('#PtsV').position().top + $('#PtsV').height();
//     var Top_CONT = $('#Cont').position().top;


//     if (scroll <= Top_SOMOS) {
//         resetNav();
//         $('#s').addClass('here');
//     }
//     else if (scroll <= Top_ADN) {
//         // console.log('SOMOS');
//         resetNav();
//         $('#s').addClass('here');
//     }
//     else if (scroll <= Top_FRAC) {
//         // console.log('ADN');
//         resetNav();
//         $('#a').addClass('here');
//     }
//     else if (scroll <= Top_PORQ) {
//         // console.log('FRACCIONAMIENTOS');
//         resetNav();
//         $('#f').addClass('here');
//     }
//     else if (scroll <= Top_ECOT) {
//         // console.log('POR QUE');
//         resetNav();
//         $('#p').addClass('here');
//     }
//     else if (scroll <= Top_PTSV) {
//         // console.log('CONT');
//         resetNav();
//         $('#c').addClass('here');
//     }

// });


