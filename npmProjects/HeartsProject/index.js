//This is the default size of asciiheart
const asciiHeart = require("ascii-heart"); 
console.log(asciiHeart());

//This is a small size of 10x10 asciiheart (width x height) <3
console.log(asciiHeart(10, 10));

//Using mutiples of little heart to display a 40x40 heart,
console.log(asciiHeart(40, 40, {
    fill: "❤"
}));