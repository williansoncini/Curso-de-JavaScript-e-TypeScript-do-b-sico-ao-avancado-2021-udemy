"use strict";
const SHOW_ERROR_MESSAGE = 'error-message';
const form = document.querySelector('.form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');
form.addEventListener('submit', (event) => {
    event.preventDefault();
});
function showErrorMessage(input, msg) {
    const formFields = input.parentElement;
    const errorMessage = formFields.querySelector('.error-message');
    errorMessage.innerText = msg;
    errorMessage.classList.add(SHOW_ERROR_MESSAGE);
}
//# sourceMappingURL=formControl.js.map