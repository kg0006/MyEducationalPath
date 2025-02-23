let a = 4;
let b = 5;
let c = 1;
let res;

if (a === 0) {
  res = `Enter valid constants`;
} else {
  let D = b ** 2 - 4 * a * c;
  if (D < 0) {
    res = `Solution does not exist`;
  } else {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    if (x1 === x2) {
      res = `Solution is ${x1}`;
    } else {
      res = `Solution are ${x1} and ${x2}`;
    }
  }
}

console.log(res);

// let D = b ** 2 - 4 * a * c;
// let x1 = (-b + Math.sqrt(D)) / 2;
// let x2 = (-b - Math.sqrt(D)) / 2;

// if(a === 0){
//   res = `Enter valid constants`
// } else if(D < 0){
//   res = `Solution does not exist`
// } else if(x1 === x2){
//   res = `Solution is ${x1}`
// } else {
//   res = `Solution are ${x1} and ${x2}`
// }
