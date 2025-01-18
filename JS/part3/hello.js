
const axios = require('axios');

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


function* hello() {
    console.log("Hello");
    yield;
    console.log("World");
    }

    let generator = hello();
    generator.next();
    generator.next();
    generator.next();  // output: undefined












