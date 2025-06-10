//for of loop

// let arr = [1,2,3,4,5,6]

// for (const val of arr) {
//     console.log(val);
// }

// let greet = "Hello World!";
// for (const char of greet) {
//     console.log(char);
// }

/////// MAP ////////

const mapVal = new Map()
mapVal.set('In',"India")
mapVal.set('USA',"America")
mapVal.set('Eu',"Europe")

// console.log(mapVal);

// Give Values in Form Of Array
for (const key of mapVal) {
    console.log(key);
}
// Give Values in Form of Key and Value Pair  destructured the Array
for (const [key,val] of mapVal) {
    console.log(key, ':-', val);
}

