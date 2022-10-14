const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("input");

const link = document.querySelector("a");

const onLoginSubmit = (event) => {
  console.log(loginInput.value);
  event.preventDefault();
};

const handleLinkClick = (event) => {
  console.dir(event);
  event.preventDefault();
};

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
