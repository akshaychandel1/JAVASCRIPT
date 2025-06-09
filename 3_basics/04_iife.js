// Immediately Invoked Function Expression
// to remove the global scope pollution so that our this function will not get affected

(function one() {
    //named iife immediately invoked function axpression
    console.log(`DB CONNECTED`);
}) (); //this two brackets are one for call and second for exectution always use semicolon ;

(()=>{console.log(`DB Connected Two`)})();
((name)=>console.log(name))("akshay");