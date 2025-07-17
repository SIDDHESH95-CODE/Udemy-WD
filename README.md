## In todays world, web dev/software dev is all about

- 20% actual coding
- 30% fixing bugs
- 50% management meetings, problem solving & gathering best solutions

ARIA:
Accessible Rich Internet Applications (ARIA) is a set of roles and attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities.


# HTML:

HTML meta description tag helps to show the content about your webpage on the the search page.
    syn:
        <meta name="description" content="Learn the purpose of HTML description elements.">



# CSS:

There are 3 types of methods for writing CSS:

1. Inline style
2. Style tag
3. External .css file

- "em" & "rem" units are used when the user tries to increase the font size of their browsers.
- "rem" units are preferred over pixels(px) for typography because they scale proportionally with the user's browser settings.

- What are examples of functional pseudo-classes?
Functional pseudo-classes allow you to select elements based on more complex conditions or relationships. Unlike regular pseudo-classes which target elements based on a state, for example, :hover, :focus, functional pseudo-classes accept arguments within parentheses, hence the name "functional pseudo-classes".

Examples of functional pseudo-classes are:
:is()
:where()
:has()
:not()


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

    try & catch:

Set(): It is a method in JS to remove duplicate values from an array/nested array and returns into a new one without duplication.

map():
The map() method creates a new array by applying a given function to each element in the original array.
It does not modify the original array.
Syntax:
let newArray = array.map(callback(currentValue, index, array));
It takes a callback function inside with the three parameters where index and array are optional.
eg. let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((elem) => elem + 1);
console.log(newArr); // [2, 3, 4, 5, 6]

filter():
The filter() method creates a new array with all elements that pass the condition specified in the given function. It is used to filter out elements that do not meet the condition.
Syntax:
let newArray = array.filter(callback(currentValue, index, array));
eg. let arr = [1, 2, 3, 4, 5];
let newArr = arr.filter((elem) => elem > 3);
console.log(newArr); // [1, 2]

reduce():
The reduce() method reduces an array to a single value by applying a function (called a reducer function) that takes an accumulator and the current element.
Syntax:
let result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);

    Parameters:
        callback (Required):
            A function that is applied to each element of the array.
        accumulator:
            The accumulated value that gets updated after each iteration. This is where the result is built up.
        currentValue:
            The current element being processed in the array.
        index (Optional):
            The index of the current element.
        array (Optional):
            The array on which reduce() was called.
        initialValue (Optional):
            The initial value to start the accumulator with. If not provided, the first element of the array is used.
        Returns:
            A single value (such as a sum, product, or transformed result) after applying the reducer function to all elements.
    eg.
        const numbers = [1, 2, 3, 4];
        const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log(sum);   // 10

this: a value that can be change at any point of time.
-global: window
-function: window
-method: object
-fnc inside method(es5): window
-fnc inside method(es6): object
-constructor fnc: new blank object
-event listener fnc: that element
Directly declared 'this' inside a function, represents to a window object.

Prototype: (**proto**)
Prototypes in JS are works as a default version of an object. You can declare or use these **proto** object values in any other objects.

/\* Encapsulation: encapsulation is the concept of restricting access to some of an object's components and only exposing the necessary methods to interact with those components.
In simple words - Encapsulation means a declaring private variables inside a class so that creating a new instance, anyone cannot access those variables directly but if you have declared those variables inside the same objects and inside the same method then by using that method you can access those private variables.

- Method in JS is nothing but a function declared inside an class. \*/
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

/\* Abstraction:

- When a person gets inside a car, he starts the car, accelerate the car and stops the car. Those are the major things are done but the person does not know after he starts the car, what actually happen like how the engine works once ignition is happened. How the breaks are works when he hit the breaks. Those are all the complex logic behind how a car works is abstracted away.
  Those hidden complex things and internal logic are hidden are called as abstraction. \*/

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
myElectricCar.start(); // Electric car started silently.
myElectricCar.accelerate(); // Electric car is accelerating smoothly.
myElectricCar.stop(); // Electric car stopped.

const myGasCar = new GasCar();
myGasCar.start(); // Gas car started with a roar.
myGasCar.accelerate(); // Gas car is accelerating with power.
myGasCar.stop(); // Gas car stopped.

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
myAnimal.speak(); // Output: The animal makes a sound.

const myDog = new Dog();
myDog.speak(); // Output: The dog barks.

const myCat = new Cat();
myCat.speak(); // Output: The cat meows.

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
// console.log(problem1.add()); // Error- problem1.add is not a function.

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

React JS: - create-react-app is outdated now and no longer in use instead of creating a react app with 'npm create vite@latest'


/ ---------------------------------------------------------------- /

.charCodeAt("A");   // Output: 65
.charCodeAt("a");   // Output: 97
.fromCharCode(65);  // Output: A
.fromCharCode(97);  // Output: a3333333333333
"FreeCodeCamp".indexOf("F");    // Output: 0
"FreeCodeCamp".indexOf("f");    // Output: -1
.includes();    
.slice(startIndex, endIndex);
.toUpperCase();
.toLowerCase();
.replace(searchValue, newValue);
.repeat(-1) // RangeError: negative value not allowed.
.repeat(0) // Output: ""
"Hello".repeat(2) // Output: "HelloHello"
trim();
trimStart();
trimEnd();
operator precedence: 2 + 3 * 4  // Output: 15   Multiplication consider as higher precedence.
Unary Operators: +, -, !, ~, void, typeof
Bitwise Operators: Special characters based on binary representation of numbers. 0/1
-   AND (&), OR (|), XOR (^), NOT (~), left shift (<<), and right shift (>>)
-   AND (&): returns a 1 in each bit position for which the corresponding bits of both operands are 1. Here's an example:
        let a = 5;  // Binary: 101
        let b = 3;  // Binary: 011
        console.log(a & b);  // Output: 1 (Binary: 001)
-   OR (|): returns a 1 in each bit position for which the corresponding bits of either or both operands are 1. For example:
        let a = 5;  // Binary: 101
        let b = 3;  // Binary: 011
        console.log(a | b);  // Output: 7 (Binary: 111)
-   XOR (^): returns a 1 in each bit position for which the corresponding bits of either, but not both, operands are 1. For instance:
        let a = 5;  // Binary: 101
        let b = 3;  // Binary: 011
        console.log(a ^ b);  // Output: 6 (Binary: 110)
-   NOT (~): inverts all the bits of its operand. For example:
        let a = 5;  // Binary: 101
        console.log(~a);  // Output: -6
-   left shift (<<): shifts all bits to the left by a specified number of positions. For example:
        let a = 5;  // Binary: 101
        console.log(a << 1);  // Output: 10 (Binary: 1010)
-   right shift (>>): shifts all bits to the right. For example:
        let a = 5;  // Binary: 101
        console.log(a >> 1);  // Output: 2 (Binary: 10)
Nullish Coalescing Operator: Helpful when you want to return a value, only if the first one is null or undefined. Example:
        const userSettings = {
        theme: null,
        volume: 0,
        notifications: false,
        };

        let theme = userSettings.theme ?? 'light';
        console.log(theme); // light

Math.random(): generate random number between 0 - 1. 
Math.min(): returns minimum value.
Math.max(): returns maximum value.
Math.ceil(): will round (4.3) UP to the nearest whole integer, which is 5.
Math.floor(): will round (4.3) DOWN to the nearest whole integer, which is 4.
Math.round(): hybrid of Math.ceil() and Math.floor(). (2.3); // 2, (4.8); // 5
Math.trunc(): removes the decimal part and returns only integer portion.
Math.sqrt(): square root of a number. (81); // 9
Math.cbrt(): square root of a number. (27); // 3
Math.abs(): returns absolute value of a number. (-5); // 5, (5); // 5
Math.pow(): takes two numbers and raise the first to the power of the second.
            (2, 3); // 8,   (8, 2); // 64

.parseFloat(): A method that parses a string argument and returns a floating-point number. Example:
        console.log(parseFloat("3.14"));     // Output: 3.14
        console.log(parseFloat("3.14 abc")); // Output: 3.14
        console.log(parseFloat("3.14.5"));   // Output: 3.14
        console.log(parseFloat("abc 3.14")); // Output: NaN

.parseInt(): parses a string argument and returns an integer.
        console.log(parseInt("42"));       // Output: 42
        console.log(parseInt("42px"));     // Output: 42
        console.log(parseInt("3.14"));     // Output: 3
        console.log(parseInt("abc123"));   // Output: NaN

.toFixed(): number of digits to appear after the decimal point. Example:
        let num = 3.14159;
        console.log(num.toFixed(2)); // Output: "3.14"
    Please note that it also rounds the number to the nearest value. Example:
        console.log((3.14159).toFixed(3));  // Output: "3.142"
        console.log((3.14449).toFixed(3));  // Output: "3.144"
        console.log((3.14550).toFixed(3));  // Output: "3.146"
    It rounds up when the next digit is 5 or greater, and rounds down otherwise.
    It's important to note that .toFixed() returns a typeof string, not a number.

Global scope variable:  Variables declared in a global state.
        let globalVar = "I'm a global variable";

        function printGlobalVar() {
            console.log(globalVar);
        }

        printGlobalVar(); // Output: "I'm a global variable"

Function scope variable: Variables declared in a function state.
        function printFuncVar() {
            let funcVar = "I'm a function variable"
            console.log(funcVar);
        }

        console.log(funcVar); // Output: ERROR: funcVar is not defined.

Block scope variable: Variables declared in a block{} state.
        if (true) {
            let blockVar = "I'm in a block";
            console.log(blockVar); // Output: "I'm in a block"
        }

        console.log(blockVar); // This will throw an error


Arrays:

indexOf(element): to find index of a particular item from an array.
indexOf(element, searchIndex): to search from the specified item. It is optional.

shift(): add item to the start of an array.
unshift(): remove item to the start of an array.
push(): add item to the end of an array.
pop(): remove item to the end of an array.

splice(): removes items within the array. It mutates the original array.
    array.splice(startIndex, itemsToRemove, item1, item2):
        - 'startIndex' specifies the index at which to begin modifying the array.
        - 'itemsToRemove' is an optional parameter indicating how many elements to remove. If 'itemsToRemove' is omitted, splice() will remove all elements from startIndex to the end of the array.
        - The parameters (item1, item2, and so on) are the elements to be added to the array.
Example:
    let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
    let removed = fruits.splice(2, 2);

    console.log(fruits);  // ["apple", "banana", "kiwi"]
    console.log(removed); // ["orange", "mango"]

includes(): It's case sensitive. Returns boolean value: true/false.
    let fruits = ["apple", "banana", "orange", "mango", "kiwi"];

    fruits.includes("apple"); // true
    fruits.includes("Apple"); // false

    includes(searchValue, searchAfterIndex):
        let numbers = [10, 20, 30, 40, 50, 30, 60];
        console.log(numbers.includes(30, 3)); // true
        console.log(numbers.includes(30, 4)); // true
    value 30 is present after index[3] & index[4].

Shallow Copy of an array:
1. concat(): This method creates a new array by merging two or more arrays.
example: 
    let originalArray = [1, 2, 3];
    let copyArray = [].concat(originalArray);

    console.log(copyArray); // [1, 2, 3]
    console.log(copyArray === originalArray); // false

2. slice(): When called without arguments, slice() returns a shallow copy of the entire array.
example: 
    let originalArray = [1, 2, 3];
    let copyArray = originalArray.slice();
    let copyAnotherArray = originalArray.slice(1, 2); //array.slice(startI, endI)

    console.log(copyArray); // [1, 2, 3]
    console.log(copyAnotherArray); // 2
    console.log(copyArray === originalArray); // false

2. spread operator[...array]: When called without arguments, slice() returns a shallow copy of the entire array.
example: 
    let originalArray = [1, 2, 3];
    let copyArray = [...originalArray.slice];

    console.log(copyArray); // [1, 2, 3]
    console.log(copyArray === originalArray); // false


OBJECTS: 
    almost everything in JavaScript is an object or can be treated as one. This includes arrays, functions, and even primitive data types like strings and numbers when used in certain ways.
Example:
// Dot notation is the most common and straightforward way to access object properties.
    const person = {
        name: "Alice",
        age: 30,
        city: "New York"
    };
    console.log(person.name);  // Alice
    console.log(person.age);


// Bracket notation is more flexible than dot notation because it allows you to use property names that aren't valid JavaScript identifiers. You can use spaces fpr the property names.
const oddObject = {
  "1stProperty": "Hello",
  "property with spaces": "World"
};

console.log(oddObject["1stProperty"]);  // Hello
console.log(oddObject["property with spaces"]); // World

Object Destructuring:
    const person = { name: "Alice", age: 30, city: "New York" };

    const { name, age } = person;

    console.log(name); // Alice
    console.log(age);  // 30

delete:
    To delete/remove properties from an object.
Example:
    const person = {
        name: "John",
        age: 30,
        job: "Engineer"
    }

    delete person.job;
    console.log(person.job);  // undefined

Another way to remove properties is by using destructuring assignment with rest parameters.
Example:
    const person = {
        name: "Bob",
        age: 25,
        job: "Designer",
        city: "New York"
    };

    const { job, city, ...rest } = person;
    console.log(rest);  // { name: "Bob", age: 25 }


There are several ways to check if an object has a specific property:
hasOwnProperty(): returns a boolean value.
Example:
    const person = {
        name: "Bob",
        age: 25,
        skill: undefined
    };

    console.log(person.hasOwnProperty("name"));  // true
    console.log(person.hasOwnProperty("job"));  // false

"in" operator: 
    console.log("name" in person);  // true
    console.log("job" in person);  // false

checking if a property is 'undefined': It has some limitations
    console.log(person.name !== undefined);  // true
    console.log(person.job !== undefined);  // false
    console.log(person.skill !== undefined);  // false

There are 2 ways to grab the nested object property from an object:
Example:
    const person = {
        name: "Alice",
        age: 30,
        contact: {
            email: "alice@example.com",
            phone: {
            home: "123-456-7890",
            work: "098-765-4321"
            }
        }
    };

    console.log(person.contact.phone.work);  // 098-765-4321 
    console.log(person['contact']['phone']['work']);  // 098-765-4321

Object() Constructor:
    a constructor is a special type of function used to create and initialize objects. It is invoked with the "new" keyword.
new Object(): It creates a new empty object.
    The Object() constructor can be used with or without the new keyword.
Example:
    const num = 42;
    const numObj = Object(num);

    console.log(numObj);  // 42
    console.log(typeof numObj);  // "object"

Optional Chaining Operator:
    The optional chaining operator (?.) is a useful tool in JavaScript that lets you safely access object properties or call methods without worrying whether they exist.
        const person = {
            name: "Alice",
            age: 30
        };
        console.log(person.address.street); // This will throw an error!
Example: (?.)
    const user = {
        name: "John",
        profile: {
            email: "john@example.com",
            address: {
            street: "123 Main St",
            city: "Somewhere"
            }
        }
    };

    console.log(user.profile?.address?.street); // "123 Main St"
    console.log(user.profile?.phone?.number);   // undefined

JSON.parse(): Used to convert JSON string into JS object.
Example:
    const jsonString = '{"name":"John","age":30,"isAdmin":true}';
    const userObject = JSON.parse(jsonString);
    console.log(userObject);    
    // {
        name: "John",
        age: 30,
        isAdmin: true
        }


JSON.stringify(): Used to convert JS object into JSON string.
    Optional: JSON.stringify(value, replacer, space)
Example:
    const user = {
        name: "John",
        age: 30,
        isAdmin: true
    };

    const jsonString = JSON.stringify(user);
    console.log(jsonString);    // '{"name":"John","age":30,"isAdmin":true}'


for loop:
    for (initialization; condition; update) {
        // code block to be executed
    }

for of loop:  works with arrays.
    for (variable of iterable) {
        // code block to be executed
    }

for in loop:  works with objects.
    for (variable in object) {
        // code block to be executed
    }
Example1:
    const fruit = {
        name: 'apple',
        color: 'red',
        price: 0.99
    };

    for (const prop in fruit) {
        console.log(fruit[prop]);
    }
    Output: "apple"
            "red"
            0.99
Example2:
Code:
const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Downtown',
    state: 'CA'
  }
};

function isObject(obj) {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

for (const prop in person) {
  if (isObject(person[prop])) {
    for (const nestedProp in person[prop]) {
      console.log(person[prop][nestedProp]);
    }
  } else {
    console.log(person[prop]);
  }
}
Output: "John"
        30
        "123 Main St"
        "Downtown"
        "CA"

while loop: loop runs as long as the while condition is true.
    while(condition) {
        // code block to be executed
    }
Example:
let userInput = prompt("Please enter a number between 1 and 10");

while (isNaN(userInput) || Number(userInput) < 1 || Number(userInput) > 10) {
  userInput = prompt("Invalid input. Please enter a number between 1 and 10.");
}

alert("You entered a valid number!");

do while loop: loop runs as long as the while condition is true but it runs at least once.
    do {
        // code block to be executed
    } while (condition);
Example:
let userInput;

do {
  userInput = prompt("Please enter a number between 1 and 10");
} while (Number(userInput) < 1 || Number(userInput) > 10);

alert("You entered a valid number!");


break & continue statements in for loop:
    A break statement is used to exit a loop early, while a continue statement is used to skip the current iteration of a loop and move to the next one.
Example:
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break;
        }
        console.log(i);
    }   // Output: 0, 1, 2, 3, 4

    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            continue;
        }
        console.log(i);
    }   // Output: 0, 1, 2, 3, 4, 6, 7, 8, 9


Number() constructor:
- used with 'new' keyword - 
Example:
    let num = new Number("34");
    console.log(num);   // 34
    console.log(typeof num);    // "object"

- used without 'new' keyword - 
Example:
    let num = Number("43");
    console.log(num);    // 43
    console.log(typeof num); // "number"

- other functionality - 
Example:
    let num = Number("");   // Output: 0
    let num = Number("string");   // Output: NaN
    let num = Number(true);   // Output: 1
    let num = Number(false);   // Output: 0
    let num = Number(undefined);   // Output: NaN
    let num = Number(null);   // Output: 0

- with arrays -
Example:
    const emptyArr = Number([]);    // 0
    const arrOneNum = Number([7]);  // 7
    const arrMultiNum = Number([7, 36, 12]);    // NaN
    const arrStr = Number(["str1"]);    // NaN
    const arrMultiStr = Number(["str1", "str2"]);   // NaN

- with objects, the result is always NaN -
Example:
    const obj1 = Number({});    // NaN
    const obj2 = Number({2: 2});    // NaN
    const obj3 = Number({key: "val"});  // NaN
    const obj4 = Number({key: true});   // NaN


Two ways to create new empty arrays:
    const empArr = new Array(5);
    console.log(empArr);    // [,,,,]

    const empArr = Array.from({ length: 5 });
    console.log(empArr);    // [undefined,undefined,undefined,undefined,undefined]

    const newArr = new Array(5).fill(3);
    console.log(newArr);    // [3,3,3,3,3]


Closures:
    closure is a function that has access to variables in its outer enclosing lexical scope, even after the outer function has returned. 
Example:
    function outerFunction(x) {
        let y = 10;
        function innerFunction(){
            console.log(x + y);
        }
        return innerFunction;
    }

    let closure = outerFunction(5);
    closure(); // Output: 15

Closures are particularly useful for creating private variables and functions:
Example:
   function createCounter() {
        let count = 0;
        return function () {
            count++;
            return count;
        };
    }

    let counter = createCounter();
    console.log(counter()); // Output: 1
    console.log(counter()); // Output: 2

sort():
Sorting Strings (Default Behavior):
    The sort method is used to arrange the elements of an array and returns a reference to the sorted array. 
    Sorts elements in the array alphabetically based on Unicode points. A-Z then a-z
    It mutates the original array.
Example:
    let fruits = ["orange", "apple", "banana"];
    fruits.sort();
    console.log(fruits);    // ["apple","banana","orange"]
Capital initials have higher priority:
    let fruits = ["orange", "apple", "Banana"];
    fruits.sort();
    console.log(fruits);    // ["Banana","apple","orange"]


Sorting Numbers (Must Use Compare Function):
    let numbers = [10, 2, 5, 1];
    numbers.sort();     // Incorrect
    console.log(numbers);   //  [1,10,2,5]
    numbers.sort((a, b) => a - b);     // Correct: ascending 
    numbers.sort((a, b) => b - a);     // Correct: descending 
    console.log(numbers);   //  [1,2,5,10]

Sorting Objects by Property:
    let users = [
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 35 }
    ];

    // Sort by age
    users.sort((a, b) => a.age - b.age);

Sorting Strings (Case-Sensitive vs Case-Insensitive):
    let words = ["Mango", "lichi", "Jackfruit"];
    words.sort(); 
    console.log(words);     // ["Jackfruit","Mango","lichi"] 

    // Case-insensitive:
    words.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    console.log(words);     // ["Jackfruit","lichi","Mango"]

.sort() modifies the original array so to avoid mutation of original array use .slice() before,
    let sorted = numbers.slice().sort((a, b) => a - b);

forEach(): // It works on the array but does not return value in an array.
    numbers.forEach((value, index, array) => {
        console.log(`Element ${value} is at ${index} in array ${array}`)
    })
Example:
    let numbers = [1, 2, 3, 4, 5];
    numbers.forEach(number => console.log(number * 2));
Output: 2
        4
        6
        8
        10 

Higher Order Functions:
    a higher order function is a function that either takes one or more functions as arguments, returns a function, or both.
Example:    // function 'abc' is knows as higher order function in below,
    function abc(val){
        val();
    }

    abc(function(){
        console.log("hello);
    })

Pure and Impure Functions:
    A function which does not change/affect any outside value then it's a "pure" func.
    and
    A function that changes the value outside its scope then that's a "impure" func.

IIFE: (Immediately Invoked Function Expression)
    A function expression that immediately invoked or call.
Example:
    (function abc(){
        console.log("hello");
    })()

map(): It returns value in an array also returns the same length of parent array.
Example:
    const numbers = [3, 4, 5, 6, 7].map((element, index, array) => {
        console.log("Element:", element);
        console.log("Index:", index);
        console.log("Array:", array);
        return element * 2;
    });


filter(): It checks the condition and returns only those values from the array.
    If no elements in the array pass the test, it returns an empty array.
Example:
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumbers = numbers.filter((number, index) => number % 2);

    console.log(evenNumbers);   // [2, 4, 6, 8, 10]


reduce(): It checks the condition and return a single value.
    This single value can be a number, a string, an object, or even another array.
Example:
    const arr = [1, 2, 3, 4, 5];
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);   // 15
acc: accumulator - initial/0th index variable from the array
curr: current - current value
0: defaultInitialValue - if you pass 1 then it will start from 1.
    If the defaultInitialValue don't provide then it uses the first element of the array as the initial value.


find():
    It usually checks to see the value provided is matching to the value from the array or objects.
Example:
    let obj = [{ id: 1, letter: a }, { id: 2, letter: b }, { id: 3, letter: c }];
    let foundValue = obj.find((val) => {
        return val.id === 1;
    })
    console.log(foundValue);


Method chaining:
    It allows you to call multiple methods on the same object in a single line of code
Example:
    const result = "  Hello, World!  "
    .trim()
    .toLowerCase()
    .replace("world", "JavaScript");

    console.log(result); // "hello, JavaScript!"


every():
    It tests whether all the elements in an array pass a test implemented by a provided function.
    Returns true/false
Example:
    const numbers = [2, 4, 6, 8, 10];
    const hasAllEvenNumbers = numbers.every((num) => num % 2 === 0);
    console.log(hasAllEvenNumbers); // true

some():
    It checks at least one element passes the test.
Example:
    const numbers = [1, 3, 5, 7, 8, 9];
    const hasSomeEvenNumbers = numbers.some((num) => num % 2 === 0);
    console.log(hasSomeEvenNumbers); // true


DOMContentLoaded event:
    The DOMContentLoaded event is fired when everything in the HTML document has been loaded and parsed. If you have external stylesheets, or images, the DOMContentLoaded event will not wait for those to be loaded. It will only wait for the HTML to be loaded.
Example:
HTML:   
<h1>Image Change on DOM Loaded</h1>
<img
  id="example-img"
  src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
  alt="Cat relaxing"
/>
JS:
function changeImg() {
  const img = document.getElementById("example-img");
  img.src =
    "https://cdn.freecodecamp.org/curriculum/responsive-web-design-principles/FCCStickers-CamperBot200x200.jpg";
  console.log("image was just changed");
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", changeImg);
} else {
  console.log("DOMContentLoaded has already fired");
  changeImg();
}

<!--
 document.readyState = "loading";   // The document is loading.
 document.readyState = "interactive";   // The document has finished loading and we can access DOM elements. Sub-sources such as scripts, images, stylesheets and frames are still loading.
 document.readyState = "complete";  // The page is fully loaded.
 -->


requestAnimationFrame() API:
    It is a method that allows you to schedule the next step of your animation before the next screen repaint, resulting in a fluid and visually appealing experience.
Syn: requestAnimationFrame(callback);
Example:
CSS:
    .rect {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 400px;
        height: 250px;
        border-radius: 5px;
        background-color: #1b1b32;
        color: #f5f6f7;
        font-size: 2rem;
        position: absolute;
    }
JS:
// reference the rectangle
const rect = document.getElementById("rect");

// start with a position of 0
let position = 0;

function update() {
  // Move the rectangle 2px to the right
  rect.style.left = position + "px";
  position += 2;

  // Reset the position when the rectangle reaches
  // the right side of the screen
  if (position > window.innerWidth) {
    // Move the rectangle just outside the left side of the screen
    position = -rect.offsetWidth;
  }
}

function animate() {
  // Update the position
  update();

  //request the next frame
  requestAnimationFrame(animate);
}

// Start the animation
requestAnimationFrame(animate);


Web Animations API (WAAPI):
    It allows you to create and control animations directly within JavaScript. With WAAPI, you can work with animations more dynamically, making it easier to manipulate them.
Syn:    element.animate(keyframes, options);
Example:
HTML:
<div class="square" id="square"></div>

<button id="playBtn">Play</button>
<button id="pauseBtn">Pause</button>

CSS:
.square {
  background: #1b1b32;
  width: 10rem;
  aspect-ratio: 1/1;
  margin-bottom: 20px;
}
button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
}

JS:
const square = document.querySelector("#square");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");

const animation = square.animate(
  [{ transform: "translateX(0px)" }, { transform: "translateX(200px)" }],
  {
    duration: 5000, // Animation lasts 5 seconds
    // iterations: Infinity, // Loops indefinitely
    direction: "alternate", // Moves back and forth
    easing: "ease-in-out" // Smooth easing function
  }
);

// Set the onfinish property to log a message when the animation ends
animation.onfinish = () => {
  console.log("Animation finished!");
};

// Play the animation when the "Play" button is clicked
playBtn.addEventListener("click", () => {
  animation.play();
  console.log("You start the animation");
});

// Pause the animation when the "Pause" button is clicked
pauseBtn.addEventListener("click", () => {
  animation.pause();
  console.log("You pause the animation");
});


'dialog' in JS:
    With HTML's built-in dialog element, you can easily create these dialogs (both modal and non-modal dialogs) in your web apps.
    It uses with showModal() and close() methods.
HTML:
<dialog id="my-modal">
   <p>This is a modal dialog.</p>
   <button id="close-modal">Close Modal</button>
</dialog>
<button id="open-modal">Open Modal Dialog</button>
JS:
const dialog = document.getElementById("my-modal");
const openButton = document.getElementById("open-modal");
const closeButton = document.getElementById("close-modal");

openButton.addEventListener("click", () => {
  dialog.showModal();
});

openButton.addEventListener("click", () => {
  dialog.show();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});


Deep Clone in Objects:
    In objects, if there are nested objects available and if you are trying to duplicate it by using spread operator then it won't work as it will change the value of original object value also.
Example:
    let obj = {
        name: "abc",
        rank: 12,
        role: {
            construction: "admin"
        }
    }

    let obj2 = {...obj};
    obj.role.construction = "hr";   // It will change the value from the original
'obj' also. To prevent this use deep clone.

    let obj2 = JSON.parse(JSON.stringify(obj));
    obj2.role.construction = "hr";


Object.keys:
    It will give you all the keys from the object inside an array.
Example:
    let obj = {
        name: "abc",
        rank: 12,
        role: {
            construction: "admin"
        }
    }
    console.log(Object.keys(obj));  // ["name", "rank", "role"]

Object.entries:
    It will provide you keys with its value in an array formed.
Example:
    console.log(Object.entries(obj));
    //  [["name","abc"],// [object Array] (2)
        ["rank",12],// [object Array] (2)
        ["role",// [object Object] 
        {
        "construction": "admin"
        }]]


debugger:
    The debugger statement is a powerful JavaScript tool that lets you pause your code at a specific line to investigate what's going on in the program.
    It will only works if your browser console is open.
Example:
    function calculateTotalPrice(price, discountPercentage) {
    debugger    // code will stop here
    let discountAmount = (price * discountPercentage) / 100
    let totalPrice = price - discountAmount

    console.log(`Original Price: ${price}`)
    console.log(`Discount Amount: ${discountAmount}`)
    console.log(`Total Price after Discount: ${totalPrice}`)

    return totalPrice
    }

    let price = 100
    let discount = 15

    let finalPrice = calculateTotalPrice(price, discount)
    console.log(`Final Price: ${finalPrice}`);


console.table():
    It will show the output in tabular form in the console. It requires to provide data in array or object format.
Example:
    const obj = [{ id: 1, name: "John", location: "New Zealand"}, 
    { id: 1, name: "Sam", location: "New York"}]

    console.table(obj);
    
