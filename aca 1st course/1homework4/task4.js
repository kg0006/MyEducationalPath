const arr = ["anymore", "raven", "me", "communicate"];

let maxNum = 0;
let minNum = 0;
let res;
let a = 0;
let b = 100;

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > a) {
    maxNum = arr[i].length;
    a = maxNum;
  }
  if (arr[i].length < b) {
    minNum = arr[i].length;
    b = minNum;
  }
}

res = maxNum + minNum;

console.log(res);
