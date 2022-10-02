function formatDateToApi(date) {
  let dateArray = date.split('-');
  return dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0];
}
function formatDateFromApi(date) {
  let dateArray = date.split('/');
  return dateArray[2] + '-' + dateArray[0] + '-' + dateArray[1];
}

window.onload = () => {
  var inputName = document.querySelector("#name");
  var inputSurname = document.querySelector("#surname");
  var inputID = document.querySelector("#id");
  var inputPhone = document.querySelector("#phone");
  var inputBirth = document.querySelector("#birth");
  var inputAddress = document.querySelector("#address");
  var inputCity = document.querySelector("#city");
  var inputZipcode = document.querySelector("#zipcode");
  var inputEmail = document.querySelector("#email");
  var inputPassword = document.querySelector("#password");
  var inputRPassword = document.querySelector("#rPassword");
  var allInputs = document.querySelectorAll("input");
  var buttonSignUp = document.querySelector("#sign-up-button");

  // const modal = document.getElementById("myModal");
  // const modalClose = document.getElementById("modal-close");

  allInputs.forEach((input) => {
    input.addEventListener("focus", removeError);
  });
  inputName.addEventListener("blur", validateName);
  inputSurname.addEventListener("blur", validateName);
  inputID.addEventListener("blur", validateID);
  inputPhone.addEventListener("blur", validatePhone);
  inputBirth.addEventListener("blur", validateBirth);
  inputAddress.addEventListener("blur", validateAddress);
  inputCity.addEventListener("blur", validateCity);
  inputZipcode.addEventListener("blur", validateZipcode);
  inputEmail.addEventListener("blur", validateEmail);
  inputPassword.addEventListener("blur", validatePassword);
  inputRPassword.addEventListener("blur", validateRPassword);
  buttonSignUp.addEventListener("click", handleSignUp);

  function saveUserToLocalStorage(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }
  function deleteUserLocalStorage() {
    localStorage.removeItem('userData');
  }
  function serFormFromLocalStorage() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      userData.name ? inputName.value = userData.name : inputName.value = '';
      userData.lastName ? inputSurname.value = userData.lastName : inputSurname.value = '';
      userData.dni ? inputID.value = userData.dni : inputID.value = '';
      userData.phone ? inputPhone.value = userData.phone : inputPhone.value = '';
      userData.dob ? inputBirth.value = formatDateFromApi(userData.dob) : inputBirth.value = '';
      userData.address ? inputAddress.value = userData.address : inputAddress.value = '';
      userData.city ? inputCity.value = userData.city : inputCity.value = '';
      userData.zip ? inputZipcode.value = userData.zip : inputZipcode.value = '';
      userData.email ? inputEmail.value = userData.email : inputEmail.value = '';
      userData.password ? inputPassword.value = userData.password : inputPassword.value = '';
    }
  }
  serFormFromLocalStorage();

  function handleSignUp(e) {
    e.preventDefault();
    if (errors.length == 0) {
      alert(
        `
        Name: ${inputName.value}\n
        Surname: ${inputSurname.value}\n
        ID: ${inputID.value}\n
        Phone: ${inputPhone.value}\n
        Birth: ${inputBirth.value}\n
        Address: ${inputAddress.value}\n
        City: ${inputCity.value}\n
        ZipCode: ${inputZipcode.value}\n
        Email: ${inputEmail.value}\n
        Password: ${inputPassword.value}\n
        RepeatPassword: ${inputRPassword.value}
        `
      );
    } else {
      alert(`Errors: ${errors}`);
    }
  }

  function removeError(e) {
    var input = e.currentTarget;
    // remove error class
    input.classList.remove("error");
    input.parentNode.classList.remove("error");

    // remove error message if exist
    var errorElement = input.parentElement.querySelector(
      `#error-${input.name}`
    );
    if (errorElement) {
      errorElement.remove();
    }
    // remove error from array
    for (var i = 0; i < errors.length; i++) {
      if (errors[i] == `The ${input.name} is not valid`) {
        errors.splice(i, 1);
        i--;
      }
    }
  }

  // dinamic error message creation
  var errors = []; //errors array

  function createError(input) {
    console.log("errors", errors);
    // add error class
    input.classList.add("error");
    input.classList.remove("valid");
    var error = document.createElement("small");
    error.classList.add("errorMessage");
    //add id to error message for eliminatng it later
    error.setAttribute("id", `error-${input.name}`);
    error.innerHTML = `The ${input.name} is not valid`;
    input.parentNode.insertBefore(error, input.nextSibling);
    input.parentNode.classList.add("error");
    // add error to array
    errors.push(`The ${input.name} is not valid`);
  }

  function createRPasswordError(input) {
    // add error class
    input.classList.add("error");
    input.classList.remove("valid");
    var error = document.createElement("small");
    error.classList.add("errorMessage");
    //add id to error message for eliminatng it later
    error.setAttribute("id", `error-${input.name}`);
    error.innerHTML = `The passwords dont match`;
    input.parentNode.insertBefore(error, input.nextSibling);
  }

  // validation functions
  function validateLength3(e) {
    var input = e.currentTarget;
    if (input.value.length < 3) {
      return false;
    } else {
      return true;
    }
  }

  function validateLetters(e) {
    var input = e.currentTarget;
    for (let i = 0; i < input.value.length; i++) {
      if (parseFloat(input.value.charAt(i))) {
        return false;
      }
    }
    return true;
  }

  function validateNumbers(e) {
    var input = e.currentTarget;
    for (let i = 0; i < input.value.length; i++) {
      if (
        !parseFloat(input.value.charAt(i)) &&
        parseFloat(input.value.charAt(i)) !== 0
      ) {
        return false;
      }
    }
    return true;
  }

  function checkNumbersAndLetters(str) {
    var hasNumber = false;
    var hasLetter = false;
    for (var i = 0; i < str.length; i++) {
      if (parseFloat(str.charAt(i))) {
        hasNumber = true;
      }
      if (!parseFloat(str.charAt(i)) && str.charAt(i) != " ") {
        hasLetter = true;
      }
    }
    if (hasNumber && hasLetter) {
      return true;
    } else {
      return false;
    }
  }

  function isAlphaNumeric(str) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (
        !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)
      ) {
        // lower alpha (a-z)
        return false;
      }
    }
    return true;
  }

  // validate inputs
  function validateName(e) {
    if (!validateLetters(e) || !validateLength3(e)) {
      createError(e.currentTarget);
    } else {
      e.currentTarget.classList.add("valid");
    }
  }

  function validateID(e) {
    if (e.currentTarget.value.length < 7 || !validateNumbers(e)) {
      createError(e.currentTarget);
    } else {
      e.currentTarget.classList.add("valid");
    }
  }

  function validatePhone(e) {
    if (!(e.currentTarget.value.length == 10) || !validateNumbers(e)) {
      createError(e.currentTarget);
    } else {
      e.currentTarget.classList.add("valid");
    }
  }

  function validateBirth(e) {
    if (e.currentTarget.valueAsNumber > new Date().getTime()) {
      createError(e.currentTarget);
    } else {
      e.currentTarget.classList.add("valid");
    }
  }

  function validateAddress(e) {
    var input = e.currentTarget;
    var hasSpace = false;

    for (var i = 0; i < input.value.length; i++) {
      if (i != 0 && i != input.value.length && input.value.charAt(i) == " ") {
        hasSpace = true;
      }
    }

    if (
      input.value.length < 5 ||
      !hasSpace ||
      !checkNumbersAndLetters(input.value)
    ) {
      createError(input);
    } else {
      input.classList.add("valid");
    }
  }

  function validateCity(e) {
    if (
      e.currentTarget.value.length < 4 ||
      !isAlphaNumeric(e.currentTarget.value)
    ) {
      createError(e.currentTarget);
    } else {
      e.currentTarget.classList.add("valid");
    }
  }

  function validateZipcode(e) {
    if (
      e.currentTarget.value.length < 4 ||
      e.currentTarget.value.length > 5 ||
      !validateNumbers(e)
    ) {
      createError(e.currentTarget);
    } else {
      e.currentTarget.classList.add("valid");
    }
  }

  function validateEmail(e) {
    var email = e.currentTarget.value;
    if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)) {
      createError(e.currentTarget);
    } else {
      e.currentTarget.classList.add("valid");
    }
  }

  function validatePassword(e) {
    if (
      e.currentTarget.value.length < 8 ||
      !checkNumbersAndLetters(e.currentTarget.value)
    ) {
      createError(e.currentTarget);
    } else {
      e.currentTarget.classList.add("valid");
    }
  }

  function validateRPassword(e) {
    if (inputPassword.value != e.currentTarget.value) {
      createRPasswordError(e.currentTarget);
    } else {
      e.currentTarget.classList.add("valid");
    }
  }
};
