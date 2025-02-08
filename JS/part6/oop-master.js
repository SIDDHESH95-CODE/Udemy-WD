/* Encapsulation: encapsulation is the concept of restricting access to some of an object's components and only exposing the necessary methods to interact with those components.
In simple words - Encapsulation means a declaring private variables inside a class so that creating a new instance, anyone cannot access those variables directly but if you have declared those variables inside the same objects and inside the same method then by using that method you can access those private variables.
- Method in JS is nothing but a function declared inside an class. */


class BankAccount {
    #balance = 0

    constructor(initialAmount) {
        if (initialAmount > 0) {
            this.#balance = initialAmount;
        }
    }

    deposit(amount){
        if (amount > 0) {
            this.#balance += amount;
            console.log(`${amount} has been credited to your account.`);
        } else console.error("Amount should be greater than 0.");
    }

    withdraw(amount){
        if (amount > 0 && this.#balance >= amount) {
            this.#balance -= amount;
            console.log(`${amount} has been debited from your account.`);
        } else console.error("You have insufficient balance.");
    }

    greet(name){
        this.name = name;
        return `${this.name}, welcome to your new account.`
    }

    getBalance(){
        return `Your account balance is $${this.#balance}.`
    }
}

// let aman = new BankAccount();
// console.log(aman.greet("Aman"));
// console.log(aman.getBalance());
// aman.deposit(5000);
// console.log(aman.getBalance());
// // aman.withdraw(5000);
// aman.withdraw(5000);



/* Abstraction: 
- When a person gets inside a car, he starts the car, accelerate the car and stops the car. Those are the major things are done but the person does not know after he starts the car, what actually happen like how the engine works once ignition is happened. How the breaks are works when he hit the breaks. Those are all the complex logic behind how a car works is abstracted away.
Those hidden complex things and internal logic are hidden are called as abstraction. */ 

// Abstract class (simulation)
/* class Car {
    // This is the abstract method (to be implemented by concrete classes)
    start() {
      throw new Error('Method "start()" must be implemented.');
    }
  
    accelerate() {
      throw new Error('Method "accelerate()" must be implemented.');
    }
  
    stop() {
      throw new Error('Method "stop()" must be implemented.');
    }
  }
  
  // Concrete class that implements the abstract methods
  class ElectricCar extends Car {
    start() {
      console.log('Electric car started silently.');
    }
  
    accelerate() {
      console.log('Electric car is accelerating smoothly.');
    }
  
    stop() {
      console.log('Electric car stopped.');
    }
  }
  
  class GasCar extends Car {
    start() {
      console.log('Gas car started with a roar.');
    }
  
    accelerate() {
      console.log('Gas car is accelerating with power.');
    }
  
    stop() {
      console.log('Gas car stopped.');
    }
  }
  
  // Usage
  const myElectricCar = new ElectricCar();
  myElectricCar.start();      // Electric car started silently.
  myElectricCar.accelerate(); // Electric car is accelerating smoothly.
  myElectricCar.stop();       // Electric car stopped.
  
  const myGasCar = new GasCar();
  myGasCar.start();           // Gas car started with a roar.
  myGasCar.accelerate();      // Gas car is accelerating with power.
  myGasCar.stop();            // Gas car stopped. */
  


// Polymorphism:


/* class Bird {

    constructor(name){
        this.name = name;
    }
    fly(){
        return `A ${this.name} is a bird and it can fly.`
    }
}

class Penguin extends Bird{
    fly(){
        return `A penguin cannot fly.`
    }
}

let bird = new Bird("sparrow");
let penguin = new Penguin();

console.log(bird.fly());
console.log(penguin.fly()); */


// Static:

class Math{
    static add(a, b){
        return a + b;
    }

    static multiply(x){
        return x * x;
    }
}

let problem1 = new Math(2, 5);
console.log(problem1.add());

// console.log(Math.add(2, 5));
// console.log(Math.multiply(2));