
var sta = 0;
function minNav() {
    if (sta == 0) {
        $('.nbs').addClass('min');
        $('.space').addClass('big');
        $('.IcoArrow').addClass('girar');
        $('.nb-item').find('span').addClass('elem_hide');

        $('.nb-sub').removeClass('elem_hide');

        sta = 1;
    }

    else {
        $('.nbs').removeClass('min');
        $('.space').removeClass('big');
        $('.IcoArrow').removeClass('girar');

        setTimeout(function () {
            $('.nb-item').find('span').removeClass('elem_hide');
        }, 300);

        $('.nb-sub').addClass('elem_hide');




        sta = 0;
    }
}

var espacio = $('#space');

function goTo(path) {
    //console.log('jaj');
    $('#space').empty();
    $('#space').load("assets/templates/"+ path +".html");
}

