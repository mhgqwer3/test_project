const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', async function(e){
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/backend/auth.php?action=login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();

        if (result.status === 'success') {
            // Save login state
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userEmail', email);
            sessionStorage.setItem('userToken', result.token || '');
            sessionStorage.setItem('userRole', result.user.role || '');
            
            // Redirect to dashboard
            window.location.href = '/frontend/pages/overview.html';
        } else {
            errorMessage.textContent = result.message || 'Invalid email or password';
            errorMessage.classList.add("show");
            setTimeout(() => errorMessage.classList.remove("show"), 3000);
        }
    } catch (error) {
        console.error('Login error:', error);
        errorMessage.textContent = 'Connection error. Please try again.';
        errorMessage.classList.add("show");
        setTimeout(() => errorMessage.classList.remove("show"), 3000);
    }
});