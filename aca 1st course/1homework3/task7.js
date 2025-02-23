let n = 10;
let b = 0;
let c = 1;
let x = 0;

let fib = "";

for (let i = 0; i < n; i++) {
  if (i < n - 1) {
    fib += `${x}, `;
  } else {
    fib += `${x}`;
  }
  b = c;
  c = x;
  x = b + c;
}
