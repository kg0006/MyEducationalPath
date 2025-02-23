const fs = require("fs").promises;
const path = require("path");

class GetServices {
  myWay(...args) {
    return args.join(",").replaceAll(",", "/");
  }

  async readHome() {
    return fs
      .readFile(this.myWay("pages", "index.html"), "utf-8")
      .then((data) => {
        return data;
      });
  }

  async readError() {
    return fs
      .readFile(this.myWay("pages", "error.html"), "utf-8")
      .then((data) => {
        return data;
      });
  }

  async readUsers() {
    return fs.readFile(this.myWay("db", "users.json"), "utf-8").then((data) => {
      return JSON.parse(data);
    });
  }

  async readById(req) {
    const users = this.readUsers();
    const user = users.find((u) => u.id === +req.params.id);

    if (user) {
      return user;
    } else {
      return this.readError();
    }
  }

  async readQuery(req) {
    const { name } = req.query;
    const users = await this.readUsers();

    if (name) {
      return users.filter((u) =>
        u.name.toLowerCase().includes(name.toLowerCase())
      );
    } else {
      return users;
    }
  }
}

module.exports = GetServices;
