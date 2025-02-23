let num1 = 3;
let num2 = 56;
let num3 = 0;
let res;

if (num1 > num2) {
  let a = num1;
  num1 = num2;
  num2 = a;
}
if (num2 > num3) {
  let a = num2;
  num2 = num3;
  num3 = a;
}
if (num1 > num2) {
  let a = num1;
  num1 = num2;
  num2 = a;
}

res = `${num1}, ${num2}, ${num3}`;

// if(num1 > num2 && num2 > num3){
//   res = `${num3}, ${num2}, ${num1}`
// } else if (num2 > num1 && num1 > num3){
//   res = `${num3}, ${num1}, ${num2}`
// } else if (num1 > num3 && num3 > num2){
//   res = `${num2}, ${num3}, ${num1}`
// } else if (num2 > num3 && num3 > num1){
//   res = `${num1}, ${num3}, ${num2}`
// } else if (num3 > num1 && num1 > num2){
//   res = `${num2}, ${num1}, ${num3}`
// } else {
//   res = `${num1}, ${num2}, ${num3}`
// }

console.log(res);
