$(document).ready(function () {
    
});
function PicClick(este) {
    var urlPhoto = este.find('img').attr('src');
    console.log(urlPhoto);
    $('.fullpic').removeClass('elem_hide');
    $('.spc img').attr('src', urlPhoto);
}
function PicClose() {
    $('.fullpic').addClass('elem_hide');
    $('.spc img').removeAttr('src');
}
$(document).keyup(function (e) {
    //                                        if (e.keyCode === 13) $('.save').click();     // enter
    if (e.keyCode === 27) PicClose();   // esc
});