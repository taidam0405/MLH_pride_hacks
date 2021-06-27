const firebase = require("../db");
const firestore = firebase.firestore().collection("users");

const isUsernameExist = (username) => {
  firestore
    .where("username", "==", username)
    .get()
    .then((snapshot) => {
      if (snapshot.empty) return true;
      return false;
    });
};

module.exports = { isUsernameExist };
