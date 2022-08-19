var names = ["Reed", "Susan", "Ben", "Johny", "Franklin"];
var pets = ["Moxxi", "Pickle", "Hootchie", "MonkeyButt"];
var people = ["Karen", "Patrick"];
var fruits = ["PinApple", "Apple", "Banana", "Orange", "Apple", "Mango",];

var numbers = [1, 2, 3, 4, 5];

for(var i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i]*2
    console.log(numbers)
}

pets.forEach(function(element){
    console.log(element + "is awesome!");
    document.write(element + "is awesome!");
});

function printpet(element){
    console.log(element + "is awesome!");
    document.write(element + "is awesome!");
}

pets.forEach(printpet);

var numbers = [4, 9, 16, 25];
var squareRoots = numbers.map(math.sqrt);

var words = ["spray", "limit", "elite", "exuberant", "deststruction", "present"];

var longwords = words.filter(function(thisword){
    return thisword.length > 6;
});

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
    return a-b
});

