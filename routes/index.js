const express = require("express");
const router = express.Router();
const data = require("../data.json");
const { projects } = data;

router.get("/", (req, res, next) => {
  res.render("index", { projects });
});

router.get("/about", (req, res, next) => {
  res.render("about");
});

router.get("/error", (req, res, next) => {
  const err = new Error("Server error");
  err.status = 500;
  next(err);
});

router.get("/projects/:id", (req, res, next) => {
  const project = projects[req.params.id];
  if (project) {
    res.render("project", { project });
  } else {
    const err = new Error("The project you requested does not exist");
    err.status = 404;
    next(err);
  }
});

module.exports = router;
