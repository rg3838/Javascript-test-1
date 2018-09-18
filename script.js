var buttonBlue = document.querySelector(".bluebutton");
var buttonGreen = document.querySelector(".greenbutton");
var buttonYellow = document.querySelector(".yellowbutton");
var buttonPurple = document.querySelector(".purplebutton");
var jumbotron = document.querySelector("#jumbotron");
var backgroundHasColor = false;

buttonBlue.addEventListener("click", function() {
    if (backgroundHasColor) {
        jumbotron.style.background = "#e9ecef";
        backgroundHasColor = false;
    } else {
        jumbotron.style.background = "#5397E0";
        backgroundHasColor = true;
    }
    
});

buttonGreen.addEventListener("click", function() {
    if (backgroundHasColor) {
        jumbotron.style.background = "#e9ecef";
        backgroundHasColor = false;
    } else {
        jumbotron.style.background = "#53E09C";
        backgroundHasColor = true;
    }
    
});

buttonYellow.addEventListener("click", function() {
    if (backgroundHasColor) {
        jumbotron.style.background = "#e9ecef";
        backgroundHasColor = false;
    } else {
        jumbotron.style.background = "#DDE053";
        backgroundHasColor = true;
    }
    
});

buttonPurple.addEventListener("click", function() {
    if (backgroundHasColor) {
        jumbotron.style.background = "#e9ecef";
        backgroundHasColor = false;
    } else {
        jumbotron.style.background = "#5653E0";
        backgroundHasColor = true;
    }
    
});