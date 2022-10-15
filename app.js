const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("input");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector("#logout");

const HIDDEN_CLASSNAMES = "hidden";
const USERNAME_KEY = "username";
const savedUser = localStorage.getItem(USERNAME_KEY);

const onLoginSubmit = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAMES);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
};
const paintGreeting = (username) => {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAMES);
  activateLogout();
};

const activateLogout = () => {
  logoutButton.classList.remove(HIDDEN_CLASSNAMES);
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASSNAMES);
    logoutButton.classList.remove(HIDDEN_CLASSNAMES);
    greeting.classList.add(HIDDEN_CLASSNAMES);
  });
};

if (savedUser === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAMES);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUser);
}
