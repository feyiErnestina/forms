//declaring my variables
const form =document.getElementById("form");
const username = document.getElementById("username");
const Email =document.getElementById("Email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show success outline
function showSuccess(input) {
const formControl = input.parentElement;
formControl.className ="form-control success";
}

//show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className ="form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

//check for  valid email
function checkEmail(input){
    const re =
     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (re.test(input.value.trim())){
    showSuccess(input);
} else {
    showError(input, 'Email is not valid');
    }
}

//get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(
            input,
             `${getFieldName(input)}must be at least ${min} characters`
             );
         } else if (input.value.length > max){
            showError(
                input, 
                `${getFieldName(input)} must be less than ${max} characters`
                );
         } else {
            showSuccess(input);
         }
}

//check for required fields
function checkRequired(inputText) {
    inputText.forEach(function (input) {
        if (input.value.trim() ==='') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, "Password do not match");
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

 checkRequired([username, Email, password, password2]);

 checkLength(username, 3, 15);
 checkLength(password, 6, 25);
 checkEmail(Email);
 checkPasswordMatch(password, password2);
});



