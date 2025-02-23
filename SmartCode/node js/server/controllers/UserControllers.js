const { Errors } = require("./Errors");

class UserControllers {
  async getUsers(req, res, next) {
    try {
      const users = await req.app.locals.services.users.getUsers();
      res.status(200).render("index", { users });
    } catch (error) {
      Errors.serverError(res);
    }
  }
  async createUser(req, res, next) {
    try {
      console.log(req.file.filename);

      const { body, file } = req;
      const user = await req.app.locals.services.users.createUser({
        ...body,
        imgUrl: file.filename,
      });
      res.json(user);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

module.exports = UserControllers;
