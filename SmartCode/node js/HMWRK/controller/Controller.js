const { Errors } = require("./Errors");

class Controller {
  async homePage(req, res) {
    try {
      res.render("index");
    } catch (error) {
      Errors.serverError(res, error.message);
    }
  }

  async getUsers(req, res) {
    try {
      const usersObj = await req.app.locals.services.users.getUsers(
        req.params.page
      );
      res.status(200).json(usersObj);
    } catch (error) {
      Errors.serverError(res, error.message);
    }
  }

  async getRegister(req, res) {
    try {
      res.render("register");
    } catch (error) {
      Errors.serverError(res, error.message);
    }
  }

  async addUser(req, res) {
    try {
      const { body, file } = req;
      const user = await req.app.locals.services.users.addUser({
        ...body,
        image: file.filename,
      });
      res.set("Content-Type", "application/json");
      res.status(201).json(user);
    } catch (error) {
      Errors.badRequestError(res, error.message);
    }
  }

  async delUser(req, res) {
    try {
      const { id } = req.params;

      const removed = await req.app.locals.services.users.delUser(id);

      res.set("Content-Type", "application/json");
      res.status(200).json(removed);
    } catch (error) {
      Errors.badRequestError(res, error.message);
    }
  }

  async getLogin(req, res) {
    try {
      res.render("login");
    } catch (error) {
      Errors.serverError(res, error.message);
    }
  }

  async login(req, res) {
    const login = await req.app.locals.services.users.login(req.user.email);

    res.set("Content-Type", "application/json");
    res.status(200).json(login);
  }
}

module.exports = Controller;
