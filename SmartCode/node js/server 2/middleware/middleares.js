const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Errors = require("../controllers/Errors");
const multer = require("multer");
const path = require("path");
dotenv.config();

//CHECKAUTH
const checkAuth = (req, res, next) => {
  try {
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
    const decoded = jwt.verify(token, process.env.LOGIN_TOKEN_KEY);
    req.userId = decoded.id;
    next();
  } catch (error) {
    Errors.UNAUTHORIZED_ERROR(res, error.message);
  }
};

// Initialization and Authentication
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

//MULTER
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

module.exports = { checkAuth, upload, checkEmail, checkPass };
