const express = require("express");
const logger = require("morgan");
const nunjucks = require("nunjucks");
const indexRouter = require("./routes");

const app = express();
app.set("view engine", "html");

nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use("/", indexRouter);
app.use(express.static("static"));
app.use(logger("dev"));

module.exports = app;
