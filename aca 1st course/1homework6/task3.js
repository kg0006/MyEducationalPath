let str = "aweyoolp";
const letterArr = [];
const otherLetters = [];

let check = 0;

let res = "";

function getFirsLetters(str) {
  if (str.length % 3 === 0) {
    for (let i = 0; i < str.length; i += 3) {
      letterArr.push(str[i]);
    }
  } else {
    for (let i = 0; i < str.length - 2; i += 3) {
      letterArr.push(str[i]);
    }
  }
  return letterArr;
}

function getOtherLetters(str) {
  if (str.length % 3 === 0) {
    for (let i = 1; i < str.length; i += 3) {
      otherLetters.push(str[i], str[i + 1]);
    }
  } else if (str.length % 2 === 0) {
    for (let i = 1; i < str.length - 2; i += 3) {
      otherLetters.push(str[i], str[i + 1]);
    }
    otherLetters.push(str[str.length - 2], str[str.length - 1]);
  } else {
    for (let i = 1; i < str.length - 1; i += 3) {
      otherLetters.push(str[i], str[i + 1]);
    }
    otherLetters.push(str[str.length - 1]);
    check = 1;
  }
  return otherLetters;
}

function firstToThird(str) {
  getFirsLetters(str);
  getOtherLetters(str);
  let x = 0;
  let a = letterArr.length;
  for (let i = 0; i < str.length - 1; i += 2) {
    if (x < a) {
      res += `${otherLetters[i]}${otherLetters[i + 1]}${letterArr[x]}`;
      x++;
    } else if (check === 0 && i < otherLetters.length) {
      res += `${otherLetters[i]}${otherLetters[i + 1]}`;
      break;
    } else if (check === 1) {
      res += `${otherLetters[i]}`;
      break;
    }
  }
  return res;
}

console.log(firstToThird(str));
