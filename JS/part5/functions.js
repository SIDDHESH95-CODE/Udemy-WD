/* 1. Write a function named "makeTea" that takes one param, "typeOfTea" and returns a string like "making green tea" when called with "green tea".
Store the result in a variable named "Greet". */

function makeTea (typeOfTea) {
    return `"Making ${typeOfTea}"`;
}

let Greet = makeTea("green tea");
// console.log(Greet);


/* 2. Create a function named "orderTea" that takes one param, "teaType". Inside that function create another function named "confirmOrder" that returns a message says "Order is confirmed for chai!".
Call "confirmOrder" from within "orderTea" and returns the result.  */

function orderTea(teaType) {
    function confirmOrder() {
        return `"Order is confirmed for ${teaType}!"`;
    }
    return confirmOrder();
}

let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);


/* 3. Write an arrow function named "calculateTotal" that takes 2 params, "price" & "quantity".
The function should return the total cost by multiplying the "price" and "quantity".
Store the result in a new variable named "totalCost" */

const calculateTotal = (price, quantity) => {
    return price * quantity;
}

// const calculateTotal = (price, quantity) => price * quantity;

const totalCost = calculateTotal(399, 9576);
// console.log(totalCost);


/* 4. Write a function named "processTeaOrder" that takes another function, "makeTea" as a parameter and calls with the argument "earl grey".
Return the result of calling "makeTea". */

function makeTea(typeOfTea) {
    return `maketea: ${typeOfTea}`
}
function processTeaOrder(teaFn) {
    return teaFn("earl grey")
}

let order = processTeaOrder(makeTea);
// console.log(order);


/* 5. Write a function named "createTeaMaker" that returns another functions. The returned function should take another parameter "teaType" and return a message like "Making green tea!".
Store the returned function in a variable named "teaMaker" and call it with "green tea". */



function createTeaMaker() {
    return function (teaType) {
        return `"Making ${teaType}"`;
    }
}

let teaMaker = createTeaMaker();
// console.log(teaMaker);
let result = teaMaker(("green tea"));
// console.log(result);



function whatAmI(input) {
    const type = typeof(input);
    return `"I'm a ${type}!"`
}

let ans = whatAmI("heelo");
console.log(ans);

function flipBoolean(input) {
    const boolean = Boolean(input);
    return !boolean ? true : false;
}

let val = flipBoolean(true);
// console.log(val);


function isItTruthy(input) {
    return input ? "It's truthy!" : "It's falsey!";
}

let value = isItTruthy("heeloo");
// console.log(value);