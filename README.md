## In todays world, web dev/software dev is all about
- 20% actual coding
- 30% fixing bugs
- 50% management meetings, problem solving & gathering best solutions


ARIA:
Accessible Rich Internet Applications (ARIA) is a set of roles and attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities.


# CSS:
There are 3 types of methods for writing CSS:
1. Inline style
2. Style tag
3. External .css file

# Tailwind CSS:
- In responsiveness of the webpage, the breakpoints that are provided by the Tailwind are mobile first only.
That means imagine that you are building a website for mobile and breakpoints used are for sm screen first then md screen and then lg screens.
- sm: whatever styles you have provided in sm are going to apply to the above sm screens.
- md: whatever styles you have provided in md are going to apply to the above md screens.
- lg: whatever styles you have provided in lg are going to apply to the above lg screens.


# JS:
JavaScript is an Prototype based language and not the object-oriented programming language.

Shift + Alt + A :- for commenting a code or text more than one line.

<!-- Basics -->
- Inbuilt features:
    console.log(), console.alert(), console.warn(), prompt(), alert(), etc..
- Variable constants:
    var, let, const
    let: block scope, re-assignable
    const: block scope, un-assignable
    Hoisting: var is hoisted to the top of the function, let and const are hoisted to the top of the block.
    The values of the variables and constants are stored in heap memory by the browser so they can be used at anywhere.
- Compilers and interpreters:
    Interpreters run the code faster than the compiler but executes the code slower than the compiler.
- Window:
    Window objects are not part of the JS engine like console.log(), prompt(), alert(), they are not part of the JS instead they are the part of the browser.
- Types:
    - Primitive:
        String, boolean, number, float, null, undefined, symbol
    - Non-primitive/Reference:
        array, objects, functions
- Conditionals:
    if, if else
    falsy values: null, undefined, "", '', NaN, 0, document.all(), false
    truthy values: Other than falsy values all values are considered truthy.
- Loops: Repeat
    - Important:
        for: for(START; END; CHANGE){

        }
        forEach: array.forEach((var, index) => {
        })
    - Unimportant:
        do-while: do START;
                while(END){
                    CHANGE
                }
        while: while(end){
                CHANGE
            }
        do-while, forof, forin


<!-- Intermediate -->
    Functions:
        function abc(){
            // function statement
        }
        var abc = function(){
            // function expression
        }
        function(){
            // anonymous function
        }
        var abc = () => {
            // arrow function
        }
        var abc = a => {
            // arrow function with one parameter
        }
        var abc = (a) => {
            return "hello";
            // arrow function with implicit return
        }

    Arrays:
        var arr = [1, 2, 3, 4, 5];
        // array with loop:
            arr.forEach((val) => {
                console.log(val)
            })

    Objects:
        Objects are nothing but to store the many details of single element inside a variable and to fetch them.
        let obj = {
            name: "John",
            surname: "Doe",
            rank: 166
            country: "UK"
        }

    // Off the topic:
    undefined is a value.
    not defined is an error.
    null is also a value.

    Synchronous and Asynchronous:
        Synchronous code runs line by line.
        Asynchronous code runs after all the Synchronous code executed.

# <!-- Advance -->
    this:
        this has a different value in different conditions as follows;
        -global: window
            // console.log(this);

        -function: window
            // function abcd() {f
                console.log(this);
            }
            abcd();

        -method: that object.
                 method means a function declared inside an object for a variable.
            // const obj = {
                name: function(){
                    console.log(this);
                }
            }
            obj.name();

        -fnc inside method(es5): window
            // const obj2 = {
                sayName: function(){
                    function def(){
                        console.log(this);
                    }
                    def();
                }
            }
            obj2.sayName();

        -fnc inside method(es6): that object.
            // const obj3 = {
                age: function(){
                    const name = () => {
                        console.log(this);
                    }
                    name();
                }
            }
            obj3.age();
        -constructor function: new blank object.
            A function that calls with the 'new' keyword is known as a constructor function.
            // function hello() {
                console.log(this);
            }
            const greet = new hello();

        -event listener: that element which has event listener is fired on.
            document.querySelector("button").addEventListener("click", () => {
                console.log(this);
            })

    call: 
        By default the value of 'this' inside a function is 'window', you can change the value of 'this' using function 'call'. Just declare a name inside the 'call' function.
            // let obj = { name: "Tony" };
            function abc(){
                console.log(this);
            }
            abc.call(obj);  OR abc.call(12);

    apply: 
        same as 'call' but it takes an array as a arguments while declaring the parameters for the function.
            // let obj = { name: "Kat" };
            function abc(a, b) {
                console.log(this, a + b);

            }
            abc.apply(obj, [2, 4])
         
         
    bind: 
        same as 'call' but 'bind' returns a function after it called.
        Example 1:
            // let obj = { name: "Javascript" };
            function abc() {
                console.log(this);
            }
            let returnedFnc = abc.bind(obj);
            returnedFnc();
        
        Example 2:
            let person = {
                name: "Ritesh",
                
                greet() {
                    console.log(`Hi ${this.name}, how are you?`);
                }
            }

            person.greet();

            const greetFnc = person.greet.bind({name: "John"});
            greetFnc();


    Constructor Function: A function which uses 'this' OR without 'this'keyword and make new objects with the help of 'new' keyword then that function is called as Constructor function.
        A constructor function always starts with function keyword and no other keyword. Function name should start with a Capital letter.
        //function Human(){

        }
        new Human();
    It returns a blank object.


    Prototypal inheritance:
        Parent function means the schema you required to make an object.
        If you provide default value inside parent function then it will use more data, speed & storage every time you run the child function. So to overcome that you push that default value inside a prototype and then you can access that inside a child function anywhere & anytime.
        // function makeHuman(name, age){
            this.name = name;
            this.age = age;
            }
               
            makeHuman.prototype.printMyName = function(){
                console.log(this.name);
            }
            makeHuman.prototype.category = "employee";

            const human1 = new makeHuman("Boy", 28);
            const human2 = new makeHuman("Girl", 24);

            console.log(human1.printMyName());
            console.log(human1.category);
            console.log(human2.printMyName());
            console.log(human2.category);

    Closures:
        Closures are nothing but a function that returns another function and access the value from its outer lexical scope.
            // function abc(){
                let counter = 3;
                return function(){
                    counter++;
                    console.log(counter);
                }
            }
            let ans = abc();
            console.log(ans());

    Event Bubbling:
    Event Bubbling is a way in which an event is propagated from a deeply nested element up to the top-level document object.

    

    Event Delegation:



    Higher-order-function (hof):
    try & catch:



Set(): It is a method in JS to remove duplicate values from an array/nested array and returns into a new one without duplication.

map():
filter():
reduce():

this:   a value that can be change at any point of time.
    -global: window
    -function: window
    -method: object
    -fnc inside method(es5): window
    -fnc inside method(es6): object
    -constructor fnc: new blank object
    -event listener fnc: that element
Directly declared 'this' inside a function, represents to a window object.

Prototype: (__proto__)
    Prototypes in JS are works as a default version of an object. You can declare or use these __proto__ object values in any other objects.


/* Encapsulation: encapsulation is the concept of restricting access to some of an object's components and only exposing the necessary methods to interact with those components.
In simple words - Encapsulation means a declaring private variables inside a class so that creating a new instance, anyone cannot access those variables directly but if you have declared those variables inside the same objects and inside the same method then by using that method you can access those private variables.
- Method in JS is nothing but a function declared inside an class. */
- the '#' syntax which enforces true privacy.
    // class BankAccount {
        #balance = 0;

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

let aman = new BankAccount();
console.log(aman.greet("Aman"));
console.log(aman.getBalance());
aman.deposit(5000);


/* Abstraction: 
- When a person gets inside a car, he starts the car, accelerate the car and stops the car. Those are the major things are done but the person does not know after he starts the car, what actually happen like how the engine works once ignition is happened. How the breaks are works when he hit the breaks. Those are all the complex logic behind how a car works is abstracted away.
Those hidden complex things and internal logic are hidden are called as abstraction. */ 

// Abstract class (simulation)
class Car {
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
  myGasCar.stop();            // Gas car stopped.


Polymorphism in JS:
    Basically uses 'extends' keyword. Poly means Many & Morphism means Structure.

// Parent class (or base class)
class Animal {
  speak() {
    console.log("The animal makes a sound.");
  }
}

// Child class (or derived class)
class Dog extends Animal {
  speak() {
    console.log("The dog barks.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat meows.");
  }
}

// Usage
const myAnimal = new Animal();
myAnimal.speak();  // Output: The animal makes a sound.

const myDog = new Dog();
myDog.speak();     // Output: The dog barks.

const myCat = new Cat();
myCat.speak();     // Output: The cat meows.


Static in class:
    In JavaScript, static is used in the context of classes, and it refers to methods or properties that belong to the class itself, rather than instances of the class. Static are cannot be called with the new instances rather they directly can be called with the parent class name.

    // class Math{
    static add(a, b){
        return a + b;
    }

    static multiply(x){
        return x * x;
    }
}

let problem1 = new Math(2, 5);
// console.log(problem1.add());  // Error- problem1.add is not a function.

console.log(Math.add(2, 5));
console.log(Math.multiply(2));


# <-- Asynchronous JS -->
    setTimeout: 
        setTimeout is function which takes 2 values,
        1st is the function that will be called and 
        2nd is the time in milliseconds after which the function will be called.
            // setTimeout(() => {
                console.log("Hello!");
               }, 2000)

    setInterval:
        setInterval is same as setTimeout but setTimeout functions runs only  once after the timer expires but setInterval functions runs in the interval of the timer expires.
            // let interval = setInterval(() => {
                console.log("Hello!"); 
               }, 2000);

        You can stop the setInterval function with the help of clearInterval() fnc.
            // clearInterval(interval);

    
    Event Loop:
        Event loop is nothing but an event who checks if the main stack is empty or not. Once all the main stack code runs then all the side stack code will be executed.


    fetch API:
        fetch in JS helps to get data from the outside or helps to post some data on the outside server,
        but the data we get from the outside server aren't going to be in readable form so 1st convert that data into json format using .then method and use that data to display or perform any action using again .then function.
            // fetch(`https://randomuser.me/api/`)
                .then(res => res.json())
                .then(data => console.log(data.results[0].name))


    Axios:
        Axios works same as fetch in JS but axios is an third-party package so you have to install to using 'npm i axios' or else use the script tag in html index file.
        Benefit of axios is we can use .then only once and we get our results using axios.get() while in 'fetch' you have to use .then 2 times to convert the raw data into json format and then to get the results.
        just like axios.get(), you can use axios.post() to post your data.

        // const axios = require(axios);

             axios.get(`https://randomuser.me/api/`)
                .then((results) => console.log(results))


    Promises: 
        Promises are nothing but a asynchronous function which states only 2 things. Promise will either resolve() or reject() so according to that you have to run your code.
            Example 1:
            let userGender =  new Promise((resolve, reject) => {
                fetch(`https://randomuser.me/api/`)
                .then(raw => raw.json())
                .then(data => {
                    // console.log(data.results[0].gender);
                    if (data.results[0].gender === "female") resolve();
                    else reject();
                })
            });

            userGender
            .then(() => console.log("User is a female!"))
            .catch(() => console.log("User is NOT a female!"));


            Example 2:
            function fetchData() {
                return new Promise((resolve, reject) => {
                    let success = true;

                    setTimeout(() => {
                    if (success) {
                        resolve("Data fetched successfully.")
                    } else reject ("Error fetching data..")
                    }, 3000);  
                })
            }

        fetchData()
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
 
        

    Callback function in an async code:
        callback function is a function which you can declare it inside a async which will run after the asynchronous code execution is done.

        callback fnc takes 2 values i.e. 1st is var or URL and 2nd es5/es6 fnc  
        which usually named by "callback" OR "cb".
            // function data(url, callback) {
                fetch(url)
                .then(raw => raw.json())
                .then(response => callback(response))
                }

            data("https://randomuser.me/api/", function (response) {
                console.log(response.results[0].email)
            });
    

    Async/await:
        If you wan to run async code before the synchronous code then thats when the async/await comes up.
        Always use async on the await's parent function.
        Example 1:
        // async function Hello() {
            let a = await fetch("https://randomuser.me/api/")
            a = await a.json()
            console.log(a.results[0].name)
            }

            Hello();

        Example 2:
        function fetchData() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({name: "John", url: "https://johndoe.com"})
                }, 5000);
            })
        }

        async function getData() {
            try {   
                console.log("Fetching user data...");
                const data = await fetchData();
                console.log("User data fetch successfully.");
                console.log("Data:", data);
            }
            catch (error) {
                console.error("Error fetching data.");
            }
        }

        getData();



    Generators:
        Generators are functions which can pause and resume. They can be paused by using 'yield' keyword and resumed by using 'next' keyword.
        They are differentiate by asterisk(*) symbol.

        // function* hello() {
            console.log("Hello");
            yield;
            console.log("World");
            }

            let generator = hello();
            generator.next();
            generator.next();
            generator.next();  // output- undefined


    Web workers:


    # <-- DOM -->
    Document Object Model (DOM) is a an interface for HTML and XML documents. It represents the structure of a document, and it provides methods for accessing and manipulating the document.

    DOM Manipulation:
        DOM Manipulation in simple words means manipulating or making changes to the HTML document by an external script tags.
        Eg. Clicking on a button will cause some changes on the page.

    Accessing Elements:
        Selection:
            # Tag Selection:
            let btn = document.querySelector('button');
            # Class Selection:
            let btn = document.querySelector('.btn');
            # Id Selection:
            let btn = document.querySelector('#btn');

    Modifying Elements:
        .innerHTML, .textContent
            // h1.innerHTML = "<i>Hello</i>"
            // h1.textContent = "Hello"
            // h1.textContent += "World"

    Styling Elements:
        h1.style.color = "red";
        h1.style.font-family = "gilroy";
        # adding a class to an html tag through JS.
        h1.classList.add("header");
        # Removing a class from an html tag through JS.
        h1.classList.remove("header");

    Creating & Deleting Elements:
        .createElement()
            // document.createElement("h1");

        .appendChild()
            // body.appendChild("h1");

        .removeChild()
            // body.removeChild("h1");

    Event Handling:
        It's a function which takes 2 values, 1st is eventListener name and 2nd is the function which will run once the event is fires.
        .eventListener()
            // btn.addEventListener('click', () => {
                alert("Hello..")
            })

        You can track mouse movement on your webpage using 'mousemove' event.
            // body.addEventListener("mousemove", (details) => {
                console.log(details);
                console.log(details.clientX);
                console.log(details.clientX, details.clientY);

