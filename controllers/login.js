const express = require("express");
var router = express.Router();
// const mongoose = require("mongoose");
// const Employee = mongoose.model("Employee");

router.get("/", (req, res) => {
  res.render("employee/login", {
    viewTitle: "Insert Employee",
  });
});

module.exports = router;
