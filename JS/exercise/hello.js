
// const axios = require('axios');

/* fetch(`https://randomuser.me/api/`)
.then(res => res.json())
.then(data => console.log(data.results[0].name)) */


// axios.get(`https://randomuser.me/api/`)
// .then(res => console.log(res.data.results[0].name, res.data.results[0].email));


/* let userGender =  new Promise((resolve, reject) => {
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
.catch(() => console.log("User is NOT a female!")); */


/* function data(url, callback) {
    fetch(url)
    .then(raw => raw.json())
    .then(response => callback(response))
}

data("https://randomuser.me/api/", function (response) {
    console.log(response.results[0].email)
}) */

/*     async function Hello() {
        let a = await fetch("https://randomuser.me/api/")
        a = await a.json()
        console.log(a.results[0].name)
    }

    Hello(); */



/* function data(url, callback) {
    fetch(url)
    .then(raw => raw.json())
    .then(response => callback(response))
}

data("https://randomuser.me/api/", (response) => {
    console.log(response.results[0].name);
})



let userGender = new Promise((resolve, reject) => {
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then((data) => {
        if(data.results[0].gender === "male") resolve()
            else reject()
    })
})

userGender
.then(() => console.log("User is a male!"))
.catch(() => console.log("User is NOT a male!"))




async function user() {
    let a = await fetch("https://randomuser.me/api/");
    a = await a.json()
    console.log(a.results[0].name);
}

user(); */


/* function* hello() {
    console.log("Hello");
    yield;
    console.log("World");
    }

    let generator = hello();
    generator.next();
    generator.next();
    generator.next();  // output: undefined */


/*     let btn = document.querySelector('button');
    // let btn = document.querySelector('.btn');
    // let btn = document.querySelector('#btn');

    /* btn.addEventListener('click', () => {
        alert("Hello..")
    }) */

// let body = document.querySelector("body");

// body.addEventListener("mousemove", (details) => {
// console.log(details);
// console.log(details.clientX);
// console.log(details.clientX, details.clientY);
// })


// let btn = document.querySelector(".btn");
// let swap = document.querySelector(".swap");
// let h1 = document.querySelector("h1");
// let img1 = document.querySelector(".img1");
// let img2 = document.querySelector(".img2");
// let src1 = img1.src;
// let src2 = img2.src;
// let inputText = document.querySelector("#name");
// let formSubmit = document.querySelector("#submit");
// let ul = document.querySelector("ul");
// let addList = document.querySelector("#add");
// let removeList = document.querySelector("#add");
// let timerDisplay = document.querySelector("#timer");
// console.log(addList);

/* btn.addEventListener("click", () => {
    h1.textContent = "Greetings.."
    }) */


/*     swap.addEventListener('click', () => {
 img1.src = src2
 img2.src = src1
 }) */

/*    formSubmit.addEventListener("click", (evt) => {
       evt.preventDefault();
       if (inputText.value === "") alert("Input is invalid");
       else console.log(inputText.value);
}) */

/* addList.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = "Apple"
    li.textContent = "Banana"
    ul.appendChild(li);
    console.log(li);
}) */


/* let a = 1;

setInterval(() => {
    timerDisplay.textContent = a;
    console.log(a);
    a++;
}, 1000); */

/* let btnHome = document.querySelector(".homeBtn");
let btnAbout = document.querySelector(".aboutBtn");
let homeSection = document.querySelector("#home");
let aboutSection = document.querySelector(".about"); */

/* btnHome.addEventListener("click", () => {
    console.log("Home");
    console.log(homeSection);
    homeSection.style.display = "block";
}) */


// btnAbout.addEventListener("click", () => {
//     console.log("about");
// })

/* window.addEventListener("scroll", () => {

    const scrlY = window.scrollY;

    console.log(scrlY);
}) */

let parent = document.querySelector(".parent");
let card = document.querySelector(".card");

fetch("https://randomuser.me/api/")
    .then(raw => raw.json())
    .then(data => {
        const {picture, gender, name, email, dob} = data.results[0];
        // console.log(gender, name.first, name.last, email);
        // console.log(data.results[0].dob.age);
         parent.textContent += "HEY";
    }) 