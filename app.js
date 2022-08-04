const express = require("express");
const app = express();
const data = require("./data.json");
const { projects } = data;
const port = 3000;
const mainRouter = require("./routes");
const aboutRouter = require("./routes/about.js");

app.set("view engine", "pug");
app.use("/static", express.static("public"));

app.use((req, res, next) => {
  console.log("App.js middleware");
  next();
});

app.use(mainRouter);
app.use(aboutRouter);

app.listen(port, () => {
  console.log("Listening on port 3000");
});
