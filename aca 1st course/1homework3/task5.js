let num = 4593653;
let res = 0;
let a = 0;
let b = 9;

num += "";

for (let i = 0; i < num.length; i++) {
  if (+num[i] > a) a = +num[i];
  if (+num[i] < b) b = +num[i];
  res = a - b;
}

console.log(res);
