const myLan = {
    js:"javascript",
    cpp:"c++",
    py:"python"
}

/// For In Loop Used Only For Getting the Keys of the Object 

// for (const key in myLan) {
//     console.log(key);
// }



/////  FOR IN
// FOR  IN LOOP for Getting the key and Values both for the Object
// for (const key in myLan) {
//     console.log(`${key} :- ${myLan[key]}`);
//      // it gives us keys of object for value we need to give it inside the nameofobject[key]
// } 

const programming = ["js","cpp","py","java"]
for (const key in programming) {
    console.log(programming[key]);
    // it gives us keys of array for value we need to give it inside the nameofarray[]
}

// ALso Remember Maps Are Not Itteratiable