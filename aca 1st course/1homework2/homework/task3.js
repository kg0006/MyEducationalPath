let ageNum = 176;
let ageMeas = "months";
let res;

if (ageMeas === "months" && ageNum >= 1 && ageNum <= 12) {
  res = "baby";
} else if (ageMeas === "months" && ageNum > 12) {
  let ageM = ageNum % 12;
  ageNum = Math.floor(ageNum / 12);
  if (ageNum < 3) {
    res = `toddler, ${ageNum} years and ${ageM} months`;
  } else if (ageNum < 13) {
    res = `child, ${ageNum} years and ${ageM} months`;
  } else if (ageNum < 18) {
    res = `teenager, ${ageNum} years and ${ageM} months`;
  } else {
    res = `adult, ${ageNum} years and ${ageM} months`;
  }
} else if (ageNum < 1) {
  res = "enter the valid age";
} else if (ageNum < 3) {
  res = "toddler";
} else if (ageNum < 13) {
  res = "child";
} else if (ageNum < 18) {
  res = "teenager";
} else {
  res = "adult";
}

console.log(res);
