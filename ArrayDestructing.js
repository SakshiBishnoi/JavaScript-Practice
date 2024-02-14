let nums = [1, 2, 3, 4, 5];
//let [a, b, ...c] = nums; // a=1, b=2, c=[3,4,5] //... means rest of the elements
let [a, b,,, e] = nums;
console.log(e); 

let x = 100;
let y = 2;

[x,y]  = [y,x];
console.log(x,y);

let str = "i am trying".split(" ");
let [u,v,w,m] = str;
console.log(m);
//console.log(str.split(" "));   // ["i", "am", "trying"]// it an array now