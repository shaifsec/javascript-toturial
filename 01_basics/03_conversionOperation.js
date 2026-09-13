let score = true;

//console.log(typeof score);
//console.log(typeof (score));

 
let valueInNumber = Number(score);
//console.log(valueInNumber);
//console.log(typeof (valueInNumber));


// "33" => 33 
// "33abc" => NaN
// true => 1
// false => 0

let LoggedIn = 1;
let booleanIsLoggedIn = Boolean(LoggedIn); 
//console.log(booleanIsLoggedIn);


// 1 => true; 0 => false
// "" => false; "shaif" => true

let someNumber = 33;
let stringNumber = String(someNumber); 
//console.log(stringNumber);



// **************** Operations ******************


let value = 3;
let negValue = -value;
//console.log(negValue);
//console.log(2 + 2);
//console.log(2 - 2);
//console.log(2 * 2);
//console.log(2 / 2);
//console.log(2 ** 3);
//console.log(2 % 3);
//console.log(2 / 3);


//let str1 = "Hello";
//let str2 = "Shaif";

//let str3 = str1 + " " + str2;
//console.log(str3);


let gameCounter = 100;
++gameCounter; 
console.log(gameCounter);


// Learn about Prefix and Postfix increment and decrement operators.
//tps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


let x = 3;
const y = ++x; // prefix increment operator. Increment first then assign value to y.

console.log(`x:${x}, y:${y}`);

