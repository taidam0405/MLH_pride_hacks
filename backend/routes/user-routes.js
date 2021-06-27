const express = require("express");
const {
  addUser,
  getUserByUsername,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("", addUser);
router.get("/:username", getUserByUsername);
router.put("/:username", updateUser);

module.exports = {
  routes: router,
};
