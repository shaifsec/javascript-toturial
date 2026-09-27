

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





function calculateCartPrice(...num1){
    return num1

}

// console.log(calculateCartPrice(200, 300, 400));


const user = {
    username: "shaif",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);


}
handleObject(user)


const myNewArray = [ 200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[3]
}

console.log(returnSecondValue(myNewArray));


