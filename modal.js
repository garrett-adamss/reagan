// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
// document.getElementsByTagName('head')[0].appendChild(script);



$( document ).ready(function() {

    //group 1
    $('.groupOne').click(function(){
        $('#popupOne').show().removeClass('animated zoomOut').addClass('animated zoomIn');
        overflow: 'hidden';
        // $('#popupTitle').html()
    });

    $('.popUpClose').click(function(){
        $('.workBackgroundTemplate').removeClass('animated zoomIn');
        $('.workBackgroundTemplate').addClass('animated zoomOut');
        $('.workBackgroundTemplate').hide(300);
        overflow: 'auto';
    });

    //group 2
    $('.groupTwo').click(function(){
        $('#popupTwo').show().removeClass('animated zoomOut').addClass('animated zoomIn');
        // $('#popupTitle').html()
    });

    $('.popUpClose').click(function(){
        $('.workBackgroundTemplate').removeClass('animated zoomIn');
        $('.workBackgroundTemplate').addClass('animated zoomOut');
        $('.workBackgroundTemplate').hide(300);
    });

    //group 1
    $('.groupThree').click(function(){
        $('#popupThree').show().removeClass('animated zoomOut').addClass('animated zoomIn');
        // $('#popupTitle').html()
    });

    $('.popUpClose').click(function(){
        $('.workBackgroundTemplate').removeClass('animated zoomIn');
        $('.workBackgroundTemplate').addClass('animated zoomOut');
        $('.workBackgroundTemplate').hide(300);
    });

    //group 1
    $('.groupFour').click(function(){
        $('#popupFour').show().removeClass('animated zoomOut').addClass('animated zoomIn');
        // $('#popupTitle').html()
    });

    $('.popUpClose').click(function(){
        $('.workBackgroundTemplate').removeClass('animated zoomIn');
        $('.workBackgroundTemplate').addClass('animated zoomOut');
        $('.workBackgroundTemplate').hide(300);
    });

    //group 1
    $('.groupFive').click(function(){
        $('#popupFive').show().removeClass('animated zoomOut').addClass('animated zoomIn');
        // $('#popupTitle').html()
    });

    $('.popUpClose').click(function(){
        $('.workBackgroundTemplate').removeClass('animated zoomIn');
        $('.workBackgroundTemplate').addClass('animated zoomOut');
        $('.workBackgroundTemplate').hide(300);
    });

    //group 1
    $('.groupSix').click(function(){
        $('#popupSix').show().removeClass('animated zoomOut').addClass('animated zoomIn');
        // $('#popupTitle').html()
    });

    $('.popUpClose').click(function(){
        $('.workBackgroundTemplate').removeClass('animated zoomIn');
        $('.workBackgroundTemplate').addClass('animated zoomOut');
        $('.workBackgroundTemplate').hide(300);
    });

    //group 1
    $('.groupSeven').click(function(){
        $('#popupSeven').show().removeClass('animated zoomOut').addClass('animated zoomIn');
        // $('#popupTitle').html()
    });

    $('.popUpClose').click(function(){
        $('.workBackgroundTemplate').removeClass('animated zoomIn');
        $('.workBackgroundTemplate').addClass('animated zoomOut');
        $('.workBackgroundTemplate').hide(300);
    });

});
