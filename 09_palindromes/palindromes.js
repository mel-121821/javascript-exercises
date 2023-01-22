// To run tests, use command in terminal below:
// npm test calculator.spec.js

// take a string and remove punctuation and whitespace
// convert all letters to lowercase (or uppercase)
// create a new reversed string
// check if new string === old string

// resources: https://javascript.plainenglish.io/how-to-strip-all-punctuation-from-a-string-in-javascript-using-regex-99c6857790d1

// https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex

// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

// Test string >> const string = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"; 

const palindromes = function(string) {    
    let punctRemovedString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let whitespaceRemovedString = punctRemovedString.replace(/\s{1,}/g,"");
    let finalString = whitespaceRemovedString.toLowerCase();
    let reversedString = finalString.split("").reverse().join("");
    if (reversedString === finalString) {
        return true;
    } else {
        return false
    }
};


// line 18 removes punctuation
// line 19 removes whitespace, the 1 represents 1 or more white spaces in the string, the second argument is what the whitespace is being replaced with, in this case, an empty string ("")

// split the string into an array with .split, reverse and join ("") <-- the empty string represents the separator between "array values" (meaning there is no separator)



// Do not edit below this line
module.exports = palindromes;
