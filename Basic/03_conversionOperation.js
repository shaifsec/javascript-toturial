let score = true;

console.log(typeof score);
console.log(typeof (score));

 
let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof (valueInNumber));


// "33" => 33 
// "33abc" => NaN
// true => 1
// false => 0

let LoggedIn = 0;
let booleanIsLoggedIn = Boolean(LoggedIn); 
console.log(booleanIsLoggedIn);


// 1 => true; 0 => false
// "" => false; "shaif" => true

let someNumber = 33;
let stringNumber = String(someNumber); 
console.log(stringNumber);
