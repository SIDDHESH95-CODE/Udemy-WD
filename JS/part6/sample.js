console.log("sample");

function Human(name, age) {
    this.name = name;
    this.age = age;
}

Human.prototype.greet = function() {
    return `He's name is ${this.name} and he's age is ${this.age}!`
}

const person1 = new Human("Siddhesh", 29);
// console.log(person1.greet);

console.log(person1.greet()); 
