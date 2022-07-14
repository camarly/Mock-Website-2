/* 
 *   Project     : trips.js
 *   Filename    : trips.js
 *   Author      : Camarly Thomas <camarly@stu.ucc.edu.jm>
 *   Id.No.      : 20204241
 *   Course      : ITT
 *   Version     : 0.1
 *   Copyright   : All rights reserved 4 Dec 2021 14:03:54
 *   Description : 
 

 
 */


// JavaScript is used for toggling loading state
var form = document.querySelector('form');
form.onsubmit = function (event) {
    event.preventDefault();
    form.classList.add('signed');
};


/*age slider */
var slider = document.getElementById("ageValue");
var output = document.getElementByClass("age");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
};

/* signup for newsletter or email communication - footer location */
function clicked() {
    return confirm('You have been added to our mailing list');
}