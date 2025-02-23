let num = 455;
let res;
let prod = 1;
let sum = 0;

num += "";

for (let i = 0; i < num.length; i++) {
  prod *= +num[i];
  sum += +num[i];
}

if (sum === 0) {
  res = "Cannot calculate";
} else if (prod % sum === 0) {
  res = `Quotient is ${prod / sum}`;
} else {
  res = `Remainder is ${prod % sum}`;
}

console.log(res);
