let input = document.querySelector("#todo-input");
let taskBtn = document.querySelector("#add-task-btn");


let tasks = [];

taskBtn.addEventListener("click", () => {
    // console.log("clicked");

    let taskInput = input.value.trim();

    if (taskInput === "") {
        return;
    }

    let newTask = {
        id: Date.now(),
        text: taskInput,
        isAdded: false
    }
    tasks.push(newTask);

    input.value = "";  // Clear the input.
    console.log(tasks);
})