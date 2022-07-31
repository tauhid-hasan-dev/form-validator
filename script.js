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
            showError(input, `${input.id} is required`)
        } else {
            showSuccess(input)
        }
    });
}

//addEventListener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, password, password2])
})
