class Controller {
  async getCars(req, res) {
    const cars = await req.app.locals.services.method.getCars(
      req.query.sort,
      req.query.name
    );
    res.json(cars);
  }
  async addCar(req, res) {
    const added = req.app.locals.services.method.addCar(req.body);
    res.json(added);
  }

  async delCar(req, res) {
    const deleted = req.app.locals.services.method.delCar(req.params.id);
    res.json(deleted);
  }
}

module.exports = Controller;
