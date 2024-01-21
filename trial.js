// JavaScript code to create and append a button to the container IT IS BY ChatGPT BTW
document.addEventListener('DOMContentLoaded', function () {
    // Create a button element
    var button = document.createElement('button');

    // Set button text
    button.textContent = 'Testing';

    // Add an event listener to handle button click
    button.addEventListener('click', function () {
        alert("OH HII!!");
    });

    // Get the container element by its ID
    var buttonContainer = document.getElementById('button');

    // Append the button to the container
    buttonContainer.appendChild(button);
});
