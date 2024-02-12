let globalname = "Sakshi";
function great(g){
    let localnum = 10 + 10;
    console.log(localnum);
    return (`Hello, ${g} How are you?`)
}

//let user = "bishnoi"
//console.log(great(localnum))
let some = great(globalname)
console.log(some); 



function another(n1,n2,n3=null){
    console.log(n1,n2,n3);
    return parseInt(n1*n2*n3)
}

result = another(2,2,2);
console.log(result);