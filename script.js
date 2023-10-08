//your JS code here. If required.
// app.js
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkboxInput = document.getElementById("checkbox");

    // Check if there are saved details in local storage
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        // Display an additional button for existing user login
        const existingUserButton = document.createElement("button");
        existingUserButton.id = "existing";
        existingUserButton.textContent = "Login as existing user";
        loginForm.appendChild(existingUserButton);

        // Handle existing user login
        existingUserButton.addEventListener("click", () => {
            const savedUsername = localStorage.getItem("username");
            alert(`Logged in as ${savedUsername}`);
        });
    }

    // Form submit event listener
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (checkboxInput.checked) {
            // Save details to local storage
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            // Remove saved details from local storage
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        // Display a success message
        alert(`Logged in as ${username}`);
    });
});
