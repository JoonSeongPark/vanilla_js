const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    showSuccess(email);
  } else if (email.value.length !== 0) {
    showError(email, "Email is not valid");
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(item => {
    if (item.value.trim() === "") {
      showError(item, `${getFieldName(item)} is required`);
    } else {
      showSuccess(item);
    }
  });
}

function checkLength(input, min, max) {
  const len = input.value.length;
  if (len < min && len > 0) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (len > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else if (len !== 0) {
    showSuccess(input);
  }
}

function checkPasswordMatch(pass1, pass2) {
  if (pass1.value !== pass2.value) {
    showError(pass2, "Password do not match");
  }
}

function checkPasswordForm(pass1) {
  const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9](?=.*?[,.#?!@$%^&*-]))/
  console.log(pass1.value);
  console.log(re.test(pass1.value));
  if (re.test(pass1.value.trim())) {
    showSuccess(pass1);
  } else if (pass1.value.length !== 0) {
    showError(pass1, "Password is not vaild");
    alert(
      "Password needs at least \none lowercase letter, uppercase letter, number, and special charater."
    );
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkEmail(email);
  checkLength(username, 4, 12);
  checkLength(password, 8, 20);
  checkPasswordMatch(password, password2);
  checkPasswordForm(password);
});
