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

/* let i = 1;
let sum = 0

while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum); */

/* let i = 5;
let countDown = [];

while (i > 0) {
  countDown.push(i);
  i--
}
console.log(countDown); */

/* let teaCollection = []
let teaType;

do {
  teaType = prompt("Your favorite tea type?");

  if (teaType !== "stop") {
    teaCollection.push(teaType);
  }
} while (teaType !== "stop");

console.log(teaCollection); */

/* let total = 0;
let j = 1;

do {
  total += j;
  j++;

} while (j <= 3);

console.log(total); */

/* let num = [2, 4, 6];
let multipliedNum = [];

for (let i = 0; i < num.length; i++) {
  multipliedNum.push(num[i] * 2)
}
console.log(multipliedNum); */

/* let cityList = [];
let cities = ["Paris", "NewYork", "Tokyo", "London"];

for (let i = 0; i < cities.length; i++) {
  cityList.unshift(cities[i]);
}
console.log(cityList); */


/* let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let t = 0; t < teas.length; t++) {

  if (teas[t] === "chai") {
    break;
  }
  selectedTeas.push(teas[t]);
}
console.log(selectedTeas); */


/* let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let c = 0; c < cities.length; c++) {
  if (cities[c] === "Paris") {
    continue;
  }
  visitedCities.push(cities[c]);
}

console.log(visitedCities); */


/* let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  // console.log(element);
  if (num == 4) {
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers); */


let cityPopulation = {}
let citiesPopulation = {
  "London": 890000,
  "New York": 8400000,
  "Paris": 2200000,
  "Berlin": 3500000
}

for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }

  // console.log(city);
}

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}!`
  }
  return confirmOrder();
}

/* let tea = orderTea("pizza");
console.log(tea); */

// const calculateTotal = (price, quantity) => {
//   return price * quantity
// }

const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(399, 16426);
// console.log(totalCost);


function makeTea(teaOrder) {
  return `MakeTea: ${teaOrder}`
}

function processTeaOrder(teaFn) {
  return teaFn("Earl Grey")
}

// let order = processTeaOrder(makeTea);
// console.log(order);


/* function teaType(typeFn) {
  return `${typeFn}: green tea`;
}


function createTeaMaker(makeFn) {
  return makeFn("Making tea")
}

let teaOrder = createTeaMaker(teaType)
console.log(teaOrder); */


function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}!`
  }
}

let teaOrder = createTeaMaker();
let order = teaOrder("green tea");
// console.log(order);


function sumOfN(n) {
  return n * (n + 1) / 2;
}

let total = sumOfN(10);
// console.log(total);


function printMultiplicationTable(n) {
  let table = [];
  for (let i = 1; i <= 10; i++) {
    let result = n * i;
    table.push(`${n} * ${i} = ${result}`);
  }
  return table;
}

let tableFn = printMultiplicationTable(2);
// console.log(tableFn);


function countVowels(str) {
  const vowels = "aeiouAEIOU";

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

let word1 = countVowels("Hello World");
let word2 = countVowels("aeoiu");
// console.log(word2);


// All the following tasks must be strictly be writtern in arrow functions only.

// Write a function squareNumbers(arr) using map() and arrow functions

let squareNumbers = (arr) => arr.map((num) => num * num);

// Create a function filterEvenNumbers(arr) using filter() and arrow functions

// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions

let sumPositiveNumbers = (arr) => arr.filter((num) => num > 0).reduce((acc, num) => acc + num, 0);

let arr = [
  {
    name: "John",
  }, {
    age: 30,
  }, {
    city: "New York"
  }
]

let getNames = (arr) => (arr.map((elem) => elem.name));
// console.log(getNames(arr));

// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions


// const findLongestWord = (words) => words.map(word => word.length).reduce((acc, word) => );

// console.log(findLongestWord(words));

// console.log(words[0].length);

// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

const words = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "Deserunt", "voluptate", "illo", "ipsam"];

const findLongestWord = (words) => words.reduce((acc, word) => word.length > acc.length ? word : acc, "");

// console.log(findLongestWord(words));

function outer() {
  function inner() {
    return "Inner function called";
  }
  return inner();
}

// console.log(outer());


const numbers = [1, 2, 2, 3, 4, 4, 5];
// let newSet;

const removeDuplicates = (numbers) => {
  let num = new Set(numbers);
  return [...num];
}

// console.log(removeDuplicates(numbers));


let computer = { cpu: 12 };

let lenovo = {
  screen: "Full HD",
  __proto__: computer
}

// Object.setPrototypeOf(computer, lenovo);

// console.log(lenovo);

console.log(this);

