const arr = [21, -9, 15, 2116, -71, 33];
const newArr = [];
let num = -7;
let idx = 0;
let x = Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    idx = i;
    break;
  } else {
    const dif = Math.abs(arr[i] - num);
    if (dif < x) {
      x = dif;
      idx = i;
    }
  }
}

console.log(idx);
