const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const onLoginClick = () => {
  const username = loginInput.value;
  if (username === "") {
    alert("Please write your name!!");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  } else {
    alert("")
  }
};

loginButton.addEventListener("click", onLoginClick);
