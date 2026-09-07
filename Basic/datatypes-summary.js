// Primitive Data Types
// 7 types: Number, String, Boolean, Undefined, Null, Symbol, BigInt

const score = 100; 
const scoreValue = 100.5; 
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;


const id = Symbol(123);
const anotherId = Symbol(123);

console.log(id === anotherId); // false

const bigNumber = 3456789012345678901234567890n;
console.log(bigNumber); // 3456789012345678901234567890n

console.log(typeof score); // number


    
// Reference (Non - Primitive) Data Types , it is donated by []

// Array, Object , Functions 
// Object are in key value pair format {name: "Om", age: 22}

const heros = ["shaktiman", "naagraj", "doga"];

let omObj = {
    name: "Om",
    age: 22,
};


// Functions are also objects in JS

const myFunction = function() {
    console.log("Hello World");
}


console.log(typeof outsideTemp); // object


