var name = prompt("Tell me your name.");
var number = prompt("Give me a numer.");
var me = prompt("Give me another number.");

function welcome(name, me) {
    document.write(name + " you are going to have a wonderful day." + " By the way, the sum of your numbers are " + me);
}

/* welcome(name, number); */

var message = (`${name} you are going to have a wonderful day. By the way, the sum of your numbers are ${me}`)
document.getElementById("message").innerHTML = message









