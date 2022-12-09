$( document ).ready(function() {

    $('#one').click(function(){
        $('#oneInfo').show().removeClass('animated zoomOut').addClass('animated zoomIn');
    });

    $('.popUpClose').click(function(){
        $('.workBackgroundTemplate').removeClass('animated zoomIn');
        $('.workBackgroundTemplate').addClass('animated zoomOut');
        $('.workBackgroundTemplate').hide(300);
    });

});

$(window).load(function () {
    $(function () {
        if (!sessionStorage.getItem("runOnce")) {

            // Your code goes here....

            sessionStorage.setItem("runOnce", true);
        }
    });
});