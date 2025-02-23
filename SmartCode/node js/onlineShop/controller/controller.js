class Controller {
  async getItems(req, res) {
    try {
      const items = await req.app.locals.services.method.getItems();
      console.log(items);

      res.render(("home", { items }));
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}

module.exports = Controller;
