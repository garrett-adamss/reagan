// Parallax Scroll ID's
let thumbnail = document.getElementById('thumbnail')

//Mobile var
let mobileWidth = window.innerWidth

//Parallax Scroll if statement
if(mobileWidth >= 768){ //Mobile check

  window.addEventListener('wheel', function(){
    let scroll = window.scrollY; //px
    // console.log('[horizontal]', horizontal)

    let viewValue = (100 * (window.scrollY)) / window.innerHeight; // base value

    console.log("[window.scrollY] :", window.scrollY ,`
    [window.innerHeight] :`, window.innerHeight, `
    [viewValue in vh] :`,  viewValue)
 
    //TEST
    // if(view)

  })
}