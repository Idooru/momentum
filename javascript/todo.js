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

function doneToDo(event) {
  const todo = event.target.parentElement;
  const done = document.querySelector("#done");
  const text = todo.style.textDecoration;

  text === "line-through"
    ? designDoneToDo(todo, done)
    : designUndoneToDo(todo, done);
}

function designDoneToDo(todo, done) {
  todo.style.textDecoration = "none";
  done.style.color = "red";
}

function designUndoneToDo(todo, done) {
  todo.style.textDecoration = "line-through";
  done.style.color = "#00ff62";
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  let removeButton = document.createElement("button");
  let doneButton = document.createElement("button");

  removeButton = paintRemoveButton(removeButton);
  doneButton = paintDoneButton(doneButton);

  li.id = newTodo.id;
  li.appendChild(span);
  li.appendChild(doneButton);
  li.appendChild(removeButton);

  span.innerText = newTodo.text;
  toDoList.appendChild(li);
  toDoList.classList.remove("hidden");
}

function paintRemoveButton(removeButton) {
  removeButton.type = "button";
  removeButton.classList = "material-symbols-outlined button";
  removeButton.innerText = "delete";
  removeButton.addEventListener("click", deleteToDo);
  return removeButton;
}

function paintDoneButton(doneButton) {
  doneButton.id = "done";
  doneButton.type = "button";
  doneButton.classList = "material-symbols-outlined button";
  doneButton.innerText = "done";
  doneButton.addEventListener("click", doneToDo);
  return doneButton;
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
