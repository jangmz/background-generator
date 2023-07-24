var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randBtn = document.querySelector(".random-btn");

// function for changing background colors from input
function backgroundChange() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    // displays css property in h3 tag
    css.textContent = body.style.background + ";";
}

// return random number from 0-255
function randNumber() {
    var number = Math.floor(Math.random() * 256);
    return number;
}

// rgb to hex
function rgbToHex(red, green, blue) {
    var rh = red.toString(16).padStart(2, '0');
    var gh = green.toString(16).padStart(2, '0');
    var bh = blue.toString(16).padStart(2, '0');
    var hex = "#" + rh + gh + bh;
    return hex;
}

// generate random color
function randColor() {
    // generate the first color
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    color1.value = rgbToHex(red, green, blue);
        
    //generate the second color
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    color2.value = rgbToHex(red, green, blue);
    
    backgroundChange();
}

window.onload = backgroundChange;

// event for input
color1.addEventListener("input", backgroundChange);
color2.addEventListener("input", backgroundChange);

// 1. Write code so that the colour inputs match the background generated on the first page load. 
// 2. Display the initial CSS linear gradient property on page load.


// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.
randBtn.addEventListener("click", randColor);