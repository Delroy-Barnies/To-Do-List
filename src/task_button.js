const dialog = document.getElementById("dialog");

export function addTaskButton() {

    const add_task_button_container = document.createElement('div');
    add_task_button_container.className = "add-task-button-container";

    const add_task_button = document.createElement('button');
    add_task_button.className = "add-task-button";
    add_task_button.textContent = "+ Add Task"

    add_task_button.onclick = function () {
        dialog.style.removeProperty('display');
    }

    add_task_button_container.appendChild(add_task_button);

    return add_task_button_container;
}