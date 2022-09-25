window.onload= function(){


let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkNumbersAndLetters(str) {
  let hasNumber = false;
  let hasLetter = false;
  for (let i = 0; i < str.length; i++) {
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

console.log(checkNumbersAndLetters("dsadsadsadaP8"));

function checkInputs() {
  // trim to remove the whitespaces
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  // if (passwordValue === "") {
  //   setErrorFor(password, "Password cannot be blank");
  // } else if (passwordValue.length < 8) {
  //   setErrorFor(password, "The password is to short");
  // } else if (checkNumbersAndLetters(password.value)) {
  //   setSuccessFor(password);
  // } else {
  //   setErrorFor(password, "At least one capital letter and one number");
  // }
}

// function setErrorFor(input, message) {
//   let formControl = input.parentElement;
//   let small = formControl.querySelector("small");
//   formControl.className = "form-control error";
//   small.innerText = message;
// }

function setSuccessFor(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

password.onblur = function () {
  let passwordValue = password.value.trim();
  if (passwordValue === "") {
    // setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 8) {
    console.log("dsadsad");
    password.classList.add("color-blue");
    // setErrorFor(password, "The password is to short");
  } else if (checkNumbersAndLetters(password.value)) {
    setSuccessFor(password);
  } else {
    setErrorFor(password, "At least one capital letter and one number");
  }
};

}