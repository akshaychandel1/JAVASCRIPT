var c = 300;

if (true) {
    let a =10;
    const b = 20;
    var c =30;
}
// console.log(a); // block scope
// console.log(b); // block scope
// console.log(c); // global scope it will overwritten


// closure property

// function one (){
//     let num = 1;
//     function two(){
//         let num2 = 2;
//         add = num + num2;
//         console.log(add);
//         // console.log(num);
//     }
//     console.log(two());
    
//     // console.log(num2);//out of scope
//     // console.log(num);
// }
// // console.log(add);
// console.log(one());



// **************** MINI HOISTING ****************

console.log(addone(5));
function addone(num){
    return num + 1; 
}
//  function is called before it is craeated

let add2 = function(num2) {
    return num2 + 2;
}
console.log(add2(5));

