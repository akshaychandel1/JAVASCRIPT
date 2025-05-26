// const accountID = 1234;
// // accountID =2348;  Throw error not allowed to change const
// // console.log(accountID);

var a = "akshay";
{
    a = "chandel";
}
console.log(a);    // it means yeah scope of block nhi smjh paa rha h isliye hum isse use nhi krte 

let b = "hi";
console.log(b);
{
    b = "hello";
    b = "hii"
}
console.log(b)

// let is block scope and var is functional scope
// myName = "akshay";
// myName = "chandel"
// console.log(myName);

// const rollNumber //cannot do that const should be declared
// let rollNumber;
// console.log(rollNumber); // undefined 
