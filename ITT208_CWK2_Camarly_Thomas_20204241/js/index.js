/* 
 *   Project     : gallery.js
 *   Filename    : gallery.js.js
 *   Author      : Camarly Thomas <camarly@stu.ucc.edu.jm>
 *   Id.No.      : 20204241
 *   Course      : ITT
 *   Version     : 0.1
 *   Copyright   : All rights reserved 4 Dec 2021 14:03:54
 *   Description : 
 
 */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/* signup for newsletter or email communication - footer location */
function clicked() {
    return confirm('You have been added to our mailing list');
}

