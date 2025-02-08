function Person(name, age) {
    this.name = name;
    this.age = age;
    
    if(age <= 0) {
        throw new Error("Age must be a positive number.");
    }
    
    this.greet = function() {
        return `Hello, my name is ${this.name}`
    }
}

const person1 = new Person("John", -24);
console.log(person1.greet());  