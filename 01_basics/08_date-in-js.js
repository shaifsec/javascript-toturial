// Dates

let MyDate = new Date();
// console.log(MyDate.toString()); 
// console.log(MyDate.toJSON());
// console.log(MyDate.toLocaleString());

let myCreateDate = new Date (2023, 1, 23)
// console.log(myCreateDate.toDateString());
// console.log(typeof MyDate); 


let myCreateDate2 = new Date("23-03-2003");
// console.log(myCreateDate2.toLocaleString());


// let myTimeStamp = Date.now();
// console.log(new Date(myTimeStamp).toLocaleString()); // This line will throw an error because myTimeStamp is a number, not a Date object. You should convert it to a Date object first.   


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());



newDate.toLocaleDateString("default", 
    { weekday: "long" }); // "Monday"


