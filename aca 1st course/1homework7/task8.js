const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

function getSum(arr) {
  let sum = arr.reduce((acc, el) => {
    if (el >= 18) acc += el;
    console.log(acc, el);
    return acc;
  }, 0);
  return sum;
}
