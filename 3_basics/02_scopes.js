var c = 300;

if (true) {
    let a =10;
    const b = 20;
    var c =30;
}
// console.log(a); // block scope
// console.log(b); // block scope
console.log(c); // global scope it will overwritten
