// function addTwoNums(num1,num2) {
//     console.log(num1+num2);
// }

// addTwoNums(4,8);
// function addTwoNums(num1,num2) {
//     // let result = num1 +num2 ;
//     // return result;
//     return num1+num2;
// }
// let result = addTwoNums(1,5)
// console.log(result);

// function userIsLogged(username) {
//     return `${username} just LoggedIn`;
// }

// console.log(userIsLogged("Akshay"));

// function userIsLogged(username) {
//     if(!username)
//     {
//         console.log("enter your username");
//         return
//     }
//      return console.log(`username is ${username}`);
// }
// console.log(userIsLogged("Akshay Chandel"));

// function calculateCartPrice(...price) {
//     return price;
// }
// console.log(calculateCartPrice(200,550,400,310,540,670));


// let product = {
//     name : "socks",
//     price : "199"
// }
// function handleObject(anyObject) {
//     console.log(`Name of Product is ${anyObject.name}  and the price of the product is ${anyObject.price}` );
// }
// handleObject(product);


// function objectpassinghandling(anyObject){
//     console.log(`Name of Product is ${anyObject.name}  and the price of the product is ${anyObject.price}`);   
// }

// objectpassinghandling({
//     name:"socks",
//     price:299
// })


const newArray =[1,2,3,4,5]

function returnSecondValue(getArray){
    console.log(getArray[1]);
}
returnSecondValue(newArray);