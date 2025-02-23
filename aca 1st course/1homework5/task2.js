const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

const arr = [];
const values = [];
const newObj = {};

for (let i of users) {
  values.push(i.username);
  for (let j = 0; j < values.length; j++) {
    newObj[values[j]] = values[j].length;
  }
}
arr.push(newObj);
console.log(arr);
