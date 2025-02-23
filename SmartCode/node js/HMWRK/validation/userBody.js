const Joi = require("joi");

const userBodySchema = Joi.object({
  name: Joi.string().min(2).max(15).required(),
  lastName: Joi.string().max(15).required(),
  age: Joi.number().required(),
  gender: Joi.string().valid("male", "female").required(),
  image: Joi.string()
    .uri()
    .default("https://cdn-icons-png.flaticon.com/512/149/149071.png"),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({ msg: "Passwords do not match" }),
});

module.exports = userBodySchema;
