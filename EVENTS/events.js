var button= document.querySelector("input");

var showTime= function() {
    var datte= Date();
    document.getElementById("time").innerText("<date>");
}

button.onclick= showTime;