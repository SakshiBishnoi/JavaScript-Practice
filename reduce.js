const prices = [ 10.0, 7.5, 6.2, 8.9, 4.3 ];

let total = 0;
for (let price of prices){
    console.log(price);
    total += price;
}
console.log(`total of prices is ${total}`); 

// const total = price.reduce((total,price) => {
//     return total + price;
// })

// const total = price.reduce ((total, price) => total * price ); 

let minPrice = prices.reduce( (total, price) => {
    if(price < min)
        return price;
    else
        return min;
});


const evens = [ 2, 4, 6, 8, 10];
even.reduce((sum, num) => sum + num),100;