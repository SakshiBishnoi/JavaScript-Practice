let nums = [99, 44, 38, 66, 200];
//forEach will take one value at a time and assign that value to n = parameter/argument  which is passed
//it will go the funtion and any operations can be performed inside it

//the (n) can be skipped in arrow function
nums.forEach((n,i,nums) => {
    console.log(`The square of ${n} is ${n*n}`); 
    console.log(`${i}  ${nums}`);
})


const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; 
//people.forEach((p,i) => {console.log(p.toUpperCase,i)}); 

for(let i=0;i<=people.length; i++)
    console.log(people[i].toUpperCase());
