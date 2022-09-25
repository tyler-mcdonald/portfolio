const express = require("express");
const router = express.Router();
const data = require("../data.json");
const profilePic = data.profilePic;
const projects = data.projects.reverse();

// Home
router.get("/", (req, res, next) => {
  res.render("index", { projects, profilePic });
});

// About
router.get("/about", (req, res, next) => {
  res.render("about", { profilePic });
});

// Projects
router.get("/projects/:id", (req, res, next) => {
  const id = req.params.id;
  const project = projects.find((project) => project.id === id);
  if (project) {
    res.render("project", { project, profilePic });
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
