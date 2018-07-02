"use strict";

$('.carousel-2').hide();
const carouselHover = (obj) => {
 
    

    let divID = (obj.id).split("-");
        let i = divID[1]-1;
    document.getElementsByClassName("carousel-title-box")[i].style.display = "block";
    
     };

const carouselHoverOut = (obj) => {
    //alert(obj.title);
    let divID = (obj.id).split("-");
    console.log(divID);
    let i = divID[1]-1;
    console.log(i);
    document.getElementsByClassName("carousel-title-box")[i].style.display = "none";
     };
     
const switchCarousel = (() => {
    let switchNumberFirst = 1;
    let switchNumberSecond = 2;
    setInterval(function(){ 
        

        $('.carousel-'+switchNumberFirst).fadeOut(1000).promise().done(function(){
            $('.carousel-'+switchNumberSecond).fadeIn(1000);
            if(switchNumberFirst == 1){
                switchNumberFirst = 2;
                switchNumberSecond = 1;
            } else {
                switchNumberFirst = 1;
                switchNumberSecond = 2;
            }
        });

       
       
      
   }, 10000);
})();


    

