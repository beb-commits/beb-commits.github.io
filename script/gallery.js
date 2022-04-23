/* function to open the modal */
function openModal() {
  document.getElementById("galleryModal").style.display = "block";
}

/* function to close the modal */
function closeModal() {
  document.getElementById("galleryModal").style.display = "none";
}

var slide = 1;
var slideImage = 1;
showSlides(slideImage);

/* click next and previous */
function plusSlides(n) {
  showSlides(slideImage += n);
}

/* controls for thumbs */
function currentSlide(n) {
  showSlides(slideImage = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("modalImages");

  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideImage = 1}
  if (n < 1) {slideImage = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideImage-1].style.display = "block";
}