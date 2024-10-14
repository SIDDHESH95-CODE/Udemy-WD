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
console.log(totalCost);