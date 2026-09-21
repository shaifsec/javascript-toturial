// singleton


// object literals

// Object.create

const mySym = Symbol("key1")


const JsUser = {
    name: "Shaif",
    "full-name": "Shaif Ali",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "shaif@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturdar"]
}

// console.log(JsUser)

// console.log(JsUser["email"])
// console.log(JsUser[mySym])


// JsUser.email = "shaif2@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "shaif3@gmail.com"

JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
