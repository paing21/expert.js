const express = require("express");
const app = express();
const path = require("path");
const port = 4000;
const users = require("./router/userRouter");
const menulist = require("./router/menuRouter");

const customers = [
  { name: "mo mo", email: "momo@gmail.com", age: 20 },
  { name: "pai", email: "pai@gmail.com", age: 21 },
  { name: "paing", email: "paing@gmail.com", age: 22 },
];
app.use(express.static("public"));
// app.set("views", "./views");
// app.set("view engine", "pug");

console.log(process.env);

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

// app.get("/", (req, res) => {
//   res.send();
// });

app.use("/user", users);
app.use("/menu", menulist);

// app.get("/momo", (req, res) => {
//   res.sendFile(`${__dirname}/mo mo.jpeg`);
// });

// app.get("/view", (req, res) => {
//   res.render("profile.pug", { title: "Hey", message: "Hello there!" });
// });

app.listen(port, () => {
  console.log("I love ma ma");
});
