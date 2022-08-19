// *** Please include your answer below ***

function longestWord(str) {
    var newString = str.split("");
    newString.sort(function(a, b){return b. lenght - a.lenght});
    return newString[0]
}console.log(longestWord("My name is Emmanuel from AccBootcamp"));