let Computer = {
    Usuage : "Coding",
    laptop :{
    brand: "Dell",
    model: "Inspiron 15 5000",
    screenSize: 15.6,
    color: "Gray"
    }
};

console.log(Computer.laptop.color, Computer.laptop.model.length, Computer.laptop?.screenSiz?.length); // Gray 23 15.6

delete  Computer.laptop; 

console.log(Computer); 