const arr1 = [2, 3, 4];
const arr2 = ['aaa', 'bbb', 'ccc'];

let combi1 = [ ...arr1, ...arr2]; // ES6 spread operator
console.log(combi1);


const obj1 = {teddy:"softtoy", quantity:1, cuteness:true, color:"blue"};
const obj2 = {borccoli: "veggie", quantity: 0.250};

let combi2 = {...obj1, ...obj2}
console.log(combi2);

let combi3 = {...obj1, toy:"cuddly monster"};
console.log(combi3);


let val1 = console.log(Math.max(12,23,3453,642,665,886,4331));
let val2 = console.log(Math.min(2,32,45,16));

let word1 = ["Hello","how","are","you"];
console.log(...word1);

let word2 = ("good");
console.log(...word2);