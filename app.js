const express = require("express");
const app = express();
const router = require("./routes");
const port = 3000;

app.set("view engine", "pug");
app.use("/static", express.static("public"));

// Router
app.use(router);

// Global errors
app.use((err, req, res, next) => {
  if (err.status === 404) {
    console.error(`${err.status} error: ${err.message}`);
    return res.render("page-not-found", { err });
  } else {
    err.status = err.status || 500;
    err.message = err.message || "There was a server error";
    console.error(`${err.status} error: ${err.message}`);
    return res.render("error", { err });
  }
});

app.listen(port, () => {
  console.log("Listening on port 3000");
});
