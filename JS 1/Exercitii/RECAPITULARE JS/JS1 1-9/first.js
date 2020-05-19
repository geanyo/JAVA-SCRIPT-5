var name = "Geanina";
// var message = "Hello Java Script!";        
var message = "Hello " + name + "!";
var timeout = 3000;
var isNight = false;
var isMorning = false;
var nothing = null;

var date = new Date();
var hour = date.getHours();

if(hour >= 21 && hour <= 6) {
    alert("Noapte buna!");
    alert("Somn usor!");
} else if(hour <= 11) {
    alert("Buna dimineata!");
} else if(hour <= 17) {
    alert("Buna ziua!");
} else {
    alert("Buna seara!");
}



// var hour = date.getHours(); ------ GETHOURS ia ora din zi


// var message = "Hello Java Script!"; -------- STRING
// var timeout = 3000; ------- NUMERIC
// var isNight = true; ------- BOOLEAN
// var nothing; ------- CHIAR DACA NU ARE TRECUTA NICIO VALOARE, EA ARE O VALOARE UNDEFINED

// VARIABILELE SUNT DENUMIRI GANDITE PENTRU VALORI IN MEMORIE (CONTAINERE TEMPORARE IN CARE SE DEPOZITEAZA VALORI)

// \" ------- CHARACTER ESCAPE -------- CAND VREM SA FOLOSIM GHILIMELE INTR-UN STRING (intr-un tex "\"Hello Java" Script!")
