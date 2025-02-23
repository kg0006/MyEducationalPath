// task 1

// function rps(p1, p2) {
//   player1 = p1.toLowerCase();
//   player2 = p2.toLowerCase();

//   if (player1 === player2) {
//     return "Draw";
//   } else if (
//     (player1 === "paper" && player2 === "rock") ||
//     (player1 === "scissors" && player2 === "paper") ||
//     (player1 === "rock" && player2 === "scissors")
//   ) {
//     return "P1 wins";
//   } else {
//     return "P2 wins";
//   }
// }

// task 2

// function calc(a, b, op) {
//   if (b === 0 && op === "/") return "Error: Division by zero";

//   switch (op) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//   }
// }

//task 3

// function convertTemperature(num, scale) {
//   if (typeof num !== "number" || isNaN(num)) {
//     return "Wrong data";
//   }
//   if (scale === "F") {
//     return (num * 9) / 5 + 32;
//   } else if (scale === "C") {
//     return ((num - 32) * 5) / 9;
//   } else {
//     return "Wrong data";
//   }
// }

// task 4

// function isAdult(age) {
//   if (!isNaN(age)) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return "Invalid input: Age must be a number.";
//   }
// }

// task 5

// function CalcBMI(weight, height) {
//   if (!isNaN(height) && !isNaN(weight)) {
//     if (height > 0 && weight > 0) {
//       return weight / height ** 2;
//     } else {
//       return "Invalid input: must be a positive numbers";
//     }
//   } else {
//     return "Invalid input: must be a number";
//   }
// }

// task 6

// function calculateDiscount(price, discount) {
//   if (!isNaN(price) && !isNaN(discount) && discount >= 0 && discount <= 100) {
//     return price - (price * discount) / 100;
//   } else {
//     return "Invalid input: Price and discount must be valid numbers, and discount must be between 0 and 100 ";
//   }
// }

// 2rd file-i tnayinnery

// task 1

// function checkAge(age) {
//   let res = "";
//   age < 13
//     ? (res = "Child")
//     : age >= 13 && age <= 19
//     ? (res = "Teen")
//     : age > 19 && age < 60
//     ? (res = "Adult")
//     : age >= 60
//     ? (res = "Senior")
//     : (res = "Invalid input");

//   return res;
// }

// task 2

// "1" will be logged because a < b && b < c is true

// task 3

// false will be logged (from !hasID)

// task 4

// true will be logged from first &&

// task 5

// 3 will be logged cuz boolean is false

// task 6

// it will be true from second &&

// task 7

// it will be false cuz of 0
