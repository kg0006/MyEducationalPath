let dig = 8;
let num = 4569;

let res = "No";

num += "";
dig += "";

for (let i = 0; i < num.length; i++) {
  if (num[i] === dig) res = "Yes";
}

console.log(res);
