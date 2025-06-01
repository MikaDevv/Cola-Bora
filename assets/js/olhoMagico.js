const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
let passwordVisible = false;

togglePassword.addEventListener("click", function () {
  passwordVisible = !passwordVisible;

  if (passwordVisible) {
    passwordInput.type = "text";
    togglePassword.src = "/assets/imgs/eye-open.svg";
  } else {
    passwordInput.type = "password";
    togglePassword.src = "/assets/imgs/eye-off.svg";
  }
});