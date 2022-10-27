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

function getInstanceElement(instance) {
  const newArray = [];
  for (let i = 0; i < instance.length; i++) {
    newArray.push(instance[i]);
  }
  return newArray;
}

function doneToDo(event) {
  const todo = event.target.parentElement;
  const text = todo.style.textDecoration;

  const selectedTodo = getInstanceElement(toDos).filter(
    (idx) => idx.id.toString() === todo.id
  );

  const button = document.querySelector(
    `ul > li > #${"_" + selectedTodo[0].id}`
  );

  text === "line-through"
    ? designDoneToDo(todo, button)
    : designUndoneToDo(todo, button);
}

function designDoneToDo(todo, doneButton) {
  todo.style.textDecoration = "none";
  doneButton.style.color = "red";
}

function designUndoneToDo(todo, doneButton) {
  todo.style.textDecoration = "line-through";
  doneButton.style.color = "#00ff62";
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  let removeButton = document.createElement("button");
  let doneButton = document.createElement("button");

  removeButton = paintRemoveButton(removeButton);
  doneButton = paintDoneButton(doneButton, newTodo);

  if (isTodoCountLengthOverSeven()) return;

  li.id = newTodo.id;
  li.appendChild(span);
  li.appendChild(doneButton);
  li.appendChild(removeButton);
  li.style.marginBottom = "3.5px";

  span.innerText = newTodo.text;
  toDoList.appendChild(li);
  toDoList.classList.remove("hidden");
}

function isTodoCountLengthOverSeven() {
  if (toDos.length >= 8) {
    alert("You can not add more!");
    toDos.pop(toDos[toDos.length - 1]);
    saveToDo();
    return true;
  } else {
    return false;
  }
}

function paintRemoveButton(removeButton) {
  removeButton.type = "button";
  removeButton.classList = "material-symbols-outlined button";
  removeButton.innerText = "delete";
  removeButton.addEventListener("click", deleteToDo);
  return removeButton;
}

function paintDoneButton(doneButton, newTodo) {
  doneButton.id = "_" + newTodo.id;
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
