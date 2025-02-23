const userBodySchema = require("../validation/userBody");
const multer = require("multer");
const path = require("path");
const bcrypt = require("bcryptjs");
const { Errors } = require("../controller/Errors");

async function checkEmail(req, res, next) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const user = await req.app.locals.models.users.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "User not found or invalid password" });
    }

    req.user = user;
    next();
  } catch (error) {
    Errors.serverError(res, error.message);
  }
}

async function checkPass(req, res, next) {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  try {
    const user = req.user;

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res
        .status(401)
        .json({ message: "User not found or invalid password" });
    }
    next();
  } catch (error) {
    Errors.serverError(res, error.message);
  }
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

module.exports = { upload, checkEmail, checkPass };
