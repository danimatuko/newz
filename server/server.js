const express = require("express");
const app = express();
const port = 5000;
require("dotenv").config();
//const controller = require("../controller/controller");
const routes = require("./routes/routes");
const bodyParser = require('body-parser');

// console.log("key = " + process.env.API_KEY);

// app.get("/users", (req, res) => {
//   const users = [
//     { id: 1, name: "Dani", age: "28" },
//     { id: 2, name: "Jane", age: "25" },
//     { id: 3, name: "Jonny", age: "36" },
//   ];
//   res.json(users);
// });

app.use(bodyParser.urlencoded({ extended: false }));


app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
