const arr = [1, "10", "hi", 2, 3];
let numCount = 0;
let strCount = 0;
let res = "";

for (let i of arr) {
  if (typeof i === "number") numCount++;
  if (typeof i === "string") strCount++;
}

res = `Numbers : ${numCount}, Strings : ${strCount}`;

console.log(res);
