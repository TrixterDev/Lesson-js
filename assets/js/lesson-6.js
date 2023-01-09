document.querySelector("#btn-add").addEventListener("click", createNewToDo);
const toDoText = document.querySelector("#new-task");
const todoWorkspace = document.querySelectorAll(".todo__list");
const task = document.createElement("div");
task.classList.add("todo__task");

let arrTask = [];

function addTask(name) {
  todoWorkspace[0].append(task);
  const nameTask = document.createElement("p");
  nameTask.classList.add("todo__name");
  const closeTask = document.createElement("p");
  closeTask.textContent = "×";
  closeTask.classList.add("todo__close");
  nameTask.textContent = name;
  task.append(nameTask);
  nameTask.append(closeTask);
  arrTask.push(toDoText.value);
}

function createNewToDo() {
  addTask(toDoText.value);
  localStorage.getItem("task");
  localStorage.setItem("task", JSON.stringify(arrTask) || []);
}

function itemRemove(i) {
  const removeArr = JSON.parse(localStorage.getItem("task") || []);
  if (removeArr) {
    removeArr.splice(i, 1);
    localStorage.setItem("task", JSON.stringify(removeArr));
  }
}

function init() {
  arrTask = JSON.parse(localStorage.getItem("task") || []);
  arrTask.forEach(tasks => {
    addTask(tasks)
  })
}
init(); 