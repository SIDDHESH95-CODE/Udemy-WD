In todays world, web dev/software dev is all about
- 20% actual coding
- 30% fixing bugs
- 50% management meetings, problem solving & gathering best solutions


ARIA
Accessible Rich Internet Applications (ARIA) is a set of roles and attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities.


CSS:
There are 3 types of methods for writing CSS:
1. Inline style
2. Style tag
3. External .css file

Tailwind CSS:
- In responsiveness of the webpage, the breakpoints that are provided by the Tailwind are mobile first only.
That means imagine that you are building a website for mobile and breakpoints used are for sm screen first then md screen and then lg screens.
- sm: whatever styles you have provided in sm are going to apply to the above sm screens.
- md: whatever styles you have provided in md are going to apply to the above md screens.
- lg: whatever styles you have provided in lg are going to apply to the above lg screens.


JS:
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
        forEach:
    - Unimportant
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
            return "hello"; /aUIO
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

<!-- Advance -->
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
        same as 'call' but it 'bind' returns a function after it called.
            // let obj = { name: "Javascript" };
            function abc() {
                console.log(this);
            }
            let returnedFnc = abc.bind(obj);
            returnedFnc();

    Constructor Function: A function which uses 'this' OR without 'this'keyword and make new objects with the help of 'new' keyword then that function is called as Constructor function.
        //function human(){

        }
        new human();
    It returns a blank object.


    Prototypal inheritance:
        Parent function is basically means the schema you required to make an object.
        If you provide default value inside parent function then it will use more data, speed & storage every time you run the child function. So to overcome that you push that default value inside a prototype and then you can access that inside a child function.
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
                let a = 32;
                return function(){
                    console.log(a);
                }
            }
            let ans = abc();
            console.log(ans());

    Event Bubbling:
    Event Delegation:
    Higher-order-function (hof):
    try & catch:


    Asynchronous




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

call():
apply():
bind():

Prototype: (__proto__)
    Prototypes in JS are works as a default version of an object. You can declare or use these __proto__ object values in any other objects.

