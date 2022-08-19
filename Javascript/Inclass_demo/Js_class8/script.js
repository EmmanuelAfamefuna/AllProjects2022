/* var images = ["chickensoup.jpg", "cheesesoup.jpg", "macaroni.jpg"];
var index = 1;
document.querySelector("button").addEventListener("click", function(){
    var nextImage = images[index]
    document.querySelector("img").setAttribute("src", nextImage);
    index++; 
    if(index === images.length){
    index = 0;
}
}); */

/* var a = 1;
var b = 2;

if(true === true){
    var a = 10;
    let b = 20;
}
console.log("a is :", a);
console.log("b is :", b);


let greeting = "Hi";
greeting = "Hello";
console.log(greeting); */

/* const greeting = "hello";
console.log(greeting); */

/* let greeting = "Hi";

function something(){
    if(true){
        let greeting = "Goodbye";
        console.log(greeting);

    }
    console.log(greeting);
} */


/* document.querySelector("#hide").addEventListener("change", function(){
    if(document.querySelector("#hide").checked){
        document.querySelector("#soup").style.visibily = "hiden";
    } else {
        document.querySelector("#soup").style.visibily = "initial"
    }
}); */



document.querySelector("form").addEventListener("submit", function(event){
    const errors = [];

if(document.getElementById("name").value === ""){
    errors.push("Please enter your a name");
}

if(document.getElementById("password").value.lenght <= 6){
    errors.push("Password must be greater than 6 characters");
}

if(errors.lenght > 0){
    event.preventDefault();
    document.querySelector("#wrapper").getElementsByClassName.border = "3px solid red";
    document.querySelector("p").textContent = errors.join(", ");
    document.querySelector("p").style.color = "red";

}
})


