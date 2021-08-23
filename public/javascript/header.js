$(document).ready(function() {
    $('.dropdown-menu').width($(window).width()*0.5);
    $('body').css({'margin-top':$('.navbar-fixed-top').height()});
});
$(window).resize(function() {
    $('.dropdown-menu').width($(window).width()*0.5);
})