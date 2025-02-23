let a = "May the Force be with you.";

let res = "";
let arr = [];
for (let i = 0; i < a.length; i++) {
  if ((a[i] >= "a" && a[i] <= "z") || (a[i] >= "A" && a[i] <= "Z")) {
    res += a[i];
  } else {
    arr.push(res);
    res = "";
  }
}
if (res.length) arr.push(res);
console.log(arr);
