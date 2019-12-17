// var planet= document.getElementById("redplanet");
// var planet= document.querySelector("#redplanet");

// alert= function() {
// var planet= document.querySelector("#redplanet");
// planet.innerHTML= "Aliens are approaching";
// planet.style.color= "red";
// } CEA MAI VECHE METODA DE A FACE O ACTIUNE

// alert= function() {
// var planet= document.querySelector("#redplanet");
// planet.innerHTML= "Aliens are approaching";
// planet.style.color= "red";
// }
// document.querySelector("#redplanet").onclick= alert; A DOUA VARIANTA DE A FACE O ACTIUNE

alert= function() {
    var planet= document.querySelector("#redplanet");
    planet.innerHTML= "Aliens are approaching";
    planet.style.color= "red";
    }

clear= function() {
    var planet= document.querySelector("#redplanet");
    planet.innerHTML= "Nothing to report";
    planet.style.color= "black";
    }

    document.querySelector("#redplanet").onmouseover= alert;
    document.querySelector("#redplanet").onmouseout= clear;
