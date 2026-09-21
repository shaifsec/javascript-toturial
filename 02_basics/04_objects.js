// const tinderUser = new Object() // singleton
const tinderUser = {} // non-singleton
tinderUser.id = "123abc"
tinderUser.name = "Shaif"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Shaif",
//             lastname:"Ali",
//         }
//     }
// }

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);



const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2}

// console.log(obj3);

// const users = [
//     {
//         id: 1,
//         age: 19,
//         email: "shaif@gmail.com"
//     },
//     {
//         id: 2,
//         age: 20,
//         email: "hacker@gmail.com"
//     },
//     {
//         id: 3,
//         age: 19,
//         email: "meena@gmail.com"
//     }
// ]

// console.log(users[1].email);



// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "shaif"

}
// course.courseInstructor
const {courseInstructor: instructor} = course
console.log(instructor);


