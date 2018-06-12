"use strict";

const slides = {
    s0: "src/images/slides/exteriorsale-new-com.jpg",
    s1: "src/images/slides/hinges-flat-black-com.jpg",
    s2: "src/images/slides/hollow-metal-door-ssale-com.jpg",
    s3:"src/images/slides/modern-poplar-sale4com.jpg",
    s4: "src/images/slides/panel-mouldcom.jpg"
}

let controls = 1;

const slideshow = (() => {
    
    let number = 1;
    let slideNumber = "";
    
    setTimeout(function(){ 
        document.getElementById('header-slide').style.opacity = 0;
    }, 4500);
    
        setInterval(function(){ 
            
            document.getElementById('header-slide').style.opacity = 1;
            if(number <= 4){
                
                slideNumber = 's'+number;
                document.getElementById('header-slide').src = slides[slideNumber];
                document.getElementById('header-slide').style.opacity = 1;
               
                number++;
                setTimeout(function(){ 
                    document.getElementById('header-slide').style.opacity = 0;
                }, 4500);
            } else {
                number = 1;
                slideNumber = "s0";
                document.getElementById('header-slide').src = slides[slideNumber];
                setTimeout(function(){ 
                    document.getElementById('header-slide').style.opacity = 0;
                }, 4500);
            }
         }, 5000);
         
    
    
})();
/*
const opacityShow = () => {
    document.getElementById('slideshow-right-button').style.opacity = 0.5;
    document.getElementById('slideshow-left-button').style.opacity = 0.5;
}

const opacityHide = () => {
    document.getElementById('slideshow-right-button').style.opacity = 0;
    document.getElementById('slideshow-left-button').style.opacity = 0;
}
*/


