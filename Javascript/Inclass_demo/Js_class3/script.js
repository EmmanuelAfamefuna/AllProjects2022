/* var hour = 18;

if (hour < 12){
    console.log("Good morning. Would you like some toast?");
} else if(hour > 12 && hour < 17) {
    console.log("Good afternoon. Time for tea!");
} else {
    console.log("Good evening. How about noodle for dinner?");
} */



/* var age = 18;

if(age > 21) {
    console.log("You can buy alcohol.");
}else {
    console.log("You are too you. Go home!!!");
} */



/*  var age = 18;
var result = age > 21 ? "You can buy alcohol.": "You are too young. Go home!!!";
console.log(result) */


/* var age = 25;

var result = age < 21
? "Not old enough"
: age > 30 
? "You do not need to be carded"
: "Still need to be carded";

console.log(result) */


/* var count = 1;

while(count < 11){
    console.log("count is " + count);
    count++;
} */

/* 
 var count = 1;

while(count <= 100){
    console.log("count is " + count);
   /*  count = count + 2; */
   /*  This also work */
/*    count += 2
}  */ 


/* for (var count = 1; count <= 5; count++){
    console.log("The number is " + count);
} */


/* for (var i = 0; i < 32; i+=8){
    console.log(i);
} */

/* for (var i = 0; i <= 21; i++){
    if(i % 2 == 1){
        console.log(i);
    }
}

/* This is another solution that works */

/* for (var i = 0; i <= 21; i++){
    if((i % 2)){
        console.log(i);
    }
} */ 

/* 
function greetings() {
    console.log("Hey guys, how's it going?");
    console.log("Where's the party at?");
    console.log("did anybody bring spinach dip?");
}
greetings(); */

/* 
function greetings(name) {
    console.log("Hey " + name + ", how's it going?");
}
greetings("Jennifer");


function greeting(age) {
    return "So I understand you are " + age + " years old."; 
}
console.log(greeting(27)); */


function fullGreeting(age, name) {
    return "Hi " + name + "; I believe you are " + age + " years old.";
}
console.log(fullGreeting(27, "Jenny"));



