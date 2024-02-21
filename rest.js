// rest params collects all remaining arguments into an actual array

function sum(){
    console.log(arguments);
}
sum(1,2,3,4,5,6);
// reduce can not be used here 

function total(...num){
    console.log(num.reduce((a,b)=> a+b));
}
total(1,2,3,4,5,6);
//reduce is applicable to this case as it takes two parameters at a time and we are providing the whole set of args in one go
// reduce is applicable here as it reduces the array to a single value

function comp(gold,silver,bronze, ...participants){
    console.log(`Gold : ${gold}`);
    console.log(`Silver: ${silver}`);
    console.log(`Bronze: ${bronze}`);
    console.log('Thanks to everyone else : ', participants)
}
comp(10,20,30,'Rohit','Akash','Anuj');