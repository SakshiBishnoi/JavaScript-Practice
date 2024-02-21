//rest params collects all remaining arguments into an actual array

function sum(){
    console.log(arguments);
    // const numbers = Array.from(arguments); // Convert arguments to an array
    // const total = numbers.reduce((a, b) => a + b); // Use reduce to calculate sum
    // console.log(total);
}
sum(1,2,3,4,5,6);


function total(...num){
    console.log(num.reduce((a,b)=> a+b));
}
total(1,2,3,4,5,6);
//

function comp(gold,silver,bronze,score, ...participants){
    console.log(`Gold : ${gold} with score`);
    console.log(`Silver: ${silver} with score`);
    console.log(`Bronze: ${bronze} with score`);
    console.log('Thanks to everyone else : ', participants)
}
comp(10,20,30,'Rohit1','Akash2','Anuj');