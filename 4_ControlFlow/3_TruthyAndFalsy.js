let userEmail = {}

if (userEmail) {
    console.log("We Got the User Email");
    
} else {
    console.log("Not Get AnyThing");
}

// truthy values = "0","false", etc.....
// false values  = 0,-0, false

let arr = []
if (arr.length === 0) {
    console.log("Array is Empty");
}

let obj = {}
if (Object.keys(obj).length===0) {
    console.log("Object Is Empty");
}


// Nullish Coalishing opreator(??): null undefined

// let val;
// val1 = 5??11;
// val1 =null??11;
// val1 =undefined??2;

// console.log(val1);

// Turnary Opreator ?

let price = 100;
price <=120 ? console.log("Less than 120"): console.log("more thsn 120");

