const { connectToDb, getDb } = require("../db/db");

let db;

connectToDb((err) => {
  if (!err) {
    db = getDb();
  }
});

class Services {
  async readCars(query) {
    let cars;
    if (!query.sort) {
      cars = await db.collection("cars").find().toArray();
    } else if (query.sort === "min") {
      cars = await db.collection("cars").find().sort({ price: -1 }).toArray();
    } else if (query.sort === "max") {
      cars = await db.collection("cars").find().sort({ price: 1 }).toArray();
    }

    return cars;
  }

  async addCar(carData) {
    const added = await db.collection("cars").insertOne(carData);
    return carData;
  }

  async put(id, data) {
    const newData = db
      .collection("cars")
      .updateOne({ _id: id }, { $set: data });
    return newData;
  }

  async deleteCar(data) {
    const deleted = await db.collection("cars").deleteOne({ name: data });
    return data;
  }
}

module.exports = Services;
