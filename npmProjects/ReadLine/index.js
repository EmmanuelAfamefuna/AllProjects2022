const readlineSync = require('readline-sync');

const userName = readlineSync.question('What is your name?');

const favFood = readlineSync.question('What is your favorite food?');

const favDrink = readlineSync.question('What is your favorite drink?');


console.log('Hi ' + userName + ' your favorite food is ' + favFood + ' and your favorite drink is ' + favDrink);

