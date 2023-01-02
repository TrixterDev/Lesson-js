// let number = 10;
// let number2 = 20;

// let name = "asdas";

// let age = prompt("Введите свой возраст");

// let result = Number(age) + 10;

// console.log(result);
//"=" - оператор присвоения






//Самостоятельная работа


// let name = prompt("Введите ваше имя:");
// let age = prompt("Введите ваш возраст");

// let result1 = "Привет " + name + ', ' + "мне " + age + " лет";

// console.log(result1);

// // let num1 = prompt("Введите первое число");
// // let num2 = prompt("Введите второе число котрое будет прибавлено к первому");

// // let result1 = Number(num1) + Number(num2);

// // console.log(num1 + "+" + num2 + "=" + result1);



// // let user_name = prompt("Укажите имя пользователя");

// // if(user_name <= 4){
// //   console.log("Введите имя пользователя");
// // }





// let mess = prompt("Сколько будет 2+2/2");
// if (mess === "3" || mess === "three") {
//   alert("Вы ответили правильно")
// } else {
//   alert("Вы ответили не правильно")
// }
// switch (mess) {
//   case "3":
//     alert("Вы ответили правильно")
//     break;
//   case "three":
//     alert("Вы ответили правильно")
//     break;
//   default:
//     alert("Вы ответили не правильно")
//     break;
// }
// const body = document.querySelector(".mission-1");
// const text = document.querySelector("#text");
// const submit = document.querySelector("#submit").addEventListener("click", reply);
// const mess = document.createElement("span");

// function reply() {
//   if (text.value === "3" || text.value === "three") {
//     mess.innerHTML = "Вы ответили правильно !";
//     mess.style.color = "green";
//     mess.style.fontWeight = "bold";
//     mess.style.marginTop = "20px"
//     body.append(mess);
//   } else {
//     const loss = document.createElement("span");
//     mess.textContent = "Вы ответили не правильно !";
//     mess.style.color = "red";
//     mess.style.fontWeight = "bold";
//     mess.style.marginTop = "20px"
//     body.append(mess);
//   }
// }




// Shadow-function prospect
// const body = document.querySelector(".body");
// const task = document.querySelector(".add-task");
// const addTask = document.querySelector(".btn-add").addEventListener("click", addNewTask);

// function addNewTask() {
//   const newTask = document.createElement("p");
//   newTask.style.display = "flex";
//   newTask.textContent = task.value;
//   body.append(newTask);
//   const removeTask = document.createElement("p");
//   removeTask.textContent = "×"
//   removeTask.addEventListener("click", function () {
//     newTask.remove();
//   });
//   newTask.append(removeTask);
// }



let timer;
const body = document.querySelector(".nav-timer");
const startBtn = document.querySelector("#start").addEventListener("click", start);
const stopBtn = document.querySelector("#stop").addEventListener("click", stop);

function start() {
  if (!timer) {
    timer = setInterval(startTime, 5000);
    timer = null
  }
}

function stop() {
  clearInterval(timer);
  timer = null
}

function startTime() {
  const elem = document.createElement("div");
  elem.classList.add("element");
  elem.textContent = Math.floor(Math.random() * 10);
  body.append(elem);
}

timer = setInterval(startTime, 5000);
