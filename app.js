// Parallax Scroll ID's
let thumbnail = document.getElementById('thumbnail')
let title = document.getElementById('title')

//Mobile Var
let mobileWidth = window.innerWidth

let outerWrapper = document.querySelector(".outer-wrapper");

//Parallax Scroll Function
// @ts-ignore
outerWrapper.onscroll = function() {
  // @ts-ignore
  let widthValue = (100 *(outerWrapper?.scrollTop) / window.innerWidth)
  console.log("[widthValue vw] : ", widthValue);

  // @ts-ignore
  thumbnail.style.left = ((widthValue * .1) + 80 )+ 'vw';

 // @ts-ignore
  if(widthValue <= 83.6){
    // @ts-ignore
    title.style.left = (widthValue) + 'vw'
    // @ts-ignore                                   BOSS THAT LOOKS FIRE GOING GREAT.
    title.style.opacity = 1 - (widthValue * 0.012)
  } else {
  // @ts-ignore
  title.style.left = ((widthValue * .1)+ 75) + 'vw';
  }


  




}