let a = 19;
let b = 42;

const nums = [];
const res = [];

function getAllNumbers(a, b) {
  for (let i = a; i <= b; i++) {
    i += "";
    nums.push(i);
  }
  return nums;
}

function pushAllEven(a, b) {
  getAllNumbers(a, b);
  let x = 0;
  loop1: for (let i of nums) {
    if (+i % 2 === 0) {
      if (+i[x] % 2 === 0) {
        x++;
        res.push(i);
        continue loop1;
      } else {
        x = 0;
        continue loop1;
      }
    }
  }
  return res;
}

console.log(pushAllEven(a, b));
