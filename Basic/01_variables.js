const accountId = 14453 
let accountEmail = "shaif@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState; 

//accountId = 2
accountEmail = "hc@hc.com"
accountPassword = "2121212"
accountCity = "Mumbai"
console.log(accountId);

/*
Prefer not to use var because of issue in block scope and hoisting. Use let and const instead. 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])



 