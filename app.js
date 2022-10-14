const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("input");

const onLoginSubmit = (event) => {
  event.preventDefault();
  console.log(loginInput.value);
};

loginForm.addEventListener("submit", onLoginSubmit);
