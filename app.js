// Parallax Scroll ID's
let aboutMe = document.getElementById('about-me')
let title = document.getElementById('title')

let projectZero = document.getElementById('project-zero')
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
  aboutMe.style.left = (-(widthValue * .3) + 70 )+ 'vw';

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
    projectFive.style.left = (-(widthValue * .3)- 5) + 'vw';
    // @ts-ignore
    projectSix.style.left = (-(widthValue * .15)+ 5) + 'vw';
    // @ts-ignore
    projectSeven.style.left =  (-(widthValue * .3) + 85) + 'vw';
    // @ts-ignore
    contact.style.left =  (-(widthValue * .15)+ 60) + 'vw';
  }

}