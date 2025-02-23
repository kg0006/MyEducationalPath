// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function splice(arr, first, last, r = null) {
//   resArr = [];

// for (let i = first; i <= last; i++) {
//   resArr.push(arr[i]);
//   delete arr[i];
// }

//   return resArr;
// }

// console.log(splice(arr, 1, 5));
// console.log(arr);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function slice(arr, first, last) {
//   const resArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i >= first && i < last) {
//       resArr.push(arr[i]);
//     }
//   }
//   return resArr;
// }

// console.log(slice(arr, 1, 4));
// console.log(arr);

// function concat(arr1, arr2) {
//   const resArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     resArr.push(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     resArr.push(arr2[i]);
//   }
//   return resArr;
// }

// let str = "this is sentence";

// const arr = str.split(" ").reverse();

// const result = arr.join("");

// console.log(result);

// function getAverageAge(users) {
//   return (
//     users.reduce((acc, el, index, arr) => {
//       return (acc += el);
//     }) / users.length
//   );
// }

// const users = [12, 64, 24, 13, 85, 2];

// console.log(getAverageAge(users));
