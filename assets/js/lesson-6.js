document.querySelector("#btn-add").addEventListener("click", createNewToDo);
const toDoText = document.querySelector("#new-task");
const todoWorkspace = document.querySelectorAll(".todo__list");


let arrTask = [];

function addTask(name) {
  const task = document.createElement("div");
  task.classList.add("todo__task");
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
  const progress = document.createElement("button");
  progress.textContent = "Add in progress";
  progress.classList.add("btn-in-progress");
  progress.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-in-progress")) {
      const task = document.querySelector(".todo__task")
      task.remove();
      todoWorkspace[1].append(task);
      progress.textContent = "Done";
    }
  });
  task.append(progress);
}

// progress.addEventListener("click", function (event) {
//   if (event.target.classList.contains("btn-in-progress")) {
//     const task = document.querySelector(".todo__task")
//     task.remove();
//     todoWorkspace[1].append(task);
//     progress.textContent = "Done";
//   }
// });

function createNewToDo() {
  addTask(toDoText.value);
  localStorage.getItem("task");
  localStorage.setItem("task", JSON.stringify(arrTask) || []);
}

// function itemRemove(i) {
//   const removeArr = JSON.parse(localStorage.getItem("task") || []);
//   if (removeArr) {
//     removeArr.splice(i, 1);
//     localStorage.setItem("task", JSON.stringify(removeArr));
//   }
// }

function init() {
  arrTask = JSON.parse(localStorage.getItem("task") || []);
  arrTask.forEach(tasks => {
    addTask(tasks)
  })
}
init(); 