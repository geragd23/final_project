let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
} 
initializeCarousel("carousel1");
initializeCarousel("carousel2");
initializeCarousel("carousel3");
initializeCarousel("carousel4");
initializeCarousel("carousel5");
initializeCarousel("carousel6");
initializeCarousel("carousel7");
initializeCarousel("carousel8");
initializeCarousel("carousel9");
initializeCarousel("carousel10");
initializeCarousel("carousel11");
initializeCarousel("carousel12");
initializeCarousel("carousel13");
initializeCarousel("carousel14");






function openNav() {
    document.getElementById("nav-links").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
    document.getElementById("nav-action").style.display = "none";
    document.getElementById("nav-logo").style.textAlign = "center";
    document.getElementById("nav-logo").style.marginRight = "50px";
  }

function closeNav() {
    document.getElementById("nav-links").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("nav-action").style.display = "block";
    document.getElementById("nav-logo").style.textAlign = "block";
  }

