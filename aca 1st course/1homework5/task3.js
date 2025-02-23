const arr = ["a", "b", "c"];
const arr2 = [1, 2];

const newObj = {};

for (let i = 0; i < arr.length; i++) {
  newObj[arr[i]] = arr2[i];
}
console.log(newObj);
