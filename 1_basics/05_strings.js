let myname = "akshay";
let myage  = 23;

console.log(`My Name is ${myname.toUpperCase()} and My Age is ${myage}`);  //String Interpolation


let otherString = new String('akshay');   // making a string as an object

// we can use index value to acess the characters of string directly 

console.log(otherString[1]);
console.log(otherString.__proto__);

let gameName = new String('Olympics-Games');

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('m'));

// other Methods Of string

