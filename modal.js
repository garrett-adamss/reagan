$( document ).ready(function() {

    $('.photoInGrid').click(function(){
        $('#popup').show().removeClass('animated zoomOut').addClass('animated zoomIn');
        $('#popupTitle').html()
    });

    $('.popUpClose').click(function(){
        $('.workBackgroundTemplate').removeClass('animated zoomIn');
        $('.workBackgroundTemplate').addClass('animated zoomOut');
        $('.workBackgroundTemplate').hide(300);
    });

});



let hiddenTitle = document.getElementById("title");
let hiddenText = document.getElementById("text");
let popup = document.getElementById("popup");

let photos = document.querySelectorAll('.photoInGrid');

photos.forEach(photo => {
  photo.addEventListener('click', handleClick(e));
});


function handleClick(e){
    alert("test");
    $('#popup').show().removeClass('animated zoomOut').addClass('animated zoomIn');
    console.log("test");
}