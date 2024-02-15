let Human = {
    Male : {
        age : 25,
        name : "John",
        profession: "Software Developer",
    },
    Female : {
        age : 45,
        name : "Rosy",
        profession: "Baker",
    }
};




for (let key in Human){
 console.log(Human[key]);
}


for ( m of Object.values(Human.Male.age) ) {
   total += m
    console.log(m);
    
}
    
