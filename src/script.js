// DOM elements
const loginForm = document.getElementById('login-form');
const userPanel = document.querySelector('.user-panel');
const employeeSection = document.querySelector('.employee-section');
const managerSection = document.querySelector('.manager-section');
const adminSection = document.querySelector('.admin-section');

// Login form submission event listener
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Replace the following logic with your actual authentication and user role verification
    if (username === 'employee' && password === 'password') {
        showDashboard('employee');
    } else if (username === 'manager' && password === 'password') {
        showDashboard('manager');
    } else if (username === 'admin' && password === 'password') {
        showDashboard('admin');
    } else {
        alert('Invalid username or password. Please try again.');
    }

    loginForm.reset();
});

// Function to show the appropriate dashboard based on the user role
function showDashboard(userRole) {
    switch (userRole) {
        case 'employee':
            userPanel.style.display = 'block';
            employeeSection.style.display = 'block';
            managerSection.style.display = 'none';
            adminSection.style.display = 'none';
            break;
        case 'manager':
            userPanel.style.display = 'block';
            employeeSection.style.display = 'none';
            managerSection.style.display = 'block';
            adminSection.style.display = 'none';
            break;
        case 'admin':
            userPanel.style.display = 'block';
            employeeSection.style.display = 'none';
            managerSection.style.display = 'none';
            adminSection.style.display = 'block';
            break;
        default:
            userPanel.style.display = 'none';
            employeeSection.style.display = 'none';
            managerSection.style.display = 'none';
            adminSection.style.display = 'none';
            break;
    }
}

// User links event listener to switch between dashboards
const userLinks = document.querySelectorAll('.user-link');
userLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const panelToShow = e.target.getAttribute('data-panel');
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        document.querySelector(`.${panelToShow}`).style.display = 'block';
    });
});
