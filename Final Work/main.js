$("#cities").hide();
$("#produces").hide();
var slideIndex = 0;
var producesIndex = 0;

showSlides();
showProduces();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); 
}

function showProduces() {
    var i;
    var slides = document.getElementsByClassName("produces");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    producesIndex++;
    if (producesIndex > slides.length) { producesIndex = 1 }
    slides[producesIndex - 1].style.display = "block";
    setTimeout(showProduces, 3000); 
}




$("#btn1").click(function(){
 $(".slideshow-container").hide()
 $("#produces").hide()
 $("#cities").show()  
 
 
})


$("#btn2").click(function(){
    $(".slideshow-container").hide()
    $("#cities").hide() 
    $("#show-produces").show()
    
   })


   $("#btn3").click(function(){

location.replace('./contact.html')});




