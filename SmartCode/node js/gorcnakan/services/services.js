const { connectToDb, getDb } = require("../db/db");
const { ObjectId } = require("mongodb");

let db;

connectToDb((err) => {
  if (!err) {
    db = getDb();
  }
});

class Services {
  async getCars(sort, name) {
    if (sort) {
      if (sort === "min") {
        const cars = db.collection("cars").find().sort({ price: -1 }).toArray();
        return cars;
      } else if (sort === "max") {
        const cars = db.collection("cars").find().sort({ price: 1 }).toArray();
        return cars;
      }
    }

    if (name) {
      const searchedCars = await db
        .collection("cars")
        .find({ $or: [{ name: { $regex: name, $options: "i" } }] })
        .toArray();
      return searchedCars;
    }

    const cars = db.collection("cars").find().toArray();
    return cars;
  }

  async addCar(data) {
    const added = db.collection("cars").insertOne(data);
    return data;
  }

  async delCar(id) {
    const deleted = await db
      .collection("cars")
      .deleteOne({ _id: new ObjectId(id) });
  }

  // async patch(id, body){
  //   const deleted = await db
  //     .collection("cars")
  //     .updateOne({ _id: new ObjectId(id) });
  // }
}

module.exports = Services;
