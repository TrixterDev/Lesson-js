// const createElement = function (text, callback) {
//   const element = $("<li>").text(text)

//   if (callback) {
//     callback(element);
//   }
// };

// createElement("Text", function (task) {
//   $(".list").append(task);
// });

// const btn = document.querySelector(".btn").addEventListener("click", function () {
//   console.log("Click");
// })

// const tasks = [
//   {
//     id: 234,
//     title: " Create user registration API",
//     timeSpent: 4,
//     category: " Backend ",
//     type: " task ",
//   },
//   {
//     id: 235,
//     title: "Create user registration UI ",
//     timeSpent: 8,
//     category: " Frontend ",
//     type: " task ",
//   },
//   {
//     id: 237,
//     title: "User sign -in via Google UI ",
//     timeSpent: 3.5,
//     category: " Frontend ",
//     type: " task ",
//   },
//   {
//     id: 238,
//     title: "User sign -in via Google API ",
//     timeSpent: 5,
//     category: " Backend ",
//     type: " task ",
//   },
//   {
//     id: 241,
//     title: "Fix account linking ",
//     timeSpent: 5,
//     category: " Backend ",
//     type: " bug ",
//   },
//   {
//     id: 250,
//     title: "Fix wrong time created on new record ",
//     timeSpent: 1,
//     category: " Backend ",
//     type: " bug ",
//   },

//   {
//     id: 262,
//     title: "Fix sign -in failed messages ",
//     timeSpent: 2,
//     category: " Frontend ",
//     type: " bug ",
//   },
// ];

// // const arr = 

// const filterUi = tasks.filter((ui) => {
//   return ui.title.includes("UI");
// });

// const filterFront = tasks.filter((front) => {
//   if (front.category == " Frontend ") {
//     return front;
//   }
// });

// const filterBack = tasks.filter((back) => {
//   if (back.category == " Backend ") {
//     return back
//   };
// })

// const filterBug = tasks.filter((bug) => {
//   if (bug.type == " bug ") {
//     return bug;
//   }
// });

// const timeBug = filterBug.reduce((acc, i) => {
//   return acc + i.timeSpent;
// }, 0)

// const timeFront = filterFront.reduce((acc, i) => {
//   return acc + i.timeSpent;
// }, 0);


// const list = document.querySelector(".list");

// const frontTime = document.createElement("p");
// frontTime.textContent = "Количество времени Front-End: " + timeFront;

// list.append(frontTime);

// const bugTime = document.createElement("p");
// bugTime.textContent = "Количество времени Bug: " + timeBug;

// list.append(bugTime);

// const taskUI = document.createElement("p");
// taskUI.textContent = "Количество задач UI: " + filterUi.length;

// list.append(taskUI);

// const taskFront = document.createElement("p");
// taskFront.textContent = "Количество задач Front-End: " + filterFront.length;

// list.append(taskFront);

// const taskBack = document.createElement("p");
// taskFront.textContent = "Количество задач Back-End: " + filterBack.length;

// list.append(taskBack);

// console.log(filterUi.length);

// $(document).ready(function () {
//   const btn = document.querySelector(".btn-add");
//   const form = document.querySelector("form");
//   const addTask = document.querySelector(".add-task")
//   const addDiv = document.createElement("div")
//   addDiv.classList.add("task-item");
//   form.append(addDiv);
//   btn.addEventListener("click", function () {
//     const textDiv = document.createElement("p");
//     textDiv.textContent = addTask.value;
//     addDiv.append(textDiv);
//     addTask.value = "";
//     const close = document.querySelector(".close");
//     close.addEventListener("click", function () {
//       addDiv.remove(textDiv);
//     })
//   });

// })

