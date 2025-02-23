const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");
const color = document.getElementById("color");
const current = document.getElementById("current");

const redVal = document.getElementById("redVal");
const greenVal = document.getElementById("greenVal");
const blueVal = document.getElementById("blueVal");

function updateRed() {
  redVal.textContent = redInput.value;
  color.style.backgroundColor = `rgb(${redVal.textContent},${greenVal.textContent} , ${blueVal.textContent})`;
  current.textContent = `rgb(${redInput.value}, ${greenInput.value}, ${blueInput.value})`;
}
function updateGreen() {
  greenVal.textContent = greenInput.value;
  color.style.backgroundColor = `rgb(${redVal.textContent},${greenVal.textContent} , ${blueVal.textContent})`;
  current.textContent = `rgb(${redInput.value}, ${greenInput.value}, ${blueInput.value})`;
}
function updateBlue() {
  blueVal.textContent = blueInput.value;
  color.style.backgroundColor = `rgb(${redVal.textContent},${greenVal.textContent} , ${blueVal.textContent})`;
  current.textContent = `rgb(${redInput.value}, ${greenInput.value}, ${blueInput.value})`;
}

redInput.addEventListener("input", updateRed);
greenInput.addEventListener("input", updateGreen);
blueInput.addEventListener("input", updateBlue);
