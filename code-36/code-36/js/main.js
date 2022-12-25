// const title = document.querySelector('h3');

// title.addEventListener('click', function (event) {
//   // event.preventDefault()
//   // event.stopPropagation();
//   // event.target
//   // event.currentTarget
// })

// const title = $('.title');

// title.on('click', function (event) {
//   $(this).css()
// })

// fruits.forEach((elem, index) => {
//   console.log(index, elem);
// })
// ['Яблоко 0', 'Груша 1']
// const modifFruits = fruits.map((elem, index) => {
//   return elem + " " + index;
// });

// console.log(fruits, modifFruits);
// const fruits = ["Яблоко", "Груша", "Банан", "Авокадо", "Виноград", "Ананас"];

// const filtredA = fruits
//   .filter((fruit) => {
//     return fruit[0] === "А"; // Б
//   })
//   .join();

// console.log(filtredA); // ['Банан', 'Яблоко'] => 'Банан|Яблоко'

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const sum = numbers.reduce((acum, elem) => {
//   return acum + elem;
// }, "");

// console.log(sum);

const cars = [
  {
    model: "BMW",
    price: 10,
    owner: "Mike",
    sold: false,
  },
  {
    model: "Mercedes",
    price: 12,
    owner: "John",
    sold: false,
  },
  {
    model: "Toyota",
    price: 8,
    owner: "Mike",
    sold: false,
  },
  {
    model: "Hynday",
    price: 10,
    owner: "Sam",
    sold: false,
  },
];

// const index = cars.findIndex((car) => {
//   return car.model === "Toyota";
// });
// cars.splice(index, 1);

// console.log(cars);

const withoutToyota = cars.filter((car) => {
  return car.model !== "Toyota"
});

console.log(withoutToyota);

// const hynday = cars.find((car) => {
//   return car.model === "Hynday";
// });

// console.log(hynday);

// const isSold = cars.some((car) => {
//   return car.sold;
// });

// console.log(isSold);

// const result = cars.reduce(
//   (acc, car) => {
//     acc.owners.push(car.owner);
//     acc.total += car.price;

//     return acc;
//   },
//   {
//     owners: [],
//     total: 0,
//   }
// );

// console.log(result);
