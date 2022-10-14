const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const onLoginClick = () => {
  console.log("hello" + loginInput.value);
};

loginButton.addEventListener("click", onLoginClick);
