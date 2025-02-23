const { MongoClient } = require("mongodb");

const URL =
  "";

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
