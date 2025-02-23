const arr = ["1", "px", "2323"];

const res = [];

function parseInteger(arr) {
  arr.map((el) => {
    if (!isNaN(+el)) {
      res.push(+el);
    } else {
      res.push(null);
    }
  });
  return res;
}
