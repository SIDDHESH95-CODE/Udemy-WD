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

let teaCollection = [];
let tea;

do {
    tea = prompt(`Enter your favorite tea type (type "stop" after you are done!)`);
    if (tea !== "stop") {
        teaCollection.push(tea);
    }

} while (tea !== "stop");


/* 4. Write a "do while" loop that adds numbers from 1 to 3 and stores the result in variable named "total". */

let total = 0;
let k = 1;

do {
    total += k;
    k++ 
} while (k <= 3);

// console.log(total);


/* 5. Write a "for" loop that multiplies each element in the array "[2,4,6] by 2 and stores the result in a new array named "multipleNumbers" */

let num = [2, 4, 6];
let multipleNumbers = [];

for (let h = 0; h < num.length; h++) {
    multipleNumbers.push(num[h] * 2);
}
console.log(multipleNumbers);

// let num = [2,4,6];

// let multipleNumbers = num.map(item => {
//     return item * 2;
// })

// console.log(multipleNumbers);


/* 6. Write a "for" loop that lists all the cities in the array "["Paris", "New York", "Tokyo", "London"]" and stores each city in a new array named "cityList".  */

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let c = 0; c < cities.length; c++) {
    cityList.push(cities[c]);
}
console.log(cityList); 