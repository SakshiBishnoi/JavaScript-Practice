function allEvens(arr){
    return arr.every(num => num%2 === 0)
}
// every method returns boolean if all elements in the array pass a test implemented by the provided function, otherwise
console.log(allEvens([1,3,5])) // false
console.log(allEvens([2,4,6])) // true

let  allPrime = ar => ar.some(n => n%3 === 0);
// some method returns a boolean if any element in the array satisfies the condition provided by arrow function
console.log(allPrime([7,9,11]));//false
console.log(allPrime([8,9,11]));//true