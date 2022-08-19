const casual = require('casual');
//This will print the name
const name = casual.name;

//This will print the country
const country = casual.country;

//This will print the city
const city = casual.city;

//This will generate a random phone number
const phone = casual.phone;

//This will generate a random addresses
const address = casual.address;

//This will print a random month
const month = casual.month_name

console.log('Hello there ' + name + '! How was your trip to ' + country + '? I sure do hope you had a wonderful time. Is your phone number still ' + phone + '? I will try to give you a call sometimes. By the way, I want to send you a fresh loaf of bread at your address of: ' + address + '. Well, I will see you soon. I will be visiting before ' + month + '. Untill then, farewell!')