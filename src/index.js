import "./style.css";
import "./pwd.js";
import homeImage from "./img/rb_1351.png";
import { getData } from "./countryList";

const image = document.createElement("img");
image.src = homeImage;
image.className = "home-img";

const imgContainer = document.querySelector(".img-container");
imgContainer.appendChild(image);

const emailform = document.getElementById("femail");

emailform.addEventListener("input", () => {
  emailform.reportValidity();
});

getData("country-name");
getData("country-code");
