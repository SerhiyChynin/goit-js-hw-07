const input = document.querySelector('input');
const output = document.querySelector('#name-output');

input.classList.add('name_input');

input.addEventListener('input', outText);

function outText() {
    const name = input.value.trim();
    if (name === '') {
        output.textContent = 'Anonymous';
    } else {
        output.textContent = name;
    }
};