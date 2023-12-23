import "./styles.css";
import { createItem } from "./item";
import { control_images } from "./control_images";
import { addTaskButton } from "./task_button";
import delete_project_img from "../src/icons/9040415_folder_x_icon.svg"


const dialog = document.getElementById("dialog");
const edit_dialog = document.getElementById('edit-dialog');


// function for handling projects and custom projects
const projects = (function () {

    // obtain all project elements
    const content = document.getElementById('content');
    let default_projects = document.querySelectorAll('.project');

    const custom_projects = document.querySelector('.custom-projects');
    const add_project_button = document.querySelector('.add-project-btn');
    const project_form = document.getElementById('project-form');
    const save_button = document.querySelector('.save-project-btn');
    const cancel_button = document.querySelector('.cancel-project-btn');
    const input = document.querySelector('.project-title');

    let project_contents = [];
    let stored_projects = [];

    // create each projects default contents
    const addProjectContents = function (project) {
        const task_list = document.createElement('div');
        task_list.className = "default-list";
        task_list.appendChild(addTaskButton());

        const content_container = document.createElement('div');
        content_container.className = "content-container";
        content_container.id = project.id;

        const page_title = document.createElement('h1');
        page_title.textContent = project.id.toUpperCase();

        // add delete project button to custom projects
        if (project.id.toUpperCase() != "HOME" && project.id.toUpperCase() != "TODAY" && project.id.toUpperCase() != "WEEK") {

            const page_header = document.createElement('div');
            page_header.className = "default-list-head";

            const delete_project = new Image();
            delete_project.src = delete_project_img;
            delete_project.width = '50px';

            const delete_project_container = document.createElement('div');
            delete_project_container.className = "visible";
            delete_project_container.title = "delete project";

            delete_project_container.appendChild(delete_project);
            page_header.appendChild(page_title);
            page_header.appendChild(delete_project_container);
            content_container.appendChild(page_header);

            delete_project.onclick = function () {
                content.removeChild(content_container);
                custom_projects.removeChild(project);
            }

        }
        else {
            content_container.appendChild(page_title);
        }

        content_container.appendChild(task_list);
        content.appendChild(content_container);
        project_contents.push(content_container);
    }

    // add a new project
    add_project_button.onclick = function () {

        add_project_button.style.display = 'none';
        project_form.style.display = 'flex';

        const new_project = document.createElement('li');
        new_project.className = "project";

        // save project
        save_button.onclick = function () {

            if (input.value == '') {
                alert('Project needs a title!');
            }
            else if (stored_projects.includes(input.value)) {
                alert('This Project already exists!');
            }
            else {
                new_project.textContent = input.value;
                new_project.id = new_project.textContent;
                custom_projects.appendChild(new_project);
                default_projects = document.querySelectorAll('.project');

                stored_projects.push(new_project.id);

                addProjectContents(new_project);
                handleProject(new_project);

                project_form.style.display = "none";
                add_project_button.style.display = 'inline';

            }
        }

        // cancel
        cancel_button.onclick = function () {

            project_form.style.display = "none";
            add_project_button.style.display = 'inline';
        }
    }

    // create each default projects contents
    default_projects.forEach(project => {
        addProjectContents(project);
    });

    return { default_projects, project_contents, stored_projects, custom_projects, addProjectContents };

})();


// load all previous projects from local storage
function loadAllCustomProjects() {

    let stored_projects = localStorage.getItem('projects');
    stored_projects = stored_projects.split(",");

    if (stored_projects.length == 1) {
        stored_projects.shift();
    }

    stored_projects.forEach(project => {

        const new_project = document.createElement('li');
        new_project.className = "project";
        new_project.textContent = project;
        new_project.id = project;

        projects.stored_projects.push(project);
        projects.custom_projects.appendChild(new_project);
        projects.addProjectContents(new_project);
        handleProject(new_project);

    });
}


// store all custom projects in local storage
function storeAllCustomProjects() {
    localStorage.setItem('projects', projects.stored_projects);

    while (projects.custom_projects.firstChild) {
        projects.custom_projects.removeChild(parent.firstChild);
    }
}


// load all previous tasks from local storage
function loadAllUserData() {

    localStorage.removeItem('projects');
    let all_tasks = Object.values(localStorage);
    localStorage.setItem('projects', projects.stored_projects);

    all_tasks.forEach(task_string => {
        if (task_string != "") {
            const task = JSON.parse(task_string);
            projects.project_contents.forEach(project_content => {

                let default_list = project_content.lastChild;

                if (task.project == project_content.id) {

                    const new_task_item = createItem(task.id, task.title, task.details, task.priority, task.date, task.is_completed);
                    project_content.lastChild.appendChild(new_task_item[0]);
                    project_content.lastChild.appendChild(new_task_item[1]);

                    // check if the add task button is at the bottom of list
                    if (default_list.hasChildNodes()) {
                        const default_list_children = default_list.childNodes;

                        default_list_children.forEach(item => {
                            if (item.className == "add-task-button-container") {
                                default_list.removeChild(item);
                                project_content.removeChild(project_content.lastChild);
                                project_content.appendChild(default_list);
                            }
                        });
                    }
                    project_content.lastChild.appendChild(addTaskButton());
                }
            });
        }

    });
}


window.onbeforeunload = function () {
    storeAllCustomProjects();
};


window.onload = function () {
    loadAllCustomProjects();
    loadAllUserData();
};


// Task item object constructor
export function Task(id, title, details, priority, date, project, is_completed) {

    this.id = id;
    this.title = title;
    this.details = details;
    this.priority = priority;
    this.date = date;
    this.project = project;
    this.is_completed = is_completed;
}


projects.default_projects.forEach(project => {
    handleProject(project);
});


function handleProject(project) {

    let number_of_tasks = 0;

    project.onclick = function () {

        document.querySelectorAll('.add-task-button').forEach(button => {
            button.onclick = null;
        });
        let currant_project_container;
        let default_list;

        projects.project_contents.forEach(project_content => {

            if (project_content.id == project.id) {
                project_content.style.display = "grid";
                default_list = project_content.lastChild;
                currant_project_container = project_content;

                // handle click add task button event
                document.querySelectorAll('.add-task-button').forEach(button => {

                    button.onclick = function () {

                        dialog.style.removeProperty('display');
                        number_of_tasks = 0;

                        // get info from dialog
                        document.getElementById('form').addEventListener("submit", handleFormSubmission);
                    }
                });
            }
            else {
                project_content.style.display = "none";
            }

            function handleFormSubmission(event) {

                if (number_of_tasks > 0) {
                    number_of_tasks = 0;
                    return;
                }

                console.log(number_of_tasks);
                number_of_tasks++;

                event.preventDefault();

                let is_completed = false;
                let formData = new FormData(form);

                const radioButtons = document.querySelectorAll('input[name="priority"]');

                let priority_level;
                for (const radioButton of radioButtons) {
                    if (radioButton.checked) {
                        priority_level = radioButton.value;
                        break;
                    }
                }

                let storage_id = Object.keys(localStorage).length++;

                const task = new Task(storage_id, formData.get('title'), formData.get('details'), priority_level, formData.get('date'), project.id, false);
                const new_task_item = createItem(task.id, task.title, task.details, task.priority, task.date, task.is_completed);
                console.log(new_task_item);
                currant_project_container.lastChild.appendChild(new_task_item[0]);
                currant_project_container.lastChild.appendChild(new_task_item[1]);

                localStorage.setItem(storage_id, JSON.stringify(task));

                // edit task in storage
                localStorage.removeItem('projects');
                let storage_values = Object.values(localStorage);
                let projects = localStorage.getItem('projects');
                localStorage.setItem('projects', projects);

                // check if the add task button is at the bottom of list
                if (default_list.hasChildNodes()) {
                    const default_list_children = default_list.childNodes;

                    default_list_children.forEach(item => {
                        if (item.className == "add-task-button-container") {
                            default_list.removeChild(item);
                            project_content.removeChild(project_content.lastChild);
                            project_content.appendChild(default_list);
                        }
                    });

                }
                currant_project_container.lastChild.appendChild(addTaskButton());
            }

        });
    }
}


// close the dialog
document.querySelector('.exit-btn').addEventListener('click', function (event) {
    dialog.style.display = 'none';
});


// close the edit dialog
document.getElementById('edit-exit-btn').addEventListener('click', function (event) {
    edit_dialog.style.display = 'none';
});

















