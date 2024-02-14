// Object = key + Value
// Array - when you  have multiple values for a single Key/or no key.

//let Arr = new  Array();
let Arr = [];

Arr[0] = 'John';
Arr[5] = {name:'Jane',age:23};
Arr[2] = function(){
                        console.log('In Arr, I am a Function');
                    };
console.log(Arr,'\n', Arr.length,'\t', typeof Arr,'\n');
Arr[2](),'\n'; 



let Arr1 = new  Array("John", "Doe");
console.log(Arr1,'\n');
console.log(Arr1[1],'\n', Arr1["1"],'\t' ,typeof Arr1,'\t\n') ;

