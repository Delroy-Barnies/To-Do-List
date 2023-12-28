import edit_icon from "./icons/8666681_edit_icon.svg";
import trash_icon from "./icons/9004673_trash_delete_bin_remove_icon.svg";
import exit_icon from "./icons/1303876_cancel_circle_close_cross_delete_icon.png";


export function createItem(id, title, details, user_priority, finish_date, is_completed) {

    const item = document.createElement('div');
    item.className = "default-list-item";

    const item_left_side = document.createElement('div');
    item_left_side.className = "default-list-item-left-side";

    const priority = document.createElement('div');
    priority.className = "priority";

    if (user_priority == "low" || user_priority == "edit-low") {
        priority.style.backgroundColor = "blue";
    }
    else if (user_priority == "medium" || user_priority == "edit-medium") {
        priority.style.backgroundColor = "yellow";
    }
    else {
        priority.style.backgroundColor = "red";
    }

    const is_complete = document.createElement('input');
    is_complete.setAttribute('type', 'checkbox');
    is_complete.id = "completed";

    const item_title = document.createElement('p');
    item_title.textContent = title;

    const item_right_side = document.createElement('div');
    item_right_side.className = "default-list-item-right-side";

    const date = document.createElement('p');
    date.className = "date";
    date.textContent = finish_date;

    // handle the details section
    const details_section = document.createElement('section');
    details_section.className = "details-section";

    const details_section_header = document.createElement('div');
    details_section_header.className = "details-section-header";

    const details_section_heading = document.createElement('h2');
    details_section_heading.textContent = title;

    const details_section_exit = document.createElement('div');
    details_section_exit.className = "details-section-exit";

    const exit = new Image();
    exit.src = exit_icon;
    exit.style.width = "35px";

    details_section_exit.addEventListener("click", function () {
        details_section.style.display = "none";
    });

    const details_section_details = document.createElement('p');
    details_section_details.textContent = details;

    const details_button = document.createElement('button');
    details_button.className = "details-button";
    details_button.textContent = "DETAILS";

    details_button.addEventListener("click", () => {
        details_section.style.display = "grid";
    });

    const edit = new Image();
    edit.src = edit_icon;
    edit.className = "edit-icon";
    edit.style.width = "30px";

    edit.addEventListener("mouseover", () => {
        edit.style.width = "35px";
    });
    edit.addEventListener("mouseout", () => {
        edit.style.width = "30px";
    });

    const trash = new Image();
    trash.src = trash_icon;
    trash.className = "trash-icon";
    trash.style.width = "30px";

    trash.addEventListener("mouseover", () => {
        trash.style.width = "35px";
    });
    trash.addEventListener("mouseout", () => {
        trash.style.width = "30px";
    });

    trash.addEventListener("click", function () {
        let list = item.parentElement;
        list.removeChild(item);

        // edit task in storage
        localStorage.removeItem('projects');
        let storage_values = Object.values(localStorage);
        let projects = localStorage.getItem('projects');
        localStorage.setItem('projects', projects);

        storage_values.forEach(task_string => {
            const task = JSON.parse(task_string);
            if (task.id == id) {
                console.log(task.id);
                localStorage.removeItem(task.id);
                console.log(localStorage);
            }
        });
    });

    // edit task
    edit.onclick = function () {

        const edit_dialog = document.getElementById('edit-dialog');
        edit_dialog.style.display = "flex";
        document.getElementById('edit-title').value = title;
        document.getElementById('edit-details').value = details;
        document.getElementById('edit-date').value = finish_date;

        // get info from dialog
        document.getElementById('edit-form').addEventListener("submit", handleEditFormSubmission);

        function handleEditFormSubmission(event) {

            event.preventDefault();

            const form = document.getElementById('edit-form');
            let formData = new FormData(form);

            const radioButtons = document.querySelectorAll('input[name="edit-priority"]');

            let priority_level;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    priority_level = radioButton.id;
                    break;
                }
            }

            item_title.textContent = formData.get('edit-title');
            title = formData.get('edit-title');

            details_section_heading.textContent = formData.get('edit-title');
            details_section_details.textContent = formData.get('edit-details');
            details = formData.get('edit-details');

            date.textContent = formData.get('edit-date');
            finish_date = formData.get('edit-date');

            if (priority_level == "edit-low") {
                priority.style.backgroundColor = "blue";
            }
            else if (priority_level == "edit-medium") {
                priority.style.backgroundColor = "yellow";
            }
            else {
                priority.style.backgroundColor = "red";
            }

            edit_dialog.style.display = 'none';

            // edit task in storage
            localStorage.removeItem('projects');
            let storage_values = Object.values(localStorage);
            let projects = localStorage.getItem('projects');
            localStorage.setItem('projects', projects);

            storage_values.forEach(task_string => {
                const task = JSON.parse(task_string);

                if (task.id == id) {
                    task.title = title;
                    task.details = details;
                    task.priority = priority_level;
                    task.date = formData.get('edit-date');

                    localStorage.removeItem(id);
                    localStorage.setItem(id, JSON.stringify(task));
                }
            });

            document.getElementById('edit-form').removeEventListener("submit", handleEditFormSubmission);
        }

    }

    // check if task is complete
    is_complete.addEventListener('change', function () {

        if (this.checked) {
            is_completed = true;
            check_if_completed(is_completed);

            // edit task in storage
            localStorage.removeItem('projects');
            let storage_values = Object.values(localStorage);
            let projects = localStorage.getItem('projects');
            localStorage.setItem('projects', projects);

            storage_values.forEach(task_string => {
                const task = JSON.parse(task_string);

                if (task.id == id) {
                    task.is_completed = is_completed;

                    localStorage.removeItem(id);
                    localStorage.setItem(id, JSON.stringify(task));
                }
            });

        }
        else {
            is_completed = false;
            check_if_completed(is_completed);

            // edit task in storage
            localStorage.removeItem('projects');
            let storage_values = Object.values(localStorage);
            let projects = localStorage.getItem('projects');
            localStorage.setItem('projects', projects);

            storage_values.forEach(task_string => {
                const task = JSON.parse(task_string);

                if (task.id == id) {
                    task.is_completed = is_completed;

                    localStorage.removeItem(id);
                    localStorage.setItem(id, JSON.stringify(task));
                }
            });
        }
    });

    function check_if_completed(completed) {
        if (completed) {

            item_title.style.textDecoration = "line-through";
            item_title.style.color = "#ffffff5e";

            date.style.textDecoration = "line-through";
            date.style.color = "#ffffff5e";

            details_button.style.textDecoration = "line-through";
            details_button.style.color = "#ffffff5e";
            details_button.style.backgroundColor = "#9696968e";

            edit.style.filter = "brightness(0) invert(0.5)";
            trash.style.filter = "brightness(0) invert(0.5)";

            item.style.borderColor = "rgba(255, 255, 255, 0.274)";

            is_complete.checked = true;
        }
        else {
            item_title.style.textDecoration = "none";
            item_title.style.color = "white";

            date.style.textDecoration = "none";
            date.style.color = "white";

            details_button.style.textDecoration = "none";
            details_button.style.color = "white";
            details_button.style.backgroundColor = "#969696";

            edit.style.filter = "brightness(0) invert(1)";
            trash.style.filter = "brightness(0) invert(1)";

            item.style.borderColor = "white";

            is_complete.checked = false;
        }
    }

    check_if_completed(is_completed);


    details_section_exit.appendChild(exit);
    details_section_header.appendChild(details_section_heading);
    details_section_header.appendChild(details_section_exit);
    details_section.appendChild(details_section_header);
    details_section.appendChild(details_section_details);

    item_left_side.appendChild(priority);
    item_left_side.appendChild(is_complete);
    item_left_side.appendChild(item_title);

    item_right_side.appendChild(date);
    item_right_side.appendChild(details_button);
    item_right_side.appendChild(edit);
    item_right_side.appendChild(trash);

    item.appendChild(item_left_side);
    item.appendChild(item_right_side);

    item.id = id;

    return [item, details_section];
}



