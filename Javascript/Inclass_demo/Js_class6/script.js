//Length
var txt = "banana";
txt.length;

var txt = "I like bananas";
txt.length;

var txt = "  I like oranges.   ";
txt.length;

var txt = "  I like oranges.  ";
var newTxt = txt.trim();
newTxt.length;

/* var thing2 = "    This is a thing.    ";
thing2 */


//Slice
var words = "I love talking to animals";
var result = words.slice(7, 14);

//indexof()
var question = "What is my name?";
var result = question.indexOf("name");

var newResult = qustion.indexOf("George");
//This will give a negative 1 cos George doesn't exist

var lastResult = question.indexOf("What");
//This is will give 0 cos that is where "What" is located.

var question = "What you ask? What is my name?";
var lastResult = qustion.indexOf("What", 3);
//This is give 14
//Note this syntax is the same for arrays.

//Substr()
var name = "My name is Susan Jones";

var result = name.substr(11,5); //"Susan"
var newResult = name.substr(11,11); //"Susan Jones"
var lastResult = name.substr(11); //"Susan Jones."

//Substring()
var name = "My name is Susan Jones.";
var result = name.substring(11,22); //"Susan Jones"

//But what if this were the case:
var name = "My name is Robert Jones Jordan, Jr.";
var result = name.substring(11, name.length - 1); //"Robert Jordan, Jr"
var newResult = "My name is Rumpelstiltskin.";
var newResult

//String.toUpperCase()
var test = "This is a BUnch of rAndom Words!";
var result = test.toUpperCase(); //"This is a bunch of worlds!"

var result = test.toLowerCase();


var examples = ["APPLE", "Apple Cider", "  applesause", "apple pie", "green apples"];

var test1 = examples.map(function(data){
    return data.trim();
});

test1 = test1.map(function(data){
    return data.toLocaleLowerCase();
});

test1 = test1.filter(function(data){
    return data.substr(0,5) === "apple"
});

test1 = test1.sort();

//[ 'apple', 'apple cider', 'apple pie', 'applesauce' ]

console.log(test1);


//This is another method that works
var examples = ['APPLE', 'Apple Cider', '   applesauce', 'apple pie', 'green apples']
var test1 = examples.map(function(data) {
    return data.trim().toLowerCase();
})
.filter(function(data) {
    return data.substr(0,5) == 'apple';
})
.sort();


//Objects
var person = {
    name: "Walter White",
    age: 50,
    city: "Albuquerque",
    hobbies: "Cooking"
}

//This is how we retrieve data in objects
//This is dot notation:
person.name
//This is bracket notation:
person["age"]

//This is how to update data in objects
person.name = "Heisenberg";
person["hobbies"] = Dancing;

//This is how to assign empty array in object
var person = {}
person
{}


var person = {
    name: "Walter White",
    age: 50,
    family: ["Skylar", "Flynn", "Holly"], // array within the person object
    city: "Albuquerque",
    smart: true, // boolean
    associates: { // associates object inside person object
        friend: "Jesse",
        enemy: "Gus"
    },
    hobbies: "Cooking"
}

//This is how to retrieve data
person.age
person["age"]

person.family[1]
person["family"][1]

person.associates.enemy
person["associates"]["enemy"]




