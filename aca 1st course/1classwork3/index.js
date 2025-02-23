// task 1

// const arr = [1, 5, 6, -5, 30, 10, 25];
// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i] * 2);
// }

// console.log(newArr);

//task 2

// const arr = [10, 25, 16, -5, 30, 15, 24];
// const newArr = [];

// const n = 16;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > n) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

//task 3

// const arr = [45, 12, 3, 6, 17, 0];
// const oddArr = [];
// const evenArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenArr.push(arr[i]);
//   } else {
//     oddArr.push(arr[i]);
//   }
// }

// console.log(evenArr, oddArr);

//task 4

// let a = "Keep your friends close, but your enemies closer.";

// let res = "";
// let arr = [];
// for (let i = 0; i < a.length; i++) {
//   if ((a[i] >= "a" && a[i] <= "z") || (a[i] >= "A" && a[i] <= "Z")) {
//     res += a[i];
//   } else {
//     arr.push(res);
//     res = "";
//   }
// }
// if (res.length) arr.push(res);
// console.log(arr);

//task 5

// const arr = [1, 3, 5, 9];

// const n = 15;
// let res = "";

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === n) {
//     res = i;
//   } else {
//     res = -1;
//   }
// }

// console.log(res);

//task 6

let str = "listen";

const arr = ["enlists", "google", "inlets", "banana"];

let res = "";

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length === str.length) {
    let a = 0;
    let word = "";
    loop2: for (let j = 0; j <= arr[i].length; j++) {
      if (arr[j] === str[a]) {
        word += arr[j];
        a++;
      }
    }
    if (word === str) res = word;
  }
}

console.log(res);
