const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");
//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
}

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
}

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
}


submitBtn.onclick = () => {
  //firstname ja
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
    isFirstNameOk = false;
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }
//lastname ja
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
    isLastNameOk = false;
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }
//email ja
  if (emailInput.value === "") {
    emailInput.classList.add("is-invalid");
    isEmailNameOk = false;
  } else if(validateEmail(emailInput.value)) {
    emailInput.classList.add("is-valid");
    isEmailNameOk = true;
  } else {
    emailInput.classList.add("is-invalid");
    isEmailNameOk = false;
  }
//password ja
  if(passwordInput.value === ""){
    passwordInput.classList.add("is-invalid");
    isPasswordOk = false;
  } else if (passwordInput.value.length >= 6){
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  } else {
    passwordInput.classList.add("is-invalid");
    isPasswordOk = false;
  }

  if (isFirstNameOk && isLastNameOk && isEmailNameOk && isPasswordOk) {
    alert("Registered successfully");
  }
};
