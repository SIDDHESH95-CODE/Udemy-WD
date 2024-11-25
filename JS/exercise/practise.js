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


function processTeaOrder() {
  function makeTea() {
     
  }
}