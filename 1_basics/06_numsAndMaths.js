// const score  = 700;

// let balance = new Number(700);
// console.log(balance);

// console.log(balance.toFixed(2));
// console.log(balance.toString().length);
// console.log(typeof(balance));

// const anotherNumb = 23.892345678;

// console.log(anotherNumb.toPrecision(3));  // use it wisely as it is exactly works as how much number did u give to the object 

// const price = 10000000000;
// console.log(price.toLocaleString());
// console.log(price.toLocaleString('en-IN'));

// ***************** MATHS ************

//abs -> negative turns to positive   ,  positive remains positive
// console.log(Math.abs(-69));
// console.log(Math.round(4.3));
// console.log(Math.round(4.4));
// console.log(Math.round(4.9));
// console.log(Math.ceil(4.8));
// console.log(Math.floor(4.8));
// console.log(Math.min(1,2,4,5,6,9,8));
// console.log(Math.max(1,2,4,5,6,9,8));

// console.log(Math.random());
// console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min +1) + min));// important for getting range
