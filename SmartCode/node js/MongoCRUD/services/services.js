const { connectToDb, getDb } = require("../db/db");
const { ObjectId } = require("mongodb");

let db;

connectToDb((err) => {
  if (!err) {
    db = getDb();
  }
});

class Services {
  async getCars(sort, name, page = 0) {
    const overall = await db.collection("cars").find().count();
    if (!page) {
      page = 1;
    }

    let cars = await db
      .collection("cars")
      .find()
      .skip((page - 1) * 3)
      .limit(3)
      .toArray();

    if (sort) {
      if (sort === "min") {
        cars = await db
          .collection("cars")
          .find()
          .sort({ price: -1 })
          .skip((page - 1) * 3)
          .limit(3)
          .toArray();
      } else if (sort === "max") {
        cars = await db
          .collection("cars")
          .find()
          .sort({ price: 1 })
          .skip((page - 1) * 3)
          .limit(3)
          .toArray();
      }
    }
    if (name) {
      cars = await db
        .collection("cars")
        .find({ $or: [{ name: { $regex: name, $options: "i" } }] })
        .skip((page - 1) * 3)
        .limit(3)
        .toArray();
    }

    const res = [
      {
        page,
        cars: cars,
        overall,
        pages: Math.round(overall / 3),
      },
    ];
    return res;
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
