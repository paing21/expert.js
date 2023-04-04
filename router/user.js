const express = require("express");
const router = express.Router();
const users = [
  { name: "mo mo", email: "momo@gmail.com", age: 20 },
  { name: "pai", email: "pai@gmail.com", age: 21 },
  { name: "paing", email: "paing@gmail.com", age: 22 },
];
// define the home page route
router.get("/", (req, res) => {
  res.send("Home page");
});
// define the about route
router.get("/users", (req, res) => {
  res.send(users);
});

router.post("/users", (req, res) => {
  res.send();
});

router.delete("/users", (req, res) => {
  res.send();
});

router.put("/users", (req, res) => {
  res.send();
});
module.exports = router;
