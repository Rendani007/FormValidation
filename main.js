
// Check the core values of the inputs
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Listen to the submit event
form.addEventListener('submit', (e) => {
    e.preventDefault();

    //calling function
    checkInputs();
});

// function
function checkInputs() {
    // get values from the inputs
    // trim removes white spaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    // check if inputs are valid or not for username
    if (usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
    } else {
        //add success class
        setSuccessFor(username);
    }

    // check if inputs are valid or not for email
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    // check if inputs are valid or not for password
    //you can add another else element to be specific on what the password should contain
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        //add success class
        setSuccessFor(password);
    }
    // check if inputs are valid or not for password2
    //you can add another else element to be specific on what the password should contain
    if (password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');
    } else if (passwordValue !== password2Value) { 
        setErrorFor(password2, 'Passwords do not match')
    }else {
        //add success class
        setSuccessFor(password2);
    }


    // if all rules have been met then show a success message 
    //check if all form-controls have a success class
}

// function error //
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

// function success //
function setSuccessFor(input) {
    const formControl = input.parentElement;
    //add success class
    formControl.className = 'form-control success';
}

// function for email
function isEmail(email) {
    // regex
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}