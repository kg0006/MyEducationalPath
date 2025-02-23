const fs = require("fs");
const path = require("path");
const { Z_FIXED } = require("zlib");

// 1. գրել ծրագիր որը կստեղծի պապկա որի մեջ
// կլինեն html css js ֆայլերը որից հետո հերդականությամբ կկաDրանք այդ ֆայլերը:

// fs.mkdir(path.join(__dirname, "project"), () => {
//   fs.writeFile(
//     path.join(__dirname, "project", "main.js"),
//     "let arr = [];",
//     () => {}
//   );
//   fs.writeFile(
//     path.join(__dirname, "project", "index.html"),
//     "<html></html>",
//     () => {}
//   );
//   fs.writeFile(
//     path.join(__dirname, "project", "style.css"),
//     ".class{}",
//     () => {}
//   );
// });

// fs.readFile(
//   path.join(__dirname, "project", "main.js"),
//   "utf-8",
//   (err, data) => {
//     console.log(data);
//   }
// );

// fs.readFile(
//   path.join(__dirname, "project", "index.html"),
//   "utf-8",
//   (err, data) => {
//     console.log(data);
//   }
// );

// fs.readFile(
//   path.join(__dirname, "project", "style.css"),
//   "utf-8",
//   (err, data) => {
//     console.log(data);
//   }
// );

// 2. գրել ծրագիր որը կստեղծի պապկա որի մեջ կավելացնենք միանգամից 4 հատ txt ֆայլ

// fs.mkdir(path.join(__dirname, "texts"), () => {
//   for (let i = 1; i <= 4; i++) {
//     fs.writeFile(
//       path.join(__dirname, "texts", `text${i}.txt`),
//       "idk",
//       () => {}
//     );
//   }
// });

// 3. գրել ծրագիր որը կստեղծի js ֆայլ մեջը 1,2,3,4,5 թվերը հարկավոր է կարդալ այդ
//  ֆայլի թվերը և գումարել այդ թվերը իրար ստացած պատասխանը ավելացնել այդ ֆայլին

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// fs.writeFile(path.join(__dirname, "main.js"), "1, 2, 3, 4, 5", () => {});

// fs.readFile(path.join(__dirname, "main.js"), "utf-8", (err, data) => {
//   let arr = [...data];
//   let x = arr.reduce((acc, el) => (acc += el));
//   fs.appendFile(path.join(__dirname, "main.js"), `, ${x}`, () => {});
// });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// 4

// այս օբեկտի հիման վրա ստեղծել ֆայլեր որոնց
// անուները կլինեն օբյկտի բանալիները իսկ նրանց
// պարունակությունը օբյետի արժեքները

// let obj = {
//   "file1.txt": "text1",
//   "file2.txt": "text2",
//   "file3.txt": "text3",
// };

// const keys = Object.keys(obj);

// keys.forEach((key) => {
//   fs.writeFile(path.join(__dirname, `${key}`), `${obj[key]}`, () => {});
// });
