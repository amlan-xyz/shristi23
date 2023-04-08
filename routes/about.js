const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.render("about");
  } catch (error) {}
});
module.exports = router;
