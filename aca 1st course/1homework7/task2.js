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

const resArr = [];

function getUsernames(users) {
  users.map((el) => resArr.push(el.username));
  return resArr;
}

let res = getUsernames(users);
