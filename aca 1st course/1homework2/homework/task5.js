let mark1 = 20;
let mark2 = 39;
let mark3 = 40;
let res;

let overallAv = (mark1 + mark2 + mark3) / 3 >= 50;

if (mark1 > 40 && mark2 > 40 && mark3 > 40) {
  res = "Passed";
} else if (mark1 < 40 && overallAv) {
  res = "Passed";
} else if (mark2 < 40 && overallAv) {
  res = "Passed";
} else if (mark3 < 40 && overallAv) {
  res = "Passed";
} else if (mark1 < 40 && mark2 < 40) {
  res = "Not Passed";
} else if (mark1 < 40 && mark3 < 40) {
  res = "Not Passed";
} else if (mark3 < 40 && mark2 < 40) {
  res = "Not Passed";
} else {
  res = "Not Passed";
}

console.log(res);
