let arr = [1, 2, 3, 4, 5, 6,7,8,9];
arr.push(0,12, 0); // will add an element at the end of an array
arr.pop(); // will remove an element at the end of an array
arr.shift(); //will remove an element at the start of an array
arr.unshift(100); // will add an element at the start of an array
arr.splice(4, 2, 1050); // will delete elements starting from index 1 and take out
console.log(arr);