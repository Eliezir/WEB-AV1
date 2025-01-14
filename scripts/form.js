const inputs = document.querySelectorAll(".input");
console.log(inputs);
const button = document.querySelector(".login__button");
const visibility_icon = document.querySelector(".visibility");

var checkBoxEffects = document.querySelector(".effects--input--checkbox");

const handleFocus = ({ target }) => {
  if (target.type === "button") {
    target = inputs[1];
  }
  const span = target.parentElement.firstElementChild;
  span.classList.add("span-active");
};

const handleFocusOut = ({ target }) => {
  if (target.type === "button") {
    target = inputs[1];
  } else if (target.value === "") {
    const span = target.parentElement.firstElementChild;
    span.classList.remove("span-active");
  }
};

inputs.forEach((input) => input.addEventListener("focus", handleFocus));
inputs.forEach((input) => input.addEventListener("focusout", handleFocusOut));
