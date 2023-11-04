let sliderIndex = 1;

function showSlider(n){
    let slides = document.getElementsByClassName('slider__item');
    console.log(slides)
     if(n > slides.length){
        sliderIndex = 1
     }
     if (n < 1){
        sliderIndex = slides.length
     }
     for(let slide of slides){
     slide.style.display = 'none';
     }
     slides[sliderIndex -1].style.display = 'block';
}

function nextSlide(){
    showSlider(sliderIndex += 1)
}

function previousSlide(){
    showSlider(sliderIndex -= 1)
}

showSlider(sliderIndex);