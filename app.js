var input = document.querySelector("input");
var lowerCase = document.querySelector(".lowercase");
var upperCase = document.querySelector(".uppercase");
var number = document.querySelector(".number");
var symbol = document.querySelector(".symbol");
var characters = document.querySelector(".characters");
var eye = document.querySelector(".form-input i");
var validator = document.querySelectorAll(".validator p");
console.log(validator);

eye.addEventListener("click", function () {
  input.getAttribute("type") === "text"
    ? input.setAttribute("type", "password")
    : input.setAttribute("type", "text");
  input.setAttribute("type", "text");
  this.classList.toggle("show");
});

// Verify all in one regex line
// input.addEventListener("input", function () {
//   let val = this.value;
//   validator.forEach((valid) => {
//     if (
//       /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}/.test(
//         val
//       )
//     ) {
//       valid.classList.add("valid");
//     } else {
//       valid.classList.remove("valid");
//     }
//   });

// });

input.addEventListener("input", function () {
  let val = this.value;
  /[a-z]/.test(val)
    ? lowerCase.classList.add("valid")
    : lowerCase.classList.remove("valid");
  /[A-Z]/.test(val)
    ? upperCase.classList.add("valid")
    : upperCase.classList.remove("valid");
  /[0-9]/.test(val)
    ? number.classList.add("valid")
    : number.classList.remove("valid");
  /[\W]/.test(val)
    ? symbol.classList.add("valid")
    : symbol.classList.remove("valid");
  val.length >= 8
    ? characters.classList.add("valid")
    : characters.classList.remove("valid");
});
