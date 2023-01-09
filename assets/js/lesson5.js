// let color = localStorage.getItem("color");

// const { timers } = require("jquery");

// if (!color) {
//   localStorage.setItem("color", "#000")
// }

// console.log(color);

// const save = document.querySelector("#save");
// save.addEventListener("click", function () {
//   localStorage.setItem()
// })

const num = {
  hour: 0,
  min: 0,
  sec: 0,
};

let timer;
let arrTime = [];

const start = function () {
  num.sec++;
  if (num.sec >= 59) {
    num.sec = 0;
    num.min++
  } if (num.min >= 59) {
    num.min = 0;
    num.hour++
  };
  render()
}

const connectTimer = document.querySelector(".time");

function render() {
  connectTimer.innerHTML = format(num.hour) + " : " + format(num.min) + " : " + format(num.sec)
}

const format = (units) => (units < 10 ? "0" + units : units);

function startTimer() {
  if (!timer) {
    timer = setInterval(start, 1000)
  }
}

function resetTimer() {
  num.sec = 0;
  num.min = 0;
  num.hour = 0;
  clearInterval(timer);
  timer = null;
  render()
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

const init = function () {
  arrTime = JSON.parse(localStorage.getItem("time")) || [];
  arrTime.forEach((timer) => { addItem(timer) });
};

const removeItem = function (index) {
  const timers = JSON.parse(localStorage.getItem("time")) || [];
  if (timers.length) {
    timers.splice(index, 1);
    localStorage.setItem("time", JSON.stringify(timers));
  }
};

function roundTimer() {
  arrTime.push({ ...num });
  addItem(num);
  localStorage.getItem("time");
  localStorage.setItem("time", JSON.stringify(arrTime));
}

function addItem(name) {
  const addRound = document.createElement("li");
  addRound.textContent = `${format(name.hour)} : ${format(name.min)} : ${format(name.sec)}`;
  const closeBtn = document.createElement("span");
  closeBtn.textContent = "×";
  closeBtn.classList.add("close");
  document.querySelector(".round").append(addRound);
  addRound.append(closeBtn);
}

document.querySelector(".round").addEventListener("click", function (event) {
  const items = document.querySelectorAll("li");
  if (event.target.classList.contains("close")) {
    const timer = event.target.closest("li");
    const index = [...items].indexOf(timer);
    console.log(index);

    timer.remove();
    removeItem(index);
  }
})

document.querySelector("#start").addEventListener("click", startTimer);
document.querySelector("#stop").addEventListener("click", stopTimer);
document.querySelector("#reset").addEventListener("click", resetTimer);
document.querySelector("#round").addEventListener("click", roundTimer);
init()
