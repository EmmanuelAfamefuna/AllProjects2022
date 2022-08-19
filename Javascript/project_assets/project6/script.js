
var clock = document.getElementById("clock");
var hexColor = document.getElementById("hex_color"); 
let format;

var colorArray = ["#4FC3F7", "#29B6F6", "#03A9F4", "#039BE5", "#0288D1", "#0277BD", "#01579B", "#9575CD", "#7E57C2", "#673AB7", "#5E35B1", "#512DA8", "#4527A0", "#311B92", "#7986CB", "#5C6BC0", "#3F51B5", "#3949AB", "#303F9F", "#283593", "#1A237E", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0", "#0D47A1"];

var index = 0;

function hexClock(){
    format = clock.getAttribute("data-format")
    var time = new Date();
    var hours = time.getHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    console.log(minutes)

    if(format === "12"){
        hours = (hours > 12) ?
        hours % 12 : hours;
    }
    if(hours.length < 2){
        hours = "0" + hours;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    var clockStr = hours + ":" + minutes + ":" + seconds;

    clock.textContent = clockStr;
    document.querySelector("body").style.backgroundColor = colorArray[index]
    index++
    if(index == colorArray.length){
        index = 0;
    }
}
setInterval(hexClock, 1000);