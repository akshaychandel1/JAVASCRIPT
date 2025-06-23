// console.log('1');

// const promise1 = new Promise(function (resolve,reject) {
//     // Do asyn Tasks
//     //DB Calls, cryptography network
//     console.log(2);
//     resolve()
//     console.log('10');
    
    
//     setTimeout(function(){
//         console.log('Asyn Task Is Complete');
//         // resolve()
//         console.log('3');
//     },2000)    
// }) 
// console.log(4);


// promise1.then(function(){
//     console.log('5');
//     console.log('Promise Consumed');
//     console.log('6');
// })
// console.log('7');


// new Promise(function (resolve,reject) {
//     setTimeout(function(){
//         console.log("Async Task 2");
//         resolve()
//     },1000)
// }).then(function() {
//     console.log('Async Resolved 2');
    
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function() {
//         resolve({username : 'Akshay', age : '23'})
//     },1000)
// })
// promiseThree.then(function(userData) {
//     console.log(userData);
    
// })

// const Promise4 = new Promise(function (resolve,reject) {
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "Akshay Chandel Ji", password:"123"})
//         } else{
//             reject('Error: Something went Wrong')
//         }
//     },2000)
// })
// Promise4.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{               /// This is Called Promise Chaning by using .then
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("promise is finally resolved or rejected");
// })


const Promise5 = new Promise(function (resolve,reject) {
    let error = false
    if (!error) {
        resolve({username:"JS",password:"123"})
    } else{
        reject('Error in Js')
    }
})

// async function consumePromise() {   ///without try catch
//     let response = await Promise5
//     console.log(response);
// }
async function consumePromise() {
    try{
        let response = await Promise5
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromise();


async function getAllUsers() {
 try {
       const response = await fetch('https://api.github.com/users/akshaychandel1')
    const user = await response.json()
    console.log(user);
}
     catch (error) {
    console.log("E:", error);
 }
}
getAllUsers()

fetch('https://api.github.com/users/akshaychandel1')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>console.log(error))