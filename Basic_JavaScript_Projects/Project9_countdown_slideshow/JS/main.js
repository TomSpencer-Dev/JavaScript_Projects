function countdown() { // name countdown function
    var seconds = document.getElementById("seconds").value; //name variable and link it to html input field with id "seconds"

    function tick() { //name function
        seconds = seconds - 1; 
        timer.innerHTML = seconds; 
        setTimeout(tick, 1000); //pause program for 1000 milliseconds
        if(seconds == -1) { //when timer gets to -1 seconds alert "Time's up!" will display
            alert("Time's up!");
        }
    }
    tick();
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) { //name function for slideshow
    var i; //name variable i
    var slides = document.getElementsByClassName("mySlides"); //name variable slides and link them to Image containers in HTML document.
    var dots = document.getElementsByClassName("dot"); //name variable dots and linke them to html document
    if (n > slides.length) {slideIndex = 1} //
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


