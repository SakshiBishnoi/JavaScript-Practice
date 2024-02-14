let num1 = true
let num2 = false

let result = num1  + num2; 
console.log("Result : " + result);


let num = 10
num += 5 // "Short-Hand Operator" // num = num + 5 
//num =+ 5 //

let x = num++ // Post - Increment Operator //First Assign and then increment

//let x = ++num // Pre - Increment Operator // First Increment and then Assign

console.log("num : " + num);


let nump  = 4
let r = 4 ** 4
//let r = (Math.pow(4,3));
console.log("r : " + r);

let s = 9 == '9' ? console.log('true') : console.log('false');
//Double equals will convert both sides to the same type and then compar. Even though one is a string and the other is a number, they are considered equal when using double equals.
