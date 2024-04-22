// VARIABLES DECLARATION IN THE DOM
const eyeOn = document.querySelector('.eye-on');
const eyeOff = document.querySelector('.eye-off');
const inputPassword = document.querySelector('#inputPassword');

//INITAL STATE
eyeOff.style.display = "none";

//FUNCTIONS DECLARATION
function showPassword() {
    eyeOn.style.display = "none";
    eyeOff.style.display = "block";
    inputPassword.type = "text";
}

function hidePassword() {
    eyeOn.style.display = "block";
    eyeOff.style.display = "none";
    inputPassword.type = "password";
}

//INVOKE
eyeOn.onclick = () => showPassword();
eyeOff.onclick = () => hidePassword();