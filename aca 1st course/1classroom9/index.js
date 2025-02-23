let users = [
  {
    _id: "652fc67d17db3bd1697a946b",
    isActive: true,
    balance: "$3,999.74",
    age: 24,
    eyeColor: "blue",
    name: "Winnie Zimmerman",
    gender: "female",
    company: "XANIDE",
    email: "winniezimmerman@xanide.com",
  },
  {
    _id: "652fc67d92a11e2882913da3",
    isActive: true,
    balance: "$1,216.67",
    age: 29,
    eyeColor: "blue",
    name: "Hughes Dunn",
    gender: "male",
    company: "BULLZONE",
    email: "hughesdunn@bullzone.com",
  },
  {
    _id: "652fc67d372e0588bc141961",
    isActive: true,
    balance: "$2,993.51",
    age: 21,
    eyeColor: "brown",
    name: "Martina Holland",
    gender: "female",
    company: "ISODRIVE",
    email: "martinaholland@isodrive.com",
  },
  {
    _id: "652fc67d788f80fb72b609a9",
    isActive: false,
    balance: "$3,575.38",
    age: 31,
    eyeColor: "green",
    name: "Salazar Guerrero",
    gender: "male",
    company: "GEEKUS",
    email: "salazarguerrero@geekus.com",
  },
  {
    _id: "652fc67d24afb960a46e3385",
    isActive: false,
    balance: "$3,516.55",
    age: 20,
    eyeColor: "blue",
    name: "Arline Hernandez",
    gender: "female",
    company: "PHOTOBIN",
    email: "arlinehernandez@photobin.com",
  },
  {
    _id: "652fc67d32621ff45ae32c12",
    isActive: false,
    balance: "$3,608.98",
    age: 32,
    eyeColor: "brown",
    name: "Willis Wagner",
    gender: "male",
    company: "UNEEQ",
    email: "williswagner@uneeq.com",
  },
  {
    _id: "652fc67deec809b760d02a77",
    isActive: true,
    balance: "$2,900.10",
    age: 34,
    eyeColor: "green",
    name: "Lee Hurst",
    gender: "female",
    company: "KENEGY",
    email: "leehurst@kenegy.com",
  },
];

const arr2 = users.reduce((arr, user) => {
  if (user.isActive) arr.push({ [user.name]: user.email });
  return arr;
}, []);

console.log(arr2);

// let user5 = {
//   _id: "652fc67d92a11e2882df913da3",
//   isActive: true,
//   balance: "$1,416.67",
//   age: 30,
//   eyeColor: "blue",
//   name: "Hughes Finn",
//   gender: "male",
//   company: "BULLZONE",
//   email: "hughesfinn@bullzone.com",
// };

// const femUsers = [];
// for (let obj of users) {
//   if (obj.age < 30 && obj.gender === "female") {
//     femUsers.push(obj);
//   }
// }

// const newUsersArr = users.map((el) => ({ name: el.name, email: el.email }));

// let counter = 0;

// users.forEach((el) => {
//   if (el.eyeColor === "blue") {
//     counter++;
//   }
// });

// function toNum(bal) {
//   let res = "";
//   for (let i = 1; i < bal.length; i++) {
//     if (!isNaN(bal[i])) {
//       res += bal[i];
//     } else if (bal[i] === ".") {
//       res += bal[i];
//     }
//   }
//   return res;
// }

// let current = 0;
// let richest = users.reduce((obj, el) => {
//   if (toNum(el.balance) > current) {
//     current = toNum(el.balance);
//     return el;
//   }
//   return obj;
// }, {});

// const compArr = [];

// users.forEach((el) => {
//   compArr.push(el.company);
// });

// const resArr = [];

// const a = resArr.concat(user5, users);

// console.log(a);
