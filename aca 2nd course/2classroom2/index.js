// const arr = [1, 2, 3];

// function foo(arr) {
//   const newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(foo(arr));

// const arr = [1, 4, 35, 245, 123478];

// function getSum(arr) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     res += arr[i];
//   }
//   return res;
// }

// console.log(getSum(arr));

// const arr = [134, 1243, 7654, 2621, 763, 2362];

// function getEven(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(getEven(arr));

// const arr = [134, 1243, 7654, 2621, 763, 2362, 134, 1243, 763];

// function getNum(arr) {
//   let x = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > x) x = arr[i];
//   }
//   return x;
// }

// console.log(getNum(arr));

// const arr = [134, 1243, 134, 7654, 2621, 763, 2362, 134, 1243, 763];

// function foo(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let check = 0;
//     for (let j = 0; j < newArr.length; j++) {
//       if (arr[i] === newArr[j]) {
//         check = 1;
//       }
//     }
//     if (!check) newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(foo(arr));

// const obj = {
//   a: 1,
//   b: 2,
// };

// function toArr(obj) {
//   const arr = [];
//   for (let i in obj) {
//     arr.push([`${i}`, obj[i]]);
//   }
//   return arr;
// }

// console.log(toArr(obj));

// const obj = {
//   a: 1,
//   b: 2,
// };

// function foo(obj) {
//   const resArr = [];
//   const keyArr = [];
//   const valueArr = [];

//   for (let i in obj) {
//     keyArr.push(i);
//     valueArr.push(obj[i]);
//   }
//   resArr.push(keyArr, valueArr);
//   return resArr;
// }

// console.log(foo(obj));

const arr = [
  {
    name: "John",
    age: 21,
    budget: 23000,
  },
  {
    name: "Ann",
    age: 31,
    budget: 42000,
  },
  {
    name: "Steve",
    age: 11,
    budget: 233222,
  },
];

function getSum(arr) {
  let x = 0;
  for (let i of arr) {
    x += i.budget;
  }
  return x;
}

console.log(getSum(arr));
