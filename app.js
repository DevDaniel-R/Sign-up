document.querySelector('.banner-btn').addEventListener('click', () =>{
  document.querySelector('.banner').style.display = 'none';
  document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible';
  document.querySelector('container').style.background = '#cc683c';
});

document.querySelector('.x-btn').addEventListener('click', () => {
  document.querySelector('.banner').style.display = 'flex';
  document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden';
  document.querySelector('.container').style.cssText = 'background: linear-graident(rgba(0, 0, 0, .8), rgba(0,0,0, .7)), url(public/images/bg1.jpg) center no-repeat; background-size: cover';
})

//start of slideshow

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000);
}




// let sliderImages = document.querySelectorAll('.slide'),
// current = 0;

// //Clear all images
// function reset (){
//   for (let i = 0; i < sliderImages.length; i++){
//     sliderImages[i].style.display = 'none';
//   }
// }

// //init slider
// function startSlide(){
//   reset();
//   sliderImages[0].style.display = 'block'
// }

// //SlideShow
// function startSlide (){
//   document.slide.src = images[i];
//   if(i < images.length - 1) {
//     i++;
//   }else {
//     i = 0;
//   }

//   setTimeout("startSlide()", time);
// }

// windows.onload = startSlide;



// startSlide();