// const user = {
//     username: "Akshay",
//     signedIN: true,
//     getAllUsers: function(){
//         // console.log('Got user details from database');
//         // console.log(this.username);
//         console.log(this);
//     }
// }
// console.log(user.getAllUsers());



function User(username,isLoggedIn){
    this.username = username;
    this.isLoggedIn = isLoggedIn;
}
const UserOne = new User("Akshay",12)
const UserTwo = new User("Chandel",21)
console.log(UserOne.constructor);
// console.log(UserTwo);
