// const getRandomNumber = function (limit) {
//   return Math.floor(Math.random() * limit ++);
// }

// let result = getRandomNumber(30);

// console.log(result);

// const forNumber = function (message, min, max) {
//   let num;
//   do {
//     num = Number(prompt(message));
//   } while (!num || num < 1 || num > 20);

//   return num;
// }

// let result = forNumber("Укажите число от 1 до 20", 1, 20)

// console.log(result)

// let number = prompt("Введите число");

// const numbers = function () {
//   if (number > 0) {
//     console.log("Вы ввели положительное число");
//   } else if (number < 0) {
//     console.log("Вы ввели отрицательное число");
//   }else if (number == "0"){
//     console.log("Вы ввели ноль");
//   }else if (number == null){
//     console.log("Вы нажали отмена");
//   }else{
//     console.log("Вы ввели не число");
//   }
//   return
// };

// numbers()
// №1

// const egg = function () {
//   let time = 5;
//   let mess = Math.ceil(prompt("Сколько яиц вы хотите сварить"));
//   let result = mess * time;
//   if (mess >= 8) {
//     alert("В каструлю можно положить меньше 8 яиц")
//   } else {
//     alert(`Для варки ${mess}, нужно ${result} минут`);
//   }
// }
// egg();
//№2

// const numbers = function () {
//   let sum = 0;
//   for (let i of arguments) {
//     sum += i;
//   };
//   return;
// };

// const result = numbers(1, 2, 3, 4, 5, 6, 7, 8);

// console.log(result);
// №3

// const score = function () {
//   const arrayWin = ["a", "a", "b", "b"];
//   let arrayUser = [];
//   let scoreMess;

//   while (arrayUser.length !== 4) {
//     scoreMess = prompt("Введите ответы на вопросы");
//     arrayUser.push(scoreMess);
//   };
//   console.log(arrayUser);
//   console.log("Варианты правильных ответов: " + arrayWin);
// };

// score();
// №4


//Самостоятельная работа

// const circle = {
//   radius: 0,
//   getSquare: function () {
//     return this.radius = Math.PI * Math.pow(this.radius, 2);
//   },
//   getLenght: function () {
//     return 2 * Math.PI * this.radius;
//   },
//   messRadius() {
//     this.radius = +prompt("ведите радиус");
//   },
// };

// if (circle.radius == "") {
//   circle.messRadius();
//   alert(`
//   Вы не ввели число
// `);
// }
// circle.messRadius();
// alert(`
// Радиус: ${circle.radius}
// Площадь: ${circle.getSquare()}
// Длина: ${circle.getLenght()}
// `);
// №1

// const elevator = {
//   elevatorFloors: 1,
//   selectFloors: 0,
//   toFloor: function (floor) {
//     this.selectFloors = floor ? floor : +prompt("Введите этаж на который вы хотите поехать");
//     if (this.selectFloors > 16 || this.selectFloors < 1) {
//       console.log("Система не может понять на какой вам этаж надо");
//       return
//     }
//     while (this.selectFloors !== this.elevatorFloors) {
//       if (this.elevatorFloors < this.selectFloors) {
//         this.upOneFloor()
//       } else {
//         this.downOneFloor()
//       }
//     }
//     this.printFloor()
//   },
//   printFloor: function () {
//     console.log(`Лифт сейчас на ${this.elevatorFloors} этаже`);
//   },
//   upOneFloor: function () {
//     if (this.elevatorFloors < 16) {
//       this.elevatorFloors++
//       this.printFloor();
//     }
//   },
//   downOneFloor: function () {
//     if (this.elevatorFloors > 1) {
//       this.elevatorFloors--
//       // this.printFloor();
//     }
//   },
// };
// elevator.toFloor();
// elevator.downOneFloor();

