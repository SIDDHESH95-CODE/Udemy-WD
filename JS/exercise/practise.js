// // **** DO NOT CHANGE the values *****
// const a = 18;
// const b = 24;

// // Addition of two values
// function add() {
//     return a + b;
// }



// // Subtract small value from larger one
// function subtract() {
//     return b - a;
// }

// function multiply() {
//     return a * b;
// }

// // Divide larger value by small
// function divide() {
//     return b / a;
// }

// // Increase value of a by 1
// function increment() {
//     return a + 1 && b + 1;
// }
// let value = increment();
// console.log(value);

// // Decrease value of b by 1
// function decrement() {
//     return --a && --b;
// }

// // Divide larger value by small to find the reminder
// function reminder() {
//     return b % a;
// }
// let val = reminder();
// console.log(val);



// function removeDuplicates(arr) {
//     return Array.from(new Set(arr))
//   }

//   let arrayFn = removeDuplicates([1, 2, 3, 3, 3, 4, 5]);
//   console.log(arrayFn);

// let i = 1;
// let sum = 0

// while (i <= 5) {
//   sum += i;
//   i++;
// }
// console.log(sum);

/* let i = 5;
let countDown = [];

while (i > 0) {
  countDown.push(i);
  i--
}
console.log(countDown); */

// let teaCollection = []
// let teaType;

// do {
//   teaType = prompt("Your favorite tea type?");

//   if (teaType !== "stop") {
//     teaCollection.push(teaType);
//   }
// } while (teaType !== "stop");

// console.log(teaCollection);

/* let total = 0;
let j = 1;

do {
  total += j;
  j++;

} while (j <= 3);

console.log(total); */

// let num = [2, 4, 6];
// let multipliedNum = [];

// for (let i = 0; i < num.length; i++) {
//   multipliedNum.push(num[i] * 2)
// }
// console.log(multipliedNum);

let cityList = [];
let cities = ["Paris", "NewYork", "Tokyo", "London"];

for (let i = 0; i < cities.length; i++) {
  cityList.push(cities[i]);
}
console.log(cityList);