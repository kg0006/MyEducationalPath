// const arr = [1, 4, 23, 16, 8, 49];

// let sum = 0;

// function myForEach(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i]);
//   }
//   console.log(sum);
// }

// const cb = (item, index, arr) => (sum += item);

// let res = myForEach(arr, cb);

// const arr = [1, 2, 3, 4, 5, 6, 4];

// function myFindIndex(arr, cb) {
//   let index = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (cb(i)) {
//       index = i;
//       break;
//     }
//   }
//   return index;
// }

function cb(x) {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// let res = myFindIndex(arr, 4);
// console.log(res);

// const arr = [1, 4, 23, 16, 8, 49];

// function myMap(arr, cb) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(cb(arr[i]));
//   }
//   return newArr;
// }

// function cb(x) {
//   return x * 2;
// }

// let res = myMap(arr, cb);

// console.log(res);

// let arr = [2, 4, 6, 8, 10];

// function myEvery(arr, cb) {
//   let a = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (cb(arr[i])) {
//       a = true;
//     } else {
//       return false;
//     }
//   }
//   return a;
// }

// function cb(x) {
//   if (x % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let res = myEvery(arr, cb);

// console.log(res);

// let arr = [1, 3, 4, 5, 7, 9];

// function mySome(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     if (cb(arr[i])) {
//       return true;
//     }
//   }
//   return false;
// }

// function cb(x) {
//   if (x % 2 === 0) {
//     return true;
//   }
//   return false;
// }

// let res = mySome(arr, cb);

// console.log(res);

