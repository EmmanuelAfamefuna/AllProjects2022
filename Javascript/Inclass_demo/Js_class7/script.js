/* var food = document.getElementById("fruit");

var food2 = document.getElementsByClassName("breakfast");
console.log(food2[0]);

var food3 = document.getElementsByTagName("li");
console.log(food3[0]);

var food4 = document.querySelector("#fruit");


var food5 = document.querySelectorAll("h1");
console.log(food5); */

/* document.getElementById("fruit").style.color = "green";
document.getElementById("fruit").style.border = "10px solid orange";
document.getElementById("fruit").style.fontSize = "36px";

document.getElementById("fruit").style.background = "blue";
document.getElementById("fruit").style.marginTop = "150px";  */

//Background color
/* var name = "Emma";
if(name === "Emma"){
    document.querySelector("body").style.background = "pink", "orange", "blue";
}else{
        document.querySelector("body").style.background = "brown";
    }  */

    //Color rotate

/*     var theBody = document.querySelector("body");
var isOrange = false;
setInterval(function () {
theBody.style.backgroundColor = isOrange ? "blue" : "orange";
isOrange = !isOrange;
}, 3000); */


/* var isOrange = false;

setInterval(function(){
    if(isOrange === true){
        document.querySelector("body").style.background = "blue";
    }else {
        document.querySelector("body").style.background = "orange";
    }
    isOrange = !isOrange;
}, 3000); */

//TextContent
/* document.querySelector("li").textContent;

document.querySelector("h1").textContent;

document.getElementById("fruit").textContent;

alert(document.getElementById("fruit").textContent);

document.querySelector("li").textContent = "Sold out! Check back again tomorrow."; */

//innerHTML
/* document.querySelector("ul").innerHTML;
document.querySelector(".breakfast")

document.querySelector("li").innerHTML = "Chocolate <b>Hazelnut</b>"; */

//Events
//Add a button to your HTML file and run this in the console or js file
document.querySelector("button").addEventListener("click", function(){
    alert("How's it going?");
})
document.querySelector("button").addEventListener("click", function(){
    document.querySelector("body").style.background = "yellow";
})

document.querySelector("h1").addEventListener("mouseover", function(){
    document.querySelector("p").textContent = "Cheesecake bites";
})




    




