let nums = [200, 190, 345, 78, 66];

let result = nums.filter(m => m%2 === 0) // filter method  returns a new array with all the elements that pass the test implemented by the provided function
                 .map(m => m/2) // map method  which will take each element in the array and apply a transformation on it
                 .reduce((a, b) => a + b) // the reduce method which takes two parameters and returns one value
                        console.log(result);                    // in our case it adds all numbers together
                        


//     .forEach((n) => {
//          console.log(n);
// })
//for 2 different function you can use same  variable name but with
//forEach method  is used to perform an action on each item of array one by one and  does not return anything




//ReferenceError -When you try to log m outside the function,it refers to a local variable within the function that you haven't defined.