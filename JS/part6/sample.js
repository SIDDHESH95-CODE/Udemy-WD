// console.log("Hello World");

/* function add(a, b) {
    console.log(a + b);
}

add(233, 434);
add(-2, 1); */


/* const areaOfRectangle = function calculateArea(length, width) {
    if (length <= 0 || width <= 0) {
        throw new Error("Length/width should not be a negative value!");
        
    }
    let area = length * width;
    return `The area of a rectangle is ${area}.`
}

areaOfRectangle(23, 84);
console.log(areaOfRectangle(23, -84)); */



function number(num) {
    if (num % 2 == 0) {
        console.log("Even Number");
    }else console.log("Odd Number");
}

number(0);