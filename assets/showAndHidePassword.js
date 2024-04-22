document.addEventListener('DOMContentLoaded', function () {
    // Variables declaration in the DOM
    const eyeOn = document.querySelector('.eye-on');
    const eyeOff = document.querySelector('.eye-off');
    const inputPassword = document.querySelector('#inputPassword');

    // Check if elements exist
    // if (!eyeOn || !eyeOff || !inputPassword) {
    //     console.error('One or more required elements are missing!');
    //     return; // Stop the execution if elements are missing
    // }

    // Initial state setup using CSS class
    eyeOff.classList.add('hidden');

    // Function to toggle password visibility
    function togglePasswordVisibility() {
        const isPasswordVisible = inputPassword.type === 'password';
        inputPassword.type = isPasswordVisible ? 'text' : 'password';
        eyeOn.classList.toggle('hidden');
        eyeOff.classList.toggle('hidden');
    }

    // Adding event listeners
    eyeOn.addEventListener('click', togglePasswordVisibility);
    eyeOff.addEventListener('click', togglePasswordVisibility);
});
