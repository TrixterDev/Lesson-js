// let color = localStorage.getItem("color");

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


let time = document.querySelector(".time");

function render() {
  time.innerHTML = num.hour + " : " + num.min + " : " + num.sec;
};

function startTimer() {
  const addSec = setInterval(function () {
    num.sec++;
    render();
  }, 1000)
};

function stopTimer() {
  // if (start) {
  //   num.sec = setInterval(function () {
  //     num.sec++;
  //     render();
  //   }, 1000)
  // }
  const stop = clearInterval();
}

const start = document.querySelector("#start").addEventListener("click", startTimer);
const stop = document.querySelector("#stop").addEventListener("click", stopTimer);

