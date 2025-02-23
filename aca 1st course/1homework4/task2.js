const arr = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
  let type = typeof arr[i];
  if (type === "number") {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    } else {
      newArr.unshift(arr[i]);
    }
  }
}

console.log(newArr);
