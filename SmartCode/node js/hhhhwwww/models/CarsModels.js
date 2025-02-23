const { Schema, model } = require("mongoose");

const CarSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

module.exports = model("cars", CarSchema);
