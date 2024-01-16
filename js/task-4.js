
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    const user = {
        email,
        password,
    };

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
    } else {
        console.log(user);
        e.target.reset();
    };
};