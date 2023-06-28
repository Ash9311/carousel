document.addEventListener("DOMContentLoaded",function(){
    let carouselContainer = document.querySelector("carousel-container");
    let carousel = document.querySelector("carousel");
    let prevButton = document.querySelector("prev-btn");
    let nextButton = document.querySelector("next-btn");
    let images = document.querySelectorAll(".carousel img");
    let currIndex = 0;

    //hide all expect the first image
    for(let i=1;i<images.size();i++){
        images[i].style.display = "none";
    }
    
    //function to display the current image
    function showImage(index){
        //hide all images
        for(let i=0;i<images.size();i++){
            images[i].style.display = "none";
        }
        //display the selected one
        images[i].style.display="block";
    }

})