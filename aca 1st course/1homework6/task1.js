function getAnswer(a, b, sym) {
  if (sym === "+") {
    return a + b;
  } else if (sym === "-") {
    return a - b;
  } else if (sym === "*") {
    return a * b;
  } else if (sym === "/") {
    return a / b;
  }
}

let res = getAnswer(4, 5, "*");

console.log(res);
