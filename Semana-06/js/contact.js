// NO ME FUNCIONA, SI PUEDEN CORREGIRMELO IGUAL Y DECIRME QUE ME ESTA FALLANDO
// SERIA UN GOLAZO < 3



// window.onload = () => {
//     // inputs
//     var inputName = document.querySelector("#name");
//     var inputEmail = document.querySelector("#email");
//     var inputArea = document.querySelector("#area");
//     var inputText = document.querySelector("#text");
//     // button
//     var buttonSend = document.querySelector("#send");

//     // Add events listeners
//     inputName.addEventListener("blur", validateName);
//     inputName.addEventListener("focus", removeError);

//     inputEmail.addEventListener("blur", validateEmail);
//     inputEmail.addEventListener("focus", removeError);

//     inputArea.addEventListener("focus", (e) => { });
//     inputArea.addEventListener("blur", removeError);

//     inputText.addEventListener("focus", validateText);
//     inputText.addEventListener("blur", removeError);

//     buttonSend.addEventListener("click", Send);

//     function Send(e) {
//         e.preventDefault();
//         if (errors.length == 0) {
//             alert(
//                 "name: " +
//                 inputName.value +
//                 "\n" +
//                 "email: " +
//                 inputEmail.value +
//                 "\n" +
//                 "area: " +
//                 inputArea.value +
//                 "\n" +
//                 "text: " +
//                 inputText.value +
//                 "\n"
//             );
//         } else {
//             alert("Errors: " + errors);
//         }
//     }

//     var errors = []; //errors array

//     function removeError(e) {
//         var input = e.currentTarget;
//         // remove error class
//         input.classList.remove("error");
//         input.parentNode.classList.remove("error");

//         // remove error message if exist
//         var errorElement = input.parentElement.querySelector(
//             `#error-${input.name}`
//         );
//         if (errorElement) {
//             errorElement.remove();
//         }
//         // remove error from array
//         for (var i = 0; i < errors.length; i++) {
//             if (errors[i] == `The ${input.name} is not valid`) {
//                 errors.splice(i, 1);
//                 i--;
//             }
//         }

//         var errors = []; //errors array

//         function createError(input) {
//             console.log("errors", errors);

//             input.classList.add("error");
//             input.classList.remove("valid");
//             var error = document.createElement("small");
//             error.classList.add("errorMessage");

//             error.setAttribute("id", `error-${input.name}`);
//             error.innerHTML = `The ${input.name} is not valid`;
//             input.parentNode.insertBefore(error, input.nextSibling);
//             input.parentNode.classList.add("error");

//             errors.push(`The ${input.name} is not valid`);
//         }
//     }
//     // validation functions
//     function isAlphaNumeric(str) {
//         var code, i, len;

//         for (i = 0, len = str.length; i < len; i++) {
//             code = str.charCodeAt(i);
//             if (
//                 !(code > 47 && code < 58) && // numeric (0-9)
//                 !(code > 64 && code < 91) && // upper alpha (A-Z)
//                 !(code > 96 && code < 123)
//             ) {
//                 // lower alpha (a-z)
//                 return false;
//             }
//         }
//         return true;
//     }

//     function validateLength3(e) {
//         var input = e.currentTarget;
//         if (input.value.length < 3) {
//             return false;
//         } else {
//             return true;
//         }
//     }

//     function validateLetters(e) {
//         var input = e.currentTarget;
//         for (let i = 0; i < input.value.length; i++) {
//             if (parseFloat(input.value.charAt(i))) {
//                 return false;
//             }
//         }
//         return true;
//     }

//     //  validate inputs
//     function validateEmail(e) {
//         var email = e.currentTarget.value;
//         if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)) {
//             createError(e.currentTarget);
//         } else {
//             e.currentTarget.classList.add("valid");
//         }
//     }

//     function validateName(e) {
//         if (!validateLetters(e) || !validateLength3(e)) {
//             createError(e.currentTarget);
//         } else {
//             e.currentTarget.classList.add("valid");
//         }
//     }



//     function validateText(e) {
//         console.log("validate text");
//     }
// };
