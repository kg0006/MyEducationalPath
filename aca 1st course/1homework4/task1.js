let sent = "_, we have a _.";
const arr = ["Houston", "problem"];

let res = "";

let indx = 0;

for (let i = 0; i < sent.length; i++) {
  if (sent[i] === "_") {
    res += arr[indx];
    indx++;
  } else {
    res += sent[i];
  }
}
console.log(res);
