// Set a collection of key value pairs. 
//The keys must be unique and the values can be anything 
// can not access set with index  like array,

let letters  = new Set("Particiption"); //Values are Non Repetative values in set
console.log(letters)

let words = new Set(["apple", "banana","cherry"]);
console.log(words);

let numbers = new Set();
numbers.add(1).add(2).add("hey").add("Hey").add().add(2).add(undefined);
console.log(numbers);
console.log(numbers.has(1));   //Checking if element is present or not

numbers.forEach(value => { console.log(value);  });   //For each loop for iterating through all elements of set
