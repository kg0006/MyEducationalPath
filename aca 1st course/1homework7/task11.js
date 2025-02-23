// Pop

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function myPop(arr) {
//   arr.length = arr.length - 1;
//   return arr;
// }

// Push

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function myPush(arr, item) {
//   arr[arr.length] = item;
//   return arr;
// }

// console.log(myPush(arr, 10));

// Flat

// const arr = [1, 2, 3, 4, 5, 6, [7, 8, 9]];

// function myFlat(arr) {
//   const res = [];
//   loop1: for (let i of arr) {
//     if (!Array.isArray(i)) {
//       res.push(i);
//     } else {
//       for (let j of i) {
//         res.push(j);
//       }
//     }
//   }

//   return res;
// }

// console.log(myFlat(arr));

// Find

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function myFind(arr, cb) {
//   for (let i of arr) {
//     if (cb(i)) {
//       return i;
//     }
//   }
// }

// function cb(i) {
//   if (i > 5) {
//     return i;
//   } else {
//     return false;
//   }
// }

// Filter

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function myFilter(arr, cb) {
//   const res = [];
//   for (let i of arr) {
//     if (cb(i)) {
//       res.push(i);
//     }
//   }
//   return res;
// }

// function cb(i) {
//   if (i % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Some

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function mySome(arr, cb) {
//   for (let i of arr) {
//     if (cb(i)) {
//       return true;
//     }
//   }
//   return false;
// }

// function cb(i) {
//   if (i % 3 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Slice

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function mySlice(arr, a = 0, b = arr.length) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i >= a && i < b) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }
