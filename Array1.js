

let Arr = new Array();
Array[0]='John';
Array[1]=70;
Array[2]={name:'Jane',age:65};
console.log(Array);

/* Accessing the elements of an array */
console.log('Accessing individual element by index :');
console.log("Person Name :",Array[0]);
console.log("Age : ",Array[1]);

/* Accessing nested object in array*/
console.log('\nAccessing nested object in array :')
let person=Array[2];
console.log("Nested Person Name :",person.name)

/* Modifying the value of an existing element in an array */
Array[1]=80;
console.log("\nModified Age : ",Array[1])

/* Adding new elements to an array */
Array.push('Sara');      //Add at last
console.log('\nAdded Sara : ',Array[3])

Array.unshift('Alice');   // Add at first
console.log('\nAdded Alice : ',Array[0])

/* Deleting an element from an array */
delete Array[3];         //Deletes 'Sara'
console.log('\nAfter deleting Sara : ',Array)

/* Check if property exists in an array using hasOwnProperty() method */
if (Array.hasOwnProperty(1)) {            
    console.log(`The age is ${Array[1]}`)    
} else{
    console.log('No age information available')
}

/* Using pop() and shift() methods */
let removedElementPop=Array.pop();        //Removes and returns the last element
console.log('\nRemoved Element using pop(): ',removedElementPop) 
console.log('\nAfter removing John : ',Array)

let removedElementShift=Array.shift();       //Removes and returns the first element
console.log('\nRemoved Element using shift():',removedElementShift)
console.log('\nAfter removing Alice : ',Array)

/* Sorting arrays */
console.log('\nSorted array: ',Array.sort())

/* Reversing arrays */
console.log('\nReverse array: ',Array.reverse());

/* Joining elements of an array into a string */
let joinResult = Array.join(', ');          //Joins all elements with comma and space
console.log('\nJoin Result : ',joinResult)