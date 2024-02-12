// for(let i=1; i<5; i++){
//     console.log("Hello" + i);
//     for(let j = 0; j < 3; j++) 
//         console.log(`The value of j is ${j}`);
// }

// for(let i=0;i<=50;i++){
//     if(i%3===0)
//         console.log(i);
// }

 let n = 3457984;
 while(n>0){
     console.log(n%10);
     n = parseInt(n/10);
     //console.log(n);
 }
    

 let num = 3457984;
 let reversed_number = 0;
 while (num > 0) {
   const last_digit = num % 10;
   reversed_number = reversed_number * 10 + last_digit;
   num = parseInt(num / 10);
 }
 console.log(reversed_number); 

