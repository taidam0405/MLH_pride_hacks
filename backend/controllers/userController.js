const firebase = require("../db");
const firestore = firebase.firestore();
const User = require("../models/user");

const addUser = async (req, res) => {
  try {
    const data = req.body;
    await firestore.collection("users").doc(data.username).set(data);
    res.status(200).send("Add new user successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const username = req.params.username;
    const data = req.body;
    const user = await firestore.collection("users").doc(username);
    await user.update(data);
    res.status(200).send("Update user successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getUserByUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await firestore.collection("users").doc(username);
    const userData = await user.get();
    if (!userData.exists) {
      res.status(400).send("User not found");
    } else {
      res.status(200).send(userData.data());
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  addUser,
  getUserByUsername,
  updateUser,
};
