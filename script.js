const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

/* function for Error Messege . it will show the red outline and the red error messege*/

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

/* function for Success outline(green) */

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

/* validate email */

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return re.test(String(email).toLowerCase());
};

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Username is required')
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required')
    } else if (!isValidEmail(email)) {
        showError(email, 'Email is not valid')
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Password is required')
    } else {
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, 'Enter password again')
    } else {
        showSuccess(password2);
    }
})