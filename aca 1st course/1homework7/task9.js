const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 58,
  },
];

function getAverageAge(users) {
  const res = users.reduce((acc, el, index) => {
    acc += el.age;
    return acc / 2;
  }, 0);
  return res;
}

console.log(getAverageAge(users));
