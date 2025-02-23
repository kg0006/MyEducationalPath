const bcryptjs = require("bcryptjs");
const removePath = require("../functions/removePath");

class UsersServices {
  constructor(models) {
    this.models = models;
  }

  async getAllUsers() {
    const users = await this.models.users.find();
    return users;
  }

  async getUser(id) {
    const user = await this.models.users.findById(id);
    const { password, ...userData } = user._doc;
    return userData;
  }

  async authRegister(body) {
    const doc = await this.models.users(body);
    const user = await doc.save();
    const { password, ...userData } = user._doc;
    return userData;
  }

  async authLogin(body) {
    const user = await this.models.users.findOne({ email: body.email });
    if (user) {
      const valid = await bcryptjs.compare(body.password, user.password);
      if (valid) {
        const userData = await user.validUser();
        return userData;
      } else {
        return { success: false, message: "Invalid email or password" };
      }
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  }

  async updateUser(body, id) {
    const user = await this.models.users.findByIdAndUpdate(id, body);
    if (user) {
      await removePath(user.image);
    }
    return user;
  }

  async deleteUser(id) {
    const deleted = await this.models.users.findByIdAndDelete(id);
    return deleted;
  }

  async search(name) {
    let actualPage = 1;

    const totalUserCount = await this.models.users.countDocuments();

    const pageSize = 3;
    const pages = Math.ceil(totalUserCount / pageSize);

    if (page && !isNaN(page) && page > 0) {
      actualPage = Number(page);
    }

    const users = await this.models.users
      .find({ $or: [{ name: { $regex: name, $options: "i" } }] })
      .skip((actualPage - 1) * pageSize)
      .limit(pageSize);

    return users;
  }
}

module.exports = UsersServices;
