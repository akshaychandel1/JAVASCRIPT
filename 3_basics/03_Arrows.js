const user = {
    username : "akshay",
    rollno : 21,

    fun: function() {
        console.log(`${this.username} is loggedIn`);
        console.log(this);
    }
}
// user.fun();
// user.username = "sam";
// user.fun();

// console.log(this);  // yeah empty aayega qunki we are working inside node environment but it will return window inside browser

// function one() {
//     let username = "chandel";
//     console.log(this.username);   // this keyword wont work in function this work with object not with the function
//     }
// console.log(one());


// arrow function
let varFun = (num1,num2)=>{
    return num1+num2;
}

console.log(varFun(3,4));

//implecet return function   no need to write return keyword
// let add2 = (num1,num2) => num1 +num2;
// no need to write return keyword
let add2 = (num1,num2)=>(num1+num2)
console.log(add2(3,6));

// wrapping of the objectr in the curly brackets in fat arrow function

let objwrraping =()=>({username:"Akshay Chandel"})
console.log(objwrraping());
