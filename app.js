// app.js
document.addEventListener('DOMContentLoaded', () => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
    });

    // Form validation for sign-up form
    document.querySelector('.sign-up-form').addEventListener('submit', function(event) {
        let isValid = true;
        const username = this.querySelector('input[name="username"]');
        const email = this.querySelector('input[name="email"]');
        const password = this.querySelector('input[name="password"]');
        
        if (!username.value) {
            isValid = false;
            alert("Username is required");
        }
        
        if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            isValid = false;
            alert("Please enter a valid email");
        }
        
        if (!password.value) {
            isValid = false;
            alert("Password is required");
        }
        
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Form validation for sign-in form
    document.querySelector('.sign-in-form').addEventListener('submit', function(event) {
        let isValid = true;
        const username = this.querySelector('input[name="username"]');
        const password = this.querySelector('input[name="password"]');
        
        if (!username.value) {
            isValid = false;
            alert("Username is required");
        }
        
        if (!password.value) {
            isValid = false;
            alert("Password is required");
        }
        
        if (!isValid) {
            event.preventDefault();
        }
    });
});
