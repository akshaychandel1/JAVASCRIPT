// primitive datatypes

// call by value all changes are made to their copies not to orignal value 
// 7 types: String , Number, Boolean, null, undefined , symbol , BigInt

// const id = Symbol('123');
// const anotherId = Symbol('123')

// console.log(id === anotherId);
// console.log(id == anotherId);

//  reference (NON Primitive)
// Array, Object and Functions 

// const arr = [1,2,3,4,5];

let myObject  = {
    myName:"akshay",
    myage:23
}


let myFunctionName = function () {
// This is also a function
}

// function myFuctionName (){
// This is also a function
// }


// ***********  Memory Types ************

// Stack , Heap
// Stack is Used By all the primitive .by value so it gets copy of the orignal value
// Heap is used By all the Non Primitive datatypes by using the refference 

let myName = "akshay";
let myotherName = "akku"

console.log(myotherName);
console.log(myName);


// now with heap it is used by refference
let user1 = {
    eamil : "chandel@gmail.com",    
}

let user2 = user1

user2.eamil = "akshay@gmail.com"
console.log(user1);
console.log(user2);


// Output will be 
// akku
// akshay

// value gets changed in nonprimitive datatypes because it doesnot get copy it gets orignal value from heap
// { eamil: 'akshay@gmail.com' }
// { eamil: 'akshay@gmail.com' }
