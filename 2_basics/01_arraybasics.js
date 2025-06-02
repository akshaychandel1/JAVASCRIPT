// ***********Arrays***********


// const arr2 = new Array(1, 2, 3, 4, 5, 6);
// console.log(arr2);

let arr = [0,1,2,3,4,5];
// console.log(arr[0]);
// **********Methods of Array**********
// arr.push(66);
// arr.push(7);
// arr.pop();
// // console.log(arr);

// arr.unshift(33);   // add element at first
// arr.unshift(9);
// arr.shift();    // remove from first
// console.log(arr.indexOf(66));

// console.log(arr.includes(66));

// console.log(arr);


const arr3 = arr.join();    // turns array to string
console.log("A", arr3);

// ********* Slice and Splice **************
console.log(arr3.slice(0,4));

console.log("B",arr3);
// console.log(arr3.splice(0,4));   // returned removed array 