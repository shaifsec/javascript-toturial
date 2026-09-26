

// function sayMyName (){
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("I");
//     console.log("F");
// }

// sayMyName() // reference and execute


// function addTowNumbers (number1, number2){
//     console.log(number1 + number2);

// }

// addTowNumbers(3,4)
// addTowNumbers(3,"4")
// addTowNumbers(3,"a")
// addTowNumbers(3, null)

function addTwoNumbes (number1, number2){
    let result = number1 + number2 ;
    return result

}

const result = addTwoNumbes(3, 5)
// console.log("Reulst" , result);


function loginUserMessage(username = "guest"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("admin"));

