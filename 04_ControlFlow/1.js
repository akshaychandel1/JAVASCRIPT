// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// and if 

let loggedIn = true;
let debitCard = true;
let loggedInFromGoogle = true;
let loggedInFromEmail = false;

if (loggedIn && debitCard) {
    console.log("You Can Buy Course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("You can enter as you are logged in to the site");
    
}
