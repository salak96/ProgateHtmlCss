 //slider gambar 3gambar bergeser
 let slideIndex = 0;

 const updateSlide = (n) => {
 slideIndex += n;
 showSlide(slideIndex);
 }

 const showSlide = (n) => {
 const slides = document.getElementsByClassName("mySlides");
 if (n > slides.length - 1) {
     slideIndex = 0;
 }
 if (n < 0) {
     slideIndex = slides.length - 1;
 }
 for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
 }
 slides[slideIndex].style.display = "block";
 }

 showSlide(slideIndex);

// function validate
function validateForm(){
 var x = document.forms["contact"]["email"].value;
 var y = document.forms["contact"]["message"].value;
 if (x === "" || y === "") {
     alert("Email dan Message harus diisi");
     return false;
 }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
 acc[i].addEventListener("click", function () {
     /* Toggle between adding and removing the "active" class,
     to highlight the button that controls the panel */
     this.classList.toggle("active");

     /* Toggle between hiding and showing the active panel */
     var panel = this.nextElementSibling;
     if (panel.style.display === "block") {
         panel.style.display = "none";
     } else {
         panel.style.display = "block";
     }
 });
}
for (i = 0; i < acc.length; i++) {
 acc[i].addEventListener("click", function () {
     this.classList.toggle("active");
     var panel = this.nextElementSibling;
     if (panel.style.maxHeight) {
         panel.style.maxHeight = null;
     } else {
         panel.style.maxHeight = panel.scrollHeight + "px";
     }
 });
}