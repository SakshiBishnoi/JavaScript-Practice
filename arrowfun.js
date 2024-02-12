// function greeting(){
//     console.log("Hey!, How's You?");
//     return 1
// }
// console.log(greeting());

let greeting = function(user){
    console.log(`Hey! ${user}, How's You?`);
     return 1
 }
 console.log(greeting("sakshi"));


let greeting1 = (user) => {
    console.log(`Hey! ${user}, How's You?`);
     return 0
}
console.log(greeting1("sakshi"));


let add = function(n1,n2){
    return n1 +n2
}
console.log(add(5,5))

let add1  = (x , y )=> x+y;
console.log(add1(7,9));

let input1 = Math.abs(5);
let input2 = Math.abs(-7);

let sum = (num1,num2) => num1 + num2;
//let result = sum(input1,input2);
console.log(result);