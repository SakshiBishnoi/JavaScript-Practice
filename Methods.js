//add function to a object
// object = Variable ===data(we know something)  + Method/Function=== behaviour(we do something)
//Methods  are functions attached to an object.

let Laptop = {
    Brand : "Dell",
    Model : "Inspiron 15 3000",
    Processor: "i7-8th Gen",
    RAM : "8GB",
    Display:"15.6 Inch FHD",
    Color :"Black",

    value :  function(){
        console.log("hi inside  the value method");
    }
}
Laptop.value();