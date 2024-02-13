let sen = "Hey!, How are you?";

console.log(sen.toUpperCase()); 

const whisper = "    TASTE THE RAINBOW!  ";
console.log(whisper.trim().toLowerCase());

console.log(whisper.slice(10,15)); //
console.log(whisper.slice(-10));//gives last 10  characters

console.log(whisper.indexOf("R")); //returns the index of R in the string.r

console.log(whisper.lastIndexOf("A")); // returns the last occurrence of A in the string

console.log(whisper.replace(/[AEIOU]/g,"#")); // replaces all vowels with #


const word = "skateboard"; 
console.log(word.replace(word,"beard"));

let facialHair = word.slice(5).replace("o","e");
console.log(facialHair)


let sen1 = "I am practicing here";
console.log(sen1.replaceAll(/\s/gi,"_")) //replaces all white spaces with _


let str1 = "What's the plain for weekend?"
console.log(str1.startsWith("["));// 
console.log(str1.endsWith("kend?")); // check if a string ends with something
console.log(str1.includes("plain")); //returns true if the string contains the substring  otherwise false
console.log(str1.concat("\nHoney", "See You Later!")); // concatenates two strings with a new line character
//console.log(str1 + "\f" + "See You Later!");
console.log(str1.split(" ")); // splits the sentence into array based on one or more space characters</

console.log(str1.search(/[^\w\s']/g));  // Returns first non-alphanumeric character that is not an underscore or a backslash.</
//   \w: Matches any word character (a-z, A-Z, 0-9, and underscore).
//   \s: Matches any whitespace character (space, tab, newline).
//   ': Matches a single quote character.
//    [^...]: This negates the character class, meaning it will match any character except those included in the class.
//    []: This defines a character class, which specifies a set of characters to match.



const mood = 'Happy! ';
console.log(`I feel ${mood.repeat(3)}`); // concatenates and repeats the value of mood variable 
console.log(mood.at(-5));//  gives the character at the fifth position from the end
console.log(mood.charAt(4));//  gives the character at the fifth position
console.log(mood.charCodeAt(6,1)); // gives ASCII values of characters at positions 6 and 7
console.log(String.fromCharCode(189));  // converts ASCII values to corresponding characters
console.log(mood.codePointAt(2));  // gives Unicode code point of a character at specified position



const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
console.log(paragraph.match(/[A-Z]/g));
// []: This denotes a character class, which is a way to group characters that we want to match.
// [A-Z]: This specific character class matches uppercase letters (A-Z).
// /g: This is a flag that tells the match() method to find all occurrences of the pattern, not just the first one.


const str12= '5';

console.log(str12.padStart(2, '0'));

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);