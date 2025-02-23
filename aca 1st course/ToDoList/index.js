const inputBox = document.getElementById("inputBox");

const addButt = document.getElementById("add");

const planContainer = document.getElementById("ul");

const tasks = [];

function addTask() {
  if (inputBox.value === "") {
    alert("U must write smth !!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    planContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  toLS();
}

planContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      toLS();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      toLS();
    }
  },
  false
);

function toLS() {
  localStorage.setItem("data", planContainer.innerHTML);
}

function showTask() {
  planContainer.innerHTML = localStorage.getItem("data");
}

showTask();
// localStorage.clear();

// for(let i of localStorage.getItem(tasks)){
//   let li = document.createElement("li");
// li.innerHTML = i;
// planContainer.appendChild(li);
// let span = document.createElement("span");
// span.innerHTML = "\u00d7";
// li.appendChild(span);
// }
