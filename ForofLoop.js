// fetch values
let nums = [];
nums[0] = 1;
nums[99] = 100;

// for(let n of nums )// n = variable, which will hold one value at a time  from the array "nums"  
//     {//from nums(holds 100 values) one value will be assigned to n and anything can be with that Value
        
//         console.log(n);
//     }

for ( let m in nums){// it will fetch the key of the property and with that key we can fetch the value
    //console.log(m); //gives key 0 , 99
    console.log(nums[m] + ' is on index ' + m );
}

const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for(let n of numbers){
    n = numbers * numbers;
    console.log(n);
}