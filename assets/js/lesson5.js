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
  hour: 00,
  min: 00,
  sec: 00,
};

let timer;

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
};

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

function (params) {

}

document.querySelector("#start").addEventListener("click", startTimer);
document.querySelector("#stop").addEventListener("click", stopTimer);
document.querySelector("#reset").addEventListener("click", resetTimer);
document.querySelector("#reset").addEventListener("click", roundTimer);

