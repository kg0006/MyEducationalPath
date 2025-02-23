class Controller {
  async getCars(req, res) {
    const cars = await req.app.locals.services.cars.getCars(
      req.query.sort,
      req.query.name,
      req.query.page
    );
    res.status(200).json(cars);
  }

  async delCar(req, res) {
    const doc = req.app.locals.services.cars.delCar(req.params.id);
    res.json(doc);
  }
}

module.exports = Controller;
