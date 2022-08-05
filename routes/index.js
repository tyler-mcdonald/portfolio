const express = require("express");
const router = express.Router();
const data = require("../data.json");
const { projects } = data;

// Home
router.get("/", (req, res, next) => {
  res.render("index", { projects });
});

// About
router.get("/about", (req, res, next) => {
  res.render("about");
});

// Projects
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

// 404 errors
router.use((req, res, next) => {
  console.error("404 error: Page not found");
  res.status(404).render("page-not-found");
});

module.exports = router;
