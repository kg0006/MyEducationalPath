class GetController {
  async readHome(req, res) {
    try {
      res.status(200).send(req.app.locals.services.get.readHome());
    } catch (error) {
      res.json(error);
    }
  }

  async readUsers(req, res) {
    try {
      const users = await req.app.locals.services.get.readQuery(req);
      res.json(users);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = GetController;
