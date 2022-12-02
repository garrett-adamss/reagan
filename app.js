// Parallax Scroll ID's
let thumbnail = document.getElementById('thumbnail')
let title = document.getElementById('title')

let aboutMe = document.getElementById('about-me')
let projectOne = document.getElementById('project-one')
let projectTwo = document.getElementById('project-two')
let projectThree = document.getElementById('project-three')
let projectFour = document.getElementById('project-four')
let projectFive = document.getElementById('project-five')
let projectSix = document.getElementById('project-six')
let projectSeven = document.getElementById('project-seven')
let contact = document.getElementById('contact')


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
    title.style.opacity = 1 - (widthValue * 0.013)
  } else {
  // @ts-ignore
  title.style.left = ((widthValue * .1)+ 75) + 'vw';
  }

  //!SECTION PROJECTS

    //Slide One
  if(widthValue >= 100){
      // @ts-ignore
    aboutMe.style.left = (-(widthValue * .3) + 70) + 'vw';
    // @ts-ignore
    projectOne.style.left = (-(widthValue * .15) + 75 ) + 'vw';
    // @ts-ignore
    projectTwo.style.left = (-(widthValue * .35) + 158) + 'vw';
    // @ts-ignore
    projectThree.style.left = (-(widthValue * .15) + 150) + 'vw';
    // @ts-ignore
    projectFour.style.left = (-(widthValue * .3) + 230) + 'vw';
    // @ts-ignore
    projectFive.style.left = (-(widthValue * .15) + 215) + 'vw';
  
  }

}