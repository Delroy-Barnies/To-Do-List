import "./styles.css";
import { createItem } from "./item";
import { control_images } from "./control_images";
import { addTaskButton } from "./task_button";


const dialog = document.getElementById("dialog");


// function for handling projects and custom projects
const projects = (function () {

    // obtain all project elements
    const content = document.getElementById('content');
    const default_projects = document.querySelectorAll('.project');

    const custom_projects = document.querySelector('.custom-projects');
    const add_project_button = document.querySelector('.add-project-btn');
    const project_form = document.getElementById('project-form');
    const save_button = document.querySelector('.save-project-btn');
    const cancel_button = document.querySelector('.cancel-project-btn');
    const input = document.querySelector('.project-title');

    add_project_button.onclick = function () {

        add_project_button.style.display = 'none';
        project_form.style.display = 'flex';

        const new_project = document.createElement('li');
        new_project.className = "custom-project";

        // save project
        save_button.onclick = function () {

            if (input.value == '') {
                alert('Project needs a title!');
            }
            else {
                new_project.textContent = input.value;
                new_project.id = new_project.textContent;
                custom_projects.appendChild(new_project);

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

    let project_contents = [];

    // create each default projects contents
    default_projects.forEach(project => {
        const task_list = document.createElement('div');
        task_list.className = "default-list";
        task_list.appendChild(addTaskButton());

        const content_container = document.createElement('div');
        content_container.className = "content-container";
        content_container.id = project.id;

        const page_title = document.createElement('h1');
        page_title.textContent = project.id.toUpperCase();

        content_container.appendChild(page_title);
        content_container.appendChild(task_list);
        content.appendChild(content_container);

    });

    let custom_projects_list = custom_projects.childNodes;

    return { default_projects, custom_projects, custom_projects_list, project_contents };

})();


// Task item object constructor
function Task(id, title, details, priority, date, is_completed) {

    this.id = id;
    this.title = title;
    this.details = details;
    this.priority = priority;
    this.date = date;
    this.is_completed = is_completed;
}

// handle click project event
getProject(projects.default_projects);

// handle projects and adding a new task
function getProject(default_projects) {

    default_projects.forEach(project => {

        let task_id = 0;

        project.onclick = function () {

            const content = document.getElementById('content');
            content.removeChild(content.lastChild);

            let project_contents = projects.project_contents;
            let currant_project_container;

            project_contents.forEach(project_content => {
                if (project_content.id == project.id) {

                    const default_list = project_content.lastChild;
                    currant_project_container = project_content;
                    content.appendChild(currant_project_container);

                    document.querySelector('.add-task-button').onclick = function () {

                        dialog.style.removeProperty('display');

                        // get info from dialog
                        document.getElementById('form').addEventListener("submit", function (event) {

                            event.preventDefault();
                            event.stopPropagation();

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
                            task_id++;

                            const task = new Task(task_id, formData.get('title'), formData.get('details'), priority_level, formData.get('date'), false);
                            const new_task_item = createItem(task.id, task.title, task.details, task.priority, task.date);
                            currant_project_container.lastChild.appendChild(new_task_item[0]);
                            currant_project_container.lastChild.appendChild(new_task_item[1]);

                            // check if the add task button is at the bottom of list
                            if (default_list.hasChildNodes()) {
                                const default_list_children = default_list.childNodes;
                                let all_task_ids = [];
                                console.log(default_list_children);

                                default_list_children.forEach(item => {
                                    if (item.className == "add-task-button-container") {
                                        default_list.removeChild(item);
                                        project_content.removeChild(project_content.lastChild);
                                        project_content.appendChild(default_list);
                                    }

                                });


                            }
                            currant_project_container.lastChild.appendChild(addTaskButton());
                        });
                    }
                }
            });

        }

    });
}


// close the dialog
document.querySelector('.exit-btn').addEventListener('click', function (event) {
    dialog.style.display = 'none';
});
