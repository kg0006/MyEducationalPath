const navItems = document.querySelectorAll(".nav_item");
const slide = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const par = document.querySelectorAll("p");

const removeClass = (array, className) => {
  array.forEach((elm) => elm.classList.remove(className));
};

let check = 0;
let current = 0;

navItems.forEach((elm, ind) => {
  elm.addEventListener("click", (e) => {
    removeClass(navItems, "navActive");
    e.target.parentElement.classList.add("navActive");
    removeClass(slide, "active");
    slide[ind].classList.add("active");
    check = ind;
  });
});

par.forEach((p) => {
  p.addEventListener("click", () => {
    if (p.id === "next") {
      return clickNext();
    } else if (p.id === "prev") {
      return clickPrev();
    }
  });
});

function clickNext() {
  current = check;
  current++;
  if (current == slide.length) {
    current = 0;
  }
  check = current;
  removeClass(slide, "active");
  slide[current].classList.add("active");
  removeClass(navItems, "navActive");
  navItems[current].classList.add("navActive");
}

function clickPrev() {
  current = check;
  if (current == 0) {
    current = slide.length;
  }
  current--;
  check = current;
  removeClass(slide, "active");
  slide[current].classList.add("active");
  removeClass(navItems, "navActive");
  navItems[current].classList.add("navActive");
}

// setInterval(() => {
//   clickNext();
// }, 3000);
