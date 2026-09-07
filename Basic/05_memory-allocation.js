// Stack Memory ( Primitive), Heap Memory (non-Primitive) Allocation


let myYoutubeName = "shaifsec";
let anotherName = myYoutubeName;
anotherName = "shaifsec2";

//console.log({ myYoutubeName, anotherName });


let userOne = {
    email: "shaifsec@gmail.com",
    upi: "shaifsec@ybl",

}

let userTwo = userOne;

userTwo.email = "rohan@gmail.com"

console.log({userOne, userTwo});

