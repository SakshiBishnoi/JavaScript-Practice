//let pincode = Number("560045")
//console.log(pincode, typeof pincode);


let x 
console.log(x, typeof x);
x = 7
console.log(x, typeof x);
x = x + " "   // concatnating string 
console.log(x, typeof x)
// x = x - 6
// x = +x - 6
x = (x - 6)
console.log(x, typeof x); 
x = !x
console.log(x, typeof x);


console.log("In boolean 0 is for false : " + Boolean(0)); 
console.log("In boolean all the values except 0 is for true : " + Boolean(100));
console.log("null is a falsy Value : " + Boolean(null));
console.log("undefiend is a falsy Value : " + Boolean(undefined));
console.log("An empty String is also a Falsy value : " + Boolean(""));
console.log(Boolean({})); //true  because object has memory location in heap memory
console.log(Boolean(NaN)); //false  because NaN is not equal to anything including itself
console.log(Boolean(-0)); //false  because it's zero but with negative sign
console.log(Boolean(true)); //true 
console.log(Boolean([]));  //true because array is an object in JS
console.log(Boolean(0.1)); //true   because 0.1 is a non-zero number
console.log(Boolean(0n)); //false no bigint -0
console.log(Boolean(""));  //false because "" is considered as falsy value
console.log(Boolean("hello"));  //true because hello is a non-empty string
console.log(Boolean(123e13));  //true because its a positive number



let y = parseInt("123 Hello")
console.log(y, typeof y)
//console.log(Number(y), typeof y);