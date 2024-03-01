
    // Function to validate email format
    function validateEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate password format
    function validatePassword(password) {
        var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]+$/;
        return passwordRegex.test(password);
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent form submission

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Validate email
        if (!validateEmail(username)) {
            alert("Please enter a valid email address");
            return;
        }

        // Validate password
        if (!validatePassword(password)) {
            alert("Password must contain at least one uppercase letter, one number, and @ as special character");
            return;
        }

        // Check if password is correct for redirection
        if (password === "ZenTradesTest@123") {
            window.location.href = "dashboard.html"; // Redirect to dashboard page
        } else {
            alert("Incorrect password"); // Show error message for incorrect password
        }
    }

    function handleForgotPassword() {
        var supportEmail = "support@zentrades.pro";
        var subject = "Password Reset Request";
        var body = "Hi I am Siva Bhadra Sai Vaibhav Kedarisetti. I kindly request the team to reset my password."; // You can customize the email body as needed
    
        // Construct the mailto link specifically for Gmail
        var mailtoLink = "https://mail.google.com/mail/?view=cm&to=" + encodeURIComponent(supportEmail) + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    
        // Open Gmail with pre-filled subject and body
        window.open(mailtoLink);
    }
