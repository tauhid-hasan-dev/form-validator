const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show error function
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success function
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//check required
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (input.value === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    });
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

/* username and password validation */
function checkUsername(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    }
}
function checkPassword(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    }
}

// email validation
function checkEmail(input) {
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid")
    }
}

//match password one and passoword two
function matchPassword(input1, input2) {
    if (input1.value === input2.value && (input1.value !== '' && input2.value !== '')) {
        showSuccess(input2);
    } else {
        showError(input2, "Password did not matched, try again please");
    }
}

//addEventListener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, password, password2])
    checkUsername(username, 3, 15);
    checkPassword(password, 6, 25);
    checkEmail(email);
    matchPassword(password, password2);
})
