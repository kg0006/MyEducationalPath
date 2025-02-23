const { MongoClient } = require("mongodb");

const URL =
  "mongodb+srv://gagik:gagik2018@cluster1.rt5l6.mongodb.net/carsDB?retryWrites=true&w=majority&appName=Cluster1";

let connectDb;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(URL).then((client) => {
      connectDb = client.db();
      cb();
    });
  },
  getDb: () => connectDb,
};
