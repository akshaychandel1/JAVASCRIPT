//objects singleton and literals

//Singleton
// Object.create

// Object Literals

const users = {
    name: "akshay",
    age: 23,
    location: "Japan",
    email:"akshay2102@gmail.com"
}

// console.log(users.name);
// console.log(users["name"]);
let mysym = Symbol("passkey");

let myobj = {
    [mysym]:"passkey"
}
// console.log(myobj[mysym]);


users.greeting = function () {
    return(`hello users from functions, ${this.name}`);    
}

console.log(users.greeting());
