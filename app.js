const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("input");
const greeting = document.querySelector("#greeting");
const greeting2 = document.querySelector("#greeting2");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting2.classList.remove(HIDDEN_CLASSNAME);
}

function changeFontColor() {
  const fontColor = greeting2.style.color;
  let newColor;

  switch (fontColor) {
    case "":
      newColor = "red";
      break;
    case "red":
      newColor = "blue";
      break;
    case "blue":
      newColor = "red";
      break;
  }

  greeting2.style.color = newColor;
}

loginForm.addEventListener("submit", onLoginSubmit);
greeting2.addEventListener("click", changeFontColor);
