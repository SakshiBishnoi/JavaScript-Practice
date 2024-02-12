let num2 = 10/5, num3 = 10+5, num1 = 10%5, num4 = 10-5, num5 = 10*5;
console.log(num1,num2,num3,num4,num5)

if(num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5)
    console.log(num1 + " is Smallest");
else if (num2 < num3 && num2 < num4 && num2 < num5)
    console.log(num1 + " is Smallest");
else if (num3 < num4 && num3 < num5)
    console.log(num3 + " is Smallest"); 
else if (num4 < num5)
    console.log(num4 + " is Smallest");
else 
    console.log(num5 + " is Smallest");