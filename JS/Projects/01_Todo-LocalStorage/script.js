document.addEventListener("DOMContentLoaded", () => {
    let input = document.querySelector("#todo-input");
    let btnTask = document.querySelector("#add-task-btn");

    let tasks = JSON.parse(localStorage.getItem("task")) || [];

    tasks.forEach(task => renderTask(task));

    btnTask.addEventListener("click", () => {

        let inputText = input.value.trim();
        if (inputText === "") {
            return;
        }

        const taskObj = {
            id: Date.now(),
            text: inputText,
            isAdded: false
        }

        tasks.push(taskObj);

        saveTask(tasks);
        console.log(tasks);

        // console.log("clicked");
    })

    function renderTask(task) {
        console.log(task);
    }

    function saveTask() {
        localStorage.setItem("task", JSON.stringify(tasks));
    }

})