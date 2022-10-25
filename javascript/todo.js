const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDo();

  if (toDos.length === 0) {
    toDoList.classList.add("hidden");
    saveToDo();
  }
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  let button = document.createElement("button");

  toDoList.classList.remove("hidden");
  button = styleRemoveButton(button);
  li.id = newTodo.id;
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  toDoList.appendChild(li);
}

function styleRemoveButton(button) {
  const img = document.createElement("img");
  img.src = "../img/icons/x_icon.png";
  button.id = "remove-button";
  button.type = "button";
  button.appendChild(img);
  button.addEventListener("click", deleteToDo);
  return button;
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parseTodos = JSON.parse(savedToDos);
  toDos = parseTodos;
  parseTodos.forEach(paintToDo);
}
