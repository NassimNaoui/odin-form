export const conditions = {
  minLength: {
    check(pwd) {
      return pwd.length >= 8 ? true : false;
    },
  },
  hasUpperCase: {
    check(pwd) {
      let lenPwd = pwd.length;
      let loopLauncher = true;
      if (loopLauncher) {
        for (let i = 0; i < lenPwd; i++) {
          if (
            pwd[i] === pwd[i].toUpperCase() &&
            !Number.isInteger(Number(pwd[i])) &&
            !conditions.hasSpecialChar.speCialchar.includes(pwd[i])
          ) {
            loopLauncher = false;
            return true;
          }
        }
      }
    },
  },
  hasLowerCase: {
    check(pwd) {
      let lenPwd = pwd.length;
      let loopLauncher = true;
      if (loopLauncher) {
        for (let i = 0; i < lenPwd; i++) {
          if (
            pwd[i] === pwd[i].toLowerCase() &&
            !Number.isInteger(Number(pwd[i])) &&
            !conditions.hasSpecialChar.speCialchar.includes(pwd[i])
          ) {
            loopLauncher = false;
            return true;
          }
        }
      }
    },
  },
  hasNumber: {
    check(pwd) {
      let lenPwd = pwd.length;
      let loopLauncher = true;
      if (loopLauncher) {
        for (let i = 0; i < lenPwd; i++) {
          if (Number.isInteger(Number(pwd[i]))) {
            loopLauncher = false;
            return true;
          }
        }
      }
    },
  },
  hasSpecialChar: {
    speCialchar: [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      ",",
      ".",
      "?",
      "'",
      ":",
      "{",
      "}",
      "|",
      "<",
      ">",
      ";",
    ],
    check(pwd) {
      let lenPwd = pwd.length;
      let loopLauncher = true;
      if (loopLauncher) {
        for (let i = 0; i < lenPwd; i++) {
          for (let j = 0; j < this.speCialchar.length; j++) {
            if (pwd[i] === this.speCialchar[j]) {
              loopLauncher = false;
              return true;
            }
          }
        }
      }
    },
  },
  pwdChecked: {
    check(pwd1, pwd2) {
      return pwd1 === pwd2 && pwd1.length >= 8 ? true : false;
    },
  },
};
