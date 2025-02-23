class UsersControllers {
  async getAllUsers(req, res, next) {
    const users = await req.app.locals.services.users.getAllUsers();
    res.render("index", { users });
  }
}

module.exports = UsersControllers;
