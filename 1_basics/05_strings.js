let myname = "akshay";
let myage  = 23;

console.log(`My Name is ${myname.toUpperCase()} and My Age is ${myage}`);  //String Interpolation


let otherString = new String('akshay');   // making a string as an object

// we can use index value to acess the characters of string directly 

// console.log(otherString[1]);
// console.log(otherString.__proto__);

let gameName = new String('Olympics');

// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('m'));

// other Methods Of string

let anotherName = gameName.substring(2,4);
// console.log(anotherName);
let anotherName2 = gameName.slice(-7,4);
console.log(anotherName2);

let anotherString = "            akshay         ";
console.log(anotherString.trim());

let url = "www.gilkoto.shop";
console.log(url.replace('www.','https://'));

let urlName = "akshay";
console.log(urlName.includes('sha'))  //returns true ,false

let urlName2 = new String ('akshay-chandel-ji');
// console.log(urlName2.split('-'));   //"returns array"


// let fun = function isBlank(input) {
//     if (input.length == 0 ) {
     
//     }
// }