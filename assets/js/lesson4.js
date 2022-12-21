const createElement = function (text, callback) {
  const element = $("<li>").text(text)

  if (callback) {
    callback(element);
  }
};

createElement("Text", function (task) {
  $(".list").append(task);
});

const btn = document.querySelector(".btn").addEventListener("click", function () {
  console.log("Click");
})

document.querySelector(".lost");