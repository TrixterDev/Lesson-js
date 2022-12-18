// let num1 = +prompt("Введите первое число");
// let num2 = +prompt("Введите второе число");

// if (num1 < num2){
//   console.log(`
//   ${num1} меньше ${num2}
//   `);
// }else if(num1 > num2){
//   console.log(`
//   ${num1} больше ${num2}
//   `);
// }else{
//   console.log(`
//   ${num1} равны ${num2}
//   `);
// }
// №1

let sym = prompt("Введите сообщение");

let string = "";

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= sym.length + 2; j++) {
    if (i == 2 && j > 1 && j < sym.length + 2) {
      string += sym[j - 2];
    } else {
      string += "#";
    }
  }
  string += "\n";
}

console.log(string);
// #2



// let casino = +Math.floor(Math.random() * 4);
// let casino2 = +Math.floor(Math.random() * 4);
// let casino3 = +Math.floor(Math.random() * 4);

// if (casino === 3 && casino2 === 3 && casino3 === 3){
//   console.log(`%cВы выйграли:${casino} ${casino2} ${casino3}`, "color:green");
// }else{
//   console.log("%cВы всрали свои деньги", "color:green");
// }
// №3

// let num1 = +Math.floor(Math.random() *20);
// let num2 = +Math.floor(Math.random() *20);

// let result = num1 + num2;

// console.log(`${num1} + ${num2} = ${result}`);