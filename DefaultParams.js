function rollDice(numSides =6){
    return  Math.floor(math.random * numSides) + 1;
}

function greet(person, msg ="Hello, ", punc ="!"){
    console.log(msg + person + punc);
}
greet("Alice"); 
greet("man","Hey","@") ;