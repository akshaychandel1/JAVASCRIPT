const myLan = {
    js:"javascript",
    cpp:"c++",
    py:"python"
}

/// For In Loop Used Only For Getting the Keys of the Object 

// for (const key in myLan) {
//     console.log(key);
// }

// FOR  IN LOOP for Getting the key and Values both for the Object
for (const key in myLan) {
    console.log(`${key} :- ${myLan[key]}`);
} 