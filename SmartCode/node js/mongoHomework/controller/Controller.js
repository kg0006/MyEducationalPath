class Controller {
  async readCars(req, res, next) {
    const cars = await req.app.locals.services.method.readCars(req.query);
    res.json(cars);
  }

  async addCar(req, res) {
    const carData = await req.app.locals.services.method.addCar(req.body);
    res.json(carData);
  }

  async put(req, res) {
    const newData = await req.app.locals.services.method.put(
      req.params.id,
      req.body
    );
    res.send("updated");
  }

  async deleteCar(req, res) {
    const deleted = await req.app.locals.services.method.deleteCar(req.body);
    res.send("deleted");
  }
}

module.exports = Controller;
