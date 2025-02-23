let num = 420;
let res;

if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
  res = `${num} is a multiple of 3, 5 or 7`;
} else if (num % 3 === 0 && num % 5 === 0) {
  res = `${num} is a multiple of 3 ang 5`;
} else if (num % 3 === 0 && num % 7 === 0) {
  res = `${num} is a multiple of 3 and 7`;
} else if (num % 5 === 0 && num % 7 === 0) {
  res = `${num} is a multiple of 5 and 7`;
} else if (num % 3 === 0) {
  res = `${num} is a multiple of 3`;
} else if (num % 5 === 0) {
  res = `${num} is a multiple of 5`;
} else if (num % 7 === 0) {
  res = `${num} is a multiple of 7`;
} else {
  res = `${num} is not a multiple of 3, 5 or 7`;
}
