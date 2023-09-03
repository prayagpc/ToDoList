const taskList = document.getElementById("list");
const taskTitleInput = document.getElementById("task-title");
const addTaskButton = document.getElementById("add-task");

// Array to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
                <input type="checkbox" ${task.completed ? 'checked' : ''}>
                <span>${task.title}</span>
                <button data-index="${index}">Delete</button>
            `;
        taskItem.classList.add("task-item");
        taskList.appendChild(taskItem);
    });
}

// Add task event
addTaskButton.addEventListener("click", () => {
    const taskTitle = taskTitleInput.value.trim();
    if (taskTitle) {
        tasks.push({ title: taskTitle, completed: false });
        taskTitleInput.value = "";
        renderTasks();
    }
    else{
     alert("Please input something") 
    }
});

// Delete task event
taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const index = e.target.getAttribute("data-index");
        if (index !== null) {
            tasks.splice(index, 1);
            renderTasks();
        }
    }
});

// Initial rendering
renderTasks();
