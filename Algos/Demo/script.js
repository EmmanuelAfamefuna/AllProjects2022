// if (age > 21) {
//   return "You can Drink"
// } else {
//   return "Not old enough"
// }

// if(age> 21) return "You can drink"
// else if (age < 21 && age > 21.01)return "not quite old enough"
// else return "blah"

/* function dog(name) {
    console.log(name);
  }
  
  // const dog = function (name) {
  //   // console.log(name);
  //   name = `${name}'s`;
  //   return name;
  // };
  
  // fat arrow
    const dog = name => `${name}'s is ${isAge}`;
  
  // const dog = (name, age) => `${name}'s`;
  
  // const dog = (name, age) => {
  //   name = name + 1;
  //   return `${name}'s`;
  // };
  
    console.log(dog("Max"));
    console.log(dog("Ranger")); */




// Sort alphabetically into 2 arrays - one with ASCII codes less than 77
// and second with 77 or greater

// Questions:
// 1) What is ASCII?
//      Unique number for each character
// 2) 77 is uppercase M
// 3) Example of data when complete?
// RESULT: arr1 = ["Cat", "Gnat", "Hat", "House"]
// RESULT: arr2 = ["Mouse", "Rat", "Spouse"]

// Strategies:
// 1) Iterate through array
//            read values (elements), need ASCII values - first letter
// 2) make sure all words have uppercase for first letter - DONE
// 3) Need two new arrays to hold data
// 4) map method? filter? slice?
// 5) Need to sort at some point


var arr = ["Mouse", "House", "Spouse", "Cat", "Hat", "Gnat", "Rat"];
// define new array1
var array1 = []
// define new array2
var array2 = []
// Sort array 
arr.sort() 
// Iterate through the array
arr.forEach(function(el){
  // Need to check first character ASCII value
    let charVal = el.charCodeAt(0)
  // If less than 77 
    if(charVal < 77) array1.push(el)
    else array2.push(el)
})
console.log(array1)
console.log(array2)

let arr = ["Mouse", "House", "Spouse", "Cat", "Hat", "Gnat", "Rat"];
var array1 = [],
    array2 = []
arr.sort().forEach(el => el.charCodeAt(0) < 77 ? array1.push(el) : array2.push(el))
console.log(array1)
console.log(array2)