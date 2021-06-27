const firebase = require("../db");
const firestore = firebase.firestore();

const login = async (req, res) => {
  try {
    const { username, inputPassword } = req.body;
    const authUserData = await firestore.collection("users/" + username).get();
    if (authUserData.empty) {
      res.status(400).send("Username or password is not exist");
    } else {
      const { password } = authUserData;
      if (inputPassword === password) {
        res.status(200).send("Login successfully");
      } else {
        res.status(400).send("Username or password is not exist");
      }
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  login,
};
