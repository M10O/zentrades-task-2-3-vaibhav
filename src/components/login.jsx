import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
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

    // var username = document.getElementById("username").value;
    // var password = document.getElementById("password").value;

    // Validate email
    if (!validateEmail(userName)) {
      alert("Please enter a valid email address");
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      alert(
        "Password must contain at least one uppercase letter, one number, and @ as special character"
      );
      return;
    }

    // Check if password is correct for redirection
    if (password === "ZenTradesTest@123") {
      navigate("/dashboard");
      // window.location.href = "dashboard.html"; // Redirect to dashboard page
    } else {
      alert("Incorrect password"); // Show error message for incorrect password
    }
  }

  function handleForgotPassword() {
    var supportEmail = "support@zentrades.pro";
    var subject = "Password Reset Request";
    var body =
      "Hi I am Siva Bhadra Sai Vaibhav Kedarisetti. I kindly request the team to reset my password."; // You can customize the email body as needed

    // Construct the mailto link specifically for Gmail
    var mailtoLink =
      "https://mail.google.com/mail/?view=cm&to=" +
      encodeURIComponent(supportEmail) +
      "&su=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    // Open Gmail with pre-filled subject and body
    window.open(mailtoLink);
  }

  return (
    <div className="login">
      <div className="login__overlay"></div>
      <img src="assets/img/login-bg.jpg" alt="image" className="login__bg" />
      <form action="#" className="login__form" onSubmit={handleSubmit}>
        <img src="assets/img/logo.png" alt="Logo" className="login__logo" />
        <div className="login__inputs">
          <div className="login__box">
            <input
              type="email"
              id="username"
              placeholder="E-mail address"
              required
              className="login__input"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              className="login__input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="login__check">
          <div className="login__check-box">
            <input
              type="checkbox"
              className="login__check-input"
              id="user-check"
            />
            <label htmlFor="user-check" className="login__check-label">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="login__button">
          Login
        </button>

        <a
          href="index1.html"
          className="login__forgot"
          onClick={handleForgotPassword}
        >
          Forgot Password?
        </a>
      </form>
    </div>
  );
};

export default Login;
