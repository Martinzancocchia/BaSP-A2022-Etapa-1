window.onload = function () {
  var form = document.getElementById("form");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var alertMessage;
  // var allInputs = document.querySelectorAll("input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    var emailValue = email.value;
    var passwordValue = password.value;
    alert(`email: ${emailValue}\npassword: ${passwordValue}`);

    checkInputs();
  });

  function setErrorFor(input, message) {
    let formControl = input.parentElement;
    let small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
  }

  function setSuccessFor(input) {
    let formControl = input.parentElement;
    formControl.className = "form-control success";
  }

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

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  function checkInputs() {}

  email.onblur = function () {
    let emailValue = email.value.trim();
    if (emailValue === "") {
      setErrorFor(email, "Email cannot be blank");
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, "Not a valid email");
    } else {
      setSuccessFor(email);
    }
  };

  password.onblur = function () {
    let passwordValue = password.value.trim();
    if (passwordValue === "") {
      setErrorFor(password, "Password cannot be blank");
    } else if (passwordValue.length < 8) {
      console.log("dsadsad");
      setErrorFor(password, "The password is to short");
    } else if (checkNumbersAndLetters(password.value)) {
      setSuccessFor(password);
    } else {
      setErrorFor(password, "At least one capital letter and one number");
    }
  };

  function showValidationsContent(event) {
    event.preventDefault();
    alertMessage = emailValue + passwordValue;
    submitInfo();
  }

  function submitInfo() {
    if (allValidated()) {
      fetch(
        "https://basp-m2022-api-rest-server.herokuapp.com/login?email=" +
          email.value +
          "&password=" +
          password.value
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.success) {
            console.log(data);
            var correctAlert = data.msg + "\n" + alertMessage;
            alert(correctAlert);
          } else {
            throw Error;
          }
        })
        .catch(function () {
          alert("user not found");
        });
    } else {
      alert("Request rejected \n" + alertMessage);
    }
  }
};
