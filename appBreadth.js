let hiddenTitle = document.getElementById("title");
let hiddenText = document.getElementById("text");
let popup = document.getElementById("popup");

let photos = document.querySelectorAll('.photoInGrid');

photos.forEach(photo => {
  photo.addEventListener('click', function handleClick(event) {

    // alert(photo.getAttribute('src'));
    // alert(popup.style);
    console.log(popup.style);
    // popup.style.visibility = 'visible';
    
  });
});