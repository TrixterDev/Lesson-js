const getColor = document.querySelector("#get-color");
const colors = document.querySelector(".color__cards");

let arrColor = [];

getColor.addEventListener("change", function () {
  createElem(getColor.value);
  arrColor.push(getColor.value);
  localStorage.getItem("color");
  localStorage.setItem("color", JSON.stringify(arrColor));
});

function createElem(xz) {
  const newColor = document.createElement("span");
  newColor.classList.add("color__add-color");
  newColor.style.background = xz;
  colors.append(newColor);
  newColor.addEventListener("click", function () {
    const body = document.querySelector("body");
    body.style.background = xz
  })
}

function init() {
  arrColor = JSON.parse(localStorage.getItem("color")) || [];
  arrColor.forEach(element => {
    createElem(element);
  });
}

document

init();


document.querySelector(".color__add-color").addEventListener("context", function (event) {
  event.preventDefault();
  if (event.target.classList("color__add-color")) {
    const conf = confirm("Вы хотите удалить этот цвет");
  }
})
