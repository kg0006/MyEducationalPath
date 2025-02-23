class CarServices {
  constructor(models) {
    this.models = models;
  }
  async getCars(sort, name, page) {
    const allCars = await this.models.cars.countDocuments();

    if (!page) {
      page = 1;
    }

    let cars = await this.models.cars.aggregate([
      { $skip: (page - 1) * 3 },
      { $limit: 3 },
    ]);

    if (sort) {
      if (sort === "min") {
        cars = await this.models.cars.aggregate([
          { $sort: { year: -1 } },
          { $skip: (page - 1) * 3 },
          { $limit: 3 },
        ]);
      } else if (sort === "max") {
        cars = await this.models.cars.aggregate([
          { $sort: { year: 1 } },
          { $skip: (page - 1) * 3 },
          { $limit: 3 },
        ]);
      }
    }
    if (name) {
      cars = await this.models.cars.aggregate([
        { $match: { name: name } },
        { $skip: (page - 1) * 3 },
        { $limit: 3 },
      ]);
    }

    const res = [
      {
        page,
        cars: cars,
        allCars,
        pages: Math.round(allCars / 3),
      },
    ];
    return res;
  }

  async delCar(id) {
    const doc = this.models.cars.findByIdAndDelete(id).save();
    return doc;
  }
}

module.exports = CarServices;
