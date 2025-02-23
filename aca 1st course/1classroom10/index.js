let a = 2;

let x = 0;

function getNum(n) {
  if (n - 1 !== 0) {
    x = 4 * (n - 1) + getNum(n - 1);
    return x;
  } else {
    return x + n;
  }
}

console.log(getNum(a));
