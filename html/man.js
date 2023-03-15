const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const indicator = document.getElementById("indicator");

function login() {
  loginForm.classList.add("show");
  signupForm.classList.remove("show");
  indicator.style.transform = "translate"
}