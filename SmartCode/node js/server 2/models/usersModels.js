const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')
dotenv.config()
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      index: true,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
      set: (v) => v.toLowerCase(),
    },
    image: {
      type: String,
      default: function () {
        return this.gender === "female"
          ? "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
          : "https://api.dicebear.com/7.x/avataaars/svg?seed=John";
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    token: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);




//REGISTER MIDDLEWARES
UserSchema.pre("save", async function () {
  const hashPassword = await bcryptjs.hash(this.password, 10);
  this.password = hashPassword;
});

UserSchema.post("save", async function () {
  const token = jwt.sign({ id: this._id }, process.env.REGISTER_TOKEN_KEY, {
    expiresIn: "20m",
  });
  return token
});



//LOGIN MIDDLEWARES
UserSchema.methods.validUser = async function(){
    this.active = true;
    const { password,_id, ...userData } = this._doc;
    const token = jwt.sign({ id: this._id }, process.env.LOGIN_TOKEN_KEY, { expiresIn: "1d"});
    return {...userData, token} 
}



module.exports = mongoose.model("users", UserSchema);
