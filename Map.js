// maps = a collection of key-value pairs.
// key can be any data type or object

let val = new Map();

val.set(1, "one").set("java",10).set("JS",15).set("12","age").set("Sakshi","n").set("rosy",25).set("max",35).set("max",50).set("0","age"); 

console.log(val.keys(),val.values());  // returns an iterator for keys and values respectively
console.log(val.has("name"));   // checks if the given key is present in map or not, return true/false
console.log(val.get("rosy"));    // gets the value associated with the given key, if no such key presents
//console.log(val.set("name","John")) ; // set method to add value with corresponding key orit will overwrite the previous value if same key is used again

for( let [k,v]of val)
    {console.log(k," - ",v);
    } 