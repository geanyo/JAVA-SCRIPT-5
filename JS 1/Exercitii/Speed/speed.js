
var startButton = document.querySelector("input");

startButton.addEventListener ("click", start);
window.addEventListener("keypress", keyPressed);

var speed= 2000;

function start() {
    startButton.style.display= "none";
    newLetter();

    // setTimeout(start, 250);
    // startButton.style.visibility= "none"; ---- INFLUENTEAZA HTML-UL
    // console.log(randomPosition());
}


// ACESTA FUNCTIE NU SCHIMBA HTML, CI DOAR GENEREAZA CEVA

function randomLetter() {
    let letters= "abcdefghijklmnopqrstvwxyz";
    let pos= randomNumber(letters.length);  
    return letters.charAt(pos);
}

function randomPosition() {
    return randomNumber(95) + "%";
}

    // var letters= "abcdefghijklmnopqrstvwxyz"; --------- STRING
    // var pos= randomNumber(letters.length); pos ----------POSITION
    // LET ----- VARIAVILE LOCALE
    // CONST ------- VARIABILE CONSTATE -----DE EXEMPLU , PI
    // VAR ---------VARIABILE GLOBALE

function randomNumber (max) {
   return Math.round(Math.random() * max);
}

function keyPressed(event) {
    let letter= event.key;
    div= document.querySelector("." + letter);
    document.querySelector("body").removeChild(div);
}

function newLetter() {
    let letter= randomLetter();
    let x= randomPosition();
    let y= randomPosition();
    let div= document.createElement("div");
    div.innerText= letter;
    div.style.top= y;
    div.style.left= x;
    div.className= "boxLetter " + letter;
    document.querySelector("body").appendChild(div);
    setTimeout(newLetter, speed);
}