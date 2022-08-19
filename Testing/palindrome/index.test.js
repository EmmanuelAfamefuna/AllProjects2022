/* describe("Initial Test", () => {
    test("should passed", () => {})
}) */

/* 
describe("Tests for palindrome function", () => {
    test("isPalindrome does exist then pass", () => {})
    throw Errow()
}) */


const {isPalindrome} = require("./index");

describe("Tests for palindrome function", () => {
    test("isPalindrome does exist then should pass", () => {
        expect(isPalindrome()).toBeDefined();
    });
    test("isPalindrome function has only one argument", ()=>{
        /* throw Error() */
        expect(isPalindrome.length).toBe(1);
    });
});

describe("Testing for data type", ()=>{
    test("Should pass with fals if number", ()=>{
        expect(isPalindrome(123)).toBe(false)
    })
    test("Should pass with false if boolean", ()=>{
        //console.log(typeof boolean)
        expect(isPalindrome(true)).toBe(false)
    })
    test("Should pass with false if array", ()=>{
        expect(isPalindrome([])).toBe(false)
    });
});


  describe("Testing to see if basic palindrome", () => {
    test(" bob is a palindrome and should return true", () => {
      expect(isPalindrome("bob")).toBe(true);
    });
    test(" racecar is a palindrome and should return true", () => {
      expect(isPalindrome("racecar")).toBe(true);
    });
    test(" apple is not a palindrome and should return false", () => {
      expect(isPalindrome("apple")).toBe(false);
    });
    test(" madam is not a palindrome and should return false", () => {
      expect(isPalindrome("madam im adam")).toBe(true);
    });
    test(" Madam is not a palindrome and should return false", () => {
      expect(isPalindrome("Madam I'm Adam")).toBe(true);
    });
  });
  
  
  let sentence = `Are we not pure? "No, sir!" Panama's moody Noriega brags.
  "It is garbage!" Irony dooms a man-a prisoner up to new era.`;