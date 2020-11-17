const express = require("express");
const app = express();
const port = 5000;
require("dotenv").config();
const routes = require("./routes/routes");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

app.listen(port, () => {
  console.log(`Listening to NEWZ server at http://localhost:${port}`);
});
