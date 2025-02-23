// let res = "";
// let a = 10

// for (let i = 1; i <= a; i++) {
//   if (i < a) {
//     res += `${i},`;
//   } else {
//     res += `${i}`;
//   }
// }

// console.log(res);

//task 2

// let a = 16;
// let b = 2;
// let x = 1;

// for (let i = 1; i <= b; i++) {
//   x *= a;
// }

// console.log(x);

//task 3

// let a = 17;
// let counter = 0;
// let res;

// for (let i = 1; i <= a / 2; i++) {
//   if (a % i === 0) {
//     counter++;
//   }
// }
// if (counter > 1) {
//   res = "yes";
// } else {
//   res = "no";
// }

// console.log(res);

//task 4

// const n = 8;
// let res = "";
// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += `${j} `;
//   }
//   res += str + "\n";
// }
// console.log(res);

//task 5

// let a = 121212;
// let res = 0;

// a = a + "";

// for (let i = 0; i < a.length; i++) {
//   res++;
// }

// console.log(res);

//task 6

let a = 5;

let res;
let b = 0;
let c = 1;
let counter = -1;
let fib = "";

for (let i = 0; i <= a; i = b + c) {
  fib += `${i} `;
  b = c;
  c = i;
  counter++;
  if (a === i) {
    res = `Element ${a} is present in index ${counter}`;
    break;
  } else {
    res = "Element not present";
  }
}
console.log(res);

//task 7

// let a = 5;
// let res;
// let b;
// let c;

// a += "";
// for (let i = 0; i < a.length; i++) {

// }

// console.log(res);
