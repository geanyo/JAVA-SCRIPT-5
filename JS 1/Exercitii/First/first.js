var name="Radu";
var message="Hello " + name + "!";
var timeout= 3000;
var isNight= false;
var isMorning=false;
// var isNight= true;
var nothing;

var date=new Date();
var hour=date.getHours();

// get element in id

    // || - OR - sau
    // && - AND - si
    // ESTE IMPORTANT CUM PUNEM CONDITIILE
if(hour==0) {
    alert("Happy new year!");
} else if(hour >=20 || hour <=6) {
    alert("Noapte buna!"); 
    alert("Somn usor");
} else if(hour <=11) {
    alert("Buna dimineata!");
} else if(hour<=17) {
    alert("Buna ziua!"); 
} else {
    alert("Buna seara!");
}


// if(isNight) {
//     alert("Noapte buna!"); 
//     alert("Somn usor");
// } else if(isMorning) {
//     alert("Buna dimineata!");
// } else {
//     alert("Buna ziua!"); 
// } 
// SE RECOMANDA SA PUI ACOLADE CHIAR DACA AI O SINGURA INSTRUCTIUNE




        // var nothing; - cand nu setam o valoare, ea are o valoare by default- UNDEFINED
        // var nothing=null; - cand setam o valoare - NULA
        // var message="\"Hello Java Script!"; - \" SE PUNE MESAJUL INTRE GHILIMELE, VOIT, ca atunci cand citezi pe cineva.
        // var message='Hello Java Script!; SE POT FOLOSI, DE ASEMENEA, GHILIMELELE SIMPLE 'TEXT', IN FUNCTIE DE PROIECT

setTimeout(sayHello,timeout);
function sayHello() {
            // alert(message);
console.log(message); 
        }
        // putem pune sau nu ; la sfarsitul parantezelor - sunt obtionale, in functie de proiect
        // ; - se foloseste, in principal, daca punem mai multe alerte pe acelasi rand
            // alert("Hello Java Script!"); alert("Hello Java Script!");
