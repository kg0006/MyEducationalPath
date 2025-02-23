let str = "nigga, r u crazy ?!";

let res = [];

function methodSplit(str, idk) {
  let part = "";
  for (let i = 0; i < str.length; i++) {
    part += str[i];
    if (str[i + 1] === idk) {
      res.push(part);
      part = "";
      i++;
    }
  }
  res.push(part);
  return res;
}

console.log(methodSplit(str, ","));
