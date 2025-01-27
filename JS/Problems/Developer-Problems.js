// console.log("Developer problems");

let userBtn = document.querySelector("#userBtn");
let cards = document.querySelector(".cards");

/* userBtn.addEventListener("click", () => {
    // console.log("hello");
    newUser();
}) */


/* let newUser = () => {
    fetch("https://randomuser.me/api/")
    .then(raw => raw.json())
    .then(data => {
        console.log(data.results[0]);
        const { name, gender, email, picture } = data.results[0];
        cards.innerHTML += `<div class="card w-50 bg-zinc-600 py-5 px-4 text-white rounded-lg">
                <img src=${picture.large} alt="" class="w-20 h-20 object-cover rounded-sm bg-zinc-500 overflow-hidden">
                <h1 class="font-semibold text-xl mt-2">${name.first + " " + name.last}</h1>
                <h4 class="text-sm opacity-60 mt-2">${gender}</h4>
                <h4 class="text-xs opacity-60 w-[95%] overflow-hidden">${email}</h4>
                <p class="text-xs opacity-80 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus amet ratione eius dolorum sed explicabo!</p>
            </div>`
    })
} */

/* ------------------------------ */

let blockUser = document.querySelector("#block");
let unblockUser = document.querySelector("#unblock");
let userInfo = document.querySelector("h1 span")

blockUser.addEventListener("click", () => {
    localStorage.setItem("block", true);
    info();
})
unblockUser.addEventListener("click", () => {
    localStorage.setItem("block", false);
    info();
})

function info() {
    if (localStorage.getItem("block") === "true") {
        userInfo.textContent = "Blocked"
    }
    else userInfo.textContent = "Unblocked"
}