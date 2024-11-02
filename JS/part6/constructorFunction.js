// Normal Function:
/* function greet {
    console.log("Welcome")
} */


// Constructor Function:
/* function Greet() {

} */


function Person(name, age) {
    this.name = name;
    this.age = age;
    // console.log(this.name, age);
}

let men = new Person("Suchit", 25);
// console.log(men);


function Car(maker, model) {
    this.maker = maker
    this.model = model
}

let myCar1 = new Car("Porsche", "911 turbo S");
// console.log(myCar1);

let myCar2 = new Car("KIA", "Seltos")
// console.log(myCar2);


function Tea(flavor, desc) {
    this.flavor = flavor
    this.desc = function () {
        return `The flavor of the tea is ${flavor}!`
    }
}

let myTea = new Tea("Green tea");
// console.log(myTea);
// console.log(myTea.desc());

Tea.prototype.Country = function () {
    return `${this.flavor} is widely drink in asian countries!`
}

let india = new Tea("Ginger tea");
// console.log(india.Country());



// Error throw in JS:

function Eat(item) {
    if (!new.target) {
        throw new Error(`A "new" keyword should be called before making a new object!`);
    }
    this.item = item;
}

let food = new Eat("Pav Bhaji");
let drink = Eat("Water");

console.log(food);