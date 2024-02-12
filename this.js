// function getFastLaptop (Laptop1, Laptop2) {
//     if(Laptop1.Processor < Laptop2.Processor)
//         console.log(Laptop1);
//     else
//         console.log(Laptop2)
// };


let Laptop1 = {
    Brand : "Dell",
    Model : "Inspiron 15 3000",
    Processor: "i7-8th Gen",

     compare : function(that){
         if(this.Processor < that.Processor)
         console.log(this);
     else
         console.log(that)
     },

    getConfig :  function(){
        console.log(this.Brand + ", "+ this.Model+ ", "+ this.Processor);
    }
}
let Laptop2 = {
    Brand  : "MacBook Pro",
    Model : "2019",
    Processor: "M2 Gen",

    // compare : function(that){
    //     if(this.Processor < that.Processor)
    //     console.log(this);
    // else
    //     console.log(that)
    // },

    getConfig :  function(){
        console.log(this.Brand + ", "+ this.Model+ ", "+ this.Processor);
    }
}

//Laptop1.getConfig();

if(Laptop1.Brand === Laptop2.Brand){
    console.log("The brands are the same");
}else{
    console.log("The brands are different")
}

//getFastLaptop(Laptop1, Laptop2);
Laptop1.compare(Laptop2)

// if(Laptop1.Processor < Laptop2.Processor)
//     console.log(Laptop1);
// else
//     console.log(Laptop2)

//+ ", "+ this.Model+ ", "+ this.Processor