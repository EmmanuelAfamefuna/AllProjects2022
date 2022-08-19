/* $(document).ready(alert("connected!!!"))  */

$("h1").text("I am the header")
/* $("h1").last().text("I am the last header") */
/* $("h1").eq(2).text("I am the last header (eq)") */
/* let result = $("h1").eq(1).text();
console.log(result);


//Fat arrow, changing the 2nd h1 to "I am a hero"
let changeFunc = () => $("h1").eq(1).text("I am a hero");
setTimeout(changeFunc, 3000)

//This also works
setTimeout(changeMan, 3000);

function changeHero() {
    $("h1").eq(1).text("I am a hero")
}
 */
//Changing the text color and background
/* $("h1").css("text-transform", "capitalize");
$("h1").eq(0).css("background-color", "blue");
$("h1").eq(2).css("border", "red 3px dotted"); */

let someText = "I have changed"

let someStyles = {
    backgroundColor: "orange",
    fontSize: "48px",
    border: "48px solid blue"
}

$("h1").eq(1).css(someStyles).text(someText)

