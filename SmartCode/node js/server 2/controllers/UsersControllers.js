const { Errors } = require("./Errors");

class UsersControllers {
  async getAllUsers(req, res) {
    try {
      const users = await req.app.locals.services.users.getAllUsers();
      res.json(users);
    } catch (error) {
      Errors.serverError(res, error.message);
    }
  }
  async getUser(req, res) {
    try {
      const id = req.userId;
      const user = await req.app.locals.services.users.getUser(id);
      res.json(user);
    } catch (error) {
      Errors.badRequestError(res, error.message);
    }
  }
  async authRegister(req, res) {
    try {
      const body = req.body;
      const user = await req.app.locals.services.users.authRegister(body);
      res.json(user);
    } catch (error) {
      Errors.badRequestError(res, error.message);
    }
  }
  async authLogin(req, res) {
    try {
      const body = req.body;
      const user = await req.app.locals.services.users.authLogin(body);
      res.json(user);
    } catch (error) {
      Errors.badRequestError(res, error.message);
    }
  }
  async updateUser(req, res) {
    try {
      const { file, body } = req;
      const id = req.userId;
      const user = await req.app.locals.services.users.updateUser(
        { ...body, image: file.filename },
        id
      );
      json(user);
    } catch (error) {
      Errors.badRequestError(res, error.message);
    }
  }

  async deleteUser(req, res) {
    const deleted = await req.app.locals.services.users.deleteUser();
    return deleted;
  }

  async search(req, res) {
    const searchedUsers = await req.app.locals.services.users.search(
      req.query.name
    );

    return searchedUsers;
  }
}

module.exports = UsersControllers;
