// ******** SingleTon Object ******
// let obj ={}   // non singleton object

let obj = new Object();

obj.id = "abc";
obj.name = "singleton Object";
obj.age = 69;

console.log(obj);


let obj1 = {a :1,b:2};
let obj2 = {c :1,d:2};
let obj3 = {e :1,f:2};
//merging of the objects
// let mergedObject = Object.assign({},obj1,obj2,obj3);   // merging all the subobject value to {} empty object 

let mergedObject = {...obj1,...obj2,...obj3 }

console.log(mergedObject);
// obj3.name = akshay;



/// details comes from DB

const user = [
    {
        id:1,
        email:"user@mail.com"
    },
    {
        id:2,
        email:"user2@mail.com"
    },
    {
        id:3,
        email:"user3@mail.com"
    },
]
console.log(user[1].id);


console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));

console.log(Object.entries(obj));   // gives every key value pair in array "[ [ 'id', 'abc' ], [ 'name', 'singleton Object' ], [ 'age', 69 ] ]"

console.log(obj.hasOwnProperty('id')); // gives boolean Value if key is in the object or not

///// Destructuring of Object /////
let course = {
    name:"js course",
    price: "999",
    author: "akshay"
}

const {author} = course;
console.log(author);
