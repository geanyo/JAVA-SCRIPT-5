var generation = document.getElementById("demo");
var age = new info();

function myFunction() {
  if (age <= 6) {
    alert("generation ALPHA");
  } else if (age >= 6 && age <= 20) {
    alert("generation Z");
  } else if (age >= 21 && age <= 35) {
    alert("generation Y");
  } else if (age >= 36 && age <= 50) {
    alert("generation X");
  } else if (age >= 51 && age <= 69) {
    alert("generation BABY BOOMERS");
  } else {
    alert("generation BUILDERS");
  }
}


