// ********FOR LOOP**********
// let arr = [1,3,4,5,6,7,8,9];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Table
// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);        
//     }    
// }

// break and continue

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("5 is Detected");
        // break
        continue
    }
    console.log(`value of i = ${i}`);
}
