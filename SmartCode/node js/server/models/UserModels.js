const bcryptjs = require("bcryptjs");
const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function () {
  const hashPassword = await bcryptjs.hash(this.password, 10);
  this.password = hashPassword;
});

module.exports = model("users", UserSchema);
