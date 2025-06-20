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

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function() {
        resolve({username : 'Akshay', age : '23'})
    },1000)
})
promiseThree.then(function(userData) {
    console.log(userData);
    
})

const Promise4 = new Promise(function (resolve,reject) {
    setTimeout((){},2000)
})