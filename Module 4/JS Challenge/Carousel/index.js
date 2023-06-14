const slides=document.getElementsByClassName("carousel-item")
let slidePosition=0
const totalSlides=slides.length;

let carouselBtnPrev=document.getElementById("carousel-button-prev");
let carouselBtnNext=document.getElementById("carousel-button-next");


let slideNum=document.querySelector("#slide-number");
let pictureDetailsEl=document.querySelector(".picture-details");



slideNum.textContent=1

const address=[{location:'Kathmandu',photographer:'Deepak'},
            {location:'Pokhara',photographer:'Ram'},
            {location:'Butwal',photographer:'Hari'},
            {location:'Chitwan',photographer:'Shyam'},
            {location:'Birgunj',photographer:'Nabin'}
]


function pictureDetails(){
    pictureDetailsEl.textContent=address[slidePosition].location+", Clicked by "+address[slidePosition].photographer;
    }
//    pictureDetails();





function hideAllSlides(){
    for(let slide of slides){
         slide.classList.remove("carousel-item-visible")
        //  slide.classList.add("carousel-item-hidden")
    }
}

carouselBtnPrev.addEventListener("click", moveToPrevSlide)
carouselBtnNext.addEventListener("click", moveToNextSlide);


function moveToPrevSlide(){
    hideAllSlides();
    
    if(slidePosition===0){
        slidePosition=totalSlides-1;
      
    }else{
            slidePosition--;
        }
        pictureDetails();
        slides[slidePosition].classList.add("carousel-item-visible")
        slideNum.textContent=slidePosition+1
   }

function moveToNextSlide(){

    hideAllSlides();
    if(slidePosition===totalSlides-1){
        slidePosition=0;
    }else{
        slidePosition++;
    }
    pictureDetails();
    slides[slidePosition].classList.add("carousel-item-visible")
    slideNum.textContent=slidePosition+1
    
}


//automatic next button cliked
  (function loop() {
    setTimeout(function () {
        document.querySelector("#carousel-button-next").click();
      loop()
    }, 2000); //9000 = 9000ms = 9s
  }());

