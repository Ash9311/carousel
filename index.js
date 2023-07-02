document.addEventListener("DOMContentLoaded",function(){
    let carouselContainer = document.querySelector(".carousel-container");
    let carousel = document.querySelector(".carousel");
    let prevButton = document.querySelector(".prev-btn");
    let nextButton = document.querySelector(".next-btn");
    let images = document.querySelectorAll(".carousel img");
    let currIndex = 0;

    //hide all expect the first image
    for(var i=1;i<images.length;i++){
        images[i].style.display = "none";
    }
    
    //function to display the current image
    function showImage(index){
        //hide all images
        for(var i=0;i<images.length;i++){
            images[i].style.display = "none";
        }
        //display the selected one
        images[index].style.display="block";
    }

    prevButton.addEventListener("click",()=>{
        currIndex--;
        if(currIndex<0){
            currIndex = images.length-1;
        }
        showImage(currIndex);
    })

    nextButton.addEventListener("click",()=>{
        currIndex++;
        if(currIndex>images.length-1){
            currIndex=0;
        }
        showImage(currIndex);
    })
})
