// Copyright (c) 2024 4TiZalewski

// @ts-check

/**
 * @type {HTMLInputElement | null}
 */
const element_name = document.querySelector("#elementName");

/**
 * @type {HTMLInputElement | null}
 */
const element_content = document.querySelector("#elementContent");

/**
 * @type {HTMLInputElement | null}
 */
const create_button = document.querySelector("#createButton");

/**
 * @type {HTMLInputElement | null}
 */
const display = document.querySelector("#display");

/**
 * @type {HTMLInputElement | null}
 */
const checkbox_checked = document.querySelector("#selected");

/**
 * @type {string}
 */
const NEW_ELEMENT_WRAPPER = "new-element-wrapper";

/**
 * @type {string}
 */
const SELECTED_CLASS = "checkbox-clicked";

/**
 * @type {string}
 */
const REMOVE_BUTTON_CLASS = "remove-button";

if (create_button && display && element_content && element_name && checkbox_checked) {
    create_button.addEventListener("click", (/** @type {MouseEvent} */ event) => {
        event.preventDefault();

        /**
         * @type {HTMLElement}
         */
        const new_element = create_new_element(element_name.value, element_content.value, checkbox_checked.checked);
        
        display.appendChild(new_element);
    });
} else {
    console.warn("Failed to get elements!");
}

/**
 * @param {string} element_name 
 * @param {string} element_content 
 * @param {boolean} checked
 * @returns {HTMLElement}
 */
function create_new_element(element_name, element_content, checked) {
    /**
     * @type {HTMLElement}
     */
    const new_element_wrapper = document.createElement("div");

    if (checked) {
        new_element_wrapper.className = `${NEW_ELEMENT_WRAPPER} ${SELECTED_CLASS}`;
    } else {
        new_element_wrapper.className = `${NEW_ELEMENT_WRAPPER}`;
    }

    /**
     * @type {HTMLButtonElement}
     */
    const remove_button = document.createElement("button");
    remove_button.append(document.createTextNode("Remove"));
    remove_button.className = REMOVE_BUTTON_CLASS;

    remove_button.addEventListener("click", (/** @type {Event} */ remove_button_element) => {
        new_element_wrapper.remove();
    });

    /**
     * @type {HTMLElement}
     */
    const new_element = document.createElement(element_name);
    new_element.innerText = element_content;

    new_element_wrapper.appendChild(new_element);
    new_element_wrapper.appendChild(remove_button);

    return new_element_wrapper;
}
