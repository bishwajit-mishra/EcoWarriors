document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // Optional: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Function to handle user registration
function handleRegistration(event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        // Check if user with this email already exists
        const existingUser = localStorage.getItem(email);
        if (existingUser) {
            alert('This email is already registered. Please login or use a different email.');
            return;
        }

        // Create a user object
        const user = {
            name: name,
            email: email,
            password: password // In a real app, you would hash this password!
        };

        // Save the user object to local storage
        localStorage.setItem(email, JSON.stringify(user));

        alert('Registration successful! You can now log in.');
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        alert('Please fill out all fields.');
    }
}

// Function to handle user login
function handleLogin(event) {
    event.preventDefault(); // Prevents the form from submitting

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Retrieve the user data from local storage
        const userString = localStorage.getItem(email);

        if (userString) {
            const user = JSON.parse(userString);

            // Check if the password matches
            if (user.password === password) {
                alert('Login successful! Welcome, ' + user.name);

            // Add this line to store the logged-in user's email
                localStorage.setItem('loggedInUser', email);


                // Redirect to the dashboard page
                window.location.href = 'dashboard.html';
            } else {
                alert('Incorrect password. Please try again.');
            }
        } else {
            alert('User not found. Please register first.');
        }
    } else {
        alert('Please enter both email and password.');
    }
}
// Function to handle user logout
function logoutUser() {
    // Remove the logged-in user's email from Local Storage
    localStorage.removeItem('loggedInUser');
    
    // Redirect the user to the login page
    window.location.href = 'login.html';
}

// Function to update the dashboard with the user's name
function updateDashboard() {
    // Get the element where the welcome message is displayed
    const welcomeMessageElement = document.getElementById('welcome-message');

    // Get the currently logged-in user's email from Local Storage
    // This assumes you saved the logged-in email during the login process
    const loggedInEmail = localStorage.getItem('loggedInUser');

    if (!loggedInEmail) {
    window.location.href = 'login.html';
    return; // Stop the rest of the function from running
}

    if (loggedInEmail) {
        // Retrieve the full user object from Local Storage using the email
        const userString = localStorage.getItem(loggedInEmail);
        const user = JSON.parse(userString);

        if (user && user.name) {
            // Update the welcome message with the user's name
            welcomeMessageElement.textContent = `Welcome, ${user.name}!`;
        }
    } else {
        // If no user is logged in, redirect to the login page
        window.location.href = 'login.html';
    }
}

// Call the function when the dashboard page loads
if (window.location.pathname.endsWith('dashboard.html')) {
    updateDashboard();
}