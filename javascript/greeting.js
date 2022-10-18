const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("input");
const logoutButton = document.querySelector("#logout");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAMES = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  const username = localStorage.getItem(USERNAME_KEY);
  loginForm.classList.add(HIDDEN_CLASSNAMES);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAMES);
}

function logOut() {
  localStorage.removeItem(USERNAME_KEY);
  greeting.classList.add(HIDDEN_CLASSNAMES);
  logoutButton.classList.add(HIDDEN_CLASSNAMES);
  loginForm.classList.remove(HIDDEN_CLASSNAMES);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAMES);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
  // logoutButton.classList.remove(HIDDEN_CLASSNAMES);
  // logoutButton.addEventListener("click", logOut);
}
