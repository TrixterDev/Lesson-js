// const todo = document.querySelector(".todo-list");

// const { post } = require("jquery");

// let tasks = [
//   "Сходить в магазин",
//   "Приготовить обед",
//   "Поесть",
//   "Отдохнуть",
//   "Работать"
//   ];

// for (const item of tasks) {
//   const addTask = document.createElement("li");
//   addTask.textContent = item;
//   addTask.classList.add("task");
//   todo.append(addTask);
// }



// function addTask(item) {
//   const add = document.createElement("li");
//   add.textContent = item;
//   add.classList.add("task");
//   todo.append(add);

//   const mess = confirm("Важна ли эта задача?");
//   if (mess){
//     add.style.color = "green";
//     }
// };


// while (true) {
//   let mess = prompt("Введите задачу");
//   if (mess === null) break;
//   addTask(mess);
// };

// for (const item of tasks) {
//   addTask(item)
// };


// console.log(todo);
// №1-№2



// const userRemove = document.querySelectorAll("li");
// userRemove[2].remove();

// const autor = document.querySelector(".autor");
// autor.innerHTML = "Paul Mccarthy";

// const follow = document.querySelector("#follow");
// follow.innerHTML = "1500";
// №3



// let users = [
//   {
//     firstName: 'Mike',
//     lastName: 'Jefferson'
//   },
//   {
//     firstName: 'Sam',
//     lastName: 'Warnington'
//   },
//   {
//     firstName: 'John',
//     lastName: 'Doe'
//   }
// ];

// // for (const item of users) {
// //   alert(item)
// // }


// const usersName = document.querySelector(".users-name");
// function conclusion() {
//   // for (const item of users) {
//   //   const addName = document.createElement("li");
//   //   addName.textContent = item;
//   //   usersName.append(addName);
//   // }
// for (const item of users) {
//   const arr = users[item];
//   alert(users);
// }
// };

// conclusion();
// console.log(usersName);

// №4

// const arrAutor = [
//   "Бенджамин Баттон",
//   "Шерлок Холмс",
//   "Фаренгейт"
// ]

// const posts = document.querySelectorAll(".post");


// for (let i = 0; i < arrAutor.length; i++) {
//   // for (let i = 0; i < arrAutor.length; i++) {
//   const addAutor = document.createElement("h5");
//   addAutor.textContent = arrAutor[i];
//   for (let j = 0; j < posts; j++) {
//     posts[j].append(addAutor);
//   }
//   // }
// }





// №5





// Jquery mission

// const tasks = [
//   // 'Сходить в магазин',
//   // 'Приготовить обед',
//   // 'Поесть',
//   // 'Отдохнуть',
//   // 'Работать'
// ];

// const todo = $(".todo-list")

// // for (const item of tasks) {
// //   const add = $("<li>");
// //   $(add).text(item);
// //   $(add).addClass("task");
// //   todo.append(add);
// // }

// function addTask(item) {
//   const add = $("<li>");
//   $(add).text(item);
//   $(add).addClass("task")
//   todo.append(add);

//   const conf = confirm("Важна ли вам эта задача")
//   if (conf) {
//     $(add).css({
//       color: "red"
//     })
//   }
// }

// while(true){
//   const mess = prompt("Введите задачу")
//   if ( mess == null) break;
//   addTask(mess)
// };

// for (const item of tasks) {
//   addTask(item)
// };
// №1-2 Jquery



// const autor = $("li");
// $(autor)[2].remove();

// const name = $(".autor");
// $(name).html("Paul Mccarthy");

// const follow = $("#follow");
// $(follow).html("1500");
// №3 jQuery



// let  {
//     firstName: 'Mike',
//     lastName: 'Jefferson'
//   },
//   {
//     firstName: 'Sam',
//     lastName: 'Warnington'
//   },
//   {
//     firstName: 'John',
//     lastName: 'Doe'
//   }
// ];
// const body = $("body")
// const list = $("<ul>").addClass("list");
// body.prepend(list);

// function user() {
//   for (let i = 0; i < users.length; i++) {
//     const listItem = $("<li>");
//     $(listItem).text(`${users[i].firstName}, ${users[i].lastName});
//     list.append(listItem);
//   }
// };

// user(); users = [
//   {
//     firstName: 'Mike',
//     lastName: 'Jefferson'
//   },
//   {
//     firstName: 'Sam',
//     lastName: 'Warnington'
//   },
//   {
//     firstName: 'John',
//     lastName: 'Doe'
//   }
// ];
// const body = $("body")
// const list = $("<ul>").addClass("list");
// body.prepend(list);

// function user() {
//   for (let i = 0; i < users.length; i++) {
//     const listItem = $("<li>");
//     $(listItem).text(`${users[i].firstName}, ${users[i].lastName});
//     list.append(listItem);
//   }
// };

// user();
// №4 jQuery



// const users = [
//   {
//     name: "Mike",
//     avatar: "assets/img/mike.png",
//     social: {
//       email: "mike@gmail.com",
//       instagram: "@mike",
//       phone: "+996 555 55 55 55",
//     },
//     hobbies: ["chess", "basketball"],
//   },
//   {
//     name: "John",
//     avatar: "assets/img/john.png",
//     social: {
//       email: "john@gmail.com",
//       instagram: "@john",
//       phone: "+996 666 55 55 55",
//     },
//     hobbies: ["tennis", "basketball"],
//   },
//   {
//     name: "Ketty",
//     avatar: "assets/img/ketty.png",
//     social: {
//       email: "ketty@gmail.com",
//       instagram: "@ketty",
//       phone: "+996 777 44 33 55",
//     },
//     hobbies: ["dance", "swimming"],
//   },
// ];

// const body = document.querySelector("body");
// const sectionCards = document.createElement("section");
// sectionCards.classList.add("cards")
// body.prepend(sectionCards);

// function social(social) {
//   const cardSocialEmail = document.createElement("p");
//   const cardSocialInsta = document.createElement("p");
//   const cardSociaPhone = document.createElement("p");
//   cardSocialEmail.textContent = "Email: " + users[2].social.email;
//   cardSocialInsta.textContent = "Insyagram: " + users[2].social.instagram;
//   cardSociaPhone.textContent = "Phone: " + users[2].social.phone;
//   social.append(cardSocialEmail);
//   social.append(cardSocialInsta);
//   social.append(cardSociaPhone);
// };


// for (let i = 0; i < users.length; i++) {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   sectionCards.append(card);
//   const cardTitle = document.createElement("div");
//   cardTitle.classList.add("card__name");
//   card.append(cardTitle);
//   const cardUserAvatar = document.createElement("img");
//   cardUserAvatar.setAttribute("src", users[i].avatar);
//   cardTitle.append(cardUserAvatar)
//   const cardUserName = document.createElement("h2");
//   cardUserName.textContent = users[i].name;
//   cardTitle.append(cardUserName);
//   const cardInfo = document.createElement("div");
//   cardInfo.classList.add("card__info");
//   card.append(cardInfo);
//   const cardHobbiesBlock = document.createElement("div");
//   cardHobbiesBlock.classList.add("card__hobbies")
//   cardInfo.append(cardHobbiesBlock)
//   const cardHobbiesTitle = document.createElement("h3")
//   cardHobbiesTitle.textContent = "Hobies :";
//   cardHobbiesBlock.append(cardHobbiesTitle);
//   const cardHobbies = document.createElement("p");
//   cardHobbies.textContent = users[i].hobbies;
//   cardHobbiesBlock.append(cardHobbies);
//   const cardSocial = document.createElement("div");
//   cardSocial.classList.add("card__social");
//   cardInfo.append(cardSocial);
//   const cardSocialTitle = document.createElement("h3");
//   cardSocialTitle.textContent = "Social :";
//   cardSocial.append(cardSocialTitle)
//   social(cardSocial);
// }

// №6

// const body = $("body");
// const sectionCards = $("<section>").addClass("cards");
// body.prepend(sectionCards);

// for (let i = 0; i < users.length; i++) {
//   const card = $("<div>").addClass("card");
//   addStructed(sectionCards, card)
//   const cardName = $("<div>").addClass("card__name");
//   const cardAvatar = $("<img>").attr({
//     src: users[i].avatar
//   });
//   const cardUserName = $("<h2>");
//   $(cardUserName).text(users[i].name);
//   addStructed(cardName, cardAvatar);
//   addStructed(cardName, cardUserName);
//   addStructed(card, cardName);
//   const cardInfoUser = $("<div>").addClass("card__info");
//   addStructed(card, cardInfoUser);
//   const cardHobies = $("<h3>");
//   $(cardHobies).text("Hobies: ");
//   addStructed(cardInfoUser, cardHobies);
//   const cardHobiesText = $("<p>");
//   $(cardHobiesText).text(users[i].social);
//   addStructed(cardInfoUser, cardHobiesText);
// };

// №6 Jquery