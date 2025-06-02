const marvel_heros = ["thor","iron man","spiderman"];
const dc_heros = ["batman","superman","wonder woman"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// let arr = marvel_heros.concat(dc_heros);   //returns array with concating both arrays
// console.log(arr);

let arr1 = [...marvel_heros,...dc_heros];    //we can also use spread opreator to add to arrays
console.log(arr1);

let arry = [1,2,3,4,5,[6,5,4],2,3,4,[2,3,4,5,[2,3,4,6]]];
let anotherArry = arry.flat(Infinity);

console.log(anotherArry);

console.log(Array.isArray("Akshay Chandel"));

console.log(Array.from("Akshay Chandel"));  //from sare elements ko alag alag krke array me ek ke baad ek jod deta h 

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1,score2,score3,score4));    // of sabhi ko ek m kr deta h
