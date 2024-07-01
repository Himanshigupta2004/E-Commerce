document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const username = form.elements.username.value;
        const password = form.elements.password.value;
        const authenticated = authenticate(username, password);

        if (authenticated) {
            window.location.href = 'index.html'; 
        } else {
            alert('Incorrect username or password');
        }
    });


    function authenticate(username, password) {
        if (username === "admin" && password === "password" || username=="himanshi" && password=="hello123") {
            return true;
        } else {
            return false;
        }
    }
});