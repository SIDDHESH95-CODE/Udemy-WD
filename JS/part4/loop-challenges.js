/* 1. Write a "while" loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named "sum". */

let sum = 0;
let i = 1;

while (i <= 5) {
    sum += i;   // sum = sum + i
    i++;
}
// console.log(`The sum of all numbers from 1 to 5 is ${sum}.`);


/* 2. Write a loop that counts down from 5 to 1 and stores the numbers in an array named "countdown". */

let countdown = [];
let j = 5;
while (j >= 1) {
    countdown.push(j);
    j--;
}
// console.log(countdown);


/* 3. Write a "do while" loop that prompts a user to enter their favorite tea type until they enter "stop".
Store each tea type in an array named "teaCollection". */


/* 4. Write a "do while" loop that adds numbers from 1 to 3 and stores the result in variable named "total". */

let total = 0;
let k = 1;

do {
    total += k;
    k++ 
} while (k <= 3);

// console.log(total);


/* 5. Write a "for" loop that multiplies each element in the array "[2,4,6] by 2 and stores the result in a new array named "multipleNumbers" */

let num = [2,4,6];

let multipleNumbers = num.map(item => {
    return item * 2;
})

console.log(multipleNumbers);