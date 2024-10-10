// Check if a number is greater than another number:
let num1 = 15;
let num2 = 12;

// console.log(num1 < num2);

if (num1 < num2) {
    console.log("num2 is greater than num1");
} else {
    console.log("num1 is greater than num2");
}


// Check if a string is equal to another string:
let username = "josh";
// let anotherUsername = "josh"
let anotherUsername = "Paula"

if (username == anotherUsername) {
    console.log("Username already exists!");
} else {
    console.log("User created!");
}


// Check if a variable is a number or not:
let count = 33000;
let str = "Hello";
let isAdded = false

if (typeof count) {
    console.log(`Provided variable value is a ${typeof count}.`);
}

if (typeof str) {
    console.log(`Provided variable value is a ${typeof str}.`);
}

if (typeof isAdded) {
    console.log(`Provided variable value is a ${typeof isAdded}.`);
}


// Check if an array is empty or not:
let arr = ["Hello"];

if (arr.length == 0) {
    console.log("You have provided an empty array!");
} else {
    console.log("Your array is filled.");
}

