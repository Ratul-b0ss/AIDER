const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => container.classList.add("right-panel-active"));
signInButton.addEventListener('click', () => container.classList.remove("right-panel-active"));

// Provider Logic
document.querySelectorAll('.auth-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        document.querySelectorAll('.auth-toggle__btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-type') === type));
        container.classList.toggle('provider-active', type === 'provider');
        
        const label = type === 'provider' ? 'Provider' : 'Customer';
        document.getElementById('login-submit-btn').innerText = `Login as ${label}`;
        document.getElementById('register-submit-btn').innerText = `Register as ${label}`;
    });
});