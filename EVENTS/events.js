var button= document.querySelector("input");
var element= document.getElementById("time");

function showTime() {
    // var date= Date();
    element.innerText= Date();
}
function changeStyle() {
    // element.style.color= "red";
    element.className= "newStyle";
}
// showTime();
// button.onclick= showTime;
// button.onclick= changeStyle;

button.addEventListener("click", showTime);
button.addEventListener("click", changeStyle);


// button.removeEventListener("click", changeStyle);

