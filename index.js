// random num generator
var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;

// fetch image directories
var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];


//set attribute
image1.setAttribute("src", randomImageSource1)



// second dice
// random num generator
var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

// fetch image directories
var randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];


//set attribute
image2.setAttribute("src", randomImageSource2)


// set result statements
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩"
} else if (randomNumber2 >  randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🏁"
} else [
    document.querySelector("h1").innerHTML = "Ooops! You Draw!"
]












