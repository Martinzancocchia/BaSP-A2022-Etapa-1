window.onload = function () {
  var form = document.getElementById("form");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var modal = document.getElementById("myModal");
  var modalClose = document.getElementById("modal-close");
  // var allInputs = document.querySelectorAll("input");
  modalClose.onclick = function () {
    closeModal();
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    var emailValue = email.value;
    var passwordValue = password.value;
    handleLogIn(emailValue, passwordValue)

    //checkInputs();
  });

  function fetchLogin(url, email, password) {
    var data = {
      email: email,
      password: password,
    };
    var queryParams = new URLSearchParams(data);

    // returns promise
    return fetch(`${url}${queryParams}`)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        return res;
      })
      .catch(function (err){
        return err;
      });
  }

  function handleLogIn(email, password) {

    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?';

    var data = fetchLogin(
      url,
      email,
      password,)
      .then(function (data) {
        if (data.success) {
          showModal("Success", data, true);
        } else {
          showModal("Error", data, false);
        }
      })

  }

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

  function checkInputs() { }

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
}