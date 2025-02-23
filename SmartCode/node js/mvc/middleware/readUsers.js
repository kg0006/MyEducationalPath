const fs = require("fs").promises;
const path = require("path");

const readUsers = async () => {
  return fs
    .readFile(path.join(__dirname, "..", "db", "users.json"), "utf-8")
    .then((data) => {
      const users = JSON.parse(data);
      return users;
    });
};

module.exports = readUsers;
