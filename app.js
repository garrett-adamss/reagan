// Parallax Scroll ID's
let aboutMe = document.getElementById('about-me')
let title = document.getElementById('title')
let scrollRight = document.getElementById('scrollRight')

let projectZero = document.getElementById('project-zero')
let projectOne = document.getElementById('project-one')
let projectTwo = document.getElementById('project-two')
let projectThree = document.getElementById('project-three')
let projectFour = document.getElementById('project-four')
let projectFive = document.getElementById('project-five')
let projectSix = document.getElementById('project-six')
let projectSeven = document.getElementById('project-seven')


//Mobile Var
let mobileWidth = window.innerWidth

let outerWrapper = document.querySelector(".outer-wrapper");

//scroll to bottom of page automatically
const scrollingElement = (document.scrollingElement || document.body);
scrollingElement.scrollTop = scrollingElement.scrollHeight;


//Parallax Scroll Function
// @ts-ignore
outerWrapper.onscroll = function() {
  // @ts-ignore
  let widthValue = (100 *(outerWrapper?.scrollTop) / window.innerWidth)
  console.log("[widthValue vw] : ", widthValue);

  // @ts-ignore
  aboutMe.style.left = (-(widthValue * .3) + 70 )+ 'vw';

  // @ts-ignore
  scrollRight.style.left = (-(widthValue * 1.3) ) + 'vw';

 // @ts-ignore
  if(widthValue <= 83.6){
    // @ts-ignore
    title.style.left = (widthValue) + 'vw'
    // @ts-ignore                                   BOSS THAT LOOKS FIRE GOING GREAT.
    title.style.opacity = 1 - (widthValue * 0.014)
  } else {
  // @ts-ignore
  title.style.left = ((widthValue * .1)+ 75) + 'vw';
  }

  //!SECTION PROJECTS

    //Slide One
  
      // @ts-ignore
    projectZero.style.left = (-(widthValue * .1)- 76 ) + 'vw';
    // @ts-ignore
    projectOne.style.left = (-(widthValue * .3) - 51 ) + 'vw';
    // @ts-ignore
    projectTwo.style.left = (-(widthValue * .15) - 40) + 'vw';
    // @ts-ignore
    projectThree.style.left = (-(widthValue * .3)+ 55) + 'vw';
    // @ts-ignore
    projectFour.style.left = (-(widthValue * .15) + 57) + 'vw';

    //Slide Two
  if (widthValue >= 175){
    // @ts-ignore
    projectFive.style.left = (-(widthValue * .3)- 20) + 'vw';
    // @ts-ignore
    projectSix.style.left = (-(widthValue * .15)+ 10) + 'vw';
    // @ts-ignore
    projectSeven.style.left =  (-(widthValue * .3) + 90) + 'vw';
  }

}