const fs = require("fs").promises;
const path = require("path");

const delImg = async (remove) => {
  await fs.unlink(path.join(__dirname, "..", "/uploads", `/${remove}`));
};

class UserServices {
  constructor(models) {
    this.models = models;
  }

  async getUsers(page) {
    let actualPage = 1;

    const totalUserCount = await this.models.users.countDocuments();

    const pageSize = 3;
    const pages = Math.ceil(totalUserCount / pageSize);

    if (page && !isNaN(page) && page > 0) {
      actualPage = Number(page);
    }

    const users = await this.models.users
      .find()
      .skip((actualPage - 1) * pageSize)
      .limit(pageSize);

    const res = {
      page: actualPage,
      users,
      totalUserCount,
      pages,
    };

    return res;
  }

  async addUser(body) {
    const doc = await this.models.users(body);
    const user = await doc.save();
    return user;
  }

  async delUser(id) {
    const remove = await this.models.users.findByIdAndDelete(id);
    if (remove) {
      await delImg(remove.image);
    }
    return remove;
  }

  async login(email) {
    const user = await this.models.users.findOne({ email });

    user.active = true;

    return user;
  }
}

module.exports = UserServices;
