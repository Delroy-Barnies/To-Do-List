import edit_icon from "../src/icons/8666681_edit_icon.svg";
import trash_icon from "../src/icons/9004673_trash_delete_bin_remove_icon.svg";
import exit_icon from "../src/icons/1303876_cancel_circle_close_cross_delete_icon.png";
import { addTaskButton } from "./task_button";

export function createItem(id, title, details, user_priority, finish_date) {

    const item = document.createElement('div');
    item.className = "default-list-item";

    const item_left_side = document.createElement('div');
    item_left_side.className = "default-list-item-left-side";

    const priority = document.createElement('div');
    priority.className = "priority";

    if (user_priority == "low") {
        priority.style.backgroundColor = "blue";
    }
    else if (user_priority == "medium") {
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

    item_left_side.appendChild(priority);
    item_left_side.appendChild(is_complete);
    item_left_side.appendChild(item_title);

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

    details_section_exit.appendChild(exit);
    details_section_header.appendChild(details_section_heading);
    details_section_header.appendChild(details_section_exit);
    details_section.appendChild(details_section_header);
    details_section.appendChild(details_section_details);

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
    });

    item_right_side.appendChild(date);
    item_right_side.appendChild(details_button);
    item_right_side.appendChild(edit);
    item_right_side.appendChild(trash);

    item.appendChild(item_left_side);
    item.appendChild(item_right_side);

    item.id = id;

    return [item, details_section];
}



