let num = 0;

function getSumOfNums(str) {
  const numbers = str.match(/\-?\d+/g);
  const toNum = numbers.map(Number);
  for (let i = 0; i < toNum.length; i++) {
    num += toNum[i];
  }
  return num;
}

let res = getSumOfNums("Wert12lop-12");

console.log(res);
