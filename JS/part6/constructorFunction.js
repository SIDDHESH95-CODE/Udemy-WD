function Human(name, gender){
    this.name = name
    this.gender = gender
    this.greet = function() {
        return `Hello ${name}, how are you as you are ${this.gender}.`
    }
}

let person1 = new Human("Siddhesh", "male");
let person2 = new Human("Paula", "female");
// console.log(person1.greet());
// console.log(person2.greet());



function Chai(name){
    this.name = name;
    this.drinking = function() {
        return `I am drinking a ${name} tea. It's my favorite.`
    }
}

let tea = new Chai("lemon");
console.log(tea.drinking());

 
