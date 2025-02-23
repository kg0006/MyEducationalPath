let form = "rectangle";
let square;
let res;

let side1 = 6;
let side2 = 7;

if (form === "triangle") {
  let height = side1;
  let base = side2;
  if (height > 0 && base > 0) {
    square = (height * base) / 2;
    res = `Square of the triangle is ${square}`;
  } else {
    res = "Please enter only positives";
  }
} else if (form === "rectangle") {
  if (side1 > 0 && side2 > 0) {
    square = side1 * side2;
    res = `Square of the rectangle is ${square}`;
  } else {
    res = "Please enter valid data";
  }
}
