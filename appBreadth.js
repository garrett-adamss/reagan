let hiddenTitle = document.getElementById("title");
let hiddenText = document.getElementById("text");
let popup = document.getElementById("popup");

let photos = document.querySelectorAll('.photoInGrid');

photos.forEach(photo => {
  photo.addEventListener('click', function handleClick(event) {
    console.log('box clicked', event);

    alert(photo.getAttribute('src'));
    visibility = "visible";
  });
});