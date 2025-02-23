const readUsers = require("../middleware/readUsers");

class UsersServices {
  async getAllUsers() {
    const users = await readUsers();
    return users;
  }
}

module.exports = UsersServices;
