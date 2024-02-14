function Bakery(type, cost){
    this.type = type;
    this.cost = cost;
    this.work = function(){
        console.log("Welcome to our bakery");
    }
}

let item1 = new Bakery("Bread", 5);
let item2 = new Bakery("Pastry", 3) ;
//console.log(item1.work() + "\n" + item1.type + " costs : $" + item1.cost);
console.log(`${item1.work()} ${item1.type} = costs : $ ${item1.cost} \n`);
console.log(`${item2.work()} ${item2.type} = costs : $ ${item2.cost} \n`);
console.log("\n", item1, "\n", item2); 
