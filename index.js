const express = require("express");
const app = express();
const path = require("path");
const port = 4000;
const users = require("./router/user");

// app.use(express.static("public"));
// app.set("views", "./views");
// app.set("view engine", "pug");

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "script.js"));
// });
// app.route("/user").get((req, res) => {
//   res.sendFile(path.join(__dirname, "script.js"));
// });
//   .post((req, res) => {
//     res.send("My name is");
//   });
// app.get("/world", (req, res) => {
//   res.send("world");
// });

// app.get("/user", (req, res) => {
//   res.send("user");
// });

app.use("/user", users);

// app.get("/momo", (req, res) => {
//   res.sendFile(`${__dirname}/mo mo.jpeg`);
// });

// app.get("/view", (req, res) => {
//   res.render("profile.pug", { title: "Hey", message: "Hello there!" });
// });

app.listen(port, () => {
  console.log("I love ma ma");
});
