function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return `${this.name}, Welcome to our app`
}

let person1 = new Person("Bablu");
console.log(person1.greet());
