var slideIndex = 1;
var slideIndexThree=1;
showSlides(slideIndex);
showSlidesThree(slideIndexThree);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function plusSlidesThree(n) {
  showSlidesThree(slideIndexThree += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function currentSlideThree(n) {
  showSlidesThree(slideIndexThree = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function showSlidesThree(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesThree");
  if (n > slides.length) {slideIndexThree = 1}    
  if (n < 1) {slideIndexThree = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndexThree-1].style.display = "block";  
}


/****TWO*****/
showSlidesTwo(slideIndex);

function plusSlidesTwo(n) {
  showSlidesTwo(slideIndex += n);
}

function currentSlideTwo(n) {
  showSlidesTwo(slideIndex = n);
}

function showSlidesTwo(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesTwo");
   var dots = document.getElementsByClassName("dotTwo");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeTwo", "");
  }
  ProverkaSlides(slideIndex);
  slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " activeTwo";
}

function ProverkaSlides(n){
  if(n==1){
    document.getElementById('sliderTwo__titleOne').style.display="block";
    document.getElementById('sliderTwo__titleTwo').style.display="none";
    document.getElementById('sliderTwo__titleThree').style.display="none";
    document.getElementById('sliderTwo__titleFour').style.display="none";
    document.getElementById('sliderTwo__titleFive').style.display="none";
    document.getElementById('sliderTwo__titleSix').style.display="none";
  }if(n==2){
    document.getElementById('sliderTwo__titleOne').style.display="none";
    document.getElementById('sliderTwo__titleTwo').style.display="block";
    document.getElementById('sliderTwo__titleThree').style.display="none";
    document.getElementById('sliderTwo__titleFour').style.display="none";
    document.getElementById('sliderTwo__titleFive').style.display="none";
    document.getElementById('sliderTwo__titleSix').style.display="none";
  }if(n==3){
    document.getElementById('sliderTwo__titleOne').style.display="none";
    document.getElementById('sliderTwo__titleTwo').style.display="none";
    document.getElementById('sliderTwo__titleThree').style.display="block";
    document.getElementById('sliderTwo__titleFour').style.display="none";
    document.getElementById('sliderTwo__titleFive').style.display="none";
    document.getElementById('sliderTwo__titleSix').style.display="none";
  }if(n==4){
    document.getElementById('sliderTwo__titleOne').style.display="none";
    document.getElementById('sliderTwo__titleTwo').style.display="none";
    document.getElementById('sliderTwo__titleThree').style.display="none";
    document.getElementById('sliderTwo__titleFour').style.display="block";
    document.getElementById('sliderTwo__titleFive').style.display="none";
    document.getElementById('sliderTwo__titleSix').style.display="none";
  }if(n==5){
    document.getElementById('sliderTwo__titleOne').style.display="none";
    document.getElementById('sliderTwo__titleTwo').style.display="none";
    document.getElementById('sliderTwo__titleThree').style.display="none";
    document.getElementById('sliderTwo__titleFour').style.display="none";
    document.getElementById('sliderTwo__titleFive').style.display="block";
    document.getElementById('sliderTwo__titleSix').style.display="none";
  }if(n==6){
    document.getElementById('sliderTwo__titleOne').style.display="none";
    document.getElementById('sliderTwo__titleTwo').style.display="none";
    document.getElementById('sliderTwo__titleThree').style.display="none";
    document.getElementById('sliderTwo__titleFour').style.display="none";
    document.getElementById('sliderTwo__titleFive').style.display="none";
    document.getElementById('sliderTwo__titleSix').style.display="block";
  }

}
/*******************TRIPL*********************/
                /*****ONE*****/
var TriplslideIndexOne=1;
 TriplshowSlidesOne(TriplslideIndexOne);
function TriplplusSlidesOne(n) {
  TriplshowSlidesOne(TriplslideIndexOne += n);
}
function TriplcurrentSlideOne(n) {
  TriplshowSlidesOne(TriplslideIndexOne = n);
}
function TriplshowSlidesOne(n) {
  var i;
  var slides = document.getElementsByClassName("TriplmySlidesOne");
  if (n > slides.length) {TriplslideIndexOne = 1}    
  if (n < 1) {TriplslideIndexOne = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[TriplslideIndexOne-1].style.display = "block";  
}
                  /*****TWO*****/
var TriplslideIndexTwo=1;
 TriplshowSlidesTwo(TriplslideIndexTwo);
function TriplplusSlidesTwo(n) {
  TriplshowSlidesTwo(TriplslideIndexTwo += n);
}
function TriplcurrentSlideTwo(n) {
  TriplshowSlidesTwo(TriplslideIndexTwo = n);
}
function TriplshowSlidesTwo(n) {
  var i;
  var slides = document.getElementsByClassName("TriplmySlidesTwo");
  if (n > slides.length) {TriplslideIndexTwo = 1}    
  if (n < 1) {TriplslideIndexTwo = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[TriplslideIndexTwo-1].style.display = "block";  
}
                /*****THREE*****/
var TriplslideIndexThree=1;
 TriplshowSlidesThree(TriplslideIndexThree);
function TriplplusSlidesThree(n) {
  TriplshowSlidesThree(TriplslideIndexThree += n);
}
function TriplcurrentSlideThree(n) {
  TriplshowSlidesThree(TriplslideIndexThree = n);
}
function TriplshowSlidesThree(n) {
  var i;
  var slides = document.getElementsByClassName("TriplmySlidesThree");
/*  var dots = document.getElementsByClassName("dot");*/
  if (n > slides.length) {TriplslideIndexThree = 1}    
  if (n < 1) {TriplslideIndexThree = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
/*  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[TriplslideIndexThree-1].style.display = "block";  
/*  dots[TriplslideIndexThree-1].className += " active";*/
}






/******************TRIPL MOBOLE*********************/
                /*****ONE*****/
var TriplMobslideIndexOne=1;
 TriplMobshowSlidesOne(TriplMobslideIndexOne);
function TriplMobplusSlidesOne(n) {
  TriplMobshowSlidesOne(TriplMobslideIndexOne += n);
}
function TriplMobcurrentSlideOne(n) {
  TriplMobshowSlidesOne(TriplslideIndexOne = n);
}
function TriplMobshowSlidesOne(n) {
  var i;
  var slides = document.getElementsByClassName("TriplMobmySlidesOne");
  if (n > slides.length) {TriplMobslideIndexOne = 1}    
  if (n < 1) {TriplMobslideIndexOne = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[TriplMobslideIndexOne-1].style.display = "block";  
}
                /*****TWO*****/
var TriplMobslideIndexTwo=1;
 TriplMobshowSlidesTwo(TriplMobslideIndexTwo);
function TriplMobplusSlidesTwo(n) {
  TriplMobshowSlidesTwo(TriplMobslideIndexTwo += n);
}
function TriplMobcurrentSlideTwo(n) {
  TriplMobshowSlidesTwo(TriplslideIndexTwo = n);
}
function TriplMobshowSlidesTwo(n) {
  var i;
  var slides = document.getElementsByClassName("TriplMobmySlidesTwo");
  if (n > slides.length) {TriplMobslideIndexTwo = 1}    
  if (n < 1) {TriplMobslideIndexTwo = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[TriplMobslideIndexTwo-1].style.display = "block";  
}
                  /*****THREE*****/
var TriplMobslideIndexThree=1;
 TriplMobshowSlidesThree(TriplMobslideIndexThree);
function TriplMobplusSlidesThree(n) {
  TriplMobshowSlidesThree(TriplMobslideIndexThree += n);
}
function TriplMobcurrentSlideThree(n) {
  TriplMobshowSlidesThree(TriplslideIndexThree = n);
}
function TriplMobshowSlidesThree(n) {
  var i;
  var slides = document.getElementsByClassName("TriplMobmySlidesThree");
  if (n > slides.length) {TriplMobslideIndexThree = 1}    
  if (n < 1) {TriplMobslideIndexThree = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[TriplMobslideIndexThree-1].style.display = "block";  
}