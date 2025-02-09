// IMP Note - Always use the normal function in .addEventListener because if you use the arrow function and console.log(this) value inside it then value of 'this' will be window but if you use the normal function then value of 'this' will be that element on which the event listener were fired on. 

// console.log("Hey DOM");


// Example 1:

/* let btnPara = document.querySelector(".paraChange");

btnPara.addEventListener("click", function() {
    // console.log("Event Listener fired");
    document.querySelector(".firstPara").textContent = "The paragraph text has changed using JS."
}) */


// Example 2:

/* let btn = document.querySelector(".btnChocolate");
let targetUl = document.querySelector("ul");
btn.addEventListener("click", function(){
    targetUl.querySelectorAll("li")[0].style.backgroundColor = "yellow";
    }) */
   
   
// Example 2:
let btn = document.querySelector(".btnCoffee");
let targetUl = document.querySelector("ol");
btn.addEventListener("click", function(){
    targetUl.querySelectorAll("li")[0].textContent = "Americano";
})

