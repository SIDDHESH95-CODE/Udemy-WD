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



function removeDuplicates(arr) {
    return Array.from(new Set(arr))
  }

  let arrayFn = removeDuplicates([1, 2, 3, 3, 3, 4, 5]);
  console.log(arrayFn);
