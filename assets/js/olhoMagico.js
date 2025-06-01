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

const passwordInputRepeat = document.getElementById("passwordRepeat");
const togglePasswordRepeat = document.getElementById("togglePasswordRepeat");
let passwordVisibleRepeat = false;

togglePasswordRepeat.addEventListener("click", function () {
  passwordVisibleRepeat = !passwordVisibleRepeat;

  if (passwordVisibleRepeat) {
    passwordInputRepeat.type = "text";
    togglePasswordRepeat.src = "/assets/imgs/eye-open.svg";
  } else {
    passwordInputRepeat.type = "password";
    togglePasswordRepeat.src = "/assets/imgs/eye-off.svg";
  }
});

