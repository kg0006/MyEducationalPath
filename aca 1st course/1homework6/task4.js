const str = "A revolution without dancing is a revolution not worth having.";

let res = "";
let arr = [];

function getWords(str) {
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      res += str[i];
    } else {
      arr.push(res);
      res = "";
    }
  }
  if (res.length) arr.push(res);
  return arr;
}

function getLongestWord(str) {
  getWords(str);
  for (let i of arr) {
    if (i.length >= res.length) res = i;
  }
  return res;
}
console.log(getLongestWord(str));
