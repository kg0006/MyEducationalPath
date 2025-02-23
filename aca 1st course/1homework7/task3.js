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

function getUsernameLengths(users) {
  users.map((el) => resArr.push(el.username.length));
  return resArr;
}

let res = getUsernameLengths(users);
