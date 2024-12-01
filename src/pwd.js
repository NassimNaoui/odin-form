import check from "./img/coche.png";
import uncheck from "./img/marque-de-croix.png";
import { conditions } from "./conditions";

const firstPassword = document.getElementById("pwd");
const secondPassword = document.getElementById("pwd-confirmation");

const minLengthDiv = document.getElementById("8-characters");
const hasUppercaseDiv = document.getElementById("uppercase");
const hasLowercaseDiv = document.getElementById("lowercase");
const hasNumberDiv = document.getElementById("number");
const hasSpecialCharDiv = document.getElementById("punctuation");
const pwdCheckedDiv = document.getElementById("pwd-check");

const conditionArray = [
  minLengthDiv,
  hasUppercaseDiv,
  hasLowercaseDiv,
  hasNumberDiv,
  hasSpecialCharDiv,
  pwdCheckedDiv,
];

conditionArray.forEach((element) => {
  const uncheckIcon = document.createElement("img");
  uncheckIcon.src = uncheck;
  uncheckIcon.className = "condition-icon";
  element.appendChild(uncheckIcon);
});

function checkPwd() {
  const checks = {
    minLength: {
      test: conditions.minLength.check(firstPassword.value),
      div: minLengthDiv,
    },
    hasUppercase: {
      test: conditions.hasUpperCase.check(firstPassword.value),
      div: hasUppercaseDiv,
    },
    hasLowercase: {
      test: conditions.hasLowerCase.check(firstPassword.value),
      div: hasLowercaseDiv,
    },
    hasNumber: {
      test: conditions.hasNumber.check(firstPassword.value),
      div: hasNumberDiv,
    },
    hasSpecialChar: {
      test: conditions.hasSpecialChar.check(firstPassword.value),
      div: hasSpecialCharDiv,
    },
    pwdChecked: {
      test: conditions.pwdChecked.check(
        firstPassword.value,
        secondPassword.value
      ),
      div: pwdCheckedDiv,
    },
  };

  const entries = Object.entries(checks);

  for (let i = 0; i < entries.length; i++) {
    const iconContainer = entries[i][1].div;
    const parentContainer = iconContainer.parentElement;
    const textContainer = parentContainer.children[1];
    if (entries[i][1].test) {
      textContainer.classList.add("valid");
      const checkIcon = document.createElement("img");
      checkIcon.src = check;
      checkIcon.className = "condition-icon";
      if (iconContainer.children.length === 1) {
        iconContainer.removeChild(iconContainer.firstChild);
      }
      iconContainer.appendChild(checkIcon);
    } else {
      textContainer.classList.remove("valid");
      const uncheckIcon = document.createElement("img");
      uncheckIcon.src = uncheck;
      uncheckIcon.className = "condition-icon";
      if (iconContainer.children.length === 1) {
        iconContainer.removeChild(iconContainer.firstChild);
      }
      iconContainer.appendChild(uncheckIcon);
    }
  }
}

firstPassword.addEventListener("input", checkPwd);
secondPassword.addEventListener("input", checkPwd);
