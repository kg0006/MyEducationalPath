const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const routes = require("./routes");
const mongoose = require("mongoose");
const Models = require("./models");
const Services = require("./services");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// Настройка view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "uploads")));

// Connecting to DB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB IN CONECCT"))
  .catch((err) => console.log(err.message));

app.locals.models = {
  users: Models.users,
  posts: Models.posts,
};
app.locals.services = {
  users: new Services.users(app.locals.models),
  posts: new Services.posts(app.locals.models),
};

// Роуты
app.use("/api", routes.usersRouter);
app.use("/api", routes.postsRouter);
app.use("/auth", routes.authRouter);
app.use("/update", routes.userUpdateRouter);

// Обработка 404 ошибок
app.use((req, res, next) => next(createError(404)));

// Обработчик ошибок
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
