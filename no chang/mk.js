function signup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        showMessage('Please fill in all fields.');
        return;
    }

    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        showMessage('You are already signed up. Please log in.');
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    showMessage('Signup successful! You can now log in.', true);
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (!username || !password) {
        showMessage('Please fill in all fields.');
        return;
    }

    if (username === savedUsername && password === savedPassword) {
        showMessage('Login successful! Redirecting...', true);
        setTimeout(() => {
            document.body.innerHTML = '<h1>Welcome! You are logged in.</h1>';
        }, 1000);
    } else {
        showMessage('Invalid username or password.');
    }
}

function showMessage(message, success = false) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = success ? 'green' : 'red';
}
