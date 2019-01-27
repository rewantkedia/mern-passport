const router = require("express").Router();
const User = require("../models/user-model");

router.get("/", (req, res) => {
  res.send("hello world");
});
router.post("/", (req, res) => {
  console.log(req.body.username);
  console.log(req.body.password);
  username = req.body.username;
  password = req.body.password;
  User.findOne({ username: username }).then(user => {
    if (!user) {
      User.create({ username: username, password: password }).then(user => {
        console.log("User Created");
        res.send({ message: "User Created", user: user });
      });
    } else {
      console.log("User Exists");
      res.send({ message: "User Exists" });
    }
  });
});

module.exports = router;
