// IMP Note - Always use the normal function in .addEventListener because if you use the arrow function and console.log(this) value inside it then value of 'this' will be window but if you use the normal function then value of 'this' will be that element on which the event listener were fired on. 

// console.log("Hey DOM");

let btnPara = document.querySelector(".paraChange");

btnPara.addEventListener("click", function() {
    // console.log("Event Listener fired");
    document.querySelector(".firstPara").textContent = "The paragraph text has changed using JS."
})