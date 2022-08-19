  // random character
const marvel = require('marvel-characters')
console.log(marvel);

const numCharacters = require("marvel-characters/characters.json");
console.log(numCharacters);

 //Display Iron Man in the terminal, or an error massage if does not exist.
if(ironMan = numCharacters.find((element) => element ===  "IronMan")) {
    console.log(IronMan);
}else{
    console.log(`IronMan`);
}; 

 //Display Batman in the terminal, or an error message if does not exist.
if(batMan = numCharacters.find((element) => element === "BatMan")) {
    console.log(BatMan);
}else{
    console.log(`No match found`);
};


/* const marvel = require('marvel-characters');

console.log(marvel(5));


console.log(marvel.characters.length);

const Man = marvel.characters.includes('Man');

console.log('Does not exit');
 */
